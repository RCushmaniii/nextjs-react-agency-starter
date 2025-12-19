# CLAUDE.md - AI Assistant Guide

> **Purpose**: This document explains the codebase structure, development workflows, and key conventions for AI assistants working on the `nextjs-agency-starter` project.

---

## Project Overview

**Repository**: `nextjs-react-agency-starter`
**Type**: Production-grade agency starter template
**Dual Purpose**:
- A) Portfolio-quality demo showcasing frontend architecture
- B Real starter template for cloning into client projects

---

## Tech Stack (Required)

- **Next.js 14+** (App Router only)
- **TypeScript** (strict mode enabled)
- **Tailwind CSS** (utility-first styling)
- **ESLint + Prettier** (code quality)
- **`cn()` utility** (clsx + tailwind-merge pattern)
- **Node 20+** (specified in `.nvmrc`)

### Explicitly Excluded

**DO NOT** add any of the following without explicit approval:
- ❌ Database or ORM (Prisma, Drizzle, etc.)
- ❌ Authentication (NextAuth, Clerk, etc.)
- ❌ CMS integration (Contentful, Sanity, etc.)
- ❌ Analytics scripts (Google Analytics, Plausible, etc.)
- ❌ Cookie consent banners
- ❌ i18n/internationalization setup
- ❌ Astro or any non-Next framework

---

## Site Capabilities

This starter supports three site types:
1. **Small marketing sites** - Agency/product landing pages
2. **Blogs** - MDX-based, no external CMS required
3. **Case studies / Portfolio work pages** - Project showcases

---

## File Structure

```
nextjs-agency-starter/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (metadata, providers)
│   ├── page.tsx             # Home page
│   ├── about/               # About page route
│   │   └── page.tsx
│   ├── blog/                # Blog routes
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/          # Dynamic blog post
│   │       └── page.tsx
│   ├── work/                # Case studies/portfolio
│   │   ├── page.tsx         # Work listing grid
│   │   └── [slug]/          # Dynamic case study
│   │       └── page.tsx
│   ├── contact/             # Contact form
│   │   └── page.tsx
│   ├── privacy/             # Privacy policy
│   │   └── page.tsx
│   └── not-found.tsx        # Custom 404
│
├── components/
│   ├── ui/                  # Primitive components
│   │   ├── button.tsx       # Button variants
│   │   ├── input.tsx        # Form inputs
│   │   ├── textarea.tsx     # Text areas
│   │   ├── card.tsx         # Card component
│   │   ├── badge.tsx        # Label badges
│   │   └── link.tsx         # Smart link component
│   │
│   ├── layout/              # Layout components
│   │   ├── navbar.tsx       # Responsive nav + mobile menu
│   │   ├── footer.tsx       # Site footer
│   │   ├── container.tsx    # Max-width wrapper
│   │   ├── section.tsx      # Consistent vertical spacing
│   │   └── stack.tsx        # Flex column utility
│   │
│   └── content/             # Content components
│       ├── mdx-components.tsx  # MDX component overrides
│       └── prose.tsx           # Typography wrapper
│
├── content/                 # MDX content files
│   ├── blog/               # Blog posts (*.mdx)
│   └── work/               # Case studies (*.mdx)
│
├── lib/                    # Utilities
│   ├── mdx.ts             # Content loading (getAllPosts, getPostBySlug)
│   ├── seo.ts             # Metadata helpers
│   └── utils.ts           # cn(), formatDate(), etc.
│
├── public/
│   └── images/            # Static images (2-3 placeholders)
│
├── styles/
│   └── globals.css        # Tailwind + CSS variables
│
├── .env.example           # Environment template
├── .nvmrc                 # Node version (20+)
├── .eslintrc.json         # ESLint config
├── .prettierrc            # Prettier config
├── tsconfig.json          # TypeScript config (strict)
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies + scripts
├── README.md              # User-facing documentation
├── CLIENT_START.md        # De-templating checklist
├── IMAGE_SOURCES.md       # Attribution for placeholder images
└── CLAUDE.md              # This file (AI assistant guide)
```

---

## Page Routes & Requirements

