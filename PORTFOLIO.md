---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 5
portfolio_featured: false

# === CARD DISPLAY ===
title: "Next.js Agency Starter"
tagline: "Production-grade agency website template with MDX content and email pipeline"
slug: "nextjs-agency-starter"
category: "Templates"
tech_stack:
  - "Next.js 14"
  - "TypeScript"
  - "Tailwind CSS"
  - "MDX"
  - "Resend"
thumbnail: "/images/portfolio/nextjs-react-agency-starter-thumb.jpg"
status: "Production"

# === DETAIL PAGE ===
problem: "Most web starter templates are either over-engineered with opinionated abstractions or under-built with missing production essentials. Agency developers waste time rebuilding the same infrastructure — forms, content management, SEO, dark mode — for every client project."
solution: "A production-grade Next.js starter that ships with a unified UI system, MDX-powered blog and case study content, and a complete contact form pipeline with Zod validation and Resend email delivery. Clone it, customize the brand, and ship — no placeholders, no TODOs."
key_features:
  - "Cohesive UI system with layout primitives (Container, Section, Stack) and reusable components"
  - "MDX content workflow for blogs and case studies — drop in a file, no CMS or database needed"
  - "Production contact pipeline: React Hook Form + Zod validation + Server Actions + Resend email"
  - "SEO-first: auto-generated sitemap/robots.txt, structured data, Open Graph, Twitter Cards"
  - "Dark mode with localStorage persistence, WCAG AA accessibility, 90+ Lighthouse scores"

# === LINKS ===
demo_url: "https://nextjs-react-agency-starter.vercel.app/"
live_url: "https://nextjs-react-agency-starter.vercel.app/"

# === MEDIA: PORTFOLIO SLIDES ===
slides:
  - src: "/images/portfolio/nextjs-react-agency-starter-01.png"
    alt_en: "Next.js Agency Starter — production-grade foundation for agency and marketing websites"
    alt_es: "Next.js Agency Starter — base de produccion para sitios web de agencias y marketing"
  - src: "/images/portfolio/nextjs-react-agency-starter-02.png"
    alt_en: "The Template Trap — over-engineered or under-built, neither saves agency developers time"
    alt_es: "La Trampa de las Plantillas — sobre-ingeniadas o incompletas, ninguna ahorra tiempo"
  - src: "/images/portfolio/nextjs-react-agency-starter-03.png"
    alt_en: "Cohesive UI System — layout primitives and reusable components with unified design language"
    alt_es: "Sistema UI Cohesivo — primitivas de layout y componentes reutilizables con lenguaje de diseno unificado"
  - src: "/images/portfolio/nextjs-react-agency-starter-04.png"
    alt_en: "MDX Content Workflow — blog posts and case studies as files, no CMS or database required"
    alt_es: "Flujo de Contenido MDX — posts de blog y casos de estudio como archivos, sin CMS ni base de datos"
  - src: "/images/portfolio/nextjs-react-agency-starter-05.png"
    alt_en: "Production Contact Pipeline — validation, server actions, and Resend email delivery end-to-end"
    alt_es: "Pipeline de Contacto en Produccion — validacion, server actions y entrega de email con Resend"
  - src: "/images/portfolio/nextjs-react-agency-starter-06.png"
    alt_en: "SEO Built In — auto-generated sitemap, robots.txt, structured data, Open Graph metadata"
    alt_es: "SEO Integrado — sitemap automatico, robots.txt, datos estructurados, metadata Open Graph"
  - src: "/images/portfolio/nextjs-react-agency-starter-07.png"
    alt_en: "Dark Mode and Accessibility — WCAG AA compliance, keyboard navigation, focus states"
    alt_es: "Modo Oscuro y Accesibilidad — cumplimiento WCAG AA, navegacion por teclado, estados de foco"
  - src: "/images/portfolio/nextjs-react-agency-starter-08.png"
    alt_en: "TypeScript Strict Mode — no implicit any, typed props and returns on every component"
    alt_es: "TypeScript Strict Mode — sin any implicito, props y retornos tipados en cada componente"
  - src: "/images/portfolio/nextjs-react-agency-starter-09.png"
    alt_en: "Clone, Customize, Ship — CSS variables for brand colors, modular components for rapid delivery"
    alt_es: "Clona, Personaliza, Entrega — variables CSS para colores de marca, componentes modulares"

# === MEDIA: VIDEO ===
video_url: "/video/nextjs-react-agency-starter-brief.mp4"
video_poster: "/video/nextjs-react-agency-starter-brief-poster.jpg"

# === OPTIONAL ===
metrics:
  - "90+ Lighthouse performance scores out of the box"
  - "Zero database dependencies — file-based MDX content"
  - "End-to-end contact form with validation and email delivery"
tags:
  - "nextjs"
  - "typescript"
  - "tailwind-css"
  - "mdx"
  - "react"
  - "starter-template"
  - "agency"
  - "resend"
date_completed: "2025-12"
---

## Overview

Next.js Agency Starter is a production-grade template for building agency, marketing, and portfolio websites. It ships with a unified UI component system, an MDX-powered content workflow, and a complete contact form pipeline with email delivery via Resend.

The project serves a dual purpose: it functions as a portfolio piece demonstrating modern frontend architecture patterns, and as a practical starter that can be cloned directly into client projects. Everything works end-to-end in production — no placeholders, no TODOs, no leftover wiring.

Built on Next.js 14 App Router with TypeScript strict mode and Tailwind CSS, the starter targets developers who build client sites regularly and want a consistent, high-quality foundation to work from.

## The Challenge

- **Over-engineered starters:** Many Next.js templates come loaded with opinionated state management and deeply nested hierarchies that fight customization.
- **Under-built starters:** A styled landing page with no content layer, no working forms, no SEO setup, and TODO comments where production concerns should be.
- **Repetitive infrastructure:** Agency developers rebuild the same patterns for every client: contact forms, content management, dark mode, SEO metadata.

## The Solution

**Cohesive UI system:** Layout primitives (Container, Section, Stack) and reusable components (Button, Card, Badge, Link, Input) provide a unified design language with the `cn()` utility for clean conditional class composition.

**MDX content layer:** Blog posts and case studies are `.mdx` files with structured frontmatter. Content utilities handle loading, sorting, and draft filtering. Adding content means dropping in a file — no CMS, no database.

**Production contact pipeline:** Client-side validation with React Hook Form and Zod, server-side validation with Next.js Server Actions, and email delivery via Resend with React Email templates.

## Technical Highlights

- **App Router architecture:** File-based routing with dynamic `[slug]` routes, per-page metadata exports, server components by default
- **TypeScript strict mode:** No implicit `any` throughout the entire codebase
- **MDX content management:** `gray-matter` + `next-mdx-remote` with structured frontmatter schemas
- **Form infrastructure:** React Hook Form + Zod for client/server validation, Server Actions, and Resend delivery
- **Theming system:** CSS custom properties for brand colors, class-based dark mode with `localStorage` persistence
- **SEO-first:** Auto-generated sitemap and robots.txt, structured data, Open Graph and Twitter Card metadata
