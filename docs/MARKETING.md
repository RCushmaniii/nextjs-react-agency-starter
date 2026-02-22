# Next.js Agency Starter

## Why I Built This

I built this because every Next.js starter template I found fell into one of two categories: over-engineered boilerplate that took longer to strip down than to build from scratch, or a styled landing page with TODO comments where production concerns should be.

I needed something in the middle — a complete agency website that actually works end-to-end, ships with real content, and can be re-skinned for a client in an afternoon.

---

## What It Actually Is

A Next.js 14 agency website template with 8 fully-styled pages, a working contact form with email delivery, an MDX content system for blogs and case studies, and a theming system that takes two CSS variable changes to rebrand.

This isn't scaffolding. Every page renders real content. The contact form validates input, catches bots with a honeypot field, processes submissions through a Server Action, and sends formatted HTML emails via Resend. The blog and portfolio sections read `.mdx` files from disk — no database, no CMS, no API calls.

---

## The Problem It Solves

**For agency developers and freelancers:** You rebuild the same infrastructure for every client — contact forms with validation, content management, dark mode, responsive navigation, SEO metadata, accessibility basics. This template handles all of that so you start at the finish line instead of the starting blocks.

**For business owners evaluating developers:** This is a working example of what production-grade frontend architecture looks like. Not a Figma mockup. Not a WordPress theme. Actual TypeScript with strict mode, server-side validation, structured data, and accessibility built in from the start.

---

## What Ships in the Box

**8 pages, fully built:**

- Homepage with hero, client logos, capabilities cards, process steps, featured work, articles, testimonials, and CTA
- Portfolio grid with case study detail pages (MDX)
- Blog listing with post detail pages (MDX + Article schema)
- About page with stats, values, and team section
- Contact form with client + server validation and email delivery
- Privacy policy page

**Contact form pipeline that works in production:**

- React Hook Form handles client-side UX
- Zod schemas validate on both client and server (name 2-50 chars, email format, message 10-1000 chars, optional company/website/interest)
- Honeypot field silently catches bots — returns fake success so they don't retry
- Server Action calls Resend API with a React Email HTML template
- The email that arrives includes sender details, company, website, interest area, and the full message

**Content system with zero infrastructure:**

- Blog posts and case studies are `.mdx` files with YAML frontmatter
- Drop a file in `content/blog/` or `content/work/` and it shows up
- Draft filtering: set `draft: true` in frontmatter and it's excluded from production builds
- Sorted by date automatically. Static pages generated at build time via `generateStaticParams`
- Ships with 3 blog posts and 3 case studies — real content, not lorem ipsum

**SEO that's actually configured:**

- Every page exports metadata (title, description, OpenGraph, Twitter Cards)
- Auto-generated `sitemap.xml` with correct priorities (homepage 1.0, work 0.9, blog 0.8) and `lastModified` dates from content
- Auto-generated `robots.txt` allowing all crawlers
- Organization schema (JSON-LD) on the homepage
- Article schema (JSON-LD) on every blog post
- Canonical URLs driven by a single `SITE_URL` env var

**Accessibility defaults:**

- Skip-to-content link (hidden until focused)
- Semantic HTML throughout — `nav`, `main`, `section`, `article`, `fieldset`, `legend`
- ARIA labels on all interactive elements (dark mode toggle, mobile menu, form fields)
- Global `focus-visible` ring (2px primary outline, 2px offset) on every element
- WCAG AA color contrast in both light and dark modes

**Theming that takes minutes, not days:**

- Two CSS custom properties control the entire brand: `--color-primary` and `--color-secondary`
- Background and foreground swap automatically in dark mode via two more variables
- Font family is a single variable change
- Dark mode toggle is built into the navbar, persisted to localStorage
- Every component references these variables through Tailwind — no hardcoded hex values anywhere

**4 section transition demos** (`/demo`):

- Glassmorphism: frosted glass card with backdrop-blur overlapping the hero image
- Gradient Fade: smooth dissolves between every section — no hard edges on the entire page
- Tech Glow: 1px gradient divider with layered CSS box-shadow glow
- SVG Sweep: inline SVG curve breaking the horizontal grid between hero and content

---

## What Makes It Different

**It's complete.** The contact form sends real emails. The blog has real posts. The SEO has real structured data. You don't finish installing it and then spend two days wiring things up.

**It's simple to rebrand.** Change four CSS variables and swap the logo images. The entire color system, including dark mode, updates everywhere. No hunting through component files for hardcoded colors.

**It has no opinions you'll fight.** No database. No auth. No CMS. No analytics. No cookie consent. Those are deliberate omissions — they're the things that vary most between clients. The template handles what's universal (forms, content, SEO, theming, accessibility) and stays out of the way on everything else.

**It's built on standards, not abstractions.** Next.js App Router. TypeScript strict mode. Tailwind utility classes. MDX files on disk. Server Actions for form handling. There's nothing proprietary to learn or maintain.

---

## The Technical Specifics

- Next.js 14 with App Router and React Server Components
- TypeScript 5.5 in strict mode — no implicit `any` anywhere
- Tailwind CSS 3.4 with CSS variable theming and `@tailwindcss/typography`
- MDX content via `gray-matter` + `next-mdx-remote` v6 (RSC mode)
- React Hook Form + Zod for form validation (client and server)
- Resend + React Email for contact form delivery
- Framer Motion for animations
- ESLint + Prettier configured
- Node 20+ required
- Deployed and running at [nextjs-react-agency-starter.vercel.app](https://nextjs-react-agency-starter.vercel.app/)

---

## Who This Is For

Developers who build client websites regularly and want a consistent, high-quality starting point. Agency teams tired of rebuilding navigation, forms, dark mode, and SEO metadata from scratch on every project. Freelancers who need to show a client something real in the first meeting, not a wireframe.

It's not for everyone. If you need auth, a database, or CMS integration on day one, this isn't the right starting point. I left those out intentionally — they're the decisions that should be made per-project, not baked into a template.
