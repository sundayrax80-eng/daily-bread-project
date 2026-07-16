# The Daily Bread Project Website

Fresh custom Next.js website for The Daily Bread Project, a Houston-based nonprofit initiative serving widows, families, and underserved communities in Nigeria through relief, stability, and empowerment programs.

## Technology stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Reusable React components
- Server-side API route validation placeholders
- Centralized TypeScript content files

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production checks

```bash
pnpm lint
pnpm build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill approved values. Do not commit private keys.

Required launch settings:

- `NEXT_PUBLIC_SITE_URL=https://dailybreadproject.us`
- `DONATION_PROVIDER`
- `DONATION_PUBLIC_KEY`
- `NEWSLETTER_PROVIDER`
- `NEWSLETTER_API_KEY`
- routing emails for contact, volunteer, assistance, partnership, media, and donation support

## Folder structure

- `src/app`: pages, API route placeholders, sitemap, robots
- `src/components`: reusable interface and form components
- `src/content`: editable site content and visibility controls
- `src/lib`: validation and utility helpers
- `public/images`: replaceable image placeholders
- `docs`: optional launch notes and future governance files

## Content-management guide

Routine content updates should happen in `src/content`, not page layouts.

- Project totals, campaign progress, status, budget visibility: `src/content/projects.ts`
- Donation amounts: `src/content/programs.ts`
- Tax-deductibility setting and legal wording: `src/content/site.ts`
- Site navigation and contact details: `src/content/site.ts`
- Founder biography and founder letter excerpt: `src/content/site.ts`
- Impact data and verified statistics: `src/content/impact.ts`
- Locations and map cards: `src/content/locations.ts`
- Partners and board placeholders: `src/content/partners.ts`
- Blog/update cards: `src/content/articles.ts`
- Resource center cards: `src/content/resources.ts`
- Transparency documents: `src/content/transparency.ts`
- Video placeholders and transcripts: `src/content/videos.ts`

## Verification and visibility rules

Do not publish numbers until the related object is marked verified and public. Current project progress is intentionally hidden because initial values are unverified. Draft/demo articles are marked `noindex`.

Content states supported by the model: `draft`, `review`, `approved`, `published`, `archived`.

Site-wide launch controls live in `siteSettings.controls`.

## Replace images

Replace files in `public/images` with approved, consented photography using the same filenames, or update image paths in the relevant content file. Use hopeful, dignified imagery from Nigeria-related work. Avoid exploitative images and identifiable vulnerable people without consent.

## Forms

Forms post to API route placeholders:

- `/api/contact`
- `/api/volunteer`
- `/api/assistance`
- `/api/partnership`
- `/api/newsletter`
- `/api/media`
- `/api/resource-download`
- `/api/donor-preferences`

The routes validate required fields, email format, and honeypot spam fields. Connect these routes to email, CRM, newsletter, CAPTCHA, rate limiting, and storage before launch.

## Donation provider setup

The donation page is a secure-provider placeholder and must be connected to Stripe, PayPal, Givebutter, Donorbox, or another approved provider. Do not collect or store raw card data in this app.

Tax-deductible wording is enabled because The Daily Bread Project has confirmed IRS 501(c)(3) approval. Keep the wording in `src/content/site.ts` aligned with approved legal and tax guidance.

## Newsletter setup

Newsletter interests are centralized in `src/content/site.ts`. Connect `/api/newsletter` to Mailchimp, ConvertKit, Brevo, Flodesk, or another provider using environment variables.

## Legal and safeguarding

Starter pages are included for privacy, terms, donation policy, accessibility, safeguarding, and disclaimer. All legal, tax, donation, privacy, and safeguarding language should be reviewed by qualified legal and tax professionals before final publication.

## Deployment

1. Fill `.env.local`.
2. Run `pnpm lint`.
3. Run `pnpm build`.
4. Deploy to Vercel, Netlify, or another Next.js host.
5. Set production environment variables in the host dashboard.
6. Confirm sitemap at `/sitemap.xml` and robots at `/robots.txt`.

## Connect GoDaddy domain

1. In the hosting provider, add `dailybreadproject.us`.
2. Copy the provider DNS records.
3. In GoDaddy DNS, point the apex domain and `www` record to the host as instructed.
4. Wait for DNS propagation.
5. Confirm HTTPS is active.
6. Set `NEXT_PUBLIC_SITE_URL=https://dailybreadproject.us`.

## Form testing

Test required-field errors, invalid emails, honeypot rejection, success states, loading states, and duplicate-click prevention. Confirm no form redirects to a missing page.

## Content still needed

- Approved field photography and founder portrait
- Approved logo, favicon, app icon, and social share image
- EIN and final tax receipt details
- Donation provider account and wording
- Newsletter provider account
- Approved board and leadership details
- Verified locations and partner details
- Approved resources and downloadable files
- Real project budgets, receipts, reports, and impact data
- Approved videos, captions, and transcripts

## Recommended next improvements

- Add a CMS when routine updates outgrow TypeScript content files.
- Add persistent form storage and notification routing.
- Add CAPTCHA and rate limiting.
- Add analytics with privacy-friendly event tracking.
- Add real downloadable partnership/media packets.
- Add image optimization after approved photography is selected.

## Launch-readiness checklist

- Lint and production build pass.
- Every navigation link works.
- Mobile menu works with keyboard and Escape.
- All forms show success and error states.
- No fake donation totals, zero counters, or unverified impact numbers appear.
- No tax-deductibility claim appears unless approved.
- Legal and safeguarding language has been reviewed.
- Donation provider is connected.
- Newsletter provider is connected.
- Approved images, alt text, and consent records are in place.
- GoDaddy DNS points to the production host.
