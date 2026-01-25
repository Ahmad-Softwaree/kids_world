# 🤖 Agent Instructions & Coding Standards

This file contains **strict coding standards and architecture patterns** for the **Yari Mndalan Kids Shop Landing Page**. All AI agents and developers **MUST** follow these rules to maintain consistency.

---

## 🚨 CRITICAL: Project Overview

This is a **single-page landing page** for **Yari Mndalan**, an online kids shop hosted on Shopify. The page showcases:

- Shop features and benefits
- Purchase flow steps
- Contact form
- Multi-language support (English, Arabic, Kurdish)
- Link to the main Shopify store at `shop.yarimndalan.com`

---

## 🚨 CRITICAL: Project Configuration

### 📦 Package Manager

- **ALWAYS use `bun`** - This is the ONLY package manager for this project
- **NEVER use `npm`, `yarn`, or `pnpm`**
- All installation commands MUST use `bun add` or `bun install`

### 🔐 Environment Variables

- **ALWAYS use `.env`** - This is the ONLY environment file
- **NEVER create `.env.local`, `.env.example`, `.env.development`, or any other .env variants**
- All environment variables go in the single `.env` file
- The `.env` file is gitignored and safe for local development

**Required Environment Variables:**

```env
RESEND_API_KEY=your_resend_api_key
RECIPIENT_EMAIL=dr.ahamd.salah.54@gmail.com
```

---

## 🚨 CRITICAL: Library Enforcement

**ONLY** use the libraries and tools specified in this document. **DO NOT** introduce any other libraries without explicit approval.

### ✅ APPROVED LIBRARIES & TOOLS

#### **UI & Styling**

- **shadcn/ui** - ONLY UI component library allowed
- **Tailwind CSS 4** - For styling (with CSS variables)
- **Lucide React** - Icon library
- **cn() utility** from `@/lib/utils` - For conditional styling
- **motion/react** - Animation library (Framer Motion fork)

#### **Framework & Core**

- **Next.js 15** - React framework (App Router)
- **React Server Components (RSC)** - Default component pattern
- **TypeScript** - All code must be TypeScript
- **Bun** - Package manager and runtime (ONLY package manager allowed)

#### **Forms & Validation**

- **Zod** - Schema validation (if needed for forms)
- **React Hook Form** - Form state management (with shadcn/ui Form)

#### **URL & State Management**

- **nuqs** - Type-safe URL parameter management
- **React useState** - For simple client-side state (forms, etc.)

#### **Theming**

- **next-themes** - Dark/light mode management

#### **Internationalization**

- **next-intl** - Translation framework for Next.js

#### **Email Service**

- **Resend** - Email sending service for contact form

#### **Notifications**

- **sonner** - Toast notifications

### ❌ FORBIDDEN LIBRARIES

**DO NOT USE:**

- ❌ Custom HTTP clients: axios, fetch wrappers (use native fetch with Server Actions)
- ❌ State management: Redux, Zustand, Jotai, Recoil, etc. (use React useState or Server Components)
- ❌ CSS frameworks: Bootstrap, Bulma, Foundation, etc.
- ❌ Icon libraries: Font Awesome, React Icons, Heroicons (use Lucide only)
- ❌ Other validation: Yup, Joi, class-validator (use Zod only)
- ❌ Other animation libraries: react-spring, anime.js (use motion/react only)

Before adding ANY new library:

1. Check if it's in the APPROVED list
2. Check if existing approved libraries can solve the problem
3. If not listed, **ASK FOR PERMISSION** - do not proceed

---

## 📚 Architecture Guidelines

### 1️⃣ Component Organization

**Key Rules:**

- ✅ Extract components when pages exceed ~100 lines
- ✅ Organize by type: `layout/`, `sections/`, `shared/`, `ui/`
- ❌ NO massive page files with hundreds of lines of JSX
- ❌ NO mixing unrelated components in the same file

**Component Folders:**

- `layout/` - Header, Footer, Logo
- `sections/` - Hero, About, Features, Steps, Contact
- `shared/` - Reusable components (Animate, Loading, etc.)
- `ui/` - shadcn/ui primitives ONLY (Button, Card, Input, etc.)

**Current Sections (in order):**

1. Hero - Welcome message with animated blobs and CTA
2. About - Shop story, mission, values
3. Features - 6 feature cards with hover animations
4. Steps - Purchase flow visualization
5. Contact - Contact form with email integration

