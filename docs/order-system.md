# Order System Guide

V1 is request-only. It is not ecommerce checkout.

## Form Fields

- Name.
- Email.
- Phone.
- Quantity.
- Flavor.
- Notes.

## Validation

The order system requires:

- Name.
- Valid email.
- Quantity of at least one jar.
- Flavor from the current config.

Validation logic lives in:

```text
src/lib/orders.ts
```

API route:

```text
src/app/api/orders/route.ts
```

## Adult-Managed Destination

Set:

```text
ORDER_TO_EMAIL=<adult-managed order email>
ORDER_FROM_EMAIL=<verified sender email>
RESEND_API_KEY=<resend api key>
```

When all three variables are present, the route sends the adult-managed order email through Resend. If the provider returns an error, the API returns a failure message instead of pretending the order was sent.

## Development Fallback

When `ORDER_TO_EMAIL` is not set, the route writes request JSON files to:

```text
data/orders/
```

Those JSON files are ignored by Git.

## Public Copy Boundary

The success message says the pickle mission was received. It does not promise payment, delivery, pickup, shipping, or guaranteed availability.
