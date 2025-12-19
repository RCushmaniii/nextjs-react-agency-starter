# Next.js Agency Starter

A production-grade starter template for building modern agency websites, marketing sites, and portfolios with Next.js, TypeScript, and Tailwind CSS.

Built to be a strong baseline for real client work: clean layout primitives, a consistent hero system, MDX-powered content, and a production-ready contact pipeline.

## ✨ Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📘 **TypeScript** in strict mode
- 📝 **MDX** for blog posts and case studies
- 🌗 **Dark mode** support with localStorage persistence
- ✍️ **Beautiful long-form typography** via `@tailwindcss/typography` + a reusable `Prose` wrapper
- 📱 **Fully responsive** mobile-first design
- ♿ **Accessible** - WCAG AA compliant
- 🚀 **Optimized** - 90+ Lighthouse scores
- 🔍 **SEO-ready** - Metadata, sitemap, robots.txt
- 📦 **Component library** - Reusable UI components

## ✅ Why this template is a great starting point

- **Ship faster without compromising quality**
  - A cohesive, agency-style UI with patterns you can reuse across pages (hero, sections, cards, CTAs).
- **Content workflow that scales**
  - Add new case studies and blog posts by dropping `.mdx` files into `content/`.
- **Marketing-site essentials included**
  - SEO metadata, sitemap and robots routes, responsive navigation, polished footer, and dark mode.
- **Real contact flow (not a fake form)**
  - Client validation + server-side validation + server action + email delivery (Resend) + email template.

## 📋 Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

## 🚀 Quick Start

1. **Install dependencies**

```bash
npm install
```

2. **Set up environment variables**

```bash
cp .env.example .env
```

Edit `.env` and update `SITE_URL` to match your domain.

3. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog routes
│   ├── work/              # Portfolio routes
│   └── ...                # Other pages
├── components/
│   ├── ui/                # Primitive components (Button, Input, etc.)
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   └── content/           # Content components (MDX, Prose, etc.)
├── content/
│   ├── blog/              # Blog posts (MDX)
│   └── work/              # Case studies (MDX)
├── lib/                   # Utilities and helpers
├── public/                # Static assets
└── styles/                # Global styles
```

## 📝 Adding Content

### Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'A brief description'
date: '2024-01-15'
tags: ['nextjs', 'react']
draft: false
---

Your content here...
```

### Case Studies

Create a new `.mdx` file in `content/work/`:

```mdx
---
title: 'Project Name'
description: 'Project description'
date: '2024-01-15'
client: 'Client Name'
role: 'Your Role'
tech: ['Next.js', 'TypeScript']
draft: false
---

Your content here...
```

### Cover Images

Both the blog and work sections support cover images for listings and detail pages.

- Put images in `public/images/` (recommended) or another public path.
- Reference the image path from your MDX frontmatter (field name depends on the content type used by the template).
- Prefer WebP/AVIF for performance.

## 🎨 Customization

### Brand Colors

Edit `styles/globals.css` to customize colors:

```css
:root {
  --color-primary: 59 130 246; /* Your primary color */
  --color-secondary: 16 185 129; /* Your secondary color */
}
```

### Components

All components are in `components/` and can be customized:

- `components/ui/` - Primitive components
- `components/layout/` - Layout components
- `components/content/` - Content components (MDX, Prose, etc.)

### Long-form Content Styling (Prose)

Large blocks of content (blog posts, case studies, privacy/legal pages) should be wrapped in the `Prose` component. This applies Tailwind Typography styles and supports dark mode via `dark:prose-invert`.

### Fonts

The default font is Inter. To change it, edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types
- `npm run check` - Run typecheck + lint

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Set environment variables in Vercel dashboard

### Email Delivery (Resend)

If you plan to use the built-in contact form in production:

1. Create a Resend account and generate an API key
2. Verify a sending domain (recommended)
3. Configure the environment variables below on your deployment provider

### Other Platforms

This is a standard Next.js application and can be deployed to:

- Netlify
- AWS Amplify
- Google Cloud
- Railway
- Render
- Self-hosted with Docker

## 🔧 Environment Variables

Create a `.env` file with:

```env
SITE_URL=https://yourdomain.com

# Resend (contact form)
RESEND_API_KEY=your_api_key

# Where contact form messages should be delivered
CONTACT_EMAIL=you@yourdomain.com

# From header for outbound messages (should be from a verified domain)
CONTACT_FROM="Your Studio <hello@yourdomain.com>"
```

Notes:

- `CONTACT_FROM` should typically be a verified sender/domain in Resend.
- The contact form uses a server action and does not expose your API key to the browser.

## 📚 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: [MDX](https://mdxjs.com)
- **Email**: [Resend](https://resend.com) + [React Email](https://react.email)
- **Deployment**: [Vercel](https://vercel.com)

## 🎯 What's Included

### Pages

- ✅ Home page with hero, services, process, work, testimonials
- ✅ Work/portfolio listing and detail pages
- ✅ Blog listing and detail pages
- ✅ About page
- ✅ Contact form with validation
- ✅ Privacy policy page
- ✅ Custom 404 page

### Components

- ✅ Button with variants
- ✅ Input and Textarea with error states
- ✅ Card components
- ✅ Badge component
- ✅ Smart Link component
- ✅ Responsive Navbar with mobile menu
- ✅ Footer with social links
- ✅ Container, Section, Stack layouts

### Features

- ✅ Dark mode toggle
- ✅ MDX content support
- ✅ SEO optimization
- ✅ Automatic sitemap generation
- ✅ Image optimization
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ Production-friendly typography styles for legal/blog content
- ✅ Responsive design
- ✅ Accessibility features

## 📖 Documentation

- [CLAUDE.md](./docs/CLAUDE.md) - AI assistant guide and architecture docs
- [CLIENT_START.md](./docs/CLIENT_START.md) - Client project customization checklist
- [IMAGE_SOURCES.md](./docs/IMAGE_SOURCES.md) - Image attribution guidelines

## 🤝 Contributing

This is a starter template meant to be customized for your needs. Feel free to:

1. Fork the repository
2. Make your changes
3. Use it for your projects

## 📄 License

See [LICENSE](./LICENSE).

## 🆘 Support

- Check the [CLAUDE.md](./docs/CLAUDE.md) for detailed architecture information
- Review [Next.js Documentation](https://nextjs.org/docs)
- Open an issue for bugs or questions

## 🎉 Getting Started with a Client Project

See [CLIENT_START.md](./docs/CLIENT_START.md) for a complete checklist to customize this template for a client project.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
