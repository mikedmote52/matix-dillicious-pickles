# Deployment Guide

## GitHub

1. Create a GitHub repository named `matix-dillicious-pickles`.
2. Push this repo to GitHub.
3. Keep `source-photos/` private unless Mike explicitly approves publishing real photos.

## Vercel

1. Import the GitHub repo into Vercel.
2. Use the default Next.js settings.
3. Add environment variables before launch.

## Required Environment Variables

```text
ORDER_TO_EMAIL=<adult-managed order email>
ORDER_FROM_EMAIL=<verified sender email>
RESEND_API_KEY=<resend api key>
```

V1 sends adult-managed order emails through Resend when all three variables are present. Without those credentials, local/dev mode writes request JSON files under `data/orders/`, but Vercel/production submissions fail honestly until email is configured.

## Launch Verification

Before sharing the URL:

```bash
npm test
npm run check
npm run build
```

Then verify on a phone-sized viewport:

- Header navigation works.
- Order button scrolls to the form.
- Form validation shows errors.
- Successful submission shows `Your pickle mission has been received`.
- No child email, phone, school, address, or routine is visible.
