# Project Guard: Matix's Dill-icious Pickles

Status: Hobby build and Mote Ops capability test. This is not a Mote Ops client, job, active engagement, or revenue-path venture.

## Boundaries

- Keep this project isolated at `~/Desktop/hobby/active/matix-dillicious-pickles/`.
- Do not create or update `mote-ops/ops/customers/*` records for this project.
- Do not add this project to the Mote Ops client cockpit, onboarding pipeline, customer state, or client job model.
- Use bridge logging only to record Mote Ops capability-test activity.

## Child Safety

- Do not publish public child contact information.
- Do not put a child's email, phone number, address, school, routine, or direct scheduling link on the site.
- Public order requests must route to an adult-managed destination configured by environment variable.
- Use uploaded Matix photos as source/reference assets. The public-first visual identity should be illustrated/cartoon Matix and mascot art unless Mike explicitly approves publishing a real photo.

## Commerce Safety

- V1 is order-request only.
- No online payments, subscriptions, shipping, customer accounts, inventory holds, or automated fulfillment in V1.
- Order confirmation copy must say the request was received, not that an order is guaranteed or paid.
- Every submitted order must be reviewable by an adult before any pickup, payment, or delivery happens.

## No-Theater Rules

- Every visible button must perform a real action, navigate to a real section, submit a real form, or be honestly labeled as future/manual.
- No fake freshness labels, fake live inventory, fake customer reviews, fake payment state, or fake availability.
- Forms must show real validation and a real success/failure state.
- If email delivery is not configured, the local/dev fallback must honestly store the order request and say so in docs.

## Editing Rules

- Price, flavors, taglines, mascot copy, academy lessons, badge thresholds, and order destination must be editable through configuration files or environment variables.
- Future expansion hooks may exist in code only when they are non-visible or clearly labeled in docs.
- Avoid hardcoding business content inside unrelated components.

## Launch Gate

Before calling V1 shippable, verify:

- Build command succeeds.
- Automated tests pass.
- Mobile viewport has no overlapping text or broken controls.
- Order form validates required fields and handles success/failure.
- Reduced-motion mode avoids required animation.
- README, setup guide, deployment guide, content editing guide, photo guide, and order system guide exist.
- Vercel deployment instructions and required env vars are documented.

