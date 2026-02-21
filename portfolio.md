---
# =============================================================================
# PORTFOLIO.MD — Next.js Agency Starter
# =============================================================================
portfolio_enabled: true
portfolio_priority: 4
portfolio_featured: false
portfolio_last_reviewed: "2026-02-21"

title: "Next.js Agency Starter"
tagline: "Production-grade starter template for agency and marketing websites with MDX content and email integration"
slug: "nextjs-agency-starter"

category: "Templates"
target_audience: "Agency developers and freelancers building client websites with Next.js"
tags:
  - "nextjs"
  - "typescript"
  - "tailwind-css"
  - "mdx"
  - "react"
  - "starter-template"
  - "agency"
  - "resend"

thumbnail: ""
hero_images: []
demo_video_url: ""

live_url: "https://nextjs-react-agency-starter.vercel.app/"
demo_url: "https://nextjs-react-agency-starter.vercel.app/"
case_study_url: ""

problem_solved: |
  Most web starter templates are either over-engineered with opinionated abstractions
  or under-built with missing production essentials. Agency developers waste time
  rebuilding the same infrastructure — forms, content management, SEO, dark mode —
  for every client project. This starter provides a clean, professional foundation
  that handles the repetitive work so developers can focus on client content and delivery.

key_outcomes:
  - "Complete agency website architecture shipping out of the box"
  - "MDX content workflow for blogs and case studies with zero database dependencies"
  - "Production contact pipeline with validation, server actions, and Resend email"
  - "90+ Lighthouse performance scores with accessibility and SEO built in"
  - "Rapid client customization via CSS variables and modular component structure"

tech_stack:
  - "Next.js 14"
  - "TypeScript"
  - "Tailwind CSS"
  - "MDX"
  - "React Hook Form"
  - "Zod"
  - "Resend"
  - "React Email"
  - "Framer Motion"
  - "Vercel"

complexity: "Production"
---

## Overview

Next.js Agency Starter is a production-grade template for building agency, marketing, and portfolio websites. It ships with a unified UI component system, an MDX-powered content workflow, and a complete contact form pipeline with email delivery via Resend.

The project serves a dual purpose: it functions as a portfolio piece demonstrating modern frontend architecture patterns, and as a practical starter that can be cloned directly into client projects. Everything works end-to-end in production — no placeholders, no TODOs, no leftover wiring.

Built on Next.js 14 App Router with TypeScript strict mode and Tailwind CSS, the starter targets developers who build client sites regularly and want a consistent, high-quality foundation to work from.

## The Challenge

- **Over-engineered starters:** Many Next.js templates come loaded with opinionated state management, complex abstractions, and deeply nested component hierarchies that fight customization. Stripping them down for a client project takes as long as building from scratch.
- **Under-built starters:** The opposite extreme — a styled landing page with no content layer, no working forms, no SEO setup, and TODO comments where production concerns should be. These save almost no time.
- **Repetitive infrastructure:** Agency developers rebuild the same patterns for every client: contact forms with validation, content management, dark mode, responsive navigation, SEO metadata. This is time-consuming and introduces inconsistency across projects.

## The Solution

**Cohesive UI system:**
Layout primitives (Container, Section, Stack) and reusable components (Button, Card, Badge, Link, Input) provide a unified design language. Everything uses the `cn()` utility for clean conditional class composition with Tailwind CSS.

**MDX content layer:**
Blog posts and case studies are `.mdx` files with structured frontmatter. Content utilities handle loading, sorting, and draft filtering. Adding content means dropping in a file — no CMS integration, no database, no API calls.

**Production contact pipeline:**
Client-side validation with React Hook Form and Zod, server-side validation with Next.js Server Actions, and email delivery via Resend with React Email templates. The form works in production, not just in demos.

## Technical Highlights

- **App Router architecture:** File-based routing with dynamic `[slug]` routes, per-page metadata exports, and server components by default
- **TypeScript strict mode:** No implicit `any` throughout the entire codebase — all props, returns, and state fully typed
- **MDX content management:** `gray-matter` + `next-mdx-remote` with structured frontmatter schemas for two content types
- **Form infrastructure:** React Hook Form + Zod for client/server validation, Next.js Server Actions, and Resend for delivery
- **Theming system:** CSS custom properties for brand colors, class-based dark mode with `localStorage` persistence
- **SEO-first:** Auto-generated sitemap and robots.txt, structured data schemas, Open Graph and Twitter Card metadata

## Results

**For the End User / Team:**
- Complete agency website running in production with zero additional backend setup
- Content authors add blog posts and case studies by creating `.mdx` files — no CMS training needed
- Contact form submissions arrive via email with professional templates

**Technical Demonstration:**
- Modern Next.js App Router architecture with TypeScript strict mode and component composition patterns
- End-to-end form handling from client validation through server processing to email delivery
- Content management system built entirely on the filesystem with MDX, demonstrating that not every project needs a database

This project demonstrates the ability to architect a complete, production-ready web application with clean abstractions and practical defaults that serve real business needs.
