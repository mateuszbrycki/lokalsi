{{- define "lokalsifront.namespace" -}}
namespace: {{ .Values.application.name }}
{{- end }}

{{- define "lokalsifront.imageUrl" -}}
{{ .Values.image.repository.url }}/{{ .Values.gcp.project }}/{{ .Values.image.repository.name }}/{{ .Values.image.name }}:{{ .Values.application.version }}
{{- end -}}