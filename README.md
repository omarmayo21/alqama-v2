# ALQIMA Sports Academy | أكاديمية القمة الرياضية

A production-grade, bilingual (Arabic & English with full RTL/LTR support), high-performance web platform and Sanity CMS content ecosystem for **ALQIMA Sports Academy** (أكاديمية القمة الرياضية) in Jeddah, Saudi Arabia.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **React Router v7**, and **Sanity Studio v3**.

---

## 1. Project Overview

* **Project Name**: ALQIMA Sports Academy (أكاديمية القمة الرياضية)
* **Purpose**: A premier digital presence, interactive sports catalog, multi-channel lead generation platform, and headless CMS content management system for an athletic training academy in Jeddah, Saudi Arabia.
* **Target Users**:
  * **Parents & Guardians**: Seeking structured sports training, verified coach credentials, safety standards, transparent pricing, and direct WhatsApp consultations for their children and teens (ages 3–25).
  * **Athletes & Participants**: Exploring specialized training programs across 7 sports disciplines, schedules, and athletic development pathways.
  * **Academy Administrators & Content Editors**: Managing all user-facing website content, schedules, offers, blog articles, SEO metadata, and analytics keys through an intuitive, client-friendly **Sanity Studio v3**.
* **Key Features**:
  * **Bilingual Support (Arabic & English)**: Seamless language switcher with localized typography (Cairo & Tajawal for Arabic, Inter for English), RTL/LTR direction switching, and persistent state.
  * **100% Headless CMS Integration**: Connected to Sanity Lake (`s4sblwvk`, `production`) with resilient fallback data and dynamic GROQ fetching.
  * **Client-Friendly Sanity Studio v3**: Clean desk hierarchy with Arabic/English field titles, helpful descriptions, visibility toggles, required-field validations, and custom preview badges.
  * **Safe Multi-Channel Analytics Tracking**: Dynamic integration for GA4, Meta Pixel, Microsoft Clarity, Google Ads, and Google Tag Manager (GTM) with script deduplication and event dispatching (`whatsapp_click`, `sport_view`, `offer_view`, `blog_view`, `search_query`, `page_view`).
  * **CMS-Driven Sport Schedule**: Support for Day, Time, Age Group, Coach, Level, Location, Active toggle, and Display Order.
  * **Dynamic Offers & Payment Plans**: Highlighting active seasonal discounts, sibling bundles, and BNPL installment badges (Tabby & Tamara).
  * **Searchable Knowledge & Blog Engine**: Instant real-time filtering for articles and categories.
  * **Direct WhatsApp Funneling**: High-converting, localized WhatsApp deep links prefilled with context (sport name, offer code, or inquiry topic).

---

## 2. Tech Stack

