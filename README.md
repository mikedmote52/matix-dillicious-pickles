# Matix's Dill-icious Pickles

A mobile-first hobby website for Matix's homemade pickle business. The site is designed as a playful entrepreneurship-learning experience with safe order requests, illustrated mascots, a profit calculator, and launch docs.

This is a Mote Ops capability test and hobby build, not a Mote Ops client/job.

## What V1 Includes

- Playful illustrated founder/mascot hero.
- Storybook-style founder section.
- `$6` pickle jar flavor showcase.
- Request-only order form.
- Pickle Boss Academy business lessons.
- Profit calculator.
- Achievement badges.
- Setup, deployment, editing, photo, and order-system docs.

## What V1 Does Not Include

- Online payments.
- Shipping.
- Customer accounts.
- Inventory holds.
- Public child contact information.
- Guaranteed fulfillment.

## Commands

```bash
npm install
npm run dev
npm test
npm run check
npm run build
```

## Configuration

Edit business content in:

```text
src/config/site.ts
```

Order requests use:

```text
ORDER_TO_EMAIL
```

When `ORDER_TO_EMAIL` is not set, requests are stored locally in `data/orders/*.json` for development only.

## Project Guard

Read `PROJECT_GUARD.md` before editing. The guard is the local no-theater and child-safety contract for this build.

