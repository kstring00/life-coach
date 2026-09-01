# Forward Coaching

Premium, conversion-focused life-coaching website built with Next.js App Router, TypeScript, and a custom liquid-glass design system.

## Run locally

```bash
npm install
npm run dev
```

## Customize first

1. Replace the temporary **Forward Coaching** brand name in `app/layout.tsx`.
2. Replace the hero portrait placeholder with a real editorial coach photo.
3. Update coach story, credentials, values, contact details, and social links.
4. Review all service copy in `data/site.ts` and remove services the coach does not currently offer.
5. Add real pricing only after offers are finalized.
6. Connect the booking form to Calendly, Cal.com, Acuity, or another scheduler.
7. Connect contact and lead-magnet forms to the chosen CRM/email platform.
8. Replace resource placeholders with finished downloadable PDFs.
9. Have privacy, terms, coaching agreement, cancellation/refund policies, and disclaimer reviewed for the actual business and jurisdiction before launch.
10. Add real testimonials only when received; do not fabricate client results.

## Design system

The visual direction uses large structural liquid-glass surfaces rather than applying blur to every element. Main treatments are in `app/globals.css`:

- `.glass` — standard translucent surface
- `.glass-strong` — higher-contrast glass for navigation, hero, forms, and important trust surfaces
- `.glass-mega` — oversized glass surfaces with specular light layers

The background uses warm ivory, stone, sage, and cognac tones to keep the brand editorial and human instead of looking like a generic SaaS dashboard.

## Current routes

- `/` — conversion homepage + interactive fit assessment
- `/about`
- `/services`
- `/process`
- `/resources`
- `/blog`
- `/faq`
- `/book`
- `/contact`
- `/portal` — front-end concept only
- `/privacy`
- `/terms`
- `/disclaimer`

## Important

Coaching is presented as personal-development support and is explicitly distinguished from therapy, psychiatric/medical treatment, legal advice, financial advice, and crisis care. Keep that boundary intact when editing copy.

## Deployment

The project is structured for Vercel. Import the GitHub repository into Vercel, install dependencies, and deploy. No secrets are required for the current front-end-only version.
