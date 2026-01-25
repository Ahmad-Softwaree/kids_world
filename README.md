# 🎨 Yari Mndalan - Kids Shop Landing Page

A beautiful, modern landing page for **Yari Mndalan**, an online kids shop hosted on Shopify. This single-page application showcases the shop's features, products, and provides a seamless way for customers to connect.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Bun](https://img.shields.io/badge/Bun-1.2-f9f1e1?style=for-the-badge&logo=bun)

## 🌟 Features

### 🎯 Core Sections

- **Hero Section**: Eye-catching introduction with animated blobs and call-to-action
- **About Section**: Shop story, mission, and values
- **Features Section**: 6 key features including:
  - Wide product categories
  - Secure online payment
  - Shipping across Iraq
  - Multi-language support (3 languages)
  - Easy refund policy
  - Social media presence
- **Steps Section**: Visual guide showing the purchase flow
- **Contact Section**: Interactive form with email functionality

### 🌍 Internationalization

- **English** (en)
- **Arabic** (ar)
- **Kurdish/Sorani** (ckb)

All content is fully translated using `next-intl`.

### 🎨 Design Features

- **Kid-friendly color palette**: Vibrant purples, oranges, and cyans
- **Dark/Light mode**: Theme toggle for user preference
- **Responsive design**: Mobile-first approach
- **Smooth animations**: Using motion/react (Framer Motion)
- **Hover effects**: Pure Tailwind CSS (no useState)
- **Reusable CSS classes**: Defined in @layer for consistency

### 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: motion/react (Framer Motion)
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Package Manager**: Bun
- **Email Service**: Resend

## 🚀 Getting Started

### Prerequisites

- Bun 1.2 or higher
- Node.js 18+ (for compatibility)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kids_world
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
RECIPIENT_EMAIL=dr.ahamd.salah.54@gmail.com
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
kids_world/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Main landing page
│   │   ├── layout.tsx     # Locale layout
│   │   └── globals.css    # Global styles with custom colors
│   └── api/
│       └── contact/       # Contact form API endpoint
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, About, Features, Steps, Contact
│   ├── shared/            # Animate, Loading, etc.
│   └── ui/                # shadcn/ui components
├── messages/              # Translation files (en, ar, ckb)
├── lib/                   # Utilities and helpers
└── public/                # Static assets
```

## 🎨 Color Palette

The project uses a vibrant, kid-friendly color scheme:

### Light Mode

- **Primary**: Bright purple/magenta (`oklch(0.58 0.24 320)`)
- **Secondary**: Cheerful orange (`oklch(0.75 0.18 50)`)
- **Accent**: Playful cyan (`oklch(0.8 0.15 200)`)

### Dark Mode

- **Primary**: Softer purple (`oklch(0.68 0.22 320)`)
- **Secondary**: Warm orange (`oklch(0.65 0.16 50)`)
- **Accent**: Soft cyan (`oklch(0.65 0.14 200)`)

## 🔧 Development

### Adding New Translations

1. Add keys to `messages/en.json`
2. Translate to `messages/ar.json`
3. Translate to `messages/ckb.json`

### Using Translations in Components

```tsx
import { useTranslations } from "next-intl";

const Component = () => {
  const t = useTranslations("section_name");

  return <h1>{t("title")}</h1>;
};
```

### Styling Guidelines

- Use reusable classes from `globals.css` (e.g., `.section-container`, `.feature-card`)
- Follow Tailwind CSS conventions
- Use `group-hover:` for hover states (no useState)
- Keep animations smooth with `motion/react`

## 📧 Contact Form

The contact form uses Resend to send emails to the shop owner. Make sure to:

1. Set up a Resend account at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env` as `RESEND_API_KEY`
4. Configure `RECIPIENT_EMAIL` in `.env`

## 🔗 External Links

- **Shop**: [shop.yarimndalan.com](https://shop.yarimndalan.com)
- **Facebook**: [facebook.com/yarimndalan](https://facebook.com/yarimndalan)
- **Instagram**: [instagram.com/yarimndalan](https://instagram.com/yarimndalan)

## 📝 License

© 2026 Yari Mndalan. All rights reserved.

## 🤝 Contributing

This is a private project for Yari Mndalan. For inquiries, please contact via the website's contact form.

---

Built with ❤️ for Iraqi families
