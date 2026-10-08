# Patel Cool Tech

Official website for **Patel Cool Tech** — Air Conditioning Installation, Repair & Service based in Indore, Madhya Pradesh.

---

## 1. Project Overview

Patel Cool Tech is an independent HVAC/AC service business serving residential and commercial clients across Indore, Rau, Pithampur, and surrounding regions. 

This website is engineered mobile-first as a fast, trustworthy, static web presence designed to convert local search visitors directly into phone calls and WhatsApp inquiries.

### Verified Business Details
- **Business Name**: Patel Cool Tech
- **Technicians & Owners**: Mahendra Patel & Satyam Patel
- **Locations Served**: Indore, Rau, Pithampur & nearby areas (Madhya Pradesh)
- **Primary Phone**: `+91 95756 64203` (Call & WhatsApp)
- **Secondary Phone**: `+91 94251 66191` (Call)
- **Email**: `patelcooltech@gmail.com`
- **Core Services**: AC Installation, AC Repair, AC Service, AC Gas Refilling, AMC / Maintenance

---

## 2. Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with a dedicated custom HVAC design token system
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **SEO & Structured Data**: Built-in JSON-LD `HVACBusiness` Schema.org markup, OpenGraph, Canonical URLs, and `@astrojs/sitemap`
- **Deployment Target**: Cloudflare Pages / Static CDN (Pure pre-rendered HTML/CSS)

> **Architectural Constraint**: Intentionally zero backend, zero databases, zero client-heavy UI frameworks (React/Vue), and minimal zero-dependency vanilla JS for the mobile menu drawer to ensure maximum performance on Indian mobile networks.

---

## 3. Engineering & Development Commands

All commands are run from the project root:

```bash
# Start local development server (http://localhost:4321)
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Compile production static build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Project Structure

```
Patel Cool Tech/
├── astro.config.mjs         # Astro SSG configuration & integrations
├── tailwind.config.mjs      # Custom theme tokens (Navy, Ice, WhatsApp, typography)
├── tsconfig.json            # Strict TypeScript configuration
├── package.json             # Scripts & production dependencies
├── README.md                # Project documentation & architecture
├── PROJECT_STATUS.md        # Current phase status & roadmap
├── public/
│   ├── favicon.svg          # High-contrast cooling symbol SVG favicon
│   ├── robots.txt           # Search crawler directives & sitemap pointer
│   ├── images/
│   │   ├── hero/            # Hero section visuals
│   │   ├── services/        # Service demonstration imagery
│   │   ├── work/            # Real on-site installation & repair photos
│   │   ├── team/            # Verified technician portraits
│   │   └── brands/          # Handled brand marks
│   └── icons/               # Custom iconography placeholders
└── src/
    ├── data/
    │   ├── business.ts      # Centralized NAP, phone numbers, technician info
    │   ├── services.ts      # 5 core AC service definitions & feature bullets
    │   ├── brands.ts        # Handled major brand names with safe phrasing
    │   └── site.ts          # Global site metadata, canonical, navigation items
    ├── styles/
    │   └── global.css       # Design tokens, CSS variables, accessibility focus, safe areas
    ├── utils/
    │   └── seo.ts           # Schema.org (HVACBusiness) generator & title builder
    ├── components/
    │   ├── Header.astro         # Sticky header with brand badge & desktop navigation
    │   ├── MobileMenu.astro     # Accessible drawer menu with ESC and click-outside listeners
    │   ├── Button.astro         # Polymorphic touch-friendly button & CTA links
    │   ├── SectionHeading.astro # Consistent typography hierarchy and badges
    │   ├── Container.astro      # Mobile-first responsive width wrapper
    │   ├── StickyMobileCTA.astro# High-conversion sticky mobile Call & WhatsApp bar
    │   └── Footer.astro         # Semantic footer with NAP, service coverage & legal notes
    ├── layouts/
    │   └── BaseLayout.astro     # Core HTML5 shell with SEO head tags, OpenGraph, JSON-LD
    └── pages/
        ├── index.astro              # Homepage
        ├── about.astro              # About page (technicians & background)
        ├── contact.astro            # Contact page (direct phone, WhatsApp, coverage)
        ├── our-work.astro           # Our Work gallery page
        ├── 404.astro                # Branded 404 error page
        └── services/
            ├── index.astro          # Services overview directory
            ├── ac-installation.astro# AC installation service detail
            ├── ac-repair.astro      # AC repair service detail
            ├── ac-service.astro     # AC deep service detail
            ├── ac-gas-refilling.astro# Refrigerant refilling service detail
            └── ac-amc.astro         # Maintenance contracts detail
