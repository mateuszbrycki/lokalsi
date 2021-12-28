APP_VERSION=$(git rev-parse --short HEAD)
PROJECT_ID=lokalsi-336415
DOCKER_TAG=europe-central2-docker.pkg.dev/${PROJECT_ID}/lokalsi/lokalsi-front:$APP_VERSION

echo "Building $APP_VERSION"
docker build -t $DOCKER_TAG .

echo "Pushing $APP_VERSION"
docker push $DOCKER_TAG

kubectl apply -f _k8s/01-deployment.yaml
