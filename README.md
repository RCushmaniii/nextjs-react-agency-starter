# Next.js Agency Starter

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss) ![MDX](https://img.shields.io/badge/MDX-Content-FCB32C?logo=mdx) ![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

> A production-grade starter template for agency, marketing, and portfolio websites — built for real client work, not tutorials.

**[Try it live](https://nextjs-react-agency-starter.vercel.app/)**

<p align="center">
  <img src="public/images/portfolio/nextjs-react-agency-starter-thumb.jpg" alt="Next.js Agency Starter — Production-grade agency website template" width="100%">
</p>

## Overview

Next.js Agency Starter provides a clean, scalable foundation for agency and freelance websites. It ships with a polished component system, an MDX-powered content workflow for blogs and case studies, and a production-ready contact pipeline with email delivery via Resend.

The project serves a dual purpose: it functions as a portfolio-quality demo showcasing modern frontend architecture, and as a practical starter template that can be cloned directly into client projects. Every piece is designed to work in production on day one — no placeholders, no TODOs, no wiring left to the developer.

Built on Next.js 14 (App Router), TypeScript in strict mode, and Tailwind CSS, the starter targets developers and agencies who care about quality, maintainability, and shipping fast without cutting corners.

## The Challenge

Most web starter templates fall into one of two traps:

- **Over-engineered** — Opinionated abstractions, complex state management, and deeply nested component hierarchies that fight you when you try to customize for a client.
- **Under-built** — A styled landing page with no content layer, no forms, no SEO setup, and a pile of TODOs where the production concerns should be.

Agency developers need a middle ground: a professional foundation that handles the repetitive infrastructure (forms, content management, SEO, dark mode, responsive layouts) so they can focus on what actually matters — client content, conversion, and delivery. Building this from scratch for every client project wastes time and introduces inconsistency.

## The Solution

This starter addresses the gap with three core pillars:

**Cohesive UI system** — Layout primitives (Container, Section, Stack) and reusable components (Button, Card, Badge, Link, Input) that feel like one unified design system, not a grab bag of copied snippets. Mobile-first and responsive by default.

**MDX content layer** — Blog posts and case studies live as `.mdx` files with structured frontmatter. Content loading utilities (`getAllPosts`, `getPostBySlug`, `getAllWork`, `getWorkBySlug`) handle sorting, filtering, and draft exclusion. Drop in a file and it appears — no CMS, no database, no API integration required.

**Production contact pipeline** — Client-side validation with React Hook Form and Zod schemas, server-side validation with Next.js Server Actions, and email delivery via Resend with React Email templates. The form works end-to-end in production, not just in a demo.

## Technical Highlights

- **Next.js 14 App Router** with file-based routing, dynamic `[slug]` routes for blog and case study pages, and per-page metadata exports for SEO
- **TypeScript strict mode** throughout — no implicit `any`, typed props and returns on every component
- **MDX content management** via `gray-matter` and `next-mdx-remote` with structured frontmatter schemas for blogs and case studies
- **Production contact form** using React Hook Form + Zod validation (client and server), Next.js Server Actions, and Resend for email delivery
- **Tailwind CSS theming** with CSS custom properties for brand colors, class-based dark mode with `localStorage` persistence
- **SEO-first** approach: auto-generated `sitemap.xml` and `robots.txt`, Organization and Article structured data, Open Graph and Twitter Card metadata per page
- **Accessibility** targeting WCAG AA: focus-visible states, ARIA labels, semantic HTML (`<nav>`, `<main>`, `<article>`), keyboard navigation, skip-to-content link
- **Component architecture** using the `cn()` utility (clsx + tailwind-merge) for clean conditional class composition

## Getting Started

### Prerequisites

- Node.js >= 20 (see `.nvmrc`)
- npm (ships with Node.js)
- A [Resend](https://resend.com) API key (for contact form email delivery)

### Installation

```powershell
# Clone the repository
git clone https://github.com/RCushmaniii/nextjs-react-agency-starter.git
cd nextjs-react-agency-starter

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SITE_URL` | Production URL for SEO and metadata | `https://yourdomain.com` |
| `RESEND_API_KEY` | API key from Resend for email delivery | `re_abc123...` |
| `CONTACT_EMAIL` | Destination email for contact form | `you@yourdomain.com` |
| `CONTACT_FROM` | Sender address for outbound emails | `"Your Studio <hello@yourdomain.com>"` |

See `.env.example` for the full template.

## Live Demo

**[Try it live](https://nextjs-react-agency-starter.vercel.app/)**

Test scenarios:

1. **Browse content** — Navigate to `/blog` and `/work` to see MDX-powered content listings and detail pages
2. **Contact form** — Visit `/contact` and test the form validation (required fields, email format)
3. **Dark mode** — Toggle the theme switch in the navigation bar; refresh and confirm persistence

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata and providers
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── blog/               # Blog listing + [slug] detail
│   ├── work/               # Case study listing + [slug] detail
│   ├── contact/            # Contact form with server action
│   ├── privacy/            # Privacy policy
│   ├── actions/            # Server actions (contact form)
│   ├── robots.ts           # Auto-generated robots.txt
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── ui/                 # Primitives: Button, Input, Card, Badge, Link
│   ├── layout/             # Navbar, Footer, Container, Section, Stack
│   ├── content/            # MDX components, Prose wrapper
│   ├── contact/            # Contact form component
│   └── emails/             # React Email templates
├── content/
│   ├── blog/               # Blog posts (*.mdx)
│   └── work/               # Case studies (*.mdx)
├── lib/                    # Utilities
│   ├── mdx.ts              # Content loading functions
│   ├── schemas.ts          # Zod validation schemas
│   ├── seo.ts              # Metadata helpers
│   └── utils.ts            # cn(), formatDate(), etc.
├── public/                 # Static assets and images
└── styles/
    └── globals.css         # Tailwind base + CSS variables
```

## Deployment

### Vercel (Recommended)

This project is optimized for Vercel's Next.js hosting:

1. Push the repository to GitHub
2. Import the project in [Vercel Dashboard](https://vercel.com/new)
3. Set environment variables (`SITE_URL`, `RESEND_API_KEY`, `CONTACT_EMAIL`, `CONTACT_FROM`)
4. Deploy — Vercel auto-detects Next.js and configures the build

### Manual Build

```powershell
npm run build    # Creates optimized production build
npm start        # Serves production build on port 3000
```

## Results

This starter demonstrates a complete agency website architecture with production-grade infrastructure:

- Contact form processes submissions end-to-end with validation and email delivery
- MDX content workflow supports blog posts and case studies with zero database dependencies
- Dark mode, SEO, accessibility, and responsive design ship out of the box
- Clean codebase structure enables rapid client customization

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 90+ | Achieved |
| TypeScript strict mode | Zero errors | Achieved |
| WCAG AA compliance | No critical issues | Achieved |
| Content workflow | File-based, no CMS | Achieved |

## Contact

**Robert Cushman**
Business Solution Architect & Full-Stack Developer
Guadalajara, Mexico

📧 info@cushlabs.ai
🔗 [GitHub](https://github.com/RCushmaniii) • [LinkedIn](https://linkedin.com/in/robertcushman) • [Portfolio](https://cushlabs.ai)

## License

© 2025 Robert Cushman. All rights reserved. Free for educational and learning use. Commercial use requires written permission. See [LICENSE](./LICENSE).

---

*Last Updated: 2026-02-21*
