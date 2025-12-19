# Client Project Customization Checklist

Use this checklist when customizing this template for a client project. Work through each section to transform the starter into a production-ready client website.

## 🎯 Phase 1: Planning & Setup (Day 1)

### Project Information

- [ ] Gather all client requirements and assets
- [ ] Create project repository from this template
- [ ] Set up project management (Jira, Asana, etc.)
- [ ] Schedule kickoff meeting with client
- [ ] Define project timeline and milestones

### Development Environment

- [ ] Clone repository locally
- [ ] Install dependencies (`npm install`)
- [ ] Create `.env` file from `.env.example`
- [ ] Verify development server runs (`npm run dev`)
- [ ] Set up version control workflow

## 🎨 Phase 2: Branding (Days 2-3)

### Visual Identity

- [ ] **Update site name** in `app/layout.tsx` (replace "Agency")
- [ ] **Update site metadata** (title, description) in `app/layout.tsx`
- [ ] **Update logo** in `components/layout/navbar.tsx`
- [ ] **Add favicon** to `/public` directory
- [ ] **Add OG image** for social sharing to `/public`

### Colors & Typography

- [ ] **Update brand colors** in `styles/globals.css`:
  ```css
  :root {
    --color-primary: /* Client's primary color */;
    --color-secondary: /* Client's secondary color */;
  }
  ```
- [ ] **Update fonts** in `app/layout.tsx` if different from Inter
- [ ] **Test dark mode** colors and adjust if needed
- [ ] Verify color contrast meets WCAG AA standards

### Images & Assets

- [ ] Replace all placeholder images in `/public/images/`
- [ ] Add client's brand assets (logos, photos, etc.)
- [ ] Optimize all images (compress, resize)
- [ ] Document image sources in `IMAGE_SOURCES.md`
- [ ] Add alt text to all images

## 📝 Phase 3: Content (Days 3-5)

### Site-Wide Content

- [ ] Update site description and mission
- [ ] Update copyright in `components/layout/footer.tsx`
- [ ] Update social media links in `components/layout/footer.tsx`
- [ ] Add analytics tracking code (if applicable)
- [ ] Review and update all placeholder text

### Page Content

- [ ] **Home page** (`app/page.tsx`):
  - [ ] Update hero section copy
  - [ ] Update services/offerings
  - [ ] Update process steps
  - [ ] Update testimonials
  - [ ] Update CTA text

- [ ] **About page** (`app/about/page.tsx`):
  - [ ] Replace with client's story
  - [ ] Add team information
  - [ ] Update mission and values

- [ ] **Contact page** (`app/contact/page.tsx`):
  - [ ] Configure form submission endpoint
  - [ ] Update contact information
  - [ ] Add map (if needed)

- [ ] **Privacy page** (`app/privacy/page.tsx`):
  - [ ] Update with client's actual privacy policy
  - [ ] Add cookie policy if applicable
  - [ ] Update contact information

### Blog Content

- [ ] Delete example blog posts in `content/blog/`
- [ ] Add client's blog posts (if applicable)
- [ ] Ensure all frontmatter is correct
- [ ] Add cover images
- [ ] Test blog listing and detail pages

### Work/Portfolio Content

- [ ] Delete example case studies in `content/work/`
- [ ] Add client's real projects
- [ ] Include project images
- [ ] Add client testimonials
- [ ] Test work listing and detail pages

## 🔧 Phase 4: Configuration (Day 5)

### Environment Variables

- [ ] Update `SITE_URL` in `.env` to production URL
- [ ] Add any API keys needed (analytics, forms, etc.)
- [ ] Configure separate `.env.local` for local development
- [ ] Document all environment variables in README

### SEO Configuration

- [ ] Update site URL in `lib/seo.ts`
- [ ] Update Organization schema in `lib/seo.ts`
- [ ] Update social media handles
- [ ] Verify sitemap generation
- [ ] Verify robots.txt configuration
- [ ] Test metadata on all pages

### Navigation

- [ ] Review navigation items in `components/layout/navbar.tsx`
- [ ] Add/remove pages as needed
- [ ] Update footer navigation
- [ ] Test all navigation links

