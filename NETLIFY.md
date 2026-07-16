# Netlify deployment and environment variables

This project uses Next.js. The `netlify.toml` file is provided to let Netlify build and serve the site using the official Netlify Next.js plugin.

Netlify config file: [netlify.toml](netlify.toml)

Quick steps to connect your repo and add environment variables in Netlify:

1. Push your repository to GitHub (or your Git provider) and make sure the branch you want to deploy is up to date.

2. In Netlify, click "New site from Git" and connect your GitHub account and repository.

3. Build settings (Netlify auto-detects Next.js but confirm):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

4. Add environment variables (Site → Settings → Build & deploy → Environment → Environment variables):
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID` = your PayPal client id (this is safe to be public)
   - `PAYPAL_CLIENT_ID` = your PayPal client id (server-side)
   - `PAYPAL_CLIENT_SECRET` = your PayPal client secret (keep private)
   - `PAYPAL_MODE` = `sandbox` or `live`

   Notes:
   - `NEXT_PUBLIC_` prefix exposes the variable to the client bundle; only the client id should be public.
   - Keep `PAYPAL_CLIENT_SECRET` secret — add it only in Netlify environment variables, not in Git.

5. Save environment variables and trigger a deploy (Netlify deploys on push automatically or you can click "Deploy site").

6. After deploy finishes, test the donate flow on the live site. Use sandbox mode for testing.

Troubleshooting:
- If PayPal buttons don’t appear, verify that `NEXT_PUBLIC_PAYPAL_CLIENT_ID` matches the value in the Netlify env settings.
- Check deploy logs in Netlify for build errors.

More info:
- Netlify Next.js plugin: https://github.com/netlify/netlify-plugin-nextjs
- Netlify env docs: https://docs.netlify.com/configure-builds/environment-variables/
