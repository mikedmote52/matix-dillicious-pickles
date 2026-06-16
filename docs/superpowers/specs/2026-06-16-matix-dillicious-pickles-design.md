# Matix's Dill-icious Pickles Design

## Classification

This is a hobby build for Mike's nephew and a Mote Ops capability test. It is classified as `Hobby (active)` in `~/references/ventures.md`. It must not create Mote Ops customer records, client jobs, cockpit entries, or client-facing approval artifacts.

## Goal

Build a complete, mobile-first GitHub/Vercel website for Matix's homemade pickle business that feels joyful and memorable while teaching entrepreneurship through the experience. V1 prioritizes delight, storytelling, learning, and safe order requests over ecommerce complexity.

## Audience

Primary visitors are friends, family, neighbors, teachers, and community members who may want to request pickle jars. Secondary visitors are children and parents interested in entrepreneurship. The site should make adults know how to request pickles and make Matix feel like the company is truly his.

## Product Scope

V1 includes:

- A playful home page with illustrated Matix, pickle mascots, and clear calls to action.
- A storybook-style Meet Matix section.
- A product/flavors section for `$6` jars.
- A request-only order form with validation and adult-managed destination configuration.
- A `Pickle Boss Academy` section teaching revenue, cost, profit, saving, reinvestment, customer service, marketing, and branding.
- An interactive profit calculator.
- Achievement badges.
- Lightweight surprises such as jokes, hover/tap reactions, and unlock messaging.
- Documentation for setup, deployment, content editing, photo handling, and the order system.

V1 does not include:

- Payments.
- Shipping.
- Customer accounts.
- Inventory locking.
- Automated pickup/delivery promises.
- Public child contact information.

## Brand

Name: `Matix's Dill-icious Pickles`

Tagline: `Homegrown Cucumbers. Homemade Pickles. Big Pickle Dreams.`

Alternative phrases:

- `Crunch With Purpose`
- `From Garden To Jar`
- `Warning: May Cause Extreme Pickle Happiness`

Founder title: `CEO & Chief Pickle Officer`

Price: `$6 per jar`

## Art Direction

The public identity should use original illustrated characters, not corporate ecommerce styling. The uploaded Matix photos are reference assets for expression, hair, posture, and personality. Photo 1 also establishes a black dog character that becomes `Pickle Pup`.

Mascots:

- `Captain Crunch`: superhero pickle and high-energy guide.
- `Professor Pickle`: business teacher for academy lessons.
- `Dillbert`: goofy assistant pickle for jokes and helper text.
- `Pickle Pup`: friendly black dog mascot inspired by Photo 1.
- `Money Jar Jerry`: talking savings jar for profit/savings/reinvestment.

The style should be warm, rounded, bright, and cohesive: garden storybook plus children's museum plus playful business dashboard.

## UX Architecture

The first screen opens directly into the experience, not a marketing preamble. The home page should make the brand obvious, show Matix as the founder, and expose three primary actions:

- `Order Pickles`
- `Meet Matix`
- `Learn How Pickle Businesses Work`

Navigation can be a sticky mobile-friendly header with anchored sections. Full pages may be added later, but V1 can ship as a rich single-page app with clear sections.

## Data Model

Business content should live in typed configuration:

- Brand name, taglines, price, founder title.
- Flavor list and descriptions.
- Mascot list and quotes.
- Academy lessons.
- Badge thresholds.
- Profit calculator assumptions.

Order data should use a typed form model:

- Name.
- Email.
- Phone.
- Quantity.
- Flavor.
- Notes.

Server behavior should support:

- Validation.
- Adult-managed email destination from env vars.
- Honest dev fallback if email is not configured.
- Success screen: `Your pickle mission has been received!`

## Technical Direction

Use Next.js, TypeScript, Tailwind, Framer Motion, shadcn/ui-compatible primitives, and Lucide icons. Use lightweight SVG/CSS/React illustrations first. Use generated bitmap art where it materially improves the brand, especially for hero artwork or mascot portraits.

Animations must respect reduced-motion preferences. The mobile experience is the priority.

## Testing And Verification

Verification must cover:

- Content/config tests for price, flavors, lessons, badges, and calculator outputs.
- Order validation tests.
- Reduced-motion behavior where practical.
- Build/type checks.
- Browser/mobile smoke checks before deployment.
- Manual no-theater audit: every visible button and form does something real or is removed.

## Deployment

Deploy to Vercel from a GitHub repository. Required docs:

- `README.md`
- setup guide
- deployment guide
- content editing guide
- photo upload guide
- order system guide

Required environment variable documentation:

- Adult-managed order destination.
- Optional sender/API credentials if email provider is configured.

## Future Expansion

Future versions may add inventory tracking, farmer's market mode, online payments, shipping, customer accounts, subscription pickle club, and rewards. These are non-goals for V1 and should not appear as working controls until implemented.

