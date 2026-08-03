# Deploy Globitech to Cloudflare Pages

Your site is a **static HTML** package. Do **not** upload the whole Next.js / TypeScript project — that is what caused the build/404 error.

## Option A — Drag & drop (easiest)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Upload **only** the contents of this folder:

   ```text
   globitech-web/cloudflare-static/
   ```

   It must include `index.html` at the root of the upload (not nested in another folder).
3. Project name: e.g. `globitech-cyber-solutions`
4. After deploy: **Custom domains** → add `globitechcybersolutions.com` and `www.globitechcybersolutions.com`
5. In Cloudflare DNS for that domain, Pages will usually add the correct CNAME / proxied records. Wait a few minutes for HTTPS.

## Option B — Wrangler CLI

```bash
cd globitech-web
npm run sync:static
npx wrangler pages deploy cloudflare-static --project-name=globitech-cyber-solutions
```

Then attach the custom domain in the Pages project settings.

## Refresh static files after HTML edits

```bash
cd globitech-web
npm run sync:static
```

Then re-upload / re-deploy `cloudflare-static/`.

## Why the 404 happened

Cloudflare’s simple uploader does not build TypeScript/Next.js apps. Uploading the repo left no valid `index.html` at the site root, so `https://globitechcybersolutions.com/` returned 404. Deploying `cloudflare-static/index.html` fixes that.
