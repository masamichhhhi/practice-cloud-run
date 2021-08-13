## デプロイコマンド
```bash
# Cloud build経由でregistryにpush
$ gcloud builds submit --config cloudbuild.yml .

# Cloud runにデプロイ
$ gcloud run deploy --image gcr.io/helical-fin-309723/cloud-run-test 
```