| Route | Purpose | Requirements |
|-------|---------|--------------|
| `/` | Home | Hero, services, process, featured work, testimonials, CTA |
| `/work` | Work listing | Grid layout, filter by tags/tech |
| `/work/[slug]` | Case study detail | MDX-based, dynamic route |
| `/blog` | Blog listing | Chronological, pagination optional |
| `/blog/[slug]` | Blog post | MDX-based, syntax highlighting |
| `/about` | About page | Static content |
| `/contact` | Contact form | Validation, console.log on submit, success toast (no backend) |
| `/privacy` | Privacy policy | Placeholder text |
| `/404` | Custom not found | Helpful navigation links |

---

## Content Layer (MDX)

### Blog Posts

**Location**: `content/blog/*.mdx`

**Frontmatter Schema**:
```yaml
title: string          # (required) Post title
description: string    # (required) Meta description
date: YYYY-MM-DD      # (required) Publication date
tags: string[]        # (optional) Category tags
draft: boolean        # (optional, default: false)
coverImage: string    # (optional) Path relative to /public
```

**Example**:
```mdx
---
title: "Why We Build with Next.js"
description: "Our technical rationale for choosing Next.js as our primary framework"
date: 2024-01-15
tags: ["nextjs", "react", "architecture"]
draft: false
coverImage: "/images/blog/nextjs-architecture.jpg"
---

Content goes here...
```

### Work / Case Studies

**Location**: `content/work/*.mdx`

**Frontmatter Schema**:
```yaml
title: string          # (required) Project title
description: string    # (required) Brief summary
date: YYYY-MM-DD      # (required) Completion date
client: string        # (optional) Client name
role: string          # (optional) Your role
tech: string[]        # (optional) Technologies used
coverImage: string    # (optional) Hero image
draft: boolean        # (optional, default: false)
```

### Content Rules

1. **Sorting**: Always sort by `date` descending (newest first)
2. **Drafts**: Exclude `draft: true` items in production builds
3. **Helper Functions**: Provide utilities in `lib/mdx.ts`:
   - `getAllPosts()` - Returns all blog posts
   - `getPostBySlug(slug)` - Returns single post
   - `getAllWork()` - Returns all case studies
   - `getWorkBySlug(slug)` - Returns single case study

---

## Design System

### Component Variants

**Button** (`components/ui/button.tsx`):
- `primary` - Main CTAs (solid bg)
- `secondary` - Alternative actions
- `outline` - Secondary actions with border
- `ghost` - Minimal styling

**Link** (`components/ui/link.tsx`):
- Automatically handles internal vs external
- Adds `rel="noopener noreferrer"` for external links
- Use Next.js `<Link>` for internal navigation

**Input/Textarea** (`components/ui/`):
- Support error states
- Consistent styling across form elements
- Include label + error message slots

### Theming

**Dark Mode**:
- Class-based strategy (`class="dark"`)
- Toggle component in navbar
- Preference stored in `localStorage`
- CSS variables for easy customization:

```css
/* globals.css example */
:root {
  --color-primary: 59 130 246;      /* Blue-500 */
  --color-secondary: 16 185 129;    /* Green-500 */
  --color-background: 255 255 255;  /* White */
  --color-foreground: 15 23 42;     /* Slate-900 */
}

.dark {
  --color-background: 15 23 42;     /* Slate-900 */
  --color-foreground: 248 250 252;  /* Slate-50 */
}
```

### Accessibility Requirements

- ✅ Focus-visible states on all interactive elements
- ✅ Proper ARIA labels where text isn't visible
- ✅ Skip-to-content link for keyboard navigation
- ✅ Semantic HTML (`<nav>`, `<main>`, `<article>`)
- ✅ Color contrast ratios meet WCAG AA standards

---

## SEO & Metadata

### Metadata Exports

Every page must export `metadata` or `generateMetadata`:

```tsx
// app/blog/[slug]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: [post.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  }
}
```

### Required SEO Files

1. **`sitemap.xml`** - Auto-generated from routes + content
2. **`robots.txt`** - Allow all, link to sitemap
3. **Canonical URLs** - Helper utility in `lib/seo.ts`
4. **Structured Data**:
   - Organization schema on home page
   - Article schema on blog posts
   - Project schema on case studies

