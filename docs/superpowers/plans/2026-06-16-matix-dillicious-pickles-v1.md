# Matix's Dill-icious Pickles V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a mobile-first Next.js site for Matix's Dill-icious Pickles with playful branding, safe order requests, entrepreneurship lessons, and launch documentation.

**Architecture:** Use a single Next.js app with typed configuration for editable business content, focused components for each site section, a server route for order-request validation/submission, and tests around business logic. Keep public visuals illustrated/cartoon-first and keep uploaded photos in `source-photos/` as private references unless Mike later approves publication.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Node test runner, Vercel.

---

## File Structure

- `PROJECT_GUARD.md`: local safety and no-theater rules.
- `README.md`: top-level setup and operation guide.
- `docs/setup.md`: local install/run instructions.
- `docs/deployment.md`: GitHub/Vercel deployment and env vars.
- `docs/content-editing.md`: how to update copy, flavors, price, lessons, badges.
- `docs/photo-upload.md`: how to add/replace public assets safely.
- `docs/order-system.md`: order-request behavior and adult-managed email setup.
- `package.json`: scripts and dependencies.
- `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`: app configuration.
- `src/app/layout.tsx`: metadata and app shell.
- `src/app/page.tsx`: section composition.
- `src/app/globals.css`: design tokens and global styles.
- `src/app/api/orders/route.ts`: order-request validation and handling.
- `src/config/site.ts`: editable brand, flavors, mascots, lessons, badges, and calculator assumptions.
- `src/lib/orders.ts`: order validation, payload normalization, and dev fallback storage.
- `src/lib/profit.ts`: calculator math.
- `src/components/*`: focused visual and interactive sections.
- `src/components/illustrations/*`: lightweight SVG mascot/brand illustrations.
- `src/tests/*.test.ts`: behavior tests for config, profit calculator, and orders.
- `public/assets/*`: generated or hand-built public illustration assets.
- `data/orders/.gitkeep`: local dev order fallback directory, ignored except placeholder.

## Task 1: Scaffold Project And Tooling

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `.gitignore`
- Create: `src/app/globals.css`

- [ ] **Step 1: Create baseline app config**

Write package scripts for `dev`, `build`, `lint`, `test`, and `check`.

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: dependencies install or, if network is unavailable, rerun with approved escalation.

- [ ] **Step 3: Verify config parses**

Run: `npm run check`

Expected: TypeScript succeeds once source files exist; before source files, config should not contain syntax errors.

## Task 2: Add Typed Business Content And Tests

**Files:**
- Create: `src/config/site.ts`
- Create: `src/lib/profit.ts`
- Create: `src/tests/profit.test.ts`
- Create: `src/tests/site-config.test.ts`

- [ ] **Step 1: Write failing tests**

Test that the jar price is `6`, required flavors exist, badge thresholds are ordered, and profit math returns revenue, costs, profit, savings, and reinvestment.

- [ ] **Step 2: Run tests and confirm red**

Run: `npm test`

Expected: tests fail because modules are missing.

- [ ] **Step 3: Implement config and profit math**

Add typed brand, flavor, mascot, lesson, badge, and calculator config. Add `calculateProfitBreakdown(jarsSold)`.

- [ ] **Step 4: Run tests and confirm green**

Run: `npm test`

Expected: config/profit tests pass.

## Task 3: Add Order Validation And Server Route

**Files:**
- Create: `src/lib/orders.ts`
- Create: `src/app/api/orders/route.ts`
- Create: `src/tests/orders.test.ts`
- Create: `data/orders/.gitkeep`
- Modify: `.gitignore`

- [ ] **Step 1: Write failing validation tests**

Test required name, valid email, positive quantity, known flavor, optional phone/notes, and dev fallback payload creation.

- [ ] **Step 2: Run tests and confirm red**

Run: `npm test`

Expected: order tests fail because order module is missing.

- [ ] **Step 3: Implement order logic**