```

---

## 5. Architectural & Design Decisions

1. **Centralized Data Sources**: Business phone numbers, emails, addresses, services, and brand names are never hardcoded in template markup; they are imported from `src/data/`.
2. **Safe Brand Phrasing**: Avoids claiming unauthorized manufacturer authorization. Brand capability is strictly phrased as *"AC Service & Repair for Major Brands"* with an explicit independent provider disclaimer.
3. **High-Converting Mobile UX**: Bottom sticky CTA bar (`StickyMobileCTA`) provides instant access to `tel:+919575664203` and pre-filled WhatsApp chat (`https://wa.me/919575664203`) on viewport widths below 640px.
4. **Accessible Touch Targets**: All interactive elements maintain a minimum 44px–48px touch target and clear `focus-visible` outlines.
5. **No Horizontal Overflow**: Root box sizing, `overflow-x: hidden`, and auto-scaling image tags ensure compatibility from 320px screens up to large 1440px+ displays.

---

## 6. Production Deployment & Hosting Guide

### 1. Prerequisites
- **Node.js**: `v18.17.1` or `v20.x`+ (LTS recommended)
- **Package Manager**: `npm` (v9+ or v10+)
- **Git**: For version control and deployment triggers

### 2. Install Command
```bash
# Clean dependency install from lockfile
npm ci
```

### 3. Local Development Command
```bash
# Start local development server with hot module reload (http://localhost:4321)
npm run dev
```

### 4. Typecheck Command
```bash
# Strict TypeScript validation (0 errors required)
npx tsc --noEmit
```

### 5. Production Build Command
```bash
# Clean and compile static production bundle
npm run build
```

### 6. Output Directory
- **Output Directory**: `dist`
- All 11 pages are compiled to clean static HTML (`index.html`, `404.html`, and directory `index.html` files).
- Zero server runtime dependencies (no Node server, no SSR adapter).

### 7. Static Hosting Configuration (Cloudflare Pages / CDN)
- **Framework Preset**: `Astro` (or `None` / `Static HTML`)
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Root Directory**: `/` (repository root)
- **Node Version**: `20.x` (or `18.x`)
- **Single Page App (SPA) Mode**: **Disabled** (Site uses standard multi-page static routing with trailing slashes)

### 8. Production Domain
- **Primary Domain**: `https://patelcooltech.in/`
- **Canonical Routing**: Trailing slash enabled (`trailingSlash: 'always'`)
- **Sitemap**: `https://patelcooltech.in/sitemap-index.xml`
- **Robots Directives**: `https://patelcooltech.in/robots.txt`

### 9. Environment Variables
- **Required Production Secrets**: **None**
- **Required Build Environment Variables**: **None**
- The site operates as a 100% static, client-side HTML/CSS web application with zero external API tokens, database connections, or server secrets.

### 10. Post-Deployment Smoke-Test Checklist
1. **Homepage Loading**: Verify `https://patelcooltech.in/` loads with 200 OK, full styles, and images.
2. **Key Route Direct Navigation**: Verify `/services/`, `/services/ac-installation/`, `/our-work/`, `/about/`, `/contact/` load directly.
3. **404 Handling**: Verify requesting an invalid URL (e.g. `/not-a-real-page/`) displays the branded 404 page.
4. **Primary CTAs**:
   - Phone CTA initiates call to `+91 95756 64203`
   - WhatsApp CTA opens chat with `+91 95756 64203`
5. **Mobile Experience**:
   - Mobile hamburger drawer opens smoothly, locks body scroll, closes on ESC or backdrop click.
   - Sticky Call & WhatsApp bar remains visible and actionable on viewport widths < 768px.
6. **SEO & Assets**:
   - Verify `https://patelcooltech.in/robots.txt` is accessible and points to sitemap.
   - Verify `https://patelcooltech.in/sitemap-index.xml` returns valid XML.
   - Verify browser console shows 0 errors and 0 failed asset requests.