---

## Developer Experience

### Import Aliases

Use `@/` prefix for absolute imports:

```tsx
import { Button } from '@/components/ui/button'
import { getAllPosts } from '@/lib/mdx'
import { cn } from '@/lib/utils'
```

### npm Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit",
    "check": "npm run typecheck && npm run lint"
  }
}
```

**Pre-commit workflow**:
```bash
npm run check  # Always passes before committing
```

### Environment Variables

**`.env.example`** (required):
```env
SITE_URL=http://localhost:3000
```

---

## Image Handling

### Requirements

1. **Always use `next/image`** - Never use `<img>` tags directly
2. **Include 2-3 placeholders** in `/public/images/`:
   - Abstract/geometric designs
   - Royalty-free sources
   - Document sources in `IMAGE_SOURCES.md`
3. **Optimize for performance**:
   - Set explicit `width` and `height`
   - Use `priority` for above-fold images
   - Use `loading="lazy"` for below-fold

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority  // For hero images
/>
```

---

## Example Content (Required)

### Blog Posts (3 required)

1. **"Why We Build with Next.js"**
   - Technical rationale, architecture benefits
   - Tags: `nextjs`, `react`, `architecture`

2. **"Our Design Process"**
   - Agency process explanation, client collaboration
   - Tags: `design`, `process`, `ux`

3. **"Launching Fast Without Sacrificing Quality"**
   - Speed vs craft, tools & workflows
   - Tags: `productivity`, `quality`, `workflow`

### Work / Case Studies (3 required)

1. **"Acme Corp Rebrand"**
   - Client: Acme Corp (B2B SaaS)
   - Role: Lead Developer
   - Tech: `Next.js`, `TypeScript`, `Tailwind CSS`

2. **"Bloom E-commerce"**
   - Client: Bloom (DTC brand)
   - Role: Full Stack Engineer
   - Tech: `React`, `Next.js`, `Stripe`

3. **"Nonprofit Annual Report"**
   - Client: Hope Foundation (Mission-driven org)
   - Role: Frontend Developer
   - Tech: `Next.js`, `D3.js`, `Framer Motion`

**Content Guidelines**:
- Each case study: 2-3 paragraphs minimum
- All frontmatter fields filled out
- Reference placeholder images from `/public/images/`

---

## Code Conventions

### TypeScript

- **Strict mode enabled** - No implicit any
- **Type everything** - Props, function returns, state
- **Prefer interfaces** over types for object shapes
- **Use generics** for reusable components

```tsx
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant, children, onClick }: ButtonProps) {
  // ...
}

// Bad
export function Button(props: any) {
  // ...
}
```

### Component Structure

```tsx
// 1. Imports (external first, internal second)
import { useState } from 'react'
import { cn } from '@/lib/utils'

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component definition
export function Component({ prop }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState()

  // 5. Functions
  const handleClick = () => {
    // ...
  }

  // 6. Render
  return (
    <div className={cn('base-class', conditionalClass)}>
      {/* ... */}
    </div>
  )
}
```

### Tailwind CSS

- **Use `cn()` utility** for conditional classes
- **Prefer composition** over custom CSS
- **Use CSS variables** for theme colors
- **Mobile-first** responsive design

```tsx
// Good
<button className={cn(
  'px-4 py-2 rounded-lg font-medium transition-colors',
  variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
  variant === 'outline' && 'border border-foreground/20 hover:bg-foreground/5'
)}>
  {children}
</button>

// Bad
<button style={{ padding: '8px 16px', color: 'blue' }}>
  {children}
</button>
```

### File Naming

- **Components**: PascalCase (`Button.tsx`, `Navbar.tsx`)
- **Utilities**: camelCase (`mdx.ts`, `utils.ts`)
- **Routes**: lowercase (`page.tsx`, `layout.tsx`)
- **Content**: kebab-case (`why-we-build-nextjs.mdx`)

---

## Development Workflow

### Step-by-Step Build Process

When building this project from scratch, follow this order:

