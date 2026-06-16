# Content Editing Guide

Most business content lives in:

```text
src/config/site.ts
```

## Change Price

Edit:

```ts
product: {
  pricePerJar: 6
}
```

Update docs if the public price changes.

## Add Or Edit Flavors

Edit the `flavors` array. Each flavor needs:

- `id`
- `name`
- `description`
- `mascotNote`

The order form automatically uses this list.

## Edit Academy Lessons

Edit `academyLessons`. Each lesson needs:

- `id`
- `title`
- `simpleDefinition`
- `mascotId`
- `example`

Use short, concrete examples a child can explain.

## Edit Badges

Edit `badges`. Keep thresholds in ascending order so the achievement shelf reads naturally.

## Edit Mascots

Edit `mascots` for names, roles, and quotes. Artwork is in:

```text
src/components/illustrations/PickleMascots.tsx
```

