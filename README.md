# Next.js Agency Starter

**A production-grade starter kit for modern agency, marketing, and portfolio websites.**

Designed for real client work — not demos, not tutorials.
This starter gives you a clean, scalable foundation so you can focus on **content, conversion, and delivery**, not wiring.

🌐 **Live Demo:**
👉 [https://vercel.com/rcushmaniii-projects/nextjs-react-agency-starter](https://vercel.com/rcushmaniii-projects/nextjs-react-agency-starter)
_(Replace with your custom domain when ready)_

---

## Why this starter exists

Most starters fall into one of two traps:

- ❌ Over-engineered and hard to customize
- ❌ Under-built and not production-ready

**This starter is the middle ground done right.**

It gives you:

- A polished agency-style UI
- A real content workflow
- A real contact pipeline
- Real-world defaults you don’t have to rip out later

This is the starter you reach for when:

- You’re building client sites
- You care about quality and maintainability
- You want to ship fast **without cutting corners**

---

## ✨ What you get out of the box

### 🧱 A cohesive, reusable UI system

- Clean layout primitives (Container, Section, Stack)
- Consistent hero and section patterns
- Card, badge, button, and form components
- Mobile-first, responsive by default

Everything is designed to feel like **one system**, not a pile of components.

---

### ✍️ A content workflow that actually scales

- **MDX-powered** blog posts and case studies
- Drop-in content via `content/blog` and `content/work`
- Beautiful long-form typography using Tailwind Typography
- A reusable `Prose` wrapper for blogs, legal pages, and case studies

Perfect for marketing sites that grow over time.

---

### 📬 A real contact flow (not a fake form)

Most starters stop at the UI. This one doesn’t.

Included:

- Client-side validation
- Server-side validation
- Next.js Server Actions
- Email delivery via **Resend**
- Production-ready email templates (React Email)

No placeholders. No TODOs. This works in production.

---

### 🌗 Thoughtful UX details

- Dark mode with localStorage persistence
- Accessible components (WCAG AA friendly)
- Polished typography for long-form reading
- Smart navigation and mobile menu behavior

The small things that make a site feel **finished**.

---

## 🚀 Features

- ⚡ **Next.js 14** (App Router)
- 📘 **TypeScript** in strict mode
- 🎨 **Tailwind CSS**
- 📝 **MDX** for content
- 🌗 Dark mode support
- ♿ Accessibility-first components
- 🔍 SEO-ready (metadata, sitemap, robots.txt)
- 🖼️ Image optimization
- 🚀 90+ Lighthouse performance scores
- 📦 Reusable component library

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── blog/               # Blog routes
│   ├── work/               # Portfolio routes
│   └── ...
├── components/
│   ├── ui/                 # Buttons, inputs, badges
│   ├── layout/             # Navbar, footer, sections
│   └── content/            # MDX, Prose, content helpers
├── content/
│   ├── blog/               # Blog posts (MDX)
│   └── work/               # Case studies (MDX)
├── lib/                    # Utilities and helpers
├── public/                 # Static assets
└── styles/                 # Global styles
```

Clean. Predictable. Easy to onboard new developers.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Update `SITE_URL` to match your domain.

### 3. Start the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Adding Content

### Blog posts

Create a file in `content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'Short summary'
date: '2024-01-15'
tags: ['nextjs', 'react']
draft: false
---

Your content here…
```

### Case studies

Create a file in `content/work/`:

```mdx
---
title: 'Project Name'
description: 'What you built and why'
date: '2024-01-15'
client: 'Client Name'
role: 'Your Role'
tech: ['Next.js', 'TypeScript']
draft: false
---

Your content here…
```

---

## 🎨 Customization

### Brand colors

Edit `styles/globals.css`:

```css
:root {
  --color-primary: 59 130 246;
  --color-secondary: 16 185 129;
}
```

### Fonts

Change the font in `app/layout.tsx` using `next/font`.

---

## 🛠️ Scripts

- `npm run dev` – Development
- `npm run build` – Production build
- `npm start` – Run production server
- `npm run lint` – ESLint
- `npm run format` – Prettier
- `npm run typecheck` – TypeScript
- `npm run check` – Lint + types

---

## 🚢 Deployment

### Vercel (recommended)

This project is optimized for Vercel.

1. Push to GitHub
2. Import into Vercel
3. Set environment variables
4. Deploy

[Deploy with Vercel](https://vercel.com/new)

---

## 🔧 Environment Variables

```env
SITE_URL=https://yourdomain.com

RESEND_API_KEY=your_api_key
CONTACT_EMAIL=you@yourdomain.com
CONTACT_FROM="Your Studio <hello@yourdomain.com>"
```

---

## 📚 Documentation

- `docs/CLAUDE.md` – Architecture & AI assistant notes
- `docs/CLIENT_START.md` – Client handoff checklist
- `docs/IMAGE_SOURCES.md` – Image attribution guidance

---

## 🎯 Who this is for

This starter is ideal if you:

- Build agency or freelance sites
- Want production-ready defaults
- Care about UX, performance, and maintainability
- Don’t want to reinvent the same patterns every project

---

## 📄 License

See [LICENSE](./LICENSE).

---

Built with ❤️ using **Next.js, TypeScript, and Tailwind CSS**

---

If you want next, I can:

- Tighten this for **open-source discovery**
- Rewrite it for **sales / client-facing repos**
- Add shields/badges without clutter
- Create a **“Why not use X?”** comparison section
- Optimize it for GitHub SEO

Just tell me the direction.