1. **Scaffold & Config** (30 min)
   - Initialize Next.js with TypeScript
   - Configure Tailwind, ESLint, Prettier
   - Set up absolute imports
   - Create `.env.example`, `.nvmrc`

2. **Global Styles** (15 min)
   - Set up `globals.css` with CSS variables
   - Configure dark mode classes
   - Add Tailwind base styles

3. **Primitive Components** (45 min)
   - `Button` with variants
   - `Input` and `Textarea` with error states
   - `Card`, `Badge`, `Link`
   - Create `cn()` utility in `lib/utils.ts`

4. **Layout Components** (60 min)
   - `Container`, `Section`, `Stack`
   - `Navbar` with mobile menu + dark mode toggle
   - `Footer` with social links

5. **MDX Setup** (45 min)
   - Install MDX dependencies
   - Create content loading utilities (`lib/mdx.ts`)
   - Set up MDX components (`components/content/mdx-components.tsx`)
   - Configure Prose wrapper for typography

6. **Pages** (2-3 hours)
   - Home (hero, services, process, work, testimonials, CTA)
   - Work listing + dynamic case study
   - Blog listing + dynamic post
   - About
   - Contact (form with validation)
   - Privacy
   - 404

7. **SEO** (30 min)
   - Metadata exports for each page
   - `sitemap.xml` generation
   - `robots.txt`
   - Structured data (Organization, Article schemas)
   - SEO helper utilities (`lib/seo.ts`)

8. **Example Content** (45 min)
   - 3 blog posts in `content/blog/`
   - 3 case studies in `content/work/`
   - 2-3 placeholder images in `/public/images/`
   - Create `IMAGE_SOURCES.md`

9. **Polish** (60 min)
   - Dark mode toggle implementation
   - Responsive testing (mobile, tablet, desktop)
   - Focus states and accessibility audit
   - Performance optimization
   - Lighthouse audit (target 90+ performance)

10. **Documentation** (30 min)
    - Write `README.md` (setup, customization, deployment)
    - Write `CLIENT_START.md` (de-templating checklist)
    - Update this `CLAUDE.md` if needed

### Testing Checklist

