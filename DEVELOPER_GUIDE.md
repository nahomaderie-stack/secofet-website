# Secofet Website Developer Guide

## Editing JSX, CSS, content, SEO, forms, and integrations

Repository reviewed 2026-10-19. This is a practical companion to `DOCUMENTATION.md` for developers making website changes. The frontend details below are verified against this repository. The site owner confirms that the deployed Supabase email functions use Resend; those function implementations and Resend settings are not present in this repository.

## 1. Start here

### Local setup

Use Node.js 22 and npm. In a terminal at the project root:

```sh
npm ci
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173/`. Useful checks and preview commands are:

```sh
npm run lint
npm run build
npm run preview
```

There is no test script in `package.json`. `npm run build` creates the static site in `dist/`, including prerendered HTML for the site's routes. Do not edit `dist/` or `dist-ssr/` by hand; they are generated.

### Environment variables

The browser Supabase client in `src/supabaseClient.js` reads:

```dotenv
VITE_SUPABASE_URL=<Supabase project URL>
VITE_SUPABASE_PUBLISHABLE_KEY=<Supabase publishable key>
```

Place real local values in `.env.local`, which is ignored by Git. `VITE_` values become visible in the browser bundle. Never put a Supabase service-role key, Resend API key, or other secret in a `VITE_` variable. GitHub Actions supplies the two Supabase values as repository secrets during the production build.

## 2. How the website is put together

Think of a route as a page made of reusable components:

```text
src/main.jsx                 Starts React, router, and metadata provider
  src/App.jsx                Shared shell and URL-to-page route mapping
    src/pages/               Route composition and page-specific SEO
      src/components/        Reusable page sections, navigation, and forms
        src/styles/           Component and page styles
```

`main.jsx` mounts or hydrates the app and provides `BrowserRouter` and `HelmetProvider`. `App.jsx` wraps every route with the shared header, footer, cookie preferences, page transition provider, and scroll-to-top behavior. A page file usually assembles components; a component file contains the section's JSX and imports its CSS.

### Routes and page files

| URL | Page file | Typical content components |
| --- | --- | --- |
| `/` | `src/pages/HomePage.jsx` | `Hero`, `AboutUs`, `KeyCategories`, `OurOrigins`, `WhySecofet`, `WorkWithSecofet` |
| `/about` | `src/pages/AboutUsPage.jsx` | About banner/details, values, mission, team, capabilities |
| `/our-coffees` | `src/pages/OurCoffeesPage.jsx` | Coffee detail, grid, processing and grading |
| `/origins` | `src/pages/OriginsPage.jsx` | Origin hero, cards, map, selectable origin data |
| `/operations` | `src/pages/OurOperationsPage.jsx` | Farms, quality control, logistics, operations detail |
| `/contact` | `src/pages/ContactPage.jsx` | Contact form, FAQ, map, contact call to action |
| `/rfq` | `src/pages/RequestQuotePage.jsx` | Quote metadata and `RFQQuote` form |
| `/request-sample` | `src/pages/RequestSamplePage.jsx` | Sample metadata and `RFQSample` form |
| `/terms`, `/privacy`, `/cookie` | Matching `*Page.jsx` files | Legal copy and cookie preferences |
| Any unmatched URL | `src/pages/NotFoundPage.jsx` | Not-found content and `noindex` metadata |

### JSX in a few minutes

JSX describes the page structure with HTML-like tags. A React component is a JavaScript function that returns JSX. Use `className` for CSS classes, close tags such as `<img />`, and use braces `{...}` to place JavaScript values inside the markup.

```jsx
function Feature({ title, children }) {
  return (
    <section className="feature">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
```

Use `Link` from `react-router-dom` for links to this site's routes; use `<a href="https://...">` for external destinations. Render arrays with `.map()` and give each repeated item a stable `key`. Keep text in normal JSX rather than inserting raw HTML. React escapes text values automatically.

Interactive controls usually use state. In a controlled input, React state is the current value, and `onChange` updates it:

```jsx
const [email, setEmail] = useState('');

<input
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
```

When adding forms, preserve labels, input `name` values, `required` rules, submit status text, and disabled/loading behavior. These affect accessibility and submission logic as well as appearance.

## 3. Edit page content and images

Most visible copy is written directly in page or component JSX. Start at the route's page file, then follow its component imports. For example, homepage headline copy is in `src/components/Hero.jsx`; its layout and copy are assembled from `src/pages/HomePage.jsx`.

Some content is data-driven:

- `src/data/coffeeOrigins.js` contains origin descriptions, labels, map details, specifications, and card content.
- `src/countryOptions.js` supplies the country lists used by forms.
- Company, coffee, operations, contact, and legal copy is generally in the matching page-section component.

Images and logos used by components are in `src/assets/` and are normally imported at the top of the JSX file. Public files such as fonts, icons, sitemap, and robots rules live in `public/`. For a content image, choose a descriptive filename, import it, use appropriate `alt` text for meaningful images, and preserve explicit dimensions where available. Decorative images should have empty `alt` text.

