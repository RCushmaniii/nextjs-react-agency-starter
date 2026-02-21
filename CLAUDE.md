# CLAUDE.md — Next.js Agency Starter

## Project Overview

Production-grade agency starter template built with Next.js 14, TypeScript, and Tailwind CSS. Dual purpose: portfolio-quality demo showcasing frontend architecture, and a real starter template for cloning into client projects. Deployed at [nextjs-react-agency-starter.vercel.app](https://nextjs-react-agency-starter.vercel.app/).

## Tech Stack

- **Next.js 14** — App Router, Server Actions, file-based routing
- **TypeScript 5.5** — Strict mode enabled
- **Tailwind CSS 3.4** — Utility-first styling with CSS variable theming
- **MDX** — Content via `gray-matter` + `next-mdx-remote`
- **React Hook Form + Zod** — Form validation (client + server)
- **Resend + React Email** — Contact form email delivery
- **Framer Motion** — Animations
- **ESLint + Prettier** — Code quality
- **Node 20+** — Specified in `.nvmrc`

### Explicitly Excluded

Do NOT add without explicit approval: Database/ORM, Authentication, CMS integration, Analytics scripts, Cookie consent, i18n.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (metadata, providers)
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── blog/               # Blog listing + [slug] detail
│   ├── work/               # Case study listing + [slug] detail
│   ├── contact/            # Contact form page
│   ├── actions/            # Server actions (contact form)
│   ├── privacy/            # Privacy policy
│   ├── robots.ts           # Auto-generated robots.txt
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── ui/                 # Button, Input, Textarea, Card, Badge, Link
│   ├── layout/             # Navbar, Footer, Container, Section, Stack
│   ├── content/            # MDX components, Prose wrapper
│   ├── contact/            # Contact form component
│   └── emails/             # React Email templates
├── content/
│   ├── blog/               # Blog posts (*.mdx)
│   └── work/               # Case studies (*.mdx)
├── lib/
│   ├── mdx.ts              # getAllPosts, getPostBySlug, getAllWork, getWorkBySlug
│   ├── schemas.ts          # Zod validation schemas
│   ├── seo.ts              # Metadata and canonical URL helpers
│   └── utils.ts            # cn(), formatDate()
├── public/                 # Static assets
└── styles/
    └── globals.css         # Tailwind base + CSS custom properties
```

## Development Commands

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format

# TypeScript check
npm run typecheck

# Full check (typecheck + lint)
npm run check
```

## Key Patterns & Conventions

- **`cn()` utility** — `clsx` + `tailwind-merge` for conditional class composition. Use everywhere instead of string concatenation.
- **Import aliases** — Use `@/` prefix for absolute imports (`@/components/ui/button`, `@/lib/utils`)
- **Component structure** — Named exports, TypeScript interfaces for props, hooks at top, render at bottom
- **File naming** — Components: PascalCase. Utilities: camelCase. Routes: lowercase. Content: kebab-case.
- **Dark mode** — Class-based (`class="dark"`), toggled in Navbar, persisted in `localStorage`. Theme colors via CSS variables in `globals.css`.
- **Content** — MDX files in `content/blog/` and `content/work/` with YAML frontmatter. Sorted by date descending. Draft items excluded in production.
- **Forms** — React Hook Form + Zod schemas for validation. Server Actions for processing. Resend for email delivery.
- **SEO** — Every page exports `metadata` or `generateMetadata`. Sitemap and robots auto-generated. Structured data on home (Organization) and blog posts (Article).
- **Accessibility** — Focus-visible states, ARIA labels, semantic HTML, skip-to-content link, WCAG AA color contrast.

## Current Focus

Repository is stable and deployed. No active feature development. Available for client customization work.

## Known Issues

- Live demo link in original README pointed to Vercel dashboard URL instead of deployed site (fixed in standardization)
- `nvmrc` file exists at root alongside `.nvmrc` (duplicate — `nvmrc` at root may be a leftover)

## Environment Setup

Copy `.env.example` to `.env` and configure:

| Variable | Purpose |
|----------|---------|
| `SITE_URL` | Production URL for SEO metadata |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for contact form email |
| `CONTACT_EMAIL` | Destination email for contact submissions |
| `CONTACT_FROM` | Sender address for outbound emails |

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — Hero, services, process, featured work, testimonials, CTA |
| `/work` | Work listing grid |
| `/work/[slug]` | Case study detail (MDX) |
| `/blog` | Blog listing (chronological) |
| `/blog/[slug]` | Blog post detail (MDX) |
| `/about` | About page |
| `/contact` | Contact form with validation and email delivery |
| `/privacy` | Privacy policy |

## Additional Documentation

- `docs/CLIENT_START.md` — Client handoff / de-templating checklist
- `docs/IMAGE_SOURCES.md` — Image attribution guidance