Before considering work complete:

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` passes (no TypeScript errors)
- [ ] `npm run check` passes (lint + typecheck)
- [ ] All routes render correctly (/, /blog, /work, /about, /contact, /privacy)
- [ ] Dynamic routes work (`/blog/[slug]`, `/work/[slug]`)
- [ ] Blog and work listing pages display content from MDX
- [ ] Dark mode toggle works and persists preference
- [ ] Mobile navigation menu opens/closes correctly
- [ ] Contact form validation works (required fields, email format)
- [ ] Contact form submission logs to console + shows success toast
- [ ] No console errors in browser
- [ ] Lighthouse performance score 90+ on home page
- [ ] Basic axe-core accessibility scan passes (no critical issues)

---

## Common Tasks for AI Assistants

### Adding a New Page

1. Create route folder in `app/`
2. Add `page.tsx` with exported component
3. Export `metadata` object or `generateMetadata` function
4. Update Navbar links if needed
5. Add to sitemap generation

### Adding a New Component

1. Determine if it's UI, layout, or content component
2. Create file in appropriate subfolder
3. Define TypeScript interface for props
4. Implement with proper Tailwind classes
5. Export as named export
6. Test in isolation before using

### Adding Blog Post or Case Study

1. Create `.mdx` file in `content/blog/` or `content/work/`
2. Add required frontmatter fields
3. Write content using Markdown/MDX
4. Add cover image to `/public/images/` if needed
5. Verify it appears in listing page

### Customizing for a Client

Follow the `CLIENT_START.md` checklist:
1. Replace site metadata (name, description, SITE_URL)
2. Update CSS variables for brand colors
3. Replace placeholder images
4. Replace example content in `/content/`
5. Update social links in Footer
6. Test all pages
7. Run Lighthouse audit

---

## Stretch Goals (Optional)

If time permits or client requests:

- **RSS feed** - Generate `/feed.xml` at build time for blog
- **Command palette** - ⌘K navigation using cmdk library
- **View transitions API** - Smooth page transitions (experimental)
- **Table of contents** - Auto-generated for long blog posts
- **Reading time** - Calculate and display estimated reading time
- **Related posts** - Show similar content based on tags
- **Search** - Simple client-side search with Fuse.js

**Important**: Only add these if explicitly requested or after core functionality is complete and tested.

---

## Troubleshooting

### Common Issues

**Build fails with MDX errors**:
- Ensure frontmatter YAML is valid (no tabs, proper spacing)
- Check that all required fields are present
- Verify MDX dependencies are installed

**Dark mode not persisting**:
- Check that localStorage is working (not in incognito)
- Verify toggle updates both state and localStorage
- Ensure script runs before hydration to prevent flash

**Images not loading**:
- Confirm path is correct relative to `/public`
- Verify `next/image` is used (not `<img>`)
- Check Next.js image configuration

**TypeScript errors**:
- Run `npm run typecheck` to see all errors
- Ensure strict mode rules are followed
- Add types for all props and function returns

---

## Git Workflow

### Branch Strategy

- **Main branch**: Production-ready code only
- **Feature branches**: Named `feature/description` or `claude/session-id`
- **Commits**: Clear, descriptive messages following conventional commits

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring without behavior change
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples**:
```
feat(ui): add Button component with variants
fix(mdx): handle missing frontmatter gracefully
docs(readme): add deployment instructions
```

### Before Committing

Always run:
```bash
npm run check  # Runs typecheck + lint
```

---

## AI Assistant Guidelines

### Dos ✅

- **Read before editing** - Always use Read tool before modifying files
- **Follow structure** - Respect the defined file organization
- **Type everything** - No implicit `any` types
- **Test as you go** - Verify each piece works before moving on
- **Use tools correctly** - Prefer specialized tools over bash commands
- **Document changes** - Update README/docs when changing public APIs
- **Ask when unclear** - Use AskUserQuestion for ambiguous requirements
- **Keep it simple** - Don't over-engineer or add unnecessary abstractions

### Don'ts ❌

- **Don't add excluded features** - No databases, auth, CMS, etc. without approval
- **Don't skip TypeScript** - All files must be `.tsx` or `.ts`
- **Don't use inline styles** - Use Tailwind classes via `cn()` utility
- **Don't create custom CSS** - Compose Tailwind utilities instead
- **Don't add dependencies** - without checking if existing solutions work
- **Don't skip accessibility** - Focus states and ARIA labels required
- **Don't guess file paths** - Use Glob/Grep to find correct locations
- **Don't batch commits** - Commit logical units of work separately

### When Stuck

1. **Explore first** - Use Task tool with Explore agent for large codebases
2. **Read documentation** - Check Next.js, Tailwind, TypeScript docs
3. **Check conventions** - Re-read this CLAUDE.md for patterns
4. **Ask user** - Use AskUserQuestion for architectural decisions

---

## Quality Standards

### Performance

- **Lighthouse score**: 90+ on home page
- **First Contentful Paint**: Under 1.5s
- **Time to Interactive**: Under 3.5s
- **Cumulative Layout Shift**: Under 0.1

### Accessibility

- **axe-core**: No critical or serious issues
- **Keyboard navigation**: All interactive elements accessible
- **Screen readers**: Proper ARIA labels and semantic HTML
- **Color contrast**: WCAG AA compliance (4.5:1 for normal text)

### Code Quality

- **TypeScript**: No errors in strict mode
- **ESLint**: No warnings or errors
- **Prettier**: Consistent formatting
- **Bundle size**: Keep page bundles under 200KB (excluding images)

---

## Resources

### Official Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

### Useful Patterns

- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Tailwind UI Components](https://tailwindui.com/components)
- [shadcn/ui](https://ui.shadcn.com/) - Component patterns (do not install, reference only)

---

## Version History

- **v1.0** (2025-12-18) - Initial CLAUDE.md created based on project requirements

---

## Questions?

If you encounter scenarios not covered in this guide:
1. Check Next.js official documentation
2. Review similar patterns in the codebase
3. Ask the user for clarification using AskUserQuestion tool
4. Update this CLAUDE.md with the resolution for future reference

---

**Remember**: This is a starter template meant to be customized. Prioritize clarity, maintainability, and developer experience over clever abstractions.