| Layer | Technology | Version | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `19.2.6` | Core frontend UI library |
| **DOM Renderer** | [React DOM](https://react.dev/) | `19.2.6` | Web DOM rendering engine |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.9.3` | Type-safe development (`strict: true`, `target: ES2020`) |
| **Build Tool / Bundler** | [Vite](https://vitejs.dev/) | `7.3.2` | Fast developer server and production bundler |
| **Single-File Plugin** | [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) | `2.3.0` | Inlines scripts and styles into distribution bundle |
| **Styling / CSS** | [Tailwind CSS v4](https://tailwindcss.com/) | `4.1.17` | Utility-first styling via `@tailwindcss/vite` |
| **Routing** | [React Router](https://reactrouter.com/) | `7.18.3` | Client-side routing (`react-router-dom`) |
| **Headless CMS** | [Sanity.io](https://www.sanity.io/) | `v3.77.0` | Cloud Content Lake (`s4sblwvk` / `production`) |
| **Sanity Client** | `@sanity/client` & `@sanity/image-url` | `^7.1.3` / `^1.1.2` | Public CDN fetching and responsive image asset URL generation |
| **Icons** | [Lucide React](https://lucide.dev/) | `^1.45.0` | Crisp vector icons with cohesive line weight and stroke |
| **Analytics Engine** | Custom Safe Script Manager | — | GA4, Meta Pixel, Microsoft Clarity, Google Ads, GTM |

---

## 3. Project Structure

```
alqima-sports-/
├── .env.example                 # Environment variables template (committed)
├── public/                      # Static public assets served as-is
│   ├── favicon.svg              # Academy favicon SVG
│   └── images/                  # Official logo and sport photography
│       ├── logo.png             # Official ALQIMA Academy brand logo
│       ├── about-team.jpg       # Academy coaching staff photo
│       ├── basketball.jpg       # Basketball program banner
│       ├── football.jpg         # Football training banner
│       ├── gymnastics.jpg       # Gymnastics program banner
│       ├── karate.jpg           # Karate / Martial arts photo
│       ├── kickboxing.jpg       # Kickboxing session banner
│       ├── roller-skating.jpg   # Roller skating photo
│       └── swimming.jpg         # Olympic swimming pool banner
├── scripts/
│   └── migrate-to-sanity.mjs    # Idempotent content migration script using createIfNotExists()
├── studio/                      # Standalone Sanity Studio v3
│   ├── deskStructure.ts         # Custom 4-category desk hierarchy
│   ├── sanity.config.ts         # Sanity Studio configuration (s4sblwvk / production)
│   ├── sanity.cli.ts            # Sanity CLI configuration
│   ├── schemaTypes/             # Document & Object schema definitions
│   │   ├── objects/             # Localized string, text, blockContent, image, scheduleItem, etc.
│   │   └── documents/           # Site settings, UI labels, home, about, sports, offers, blog, etc.
│   └── package.json             # Studio dependencies
├── src/
│   ├── components/
│   │   ├── animation/           # Page transitions and scroll animations
│   │   ├── layout/              # Header, Footer, and Layout shell
│   │   └── ui/                  # Button, Logo, PageHeader, SectionHeader, SportIcon
│   ├── context/
│   │   ├── LanguageContext.tsx  # Language state (ar/en), RTL/LTR direction, dictionary fallback
│   │   └── SanityDataContext.tsx# Global CMS context, GROQ fetching, and auto-analytics initialization
│   ├── data/                    # Reliable seed/fallback datasets (7 sports, 3 offers, blog)
│   ├── hooks/
│   │   └── useAnalyticsTracker.ts # React Router route change listener for auto page_view tracking
│   ├── lib/
│   │   ├── analytics/
│   │   │   └── tracker.ts       # Safe script injection & deduplicated event tracking manager
│   │   └── sanity/
│   │       ├── client.ts        # Public read-only Sanity client configuration
│   │       ├── types.ts         # TypeScript interfaces for all CMS schemas
│   │       ├── image.ts         # Sanity image URL builder with WebP auto-optimization
│   │       ├── queries.ts       # Optimized GROQ queries
│   │       └── api.ts           # Type-safe data access layer
│   ├── pages/                   # Application route views (Home, About, Sports, SportDetail, Offers, Blog, Article, Contact, Terms, Privacy, NotFound)
│   ├── types/                   # Global TypeScript definitions
│   ├── utils/                   # Helper functions (cn.ts)
│   ├── App.tsx                  # Root router, SanityDataProvider, Layout, Floating WhatsApp
│   ├── index.css                # Global Tailwind v4 styles, fonts & keyframes
│   └── main.tsx                 # React client mount point
├── dist/                        # Production build output
├── package.json                 # Scripts and dependencies
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration
```

---

## 4. Environment Variables & Security Configuration

The project uses a structured environment variable configuration with strict separation between public client variables and sensitive backend/migration secrets.

### 4.1 Environment Template (`.env.example`)
A template file `.env.example` is tracked in the repository:
```env
# Public Frontend Variables (Safe for client bundle)
VITE_SANITY_PROJECT_ID=s4sblwvk
VITE_SANITY_DATASET=production

# Migration / Admin Secrets (NEVER expose to frontend, NEVER prefix with VITE_)
SANITY_AUTH_TOKEN=
```

### 4.2 Local Setup Instructions
To configure your local environment:
1. Duplicate `.env.example` to create `.env`:
   ```bash
   cp .env.example .env
   ```
2. For migration tasks, open `.env` and insert your Sanity write token:
   ```env
   SANITY_AUTH_TOKEN=sk...your_token_here...
   ```

### 4.3 Environment Variable Rules & Matrix

| Variable | Scope | Required Where | Safe to Expose in Client Bundle? | Notes |
| :--- | :--- | :--- | :---: | :--- |
| `VITE_SANITY_PROJECT_ID` | Frontend & Migration | Local & Vercel | **YES** | Public Sanity project identifier (`s4sblwvk`). Defaults automatically if omitted. |
| `VITE_SANITY_DATASET` | Frontend & Migration | Local & Vercel | **YES** | Public dataset name (`production`). Defaults automatically if omitted. |
| `SANITY_AUTH_TOKEN` | Migration Script ONLY | Local CLI | **NO (CRITICAL SECRET)** | **Must NEVER have `VITE_` prefix.** Never add this to client code, browser bundles, or Vercel client environment. |

> [!CAUTION]
> **CRITICAL SECURITY REQUIREMENT**:
> - Never prefix `SANITY_AUTH_TOKEN` with `VITE_`. Vite automatically bundles any variable prefixed with `VITE_` into client JavaScript files.
> - Never commit `.env`, `.env.local`, or any file containing real token values to git. The `.gitignore` is configured to block all local env files.
> - `npm run build` strictly checks and verifies that no write tokens or secrets exist in the output bundle.

### 4.4 Vercel Environment Variables
When deploying the frontend to Vercel, configure only the public variables in **Project Settings > Environment Variables**:
- `VITE_SANITY_PROJECT_ID` = `s4sblwvk`
- `VITE_SANITY_DATASET` = `production`

**Do NOT add `SANITY_AUTH_TOKEN` to Vercel**, as the frontend build only performs read operations against published Sanity documents via CDN.

---

## 5. Sanity CMS & Studio

### Sanity Configuration
* **Project ID**: `s4sblwvk`
* **Dataset**: `production`
* **API Version**: `2024-03-01`
* **CDN Enabled**: `true` (Fast, edge-cached responses)

### Running Sanity Studio Locally
To start the Sanity Studio dashboard:
```bash
npm run studio
```
Open [http://localhost:3333](http://localhost:3333) in your browser to log in and manage content.

### Studio Structure
The Studio is organized into 4 intuitive categories tailored for non-technical administrators:

1. 📂 **Content Management (إدارة المحتوى)**
   - 🏆 **Sports & Programs (الرياضات والبرامج)**: Manage 7 sports, age groups, features, schedules, training levels, and gallery images.
   - 🏷️ **Special Offers (العروض والخصومات)**: Manage seasonal discount banners, original/discounted prices, promo codes, and expiry dates.
   - 📝 **Blog Articles (المقالات الرياضية)**: Create and publish educational articles, categories, author details, and SEO tags.
   - 📂 **Blog Categories (تصنيفات المقالات)**: Categorize sports content (Nutrition, Training Tips, Youth Development).
   - ⭐ **Testimonials (آراء وتجارب أولياء الأمور)**: Manage verified Google review cards, parent names, child sports, and 5-star ratings.

2. ⚙️ **Global Settings & UI (الإعدادات العامة والنصوص)**
   - 🌐 **Site Settings (إعدادات الموقع العامة)**: Manage academy title, contact phone numbers, WhatsApp numbers, email, physical address, working hours, and social media links.
   - 🔤 **UI Labels & Common Texts (نصوص وواجهة الموقع)**: Edit all global button labels, badges, search placeholders, empty states, and section headings in Arabic and English.
   - 🧭 **Navigation Menu (القائمة الرئيسية)**: Customize top header navigation links and visibility toggles.
   - 📋 **Footer Content (تذييل الصفحة)**: Customize footer columns, descriptions, quick links, and copyright text.
   - 💳 **Payment & Installments (طرق الدفع والتقسيط)**: Configure Tabby, Tamara, and payment guarantee highlights.

3. 📊 **Analytics & Marketing (التحليلات والتسويق)**
   - 📈 **Tracking & Pixels (أكواد التتبع والتحليلات)**: Safely manage Google Analytics 4 (GA4), Meta Pixel, Microsoft Clarity, Google Ads Conversion ID, and Google Tag Manager (GTM).

4. ⚖️ **Legal Policies (السياسات القانونية)**
   - 🔒 **Privacy Policy (سياسة الخصوصية)**: Full localized legal terms and user data governance.
   - 📜 **Terms & Conditions (الشروط والأحكام)**: Academy rules, membership policies, and safety guidelines.

---

## 6. Safe Analytics & Tracking System

The project features a **Safe Script Injection Manager** (`src/lib/analytics/tracker.ts`) that guarantees:
- **No Duplicate Scripts**: Detects already loaded scripts in the DOM before injecting new ones.
- **Dynamic Re-initialization**: Safely handles ID changes from Sanity without crashing the browser or reloading the page.
- **Enabled/Disabled Respect**: Only initializes providers with active toggle flags and valid ID formats.
- **Secret Isolation**: Operates strictly with public client-side measurement IDs.

### Supported Providers
1. **Google Analytics 4 (GA4)**: `G-XXXXXXXXXX`
2. **Meta Pixel (Facebook)**: Numeric Pixel ID
3. **Microsoft Clarity**: Project ID
4. **Google Ads**: `AW-XXXXXXXXXX` with optional conversion labels
5. **Google Tag Manager (GTM)**: `GTM-XXXXXXX`

### Tracked Business Events
- `page_view`: Automatically dispatched on route transitions via React Router.
- `whatsapp_click`: Fired on every WhatsApp CTA with source context (`sport_detail`, `offer_card`, `floating_button`, `header`).
- `sport_view`: Fired when a parent views a specific sport page.
- `offer_view`: Fired when an offer package is inspected.
- `blog_view`: Fired when an educational article is opened.
- `search_query`: Fired on search queries in the Blog.
- `language_switch`: Fired when the user switches between Arabic and English.

---

## 7. Content Migration

An idempotent, non-destructive migration script is provided at `scripts/migrate-to-sanity.mjs`.

### How to Run Migration:
1. Ensure your `SANITY_AUTH_TOKEN` is set in your local `.env` file or pass it directly in the command:
   ```bash
   # Method 1: Reading from .env
   npm run migrate:sanity

   # Method 2: Passing directly in shell
   SANITY_AUTH_TOKEN="sk..." npm run migrate:sanity
   ```

### Safety Features:
- Uses `createIfNotExists()` with deterministic document IDs (`sport-football`, `offer-quarterly-pack`, `site-settings`, `ui-labels-main`, etc.).
- **Zero-Destruction Guarantee**: Running this script will never overwrite or erase changes made by administrators in Sanity Studio.
- Frontend builds (`npm run build`) and Vercel production deployments **never** run this script automatically and **never** mutate Sanity data.

---

## 8. Development & Deployment

### Prerequisites
- Node.js `18.x` or `>=20.x`
- npm `9.x` or `>=10.x`

### Available NPM Scripts
```bash
# Start Vite development server for the frontend
npm run dev

# Start Sanity Studio locally (http://localhost:3333)
npm run studio

# Build production bundle for the frontend
npm run build

# Build standalone Sanity Studio bundle
npm run studio:build

# Preview production build locally
npm run preview

# Run deterministic content migration to Sanity
npm run migrate:sanity
```

### Vercel Production Deployment
1. Connect the GitHub repository to Vercel.
2. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Add Environment Variables (optional, defaults are built-in):
   - `VITE_SANITY_PROJECT_ID`: `s4sblwvk`
   - `VITE_SANITY_DATASET`: `production`
4. The build produces a single, highly optimized distribution bundle that connects directly to the Sanity Content Lake via public CDN.

---

## 9. License & Ownership
Copyright © 2026 ALQIMA Sports Academy (أكاديمية القمة الرياضية), Jeddah, Saudi Arabia. All rights reserved.
