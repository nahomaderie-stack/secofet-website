# Secofet Trading PLC Website

## Technical documentation

Repository-verified on 2026-10-19. Source repository: [github.com/nahomaderie-stack/secofet-website](https://github.com/nahomaderie-stack/secofet-website).

> Verification note: This guide describes what is present in this repository. Sections marked **Unverified** describe hosted settings or services whose configuration is not checked in here. No credentials or secret values are included.

## 1. Project overview

Secofet Trading PLC's website presents the company as an Ethiopian green coffee exporter. It explains sourcing, coffee origins, processing and export operations, and gives international buyers ways to request a quotation, request a sample, or contact the team. The code implements a marketing and inquiry site; no cart or checkout flow is present.

**Audience:** Importers, specialty roasters, distributors, and other commercial coffee buyers seeking Ethiopian Arabica and export information.

**Main features:** Company and team information; coffee categories, origins, quality and logistics content; contact form and map; RFQ and sample forms; cookie preference banner; legal pages; responsive navigation.

| Technology | Use in this project |
| --- | --- |
| React 19 | UI components and client rendering/hydration |
| Vite 8 | Development server, asset bundling, and production build |
| React Router 7 | Client routes |
| react-helmet-async | Route titles, descriptions, canonical links, and structured data |
| Supabase JS 2 | Browser client for form inserts and Edge Function invocations |
| GitHub Pages and GitHub Actions | Static hosting and automated deployment |
| ESLint 10 | JavaScript/JSX linting |

The source is JavaScript and JSX with CSS. Package versions are recorded in `package.json` and `package-lock.json`.

## 2. Website structure

### Routes and page content

`src/App.jsx` defines these routes. Canonical URLs and sitemap entries use trailing slashes.

| Route | Page | Main content |
| --- | --- | --- |
| `/` | `HomePage` | Hero, company overview, coffee categories, operations, benefits, and call to action |
| `/about` | `AboutUsPage` | Company, values, mission, team, and capabilities |
| `/our-coffees` | `OurCoffeesPage` | Coffee selection, categories, grades, and processing |
| `/origins` | `OriginsPage` | Ethiopian coffee origins, origin cards, and map |
| `/operations` | `OurOperationsPage` | Sourcing, quality control, farms, and export logistics |
| `/contact` | `ContactPage` | Contact form, team information, FAQ, and map |
| `/rfq` | `RequestQuotePage` | Commercial quotation form |
| `/request-sample` | `RequestSamplePage` | Coffee sample request form |
| `/terms` | `TermsConditionsPage` | Terms and conditions |
| `/privacy` | `PrivacyPolicyPage` | Privacy policy |
| `/cookie` | `CookiePolicyPage` | Cookie policy and link to preferences |
| `*` | `NotFoundPage` | Not-found page |

### Shared components and navigation

`Header` provides the main navigation and mobile menu. `Footer` provides secondary links and contact information. `CookieConsent` is mounted app-wide. `ScrollToTop` resets scroll position after route changes. `InitialCurtainProvider` and `SplitTextPage`/`SplitTextReveal` provide page transition and text reveal behavior.

Page content is assembled from reusable components in `src/components/`; route-level metadata and composition live in `src/pages/`. The homepage uses `Hero`, `AboutUs`, `KeyCategories`, `OurOrigins`, `WhySecofet`, and `WorkWithSecofet`. Other page groups are visible in their page files.

### Responsive design

Styles are split between `src/styles/` and animation CSS in `src/SplitTextAnimation/`. `src/styles/Responsive.css` and per-component media queries adapt layouts at mobile, tablet, and desktop widths. The header switches to a mobile menu at small widths. Home-page images include mobile-specific sources; image appearance and layout remain CSS-controlled.

### Top-level folder map

```text
.github/workflows/  GitHub Pages deployment workflow
public/             Fonts, icons, social preview, robots.txt, sitemap.xml, 404.html
scripts/            Static route prerender script
src/pages/          Route-level page components and metadata
src/components/     Shared and page-section components, including forms
src/styles/         Global and component styles
src/assets/         Imported images, logos, and team photos
src/SplitTextAnimation/  Page and text reveal behavior
src/data/           Site content data
src/utils/           Shared helpers
src/main.jsx         Client entry point
src/entry-server.jsx Server-side rendering entry used during prerendering
src/supabaseClient.js Supabase browser client
```

## 3. Development setup

### Prerequisites and installation

Use Node.js 22 and npm, matching the GitHub Actions workflow. From the repository root:

```sh
npm ci
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173/`.

### Environment variables

The browser client reads these variables in `src/supabaseClient.js`:

```dotenv
VITE_SUPABASE_URL=<your Supabase project URL>
VITE_SUPABASE_PUBLISHABLE_KEY=<your Supabase publishable key>
```

Create a local `.env.local` and fill in values from the approved Supabase project settings. Do not commit `.env` or `.env.local`; both are ignored by `.gitignore`. The repository has no `.env.example`.

`VITE_` variables are included in client-side output. The Supabase publishable key is intended for public clients, but it does not replace database security. Never put a Supabase service-role key, Resend API key, or other server secret in a `VITE_` variable. The deployment workflow reads GitHub Actions secrets named `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` at build time.

### Useful commands

```sh
npm run dev      # Start Vite with hot reload
npm run lint     # Run ESLint
npm run build    # Build client assets, SSR renderer, and prerendered pages
npm run preview  # Preview the generated dist/ output locally
```

There is no test script in `package.json`.

### Build and safe change workflow

`npm run build` runs `vite build`, builds `src/entry-server.jsx` into `dist-ssr/`, then runs `scripts/prerender-routes.mjs`. The final static site is written to `dist/` and includes an HTML entry for each known route plus `404.html`.

For a new or renamed page, update the route in `src/App.jsx`, its server-side import/map in `src/entry-server.jsx`, and the prerender list in `scripts/prerender-routes.mjs`. Also update `Header`/`Footer` navigation where appropriate, `public/sitemap.xml`, canonical metadata, and relevant page content. Keep styles in the corresponding CSS files. Before merging, run lint and build, then preview `dist/` and open each changed route directly.

## 4. Backend and form processing

### Supabase client and observed data flows

`src/supabaseClient.js` creates the Supabase client from the two `VITE_` variables. The forms use the browser client to insert rows, then invoke a hosted function where implemented.

| Form | Table insert observed in source | Notification call observed in source |
| --- | --- | --- |
| Contact (`ContactTeam`) | `contact_messages`: `first_name`, `last_name`, `email`, `country`, `phone`, `company`, `role`, `message` | `super-worker`, with the form data |
| Quote (`RFQQuote`) | `rfq_requests`: company/contact, email and phone, country/buyer type, coffee and processing details, quantity, destination, incoterm, and shipment date | `send-rfq-email`, with the form data |
| Sample (`RFQSample`) | `rfq_sample_requests`: company/contact, email and phone, country/buyer type, coffee and processing details, quantity, incoterm, and shipment date | `send-rfq-email`, with trimmed form values |

These are table names and columns submitted by the frontend, not a verified database schema. The form UI uses browser-level required fields and email input types, and prevents duplicate submits while a request is in progress. Server-side validation and abuse controls are not visible in this repository.

### Submission and email behavior

For quote and sample requests, the frontend inserts the request first. A successful insert is treated as received even if the subsequent notification call fails. The UI reports that the request was saved but the notification could not be sent. The sample form's success state says a confirmation email and a sales notification were sent when the function reports success.

The contact form inserts into `contact_messages` and then calls `super-worker`. A notification failure is swallowed after the row is saved, so the user sees the saved-message success state.

The footer's email-entry field is not a backend mailing-list subscription. It opens a prefilled Gmail compose window for the visitor to send manually.

### Edge Functions, Resend, schema, and RLS status

**Unverified outside this repository:** The source invokes functions named `super-worker` and `send-rfq-email`, but their Edge Function code is not checked in. No `supabase/` directory, SQL migrations, table definitions, or RLS policies are present. Resend is not referenced in the source or dependencies, so whether either hosted function uses Resend cannot be confirmed here. Verify function source, deployed secrets, notification recipients, and email provider in the Supabase project before relying on them.

**Security recommendation:** Confirm RLS is enabled on all three tables. Review policies so public submissions can insert only the intended fields and anonymous clients cannot read, update, or delete submissions. Validate and rate-limit requests in the database/function layer. Keep service-role and email-provider secrets only in server-side Edge Function secrets; never ship them to the browser.

## 5. Deployment and hosting

The Git remote is [github.com/nahomaderie-stack/secofet-website](https://github.com/nahomaderie-stack/secofet-website). `.github/workflows/deploy.yml` deploys on pushes to `main` and on manual `workflow_dispatch` runs. It uses Node.js 22, runs `npm ci`, builds the site, uploads `./dist` with GitHub Pages actions, and deploys the Pages artifact. The build step receives the two Supabase values from GitHub Actions secrets.

To redeploy, push the reviewed change to `main`, or run the workflow manually from the repository's Actions tab. Confirm the build job succeeds, then confirm the deploy job and the GitHub Pages environment URL.

### Custom domain and DNS

The source uses `https://secofet.com/` in canonical URLs, sitemap, and robots.txt, and `vite.config.js` sets `base: '/'`. However, there is no `CNAME` file or DNS configuration in this repository. The GitHub Pages custom-domain setting and registrar DNS records are therefore **unverified** here. Check **Repository Settings > Pages** for `secofet.com` and HTTPS status, then compare the registrar records with the current values GitHub Pages provides. If the site is instead served from the default project subpath, the Vite base path must be reviewed.

## 6. SEO and discoverability

Route components use `react-helmet-async` for page titles, descriptions, canonical URLs, social metadata, and JSON-LD where implemented. The `*` not-found route sets `noindex`. The build prerenders known pages to HTML, so their main content and head metadata are present before client hydration; this also helps direct page loads on static hosting.

`public/sitemap.xml` lists the 11 public routes, and `public/robots.txt` allows crawling and points to `https://secofet.com/sitemap.xml`. Structured data in source includes Organization/AboutPage, LocalBusiness/ContactPoint, ItemList, HowTo, and ContactPage markup on selected pages. Validate schema values and markup after content changes.

**Google Search Console status:** No Search Console verification token or setup is present in the repository. Recommended maintenance: verify the domain property in Search Console, submit the sitemap URL, and check indexing and URL inspection for the prerendered routes. When adding a route, keep the router, prerender list, sitemap, title/description, and canonical URL in sync.

## 7. Analytics and cookie consent

`index.html` loads Google Tag Manager container `GTM-NZDJ4RLP`, including its `noscript` iframe. The current source defers GTM on mobile until page load or an interaction and then schedules it during browser idle; desktop starts it immediately. The code contains the standard GTM initialization event but no site-specific `dataLayer` events or direct GA4 measurement ID.

**GA4 and remote tags are unverified:** GA4 may be configured inside the GTM account, but its measurement ID, tag set, and event rules are not stored in this repository. Check the GTM workspace/container before changing or documenting specific tracked events.

`CookieConsent` stores the booleans `analytics` and `marketing` in `localStorage` under `cookieConsent`. If no saved choice exists, it shows the banner six seconds after page load. Visitors can accept all, reject all, or save preferences; the cookie policy page can reopen the preferences dialog.

**Consent gating status:** The frontend persists these choices but does not pass them to the GTM loader or conditionally load the container. GTM loads regardless of the saved choice (with the mobile timing delay described above). Which remote tags fire is unknown. Review the GTM container and configure consent-aware triggers/consent mode if tags must depend on a visitor's choice.

## 8. Security, privacy, and maintenance

### Data protection

The public Supabase URL and publishable key are browser configuration. A key named `VITE_...` must be treated as visible in the built site. Secret keys, service-role credentials, and mail-provider keys belong only in the server-side environment. `.gitignore` excludes `.env` and `*.local`; keep local values there and use GitHub Actions secrets for deployment values.

Forms collect business contact information and inquiry details and submit them to Supabase. The site has Terms, Privacy, and Cookie pages, but database retention, access, backups, and deployed function behavior cannot be confirmed from this repository. Verify those settings in the responsible services and keep the published privacy description aligned with actual data handling.

No backup automation is checked in. Confirm the Supabase project's backup/retention options and recovery process in its dashboard; do not assume a backup schedule based on this frontend repository.

### Troubleshooting checklist

| Symptom | Checks |
| --- | --- |
| Form fails before saving | Check local/GitHub Actions Supabase variable names and values; inspect browser console/network; verify table and RLS insert policy. |
| Row is saved but email is missing | Check the relevant Edge Function logs (`super-worker` or `send-rfq-email`), its deployed secrets, and provider configuration. |
| Direct route returns 404 | Confirm the route exists in `App.jsx`, `entry-server.jsx`, and the prerender script; verify the latest `dist/` artifact deployed. |
| Pages deployment fails | Check Actions logs for `npm ci`, Node version, build, required GitHub secrets, and Pages permissions/environment. |
| Custom domain is unavailable | Verify Pages custom-domain setting, registrar DNS values shown by GitHub, and HTTPS status. No DNS values are stored here. |
| Search results are missing/stale | Check `robots.txt`, `sitemap.xml`, canonical URLs, prerendered route output, and Search Console URL inspection. |
| Tags fire after rejecting consent | The source does not gate GTM on the saved choice; inspect remote GTM tags and consent configuration. |

### Routine maintenance

- Keep dependencies and lockfile updates intentional; review build and lint output after changes.
- Check form behavior and Edge Function logs after backend or schema changes.
- Review Supabase RLS, function secrets, backups, and email delivery settings in their dashboards.
- Review consent behavior against the actual GTM container after adding analytics or marketing tags.
- Update page metadata, sitemap, prerender list, and navigation together when routes change.
- Check the GitHub Pages domain and Search Console indexing after domain or URL changes.