Normalize and validate requests. If `ORDER_TO_EMAIL` and provider credentials are not configured, write local dev requests to `data/orders/*.json` and return an honest dev-mode message.

- [ ] **Step 4: Implement API route**

Return `400` for validation errors and `200` for accepted requests. Do not claim payment or guaranteed fulfillment.

- [ ] **Step 5: Run tests and confirm green**

Run: `npm test`

Expected: order tests pass.

## Task 4: Build Site Sections

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/AboutMatix.tsx`
- Create: `src/components/ProductShowcase.tsx`
- Create: `src/components/OrderMission.tsx`
- Create: `src/components/PickleBossAcademy.tsx`
- Create: `src/components/ProfitCalculator.tsx`
- Create: `src/components/AchievementBadges.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/illustrations/PickleMascots.tsx`

- [ ] **Step 1: Compose accessible mobile-first sections**

Each CTA must scroll, navigate, or submit. No dead buttons.

- [ ] **Step 2: Add motion with reduced-motion support**

Use Framer Motion for small entrance/hover/tap interactions. Avoid required motion for comprehension.

- [ ] **Step 3: Wire order form to API route**

Show validation errors, loading, success celebration, and honest failure message.

- [ ] **Step 4: Wire calculator and badge interactions**

Calculator updates animated values. Badge interactions reveal business-learning copy.

## Task 5: Add Public Artwork Assets

**Files:**
- Create: `public/assets/mascot-style-notes.md`
- Create/modify: `src/components/illustrations/PickleMascots.tsx`

- [ ] **Step 1: Create cohesive SVG mascot set**

Build lightweight original mascots in code for Captain Crunch, Professor Pickle, Dillbert, Pickle Pup, and Money Jar Jerry.

- [ ] **Step 2: Add optional generated artwork only if useful**

If using generated bitmap art, create it as public artwork and document the source/reference policy. Keep real uploaded photos in `source-photos/`.

## Task 6: Write Launch Documentation

**Files:**
- Create: `README.md`
- Create: `docs/setup.md`
- Create: `docs/deployment.md`
- Create: `docs/content-editing.md`
- Create: `docs/photo-upload.md`
- Create: `docs/order-system.md`

- [ ] **Step 1: Document local setup**

Include install, dev, test, build commands.

- [ ] **Step 2: Document Vercel deployment**

Include GitHub flow and required env vars.

- [ ] **Step 3: Document editing workflow**

Explain how to edit price, flavors, academy lessons, badges, photos, and order destination.

- [ ] **Step 4: Document safety boundaries**

Explain order-request-only v1, no child contact info, and no payments.

## Task 7: Verify And Prepare Deployment

**Files:**
- Modify as needed based on verification failures.

- [ ] **Step 1: Run automated tests**

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 2: Run type/build verification**

Run: `npm run check`

Expected: TypeScript passes.

Run: `npm run build`

Expected: Next.js production build succeeds.

- [ ] **Step 3: Run local browser/mobile smoke**

Run the dev server, open the site, check desktop and mobile. Verify no overlapping text, all CTAs work, order form validation works, and success state appears.

- [ ] **Step 4: Run no-theater audit**

Compare visible UI against `PROJECT_GUARD.md`. Remove or fix anything that implies unsupported ecommerce, fake freshness, fake reviews, or child contact.

- [ ] **Step 5: Commit clean scope**

Commit the site after verification. Do not include unrelated files.

- [ ] **Step 6: Deploy**

Create/push GitHub repo and deploy to Vercel if credentials/tools are available. Record live URL and env vars.

## Self-Review

- Spec coverage: V1 brand, story, products, order request, academy, calculator, badges, docs, safety, and deployment are represented in tasks.
- Placeholder scan: no `TBD` or `TODO` items are used as requirements.
- Scope check: ecommerce, accounts, payments, inventory, subscriptions, and shipping remain future non-goals.
- Type consistency: content config, order validation, and profit calculator are separate modules consumed by components and tests.