When changing page content, use a clear heading order (`h1` for the main page heading, then section headings), keep link text meaningful, and check spelling and factual coffee specifications. Lot availability and specifications should not be described as guaranteed if they vary by shipment.

## 4. Edit the visual style

### Where styles live

| File location | Role |
| --- | --- |
| `src/index.css` | Font-face declarations and initial document-level styles |
| `src/styles/global.css` | Site-wide base styles and shared typography |
| `src/App.css` | App/page shell and shared layout rules |
| `src/styles/<Component>.css` | Styles for the matching component, usually imported by its JSX |
| `src/styles/Responsive.css` | Cross-site responsive adjustments |
| `src/SplitTextAnimation/*.css` | Intro/reveal animation styles |

For example, `src/components/Hero.jsx` imports `src/styles/Hero.css`. Its `className="hero-title"` is styled by the `.hero-title` selector. Search the class name if you are unsure which rule controls an element:

```sh
rg -n "hero-title" src
```

### Mobile and desktop

Responsive behavior is implemented in `Responsive.css` and media queries in individual component styles. To change only mobile, put the override in the relevant small-screen media query and leave the base/desktop rule alone. To change all sizes, update the component's base selector and review each responsive override for conflicting values.

```css
/* Example: a small-screen-only adjustment */
@media (max-width: 640px) {
  .feature-title {
    font-size: 1.8rem;
  }
}
```

Keep component-specific styles under that component's own class prefix. Avoid broad selectors such as `section`, `button`, or `h2` in a component stylesheet because they can change unrelated pages. Before finishing a visual change, inspect a narrow phone viewport, a tablet width, and desktop; check text wrapping, image crop, button reachability, and horizontal overflow.

## 5. Update SEO and add routes safely

Most route page files use `Helmet` from `react-helmet-async` for a unique `<title>`, meta description, canonical URL, social preview fields, and JSON-LD where appropriate. The not-found page sets `noindex`. The shared site fallback title is in `index.html`.

When editing a page's SEO, update its `Helmet` block in the matching `src/pages/*Page.jsx` file. Keep the canonical URL aligned with the route and use the existing `https://secofet.com/` domain and trailing-slash convention. Social image URLs are created with `src/utils/siteAssetUrl.js`. Keep JSON-LD factual and consistent with visible page content.

The build renders known routes to HTML using `src/entry-server.jsx` and `scripts/prerender-routes.mjs`. When creating or renaming a route, update all of these places:

1. Add the route and page import to `src/App.jsx`.
2. Add the page component to `src/entry-server.jsx`'s server page map; this keeps server rendering in sync with client routing.
3. Add the slash-ended route to the list in `scripts/prerender-routes.mjs`.
4. Update `public/sitemap.xml`, plus `Header` or `Footer` links where the page should be navigable.
5. Add a page title, description, canonical URL, and appropriate social metadata in the page component.
6. Run the build and open the new URL directly in the local preview.

If any one of these is missed, the page may work through in-app navigation but be missing from prerendered output, SEO listings, or static direct navigation.

## 6. Forms, Supabase, and Resend

### Understand the form pattern

The form components own their input state and submission handlers:

```text
Visitor input
  -> formData state in the React component
  -> handleSubmit prevents normal browser navigation
  -> Supabase inserts a row into the selected table
  -> frontend invokes a Supabase Edge Function for notification
  -> deployed function sends email through Resend (per site owner)
```

`src/supabaseClient.js` creates one browser client from the URL and publishable key. Form components import that shared client. A publishable key is expected to be visible in the frontend; database permissions must therefore be enforced by Supabase Row Level Security (RLS) and server-side function checks.

### Implemented submission paths

| Form component | Database insert sent by the frontend | Notification function |
| --- | --- | --- |
| `ContactTeam` | `contact_messages`: `first_name`, `last_name`, `email`, `country`, `phone`, `company`, `role`, `message` | `super-worker` with the form values |
| `RFQQuote` | `rfq_requests`: company/contact, email/phone, country and buyer type, coffee/processing/origin/grade, quantity, destination, incoterm, shipment date | `send-rfq-email` with camelCase `formData` |
| `RFQSample` | `rfq_sample_requests`: similar company/contact and coffee fields; optional blanks are sent as `null` for many columns | `send-rfq-email` with trimmed form values |

These are the payloads submitted by the UI, not a complete database schema. Confirm table columns, nullability, types, RLS, and function payload expectations in the Supabase project before changing form fields. When adding a field, trace it end to end: initial `formData`, JSX `name`, `handleChange`, insert object, Edge Function request body, database schema, email template, and any validation.

### Save and notify are separate steps

The form first attempts to save the request. A failed insert is a failed submission; check browser DevTools and Supabase policies. After a successful insert, a notification failure does not undo the database row:

- **Contact:** the user sees success after insert; the function call is best-effort and its failure is swallowed.
- **Quote:** the request is marked submitted after insert; notification errors display a message that the request was received but email could not be sent.
- **Sample:** the request is marked submitted after insert; the UI checks the function error and `data.success` before showing the confirmation-and-notification success message.

