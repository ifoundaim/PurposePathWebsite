# PurposePathWebsite

## Subscription setup (Formspree)

The footer subscribe form posts directly to Formspree so it works on static GitHub Pages deployment.

### 1) Create a Formspree subscribe form

1. Sign in to Formspree and create a new form for newsletter subscriptions.
2. Copy the form endpoint URL (looks like `https://formspree.io/f/abcde123`).
3. Use that endpoint for `NEXT_PUBLIC_FORMSPREE_SUBSCRIBE_URL`.

### 2) Configure local env vars

1. Copy `.env.example` to `.env.local`.
2. Fill in:
   - `NEXT_PUBLIC_FORMSPREE_CONTACT_URL`
   - `NEXT_PUBLIC_FORMSPREE_SUBSCRIBE_URL`
3. Restart the dev server after changing env vars.

### 3) Configure deployment env vars (Netlify free tier)

1. Open Netlify -> Site configuration -> Environment variables.
2. Add:
   - `NEXT_PUBLIC_FORMSPREE_CONTACT_URL`
   - `NEXT_PUBLIC_FORMSPREE_SUBSCRIBE_URL`
3. Trigger a new deploy.

## Deployment note

This project uses Next.js static export (`output: "export"` in `next.config.mjs`) for GitHub Pages. Subscribe requests are configured to post directly to Formspree, which works with static hosting.
