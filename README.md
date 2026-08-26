# SAIN Real Estate Platform Demo

Static vendor-review prototype using synthetic property data only. No Bright MLS data, credentials, or API connection is included.

## Deploy on Railway

1. Extract this folder and push it to a new GitHub repository.
2. In Railway, choose **New Project → Deploy from GitHub repo**.
3. Select the repository. Railway will detect the included Dockerfile.
4. After deployment, open **Settings → Networking → Generate Domain**.

No environment variables or database are required.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