## 🧪 Phase 5: Testing (Day 6)

### Functionality

- [ ] Test all internal links
- [ ] Test all external links
- [ ] Test contact form submission
- [ ] Test dark mode toggle
- [ ] Test mobile menu
- [ ] Test all interactive elements

### Content

- [ ] Proofread all text
- [ ] Verify all images load correctly
- [ ] Check for broken links
- [ ] Verify metadata on all pages
- [ ] Test social sharing

### Technical

- [ ] Run `npm run check` (typecheck + lint)
- [ ] Run `npm run build` successfully
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Test with screen reader (if possible)

### Performance

- [ ] Run Lighthouse audit
- [ ] Aim for 90+ scores across all metrics
- [ ] Optimize any slow-loading pages
- [ ] Check Core Web Vitals
- [ ] Test on slow 3G connection

### Accessibility

- [ ] Keyboard navigation works throughout
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] Forms have proper labels
- [ ] Focus states are visible

## 🚀 Phase 6: Deployment (Day 7)

### Pre-Deployment

- [ ] Update production environment variables
- [ ] Configure domain/DNS
- [ ] Set up SSL certificate
- [ ] Configure CDN (if applicable)
- [ ] Set up monitoring/analytics

### Deploy

- [ ] Push final code to main branch
- [ ] Deploy to production (Vercel/Netlify/etc.)
- [ ] Verify deployment successful
- [ ] Test production site thoroughly
- [ ] Verify environment variables in production

### Post-Deployment

- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure analytics (Google Analytics, Plausible, etc.)
- [ ] Set up uptime monitoring
- [ ] Create backup strategy
- [ ] Document deployment process

## 📊 Phase 7: Launch & Handoff

### Client Handoff

- [ ] Create client documentation
- [ ] Train client on content management
- [ ] Provide access credentials
- [ ] Set up support channel
- [ ] Schedule follow-up meeting

### Post-Launch Tasks

- [ ] Monitor for errors/issues
- [ ] Review analytics after 1 week
- [ ] Collect client feedback
- [ ] Plan iteration roadmap
- [ ] Set up maintenance schedule

## 🔄 Ongoing Maintenance

### Monthly

- [ ] Review analytics
- [ ] Check for broken links
- [ ] Update dependencies
- [ ] Review performance metrics
- [ ] Security audit

### Quarterly

- [ ] Content refresh
- [ ] SEO review
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Feature planning

## 📋 Optional Enhancements

Consider these additions based on client needs:

- [ ] **Newsletter signup** - Add email capture form
- [ ] **CMS integration** - Connect to headless CMS
- [ ] **E-commerce** - Add shopping functionality
- [ ] **Authentication** - Add user accounts
- [ ] **Search** - Add site search functionality
- [ ] **Multilingual** - Add i18n support
- [ ] **Analytics dashboard** - Custom reporting
- [ ] **A/B testing** - Conversion optimization

## ⚠️ Before Going Live

Final checklist before launch:

- [ ] All placeholder content removed
- [ ] All client branding applied
- [ ] All links working
- [ ] Contact form tested
- [ ] SSL certificate installed
- [ ] Analytics configured
- [ ] Backups configured
- [ ] Client approval received
- [ ] Launch announcement ready

## 🆘 Common Issues

### "npm run build" fails

- Run `npm run typecheck` to find type errors
- Run `npm run lint` to find linting issues
- Check that all environment variables are set

### Images not loading

- Verify images are in `/public/images/`
- Check file paths are correct
- Ensure using `<Image>` from `next/image`

### Dark mode not persisting

- Check localStorage is working (not in incognito)
- Verify script in `components/layout/navbar.tsx`

### Form not submitting

- Configure form backend (Formspree, Resend, etc.)
- Update form action in `app/contact/page.tsx`
- Test with actual email delivery

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CLAUDE.md](./CLAUDE.md) - Architecture guide
- [README.md](../README.md) - Setup instructions

---

**Questions?** Refer to CLAUDE.md for detailed technical documentation or reach out to your development team.
