provider "google" {
    region = "europe-central2"
    zone = "europe-central2-a"
    credentials = file("/Users/mateuszbrycki/projects/lokalsi/infrastructure/lokalsi-336415-87cda3cf3a2d.json")
    project = "lokalsi-336415"
}

terraform {
    required_version = ">= 0.12"
}

#### Project
resource "google_project" "lokalsi-project" {
  name       = "lokalsi"
  project_id = "lokalsi-336415"
}

#### VPC
resource "google_compute_network" "lokalsi-vpc-network" {
    name = "default"
    auto_create_subnetworks = true
}

#### Load Balancer

#### DNS

#### Static IP
resource "google_compute_global_address" "lokalsi-front-ingress-static-ip" {
    name         = "lokalsi-front-ingress-static-ip"
    address_type = "EXTERNAL"
    ip_version = "IPV4"
}

#### GKE Cluster
resource "google_container_cluster" "lokalsi-cluster" {
    name             = "lokalsi-cluster-1"
    location         = "europe-central2"
    enable_autopilot = true
}

#### Service Account lokalsi-cicd-688 ####
resource "google_service_account" "sa-lokalsi-cicd" {
    account_id   = "lokalsi-cicd-688"
    display_name = "lokalsi-cicd"
    description  = "CI/CD Service Account"
}

resource "google_project_iam_member" "sa-artifactregistry-writer-lokalsi-cicd" {
    project = "${google_project.lokalsi-project.project_id}"
    role    = "roles/artifactregistry.writer"
    member  = "serviceAccount:${google_service_account.sa-lokalsi-cicd.email}"
}

resource "google_project_iam_member" "sa-container-developer-lokalsi-cicd" {
    project = "${google_project.lokalsi-project.project_id}"
    role    = "roles/container.developer"
    member  = "serviceAccount:${google_service_account.sa-lokalsi-cicd.email}"
}

#### Service Account lokalsi-tf ####
resource "google_service_account" "sa-lokalsi-tf" {
    account_id   = "lokalsi-tf"
    display_name = "lokalsi-tf"
    description  = "Terraform Service Account"
}

resource "google_project_iam_member" "sa-compute-instanceadmin-lokalsi-tf" {
    project = "${google_project.lokalsi-project.project_id}"
    role    = "roles/compute.instanceAdmin.v1"
    member  = "serviceAccount:${google_service_account.sa-lokalsi-tf.email}"
}

resource "google_project_iam_member" "sa-container-developer-lokalsi-tf" {
    project = "${google_project.lokalsi-project.project_id}"
    role    = "roles/container.developer"
    member  = "serviceAccount:${google_service_account.sa-lokalsi-tf.email}"
}

resource "google_project_iam_member" "sa-iam-serviceaccountadmin-lokalsi-tf" {
    project = "${google_project.lokalsi-project.project_id}"
    role    = "roles/iam.serviceAccountAdmin"
    member  = "serviceAccount:${google_service_account.sa-lokalsi-tf.email}"
}

resource "google_project_iam_member" "sa-resourcemanager-projectiamadmin-lokalsi-tf" {
    project = "${google_project.lokalsi-project.project_id}"
    role    = "roles/resourcemanager.projectIamAdmin"
    member  = "serviceAccount:${google_service_account.sa-lokalsi-tf.email}"
}



#### artifact registry