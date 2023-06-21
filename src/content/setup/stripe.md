---
title: "Payments with Stripe (optional)"
needsEnv: ["STRIPE_KEY", "STRIPE_PRICE_ID", "STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET"]
---

Stripe (<a href="https://stripe.com" >https://stripe.com</a>) is a payments platform that makes it relatively easy to manage subscriptions in a B2B product.

Stripe makes money whenever you do, by charging a small fee per successful transaction. For details, see <a href="https://stripe.com/pricing">https://stripe.com/pricing</a>.

It takes some effort to open a Stripe account, with details falling outside the scope of this tutorial - we'll assume you've got access to a Stripe account in good standing.

1. While developing locally, you can use Stripe's "Test mode" to avoid experimenting with real customers or payments

1. Locate "Publishable key" and store it with `doppler secrets set STRIPE_KEY`

1. Locate "Secret key" and store it with `doppler secrets set STRIPE_SECRET_KEY`

1. Create a product of type "subscription" and store its API ID with `doppler secrets set STRIPE_PRICE_ID`

1. Open <a href="https://dashboard.stripe.com/test/webhooks/create">https://dashboard.stripe.com/test/webhooks/create</a>, choose Node.js for sample code, locate the line `const endpointSecret =`, and store the value (starting with `whsec_`) with `doppler secrets set STRIPE_WEBHOOK_SECRET`

1. Install <a href="https://stripe.com/docs/stripe-cli">Stripe CLI</a>, login, then run `stripe listen --forward-to localhost:3000/api/stripe-webhooks`

1. Restart `doppler run yarn dev` to move to the next section of the tutorial

At this point, you should be able purchase a (test) subscription on http://localhost:3000/app/settings