Avoid changing success text or retry controls without considering duplicate submissions. Use the Supabase table to determine whether a row was saved before resubmitting a request.

The footer field labelled like a newsletter signup currently opens a prefilled Gmail compose message. It does not insert a subscriber in Supabase or call Resend. Do not describe it as an active mailing-list integration unless that workflow is implemented separately.

### Resend: what to edit and where

The site owner confirms that Resend is used by the deployed Supabase email functions. This repository contains the browser calls to `super-worker` and `send-rfq-email`, but it does not contain a `supabase/` directory, Edge Function source, Resend SDK dependency, or email templates. So this guide can explain the frontend contract, but not the function's actual sender, recipient, templates, retries, or Resend settings.

For email changes, locate the maintained/deployed Supabase Edge Function source, edit and deploy that function through its approved workflow, keep `RESEND_API_KEY` and other mail credentials in Supabase server-side secrets, and inspect function/provider logs. Never place these secrets in `.env` variables prefixed with `VITE_`. Keep the function body field names synchronized with the frontend payloads described above.

### Supabase access and privacy

The frontend code does not include table migrations or RLS policies. In Supabase, verify that RLS is enabled on all submission tables and that anonymous visitors can insert only the intended fields. Public clients should not be able to list, read, update, or delete inquiries. Enforce validation, abuse controls, and any trusted mail behavior in the database/function layer, not only in browser JavaScript. Do not add service-role credentials to the client.

## 7. Google Tag Manager, GA4, and consent

`index.html` contains GTM container `GTM-NZDJ4RLP` in both the script loader and the `noscript` iframe. The source defers loading on mobile until page load or a visitor interaction and then schedules the container for browser idle; desktop loads it immediately. Keep the two container references consistent if the ID ever changes.

The repository contains GTM's standard initialization, but no custom business-event pushes or GA4 measurement ID. The actual tags, triggers, GA4 property, and publishing history belong to the GTM account and cannot be inspected from this repo. In GTM, use Preview/Tag Assistant to verify a change and then publish the reviewed container version.

`CookieConsent` saves analytics and marketing choices in `localStorage` under `cookieConsent`; it shows a banner after load when no choice exists. The current frontend does not pass the visitor's choices to the GTM loader or gate the container on them. A GTM tag could still fire regardless of this UI setting. If consent is meant to control analytics or marketing tags, coordinate the site code and GTM consent settings, test accept/reject/manage flows in a clean browser profile, and confirm the actual tags before publishing. This guide describes current behavior; it is not a claim that the current setup meets a particular legal requirement.

If event tracking is added, push only useful, non-identifying event data after the corresponding action actually succeeds. Never push form names, email addresses, phone numbers, or message content to `dataLayer` or GA4. For example, an event name such as `rfq_submitted` can describe a successful request without carrying personal data; this example is not currently implemented.

## 8. Build, deployment, and troubleshooting

The GitHub Actions workflow `.github/workflows/deploy.yml` builds with Node 22 on pushes to `main` and manual dispatch. It runs `npm ci`, `npm run build`, uploads `dist/`, and deploys the GitHub Pages artifact. The build needs the two Supabase GitHub secrets described above.

Before opening a pull request or merging:

```sh
npm run lint
npm run build
npm run preview
```

Open changed routes directly in the preview, verify mobile and desktop layouts, and inspect the browser console. For form work, check both the row in Supabase and the relevant function's logs. A row can be saved even when its notification failed. For route work, check the router, SSR mapping, prerender route list, sitemap, and direct URL. After the change reaches `main`, confirm the Actions build and Pages deploy both succeed.

| Problem | First places to check |
| --- | --- |
| Style change does not appear | Confirm JSX class name, component CSS import, media query, and selector specificity; restart Vite only if it stopped. |
| Page works only after clicking a link | Check SSR page map, prerender route list, and deployed static route output. |
| Supabase insert fails | Check environment values, request payload/table columns, required columns, RLS insert policy, and browser Network response. |
| Row exists but email is missing | Check `super-worker` or `send-rfq-email` logs, server-side Resend secret, recipient/sender verification, and function response. |
| GTM tag fires unexpectedly | Check current consent behavior in the frontend and inspect GTM Preview, triggers, and consent settings. |
| Deployment fails | Review GitHub Actions logs, Node version, lockfile install, build output, required GitHub secrets, and Pages permissions. |

## 9. A safe editing checklist

- Find the route page first, then edit the smallest relevant component and its matching CSS.
- Preserve existing class names, form field names, component props, and Supabase payload keys unless you update every dependent layer.
- For copy or SEO changes, preview the affected route and verify the title, description, canonical, social image, and visible content agree.
- For mobile-only style changes, keep the override inside a mobile media query and inspect desktop for regressions.
- Keep secrets out of source, commits, screenshots, and browser-visible `VITE_` variables.
- Run lint and build, review the diff with `git status --short` and `git diff`, then preview the generated site before merging.