**Folder Structure:**

```
kids_world/
├── AGENTS.md                    # AI agent coding standards & rules
├── README.md                    # Project documentation
├── components.json              # shadcn/ui configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── .env                        # Environment variables (gitignored)
│
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Root page
│   ├── not-found.tsx           # Global 404 page
│   ├── [locale]/               # Localized routes
│   │   ├── layout.tsx          # Locale layout
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles with kid-friendly colors
│   │   ├── providers.tsx       # Context providers (Theme, i18n, Toaster)
│   │   ├── loading.tsx         # Loading state
│   │   ├── error.tsx           # Error boundary
│   │   └── not-found.tsx       # Locale 404 page
│   └── api/                    # API routes
│       └── contact/            # Contact form API with Resend
│           └── route.ts
│
├── components/                 # React components
│   ├── ui/                     # shadcn/ui primitives (Button, Card, etc.)
│   ├── layout/                 # Layout components
│   │   ├── header.tsx          # Header with shop link, social media
│   │   ├── footer.tsx          # Footer with info and links
│   │   └── logo.tsx            # Shop logo
│   ├── sections/               # Landing page sections
│   │   ├── hero.tsx            # Hero with animated blobs
│   │   ├── about.tsx           # About shop (founded, mission, values)
│   │   ├── features.tsx        # 6 feature cards
│   │   ├── steps.tsx           # Purchase flow steps
│   │   └── contact.tsx         # Contact form
│   ├── shared/                 # Shared components
│   │   ├── animate.tsx         # Animation wrapper (motion/react)
│   │   ├── Loading.tsx         # Loading component
│   │   └── scroll-to-top.tsx   # Scroll to top button
│   ├── lang-toggle.tsx         # Language switcher (en/ar/ckb)
│   └── theme-toggle.tsx        # Dark/light mode toggle
│
├── lib/                        # Utility functions & configurations
│   ├── utils.ts                # cn() utility & helpers
│   └── enums.ts                # TypeScript enums (if needed)
│
├── i18n/                       # Internationalization
│   ├── navigation.ts           # i18n navigation
│   ├── request.ts              # i18n request handler
│   └── routing.ts              # i18n routing config
│
├── messages/                   # Translation files
│   ├── en.json                 # English translations
│   ├── ar.json                 # Arabic translations
│   └── ckb.json                # Kurdish translations
│
├── types/                      # TypeScript types
│   └── global.ts               # Global type definitions
│
├── docs/                       # Documentation
│   ├── component-organization.md
│   ├── ui-components.md
│   ├── internationalization.md
│   ├── motion.md
│   ├── package-management.md
│   ├── theme-dark-light-mode.md
│   └── url-parameters.md
│
└── public/                     # Static assets
    └── fonts/                  # Custom fonts
```

│ └── fetch/ # Data fetching utilities
│
├── i18n/ # Internationalization
│ ├── navigation.ts # i18n navigation
│ ├── request.ts # i18n request handler
│ └── routing.ts # i18n routing config
│
├── messages/ # Translation files
│ ├── en.json # English translations
│ ├── ar.json # Arabic translations
│ └── ckb.json # Kurdish translations
│
├── types/ # TypeScript types
│ └── types.ts # Global type definitions
│
├── docs/ # Documentation
│ ├── component-organization.md
│ ├── ui-components.md
│ ├── documentation-standards.md
│ ├── folder-file-conventions.md
│ ├── internationalization.md
│ ├── motion.md
│ ├── package-management.md
│ ├── theme-dark-light-mode.md
│ └── url-parameters.md
│
├── public/ # Static assets
│ ├── certificates/ # Certificate images
│ ├── fonts/ # Custom fonts
│ ├── pdf/ # PDF files
│ ├── projects/ # Project images
│ ├── tools/ # Tool images
│ └── works/ # Work/experience images
│
└── project.inlang/ # Inlang i18n configuration
├── project_id
├── settings.json
└── cache/

````


### 2️⃣ UI Components (shadcn/ui)

**See:** [docs/ui-components.md](docs/ui-components.md)

**Key Rules:**

- ✅ **ONLY use shadcn/ui** for all UI elements
- ✅ Install with: `npx shadcn@latest add <component>`
- ✅ Style: **New York**
- ✅ Icons: **Lucide React ONLY**
- ❌ **NO custom components** that replicate shadcn/ui functionality
- ❌ **NO other UI libraries**

**Installation:**

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
````

### 3️⃣ Styling & Reusable Classes

**Key Rules:**

- ✅ Use reusable classes defined in `globals.css` @layer components
- ✅ Handle hover states with Tailwind `group-hover:` only (NO useState)
- ✅ Use kid-friendly color palette (vibrant purples, oranges, cyans)
- ❌ NO inline styles
- ❌ NO duplicate class definitions

**Reusable Classes:**

```css
.section-container
  .section-title
  .section-subtitle
  .feature-card
  .feature-icon
  .feature-title
  .btn-primary
  .gradient-text
  .blob-primary;
```

### 4️⃣ Animations

**See:** [docs/motion.md](docs/motion.md)

- ✅ Use `motion/react` for animations
- ✅ Use animation wrappers from `animate.tsx`
- ✅ Keep animations smooth and playful (kid-friendly)
- ❌ NO heavy/slow animations

### 5️⃣ Internationalization

**See:** [docs/internationalization.md](docs/internationalization.md)

**Supported Languages:**

- English (en)
- Arabic (ar)
- Kurdish/Sorani (ckb)

**Usage:**

```tsx
import { useTranslations } from "next-intl";

const Component = () => {
  const t = useTranslations("section_name");
  return <h1>{t("title")}</h1>;
};
```

**Key Rules:**

- ✅ ALL text content must use next-intl
- ✅ Use component-specific translation keys
- ✅ Add translations to all 3 language files
- ❌ NO hardcoded strings in components

---

## 📋 Pre-Flight Checklist

### Components

- [ ] Is this component in the correct folder (`layout/`, `sections/`, `shared/`, `ui/`)?
- [ ] Is the page file under ~100 lines?
- [ ] Am I using shadcn/ui components (not custom)?
- [ ] Using reusable CSS classes from globals.css?
- [ ] Hover states using `group-hover:` (no useState)?

### Translations

- [ ] Using `useTranslations()` hook for all text?
- [ ] Translation keys exist in all 3 files (en, ar, ckb)?
- [ ] Component-specific translation namespace (e.g., "hero", "features")?

### Code Quality

- [ ] All files are TypeScript (`.ts` or `.tsx`)?
- [ ] Client components marked with `'use client'`?
- [ ] Using `cn()` for conditional Tailwind classes?
- [ ] Using motion/react for animations?
- [ ] Proper TypeScript types defined?

### Before Submitting

1. Test all functionality
2. Verify translations work in all supported languages (en, ar, ckb)
3. Check dark/light mode compatibility
4. Ensure responsive design works on all devices
5. Test hover states with Tailwind only
6. Run `bun run build` to check for build errors
7. Verify contact form sends emails correctly
8. Test on different screen sizes
9. Ask for clarification if uncertain - do NOT improvise

---

## 🎯 Quick Reference

| Need             | Use                     | Location                              |
| ---------------- | ----------------------- | ------------------------------------- |
| Button           | `shadcn/ui`             | `npx shadcn@latest add button`        |
| Icons            | Lucide React            | `import { Icon } from "lucide-react"` |
| Styling          | Tailwind CSS + `cn()`   | `className={cn("...")}`               |
| Translations     | next-intl               | `useTranslations("section")`          |
| Animations       | motion/react            | Import from `animate.tsx`             |
| Hover states     | Tailwind `group-hover:` | `className="group-hover:..."`         |
| Reusable classes | globals.css @layer      | `className="section-container"`       |
| Email            | Resend                  | `/api/contact/route.ts`               |

## 📚 Documentation

- **[Component Organization](docs/component-organization.md)** - Structure and organization
- **[UI Components](docs/ui-components.md)** - shadcn/ui usage guide
- **[Internationalization](docs/internationalization.md)** - i18n setup and usage with next-intl
- **[Theme Management](docs/theme-dark-light-mode.md)** - Dark/light mode implementation
- **[URL Parameters](docs/url-parameters.md)** - nuqs usage for URL state management
- **[Motion & Animations](docs/motion.md)** - motion/react usage guidelines
- **[Package Management](docs/package-management.md)** - Bun usage and best practices

---

**Remember:** This is a kids shop landing page. Keep it colorful, playful, and simple. Follow the patterns, use the approved tools, and keep the codebase clean.
