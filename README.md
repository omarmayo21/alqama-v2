# ALQIMA Sports Academy | أكاديمية القمة الرياضية

An Arabic-first (RTL), modern, high-performance web platform for **ALQIMA Sports Academy** (أكاديمية القمة الرياضية) in Jeddah, Saudi Arabia. Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **React Router v7**.

---

## 1. Project Overview

* **Project Name**: ALQIMA Sports Academy (أكاديمية القمة الرياضية)
* **Purpose**: A comprehensive digital presence and enrollment portal for a premier athletic training academy in Jeddah, Saudi Arabia. It showcases 7 athletic sports disciplines, multi-tiered subscription plans, weekly training timetables, athletic development pathways, sports articles, and an interactive 3-step registration wizard.
* **Target Users**:
  * **Parents & Guardians**: Seeking structured sports training, verified coach credentials, safety standards, and membership enrollment for their children/teens (ages 3–25).
  * **Athletes & Participants**: Exploring training programs, session schedules, capacity availability, and competitive tournament pathways.
  * **Academy Administrators & Coaches**: Publishing timetables, program details, and receiving applicant leads.
* **Main Features & Current Functionality**:
  * **Arabic-First RTL Design**: Full Right-to-Left layout support with Cairo and Tajawal typography.
  * **7 Specialized Sport Pages**: Football, Basketball, Swimming, Karate, Kickboxing, Gymnastics, and Roller Skating with dedicated detail pages (`/sports/:sportId`).
  * **Weekly Training Timetable (`/schedule`)**: Interactive filtering by sport and day of the week, level color-coding, and seat capacity indicators.
  * **Multi-Tier Memberships (`/subscriptions`)**: Monthly vs. Quarterly period switcher with dynamic pricing calculations and comparison matrix.
  * **3-Step Registration Wizard (`/register`)**: Interactive multi-step form with validation for student information, guardian contact, sport/level selection, and instant summary confirmation.
  * **Help & FAQ Center (`/faq`)**: Keyword search and category-filtered accordion powered by layout-safe CSS transitions.
  * **Sports Blog (`/blog` & `/blog/:id`)**: Category filtering, search bar, and full article view.
  * **Contact & Location Center (`/contact`)**: Form validation, working hours, and floating WhatsApp integration.
  * **Single-File Bundling**: Optimized build pipeline packaging the entire application into a self-contained single distribution bundle.

---

## 2. Tech Stack

| Layer | Technology | Version | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `19.2.6` | Core frontend UI library |
| **DOM Renderer** | [React DOM](https://react.dev/) | `19.2.6` | Web DOM rendering engine |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.9.3` | Type-safe development (`strict: true`, `target: ES2020`) |
| **Build Tool / Bundler** | [Vite](https://vitejs.dev/) | `7.3.2` | Fast developer server and production bundler |
| **Single-File Plugin** | [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) | `2.3.0` | Inlines scripts, styles, and assets into a single `dist/index.html` |
| **Styling / CSS** | [Tailwind CSS v4](https://tailwindcss.com/) | `4.1.17` | Modern utility-first CSS engine via `@tailwindcss/vite` |
| **CSS Compiler** | [@tailwindcss/vite](https://tailwindcss.com/) | `4.1.17` | Official Vite integration plugin for Tailwind v4 |
| **Class Utilities** | `clsx` & `tailwind-merge` | `2.1.1` / `3.4.0` | Conditional class merging via `src/utils/cn.ts` |
| **Routing** | [React Router](https://reactrouter.com/) | `7.18.3` | Client-side routing (`react-router-dom`) |
| **Icons** | [Lucide React](https://lucide.dev/) | `^1.45.0` | Crisp vector icons with cohesive line weight and stroke |
| **Typography** | [Google Fonts](https://fonts.google.com/) | Cloud | `Cairo` (headings, badges, buttons) and `Tajawal` (body) |
| **Backend** | *None (Static Data)* | — | All data is structured locally in `src/data/*.ts` |
| **Database** | *None* | — | No external database connected |
| **Authentication** | *None* | — | All routes are publicly accessible |

---

## 3. Project Structure

```
alqima-sports-/
├── .impeccable/                 # Impeccable UI skill configuration
│   └── config.json              # Workflow settings (e.g. buildPath: "code")
├── public/                      # Static assets served as-is
│   ├── favicon.svg              # Academy favicon SVG
│   └── images/                  # High-resolution sport photography
│       ├── about-team.jpg       # Academy coaching staff photo
│       ├── basketball.jpg       # Basketball program banner
│       ├── football.jpg         # Football training banner
│       ├── gymnastics.jpg       # Gymnastics program banner
│       ├── hero-bg.jpg          # Homepage hero background image
│       ├── karate.jpg           # Karate / Martial arts photo
│       ├── kickboxing.jpg       # Kickboxing session banner
│       ├── roller-skating.jpg   # Roller skating photo
│       └── swimming.jpg         # Olympic swimming pool banner
├── src/
│   ├── components/
│   │   ├── layout/              # Structural layout components
│   │   │   ├── Header.tsx       # Top bar, sticky navigation, dropdowns & mobile drawer
│   │   │   └── Footer.tsx       # Multi-column footer, social links & copyright
│   │   └── ui/                  # Reusable design system primitives
│   │       ├── Button.tsx       # Versatile button/link component with variant styles
│   │       ├── Logo.tsx         # Academy brand logo with SVG icon & typography
│   │       ├── PageHeader.tsx   # Top banner with title, breadcrumbs & ambient gradient
│   │       ├── SectionHeader.tsx# Standardized section title, subtitle & contrast styling
│   │       └── SportIcon.tsx    # Dynamic Lucide vector icon resolver per sport ID
│   ├── data/                    # Local typed database & structured mock datasets
│   │   ├── blog.ts              # Blog posts, categories, and full article contents
│   │   ├── faq.ts               # Frequently asked questions categorized by topic
│   │   ├── schedule.ts          # Weekly timetable sessions, capacities, coaches & locations
│   │   ├── sports.ts            # 7 sports definitions, features, age ranges & levels
│   │   └── subscriptions.ts     # Monthly and quarterly subscription tiers & pricing
│   ├── pages/                   # Application route view components (15 pages)
│   │   ├── About.tsx            # Story, values, milestones timeline & coaching team
│   │   ├── Article.tsx          # Single blog article view with sidebar & related posts
│   │   ├── Blog.tsx             # Blog directory with search and category filters
│   │   ├── Contact.tsx          # Contact details, interactive message form & facility info
│   │   ├── FAQ.tsx              # Searchable FAQ accordion with smooth CSS grid expansion
│   │   ├── Home.tsx             # Main landing page with hero, stats, features & testimonials
│   │   ├── NotFound.tsx         # Custom 404 error page with navigation buttons
│   │   ├── Privacy.tsx          # Privacy policy and user data governance
│   │   ├── Programs.tsx         # Age-category pathways (Mini, Beginners, Youth, Elite)
│   │   ├── Register.tsx         # 3-step athlete registration wizard
│   │   ├── Schedule.tsx         # Interactive timetable with sport & day filters
│   │   ├── SportDetail.tsx      # Dynamic detail page per sport (`/sports/:sportId`)
│   │   ├── Sports.tsx           # Directory of all 7 sports programs
│   │   ├── Subscriptions.tsx    # Membership tiers, quarterly toggle & comparison table
│   │   └── Terms.tsx            # Terms of service and academy rules
│   ├── types/
│   │   └── index.ts             # Global TypeScript interface definitions
│   ├── utils/
│   │   └── cn.ts                # Classnames (clsx + tailwind-merge) utility function
│   ├── App.tsx                  # Root router configuration, Layout shell & scroll-to-top
│   ├── index.css                # Global Tailwind v4 theme, browser surface styling & keyframes
│   └── main.tsx                 # React DOM client entry point
├── dist/                        # Production build output (generated upon `npm run build`)
│   └── index.html               # Single self-contained distributable bundle
├── index.html                   # HTML entry template with Arabic RTL meta & font links
├── package.json                 # Project dependencies, metadata, and scripts
├── package-lock.json            # Deterministic dependency lockfile
├── PRODUCT.md                   # Durable product vision, positioning, and principles
├── tsconfig.json                # TypeScript compiler configuration with path aliases (`@/*`)
└── vite.config.ts               # Vite configuration with React, Tailwind v4, and single-file plugin
```

---

## 4. Pages & Routes

All routes are client-side routes managed by **React Router DOM v7** inside `src/App.tsx`.

| Route | Page Component | File Path | Purpose & Key Features | Auth Required |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `Home` | `src/pages/Home.tsx` | Main landing page: hero section, quick stats, sports overview, values, programs overview, testimonials, CTA, and recent blog posts. | No |
| `/about` | `About` | `src/pages/About.tsx` | Academy history, 10-year milestone timeline, core values, mission/vision, leadership and coach cards. | No |
| `/sports` | `Sports` | `src/pages/Sports.tsx` | Grid of all 7 sport programs with age ratings, session counts, and links to detailed views. | No |
| `/sports/:sportId` | `SportDetail` | `src/pages/SportDetail.tsx` | Dynamic deep-dive for a single sport (e.g. `/sports/football`). Shows description, features, training schedule, and sidebar registration card. | No |
| `/programs` | `Programs` | `src/pages/Programs.tsx` | Age-tier pathways (Mini 3–6y, Beginners 7–10y, Youth 11–15y, Elite 16+y), special summer camps, and registration steps. | No |
| `/schedule` | `Schedule` | `src/pages/Schedule.tsx` | Interactive weekly timetable with dual filters (Sport + Day), seat capacity meters, level tags, coach names, and locations. | No |
| `/subscriptions`| `Subscriptions`| `src/pages/Subscriptions.tsx` | Membership plans with Monthly/Quarterly toggle (10% discount badge), feature lists, and a comparison table. | No |
| `/register` | `Register` | `src/pages/Register.tsx` | 3-step registration wizard: (1) Student data, (2) Guardian data, (3) Sport & Level selection with validation and instant confirmation card. | No |
| `/blog` | `Blog` | `src/pages/Blog.tsx` | Searchable blog directory with featured hero article, category pills, and article cards. | No |
| `/blog/:id` | `Article` | `src/pages/Article.tsx` | Full-text article reader with author metadata, formatted markdown body, tags, and related articles sidebar. | No |
| `/contact` | `Contact` | `src/pages/Contact.tsx` | Direct phone, email, working hours, interactive inquiry form with validation, and facility map details. | No |
| `/faq` | `FAQ` | `src/pages/FAQ.tsx` | Searchable FAQ repository with category filters and CSS grid-template-rows accordion animations. | No |
| `/privacy` | `Privacy` | `src/pages/Privacy.tsx` | Official privacy policy, data collection terms, and user rights index. | No |
| `/terms` | `Terms` | `src/pages/Terms.tsx` | Official terms of service, safety regulations, refund policies, and intellectual property terms. | No |
| `*` | `NotFound` | `src/pages/NotFound.tsx` | Custom 404 page for unmatched routes with home navigation. | No |

---

## 5. Components

### Layout Components

| Component | File Location | Purpose & Important Props | Where Used |
| :--- | :--- | :--- | :--- |
| `Header` | `src/components/layout/Header.tsx` | Sticky header with phone/address top bar, desktop navigation dropdowns, mobile sliding drawer, and registration CTA button. | Inside `Layout` in `src/App.tsx` |
| `Footer` | `src/components/layout/Footer.tsx` | 4-column footer with brand summary, vector social links (Instagram, X, YouTube), quick links, sports directory, contact info, and back-to-top button. | Inside `Layout` in `src/App.tsx` |
| `Layout` | `src/App.tsx` | Page wrapper enclosing `Header`, main content `<main>`, `Footer`, and floating WhatsApp action button. | Wraps all routes in `src/App.tsx` |
| `ScrollToTop`| `src/App.tsx` | Invisible utility component that listens to `useLocation().pathname` and scrolls the window to `(0, 0)` smoothly on every page change. | Top-level child of `<BrowserRouter>` in `src/App.tsx` |

### UI Primitives

| Component | File Location | Purpose & Key Props | Where Used |
| :--- | :--- | :--- | :--- |
| `Button` | `src/components/ui/Button.tsx` | Reusable button or link supporting variants (`primary`, `secondary`, `outline`, `ghost`, `white`, `gold`), sizes (`sm`, `md`, `lg`), `href` (renders `<Link>` or `<a>`), `disabled`, and `fullWidth`. | Throughout all pages and modals |
| `Logo` | `src/components/ui/Logo.tsx` | Brand badge with gradient 'Q' container, gold bottom accent, and bilingual English/Arabic lettering. Props: `variant?: 'default' \| 'white'`, `size?: 'sm' \| 'md' \| 'lg'`. | In `Header.tsx` and `Footer.tsx` |
| `PageHeader` | `src/components/ui/PageHeader.tsx` | Page hero banner with ambient radial glow, breadcrumb links, badge, main `h1` title, and subtitle. Props: `title`, `subtitle`, `breadcrumbs`, `badge`. | At the top of all inner pages |
| `SectionHeader`| `src/components/ui/SectionHeader.tsx`| Standardized section header with `h2` title, red highlight text, description, and light/dark theme toggle. Props: `title`, `highlight`, `description`, `centered`, `light`. | Across `Home`, `About`, `Sports`, `Programs`, `Subscriptions` |
| `SportIcon` | `src/components/ui/SportIcon.tsx` | Vector icon resolver that maps `sportId` strings (`football`, `basketball`, `swimming`, `karate`, `kickboxing`, `gymnastics`, `roller-skating`) to clean Lucide icons with consistent stroke and props. | In `Home.tsx`, `Sports.tsx`, `SportDetail.tsx`, `Programs.tsx` |

---

## 6. Application Architecture

```mermaid
graph TD
    User([User Browser]) -->|HTTP Request| HTML[index.html]
    HTML --> Main[src/main.tsx]
    Main --> App[src/App.tsx]
    
    subgraph Routing & Layout
        App --> Router[BrowserRouter]
        Router --> Scroll[ScrollToTop]
        Router --> Shell[Layout Shell]
        Shell --> Hdr[Header]
        Shell --> ActivePage[Active Route / Page Component]
        Shell --> Ftr[Footer]
        Shell --> WApp[Floating WhatsApp Button]
    end

    subgraph Page Views
        ActivePage --> Home[Home.tsx]
        ActivePage --> Sports[Sports.tsx / SportDetail.tsx]
        ActivePage --> Sched[Schedule.tsx]
        ActivePage --> Subs[Subscriptions.tsx]
        ActivePage --> Reg[Register.tsx]
        ActivePage --> Blog[Blog.tsx / Article.tsx]
        ActivePage --> Info[About / Contact / FAQ / Terms / Privacy]
    end

    subgraph Data & Assets Layer
        Data[src/data/*.ts] -->|Static Typed Data| ActivePage
        Types[src/types/index.ts] -->|Type Interfaces| Data
        Types -->|Type Interfaces| ActivePage
        PublicImg[/public/images/*] -->|Bundled Assets| ActivePage
        UIComp[src/components/ui/*] -->|Primitives & Icons| ActivePage
    end
```

### Communication & Flow:
1. **Entry Point**: `src/main.tsx` mounts the React application into the `#root` DOM element in `index.html`.
2. **Layout Pipeline**: `src/App.tsx` wraps all routes inside `<BrowserRouter>` and a shared `<Layout>` component, guaranteeing uniform navigation and footer across all pages.
3. **Data Distribution**: Page components import structured data collections directly from `src/data/*.ts` using contracts defined in `src/types/index.ts`.
4. **Client-Side Rendering**: Fast route transitions occur entirely in memory without full-page browser reloads.

---

## 7. User Flow

### 1. Sport Discovery & Deep-Dive Flow
```
Home (/) OR Sports Directory (/sports)
   └── Click Sport Card (e.g. Football)
         └── Navigate to /sports/football (SportDetail)
               ├── Review Sport Description & Technical Features
               ├── Inspect Training Levels (Beginner → Championship)
               ├── Check Weekly Schedule for that specific sport
               └── Click "سجّل الآن" (Register CTA)
                     └── Redirects to /register with pre-informed intent
```

### 2. Timetable & Capacity Check Flow
```
User navigates to /schedule
   ├── Filter by Sport (All, Football, Basketball, Swimming, etc.)
   ├── Filter by Day of Week (Sunday through Saturday)
   ├── View real-time Capacity Progress Bars (Enrolled vs. Max Capacity)
   ├── Notice "مقاعد محدودة" (Limited Seats) warnings for sessions ≥ 85% full
   └── Click "سجّل واحجز مقعدك" → Redirects to /register
```

### 3. Subscription & Plan Comparison Flow
```
User navigates to /subscriptions
   ├── Toggle billing cycle between "اشتراك شهري" (Monthly) and "اشتراك ربع سنوي" (Quarterly - 10% off)
   ├── Compare Basic, Advanced (Popular), and Elite Tier benefits
   ├── Review detailed Feature Comparison Matrix table
   ├── Read Subscription FAQs
   └── Click "اشترك الآن" on preferred tier → Proceeds to /register
```

### 4. 3-Step Athlete Registration Flow
```
User opens /register
   ├── Step 1: Student Information (Name, Age [3-25], Gender, Medical conditions)
   │     └── Client-side validation → Click "التالي" (Next)
   ├── Step 2: Guardian Information (Name, Mobile [05XXXXXXXX], Email, Relation)
   │     └── Format & required validation → Click "التالي" (Next)
   ├── Step 3: Sport & Level Selection (Choose 1 of 7 sports, pick skill tier, agree to Terms & Privacy)
   │     └── Click "تأكيد وإرسال الطلب" (Submit)
   └── Confirmation View: Summary card displays submitted athlete details with guidance on the free assessment session.
```

---

## 8. State Management & Data Flow

* **Global State**: Managed via URL path and React Router (`useLocation`, `useParams`). Because the application relies on static content and stateless form workflows, no heavyweight global store (like Redux or Zustand) is required.
* **Local State**: Managed with React's built-in hooks:
  * `useState`: Controls filter states (`selectedSport`, `selectedDay`, `selectedCategory`), multi-step wizard step (`step`), active accordion IDs (`openId`), and form input models (`formData`, `errors`, `submitted`).
  * `useMemo`: Computes filtered and grouped arrays (e.g., in `Schedule.tsx` to group sessions by day and apply sport/day filter intersections with zero lag).
  * `useEffect`: Handles window scroll listeners (e.g., sticky header shadow on `window.scrollY > 20`), page scroll restoration on route changes, and mobile drawer body scroll locking.
* **Data Flow**: Pure unidirectional top-down data flow from static data modules in `src/data/` down to presentational components via typed props.

---

## 9. API & Backend Integration

> [!NOTE]
> **No External Backend or API Server**: The current version of this application is a **pure client-side static application**.

* Form submissions in `Register.tsx` and `Contact.tsx` validate input data in the browser and transition to client-side success confirmation views without making remote HTTP `fetch` or `axios` calls.
* All data records (sports, pricing tiers, schedules, articles, FAQs) are bundled in TypeScript files in `src/data/`.
* When adding a backend in the future (e.g. Supabase, Firebase, Node/Express, or serverless functions), API handlers can be plugged into `handleSubmit` in `Register.tsx` and `Contact.tsx`.

---

## 10. Environment Variables

The project does not currently require any environment variables to run or build.

If integrating third-party services in the future (e.g. payment gateway, backend API, analytics), create a `.env` file in the project root:

```env
# Example future environment variables
VITE_API_BASE_URL=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

All client-facing environment variables in Vite must be prefixed with `VITE_`.

---

## 11. Installation & Setup

### Prerequisites
* **Node.js**: `v18.0.0` or higher (`v20+` recommended)
* **Package Manager**: `npm` (comes with Node.js), `pnpm`, or `yarn`

### Setup Instructions

1. **Clone or Navigate to the Project Root**:
   ```bash
   cd "d:/front end dev/alqima-sports-"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Local Development Server**:
   ```bash
   npm run dev
   ```
   * Open your browser at the local URL printed in the terminal (typically `http://localhost:5173`).

---

## 12. Available Commands

All scripts are configured in `package.json`:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with instant Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and runs `vite build` using `vite-plugin-singlefile` to output `dist/index.html`. |
| `npm run preview` | Locally serves the built production bundle in `dist/` to verify production behavior before deployment. |

---

## 13. Build & Deployment

### Production Build

Run the build command:
```bash
npm run build
```

* **Build Output**: `dist/index.html` (approx. ~490 kB, ~129 kB gzipped).
* **Single-File Bundling**: The `vite-plugin-singlefile` plugin inlines all JavaScript code, CSS stylesheets, and SVGs directly into a single HTML file.

### Deployment Targets
Because the build produces standard static files (or a single HTML file), it can be deployed to:
1. **Vercel**: Deploy the root folder or connect your Git repository. Output directory is `dist`.
2. **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
3. **Cloudflare Pages / GitHub Pages**: Deploy the `dist/` folder directly.
4. **Any Traditional Web Server (Nginx, Apache, Caddy)**: Upload `dist/index.html` to your `public_html` root.

---

## 14. Authentication & Authorization

* **Current Status**: There is **no authentication system** currently implemented.
* All routes, program details, timetables, and articles are public.
* No protected route guards, JWT tokens, cookies, or user sessions exist in the present codebase.

---

## 15. Database

* **Current Status**: There is **no external database**.
* **Data Layer**: Static, in-memory data structures defined in `src/data/`:
  * `sports.ts`: 7 sport records with IDs, Arabic titles, descriptions, image paths, levels, and features.
  * `subscriptions.ts`: Monthly and Quarterly plan models with pricing and feature lists.
  * `schedule.ts`: 25 weekly training slots with days, times, coaches, venues, and capacity limits.
  * `blog.ts`: 3 detailed sports articles with tags, timestamps, and authors.
  * `faq.ts`: 14 categorized questions and answers.

---

## 16. UI & Design System

### Color Palette

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| `--color-primary` | `#D90429` | Crimson Red — Primary brand color, main CTA buttons, badges, highlights |
| `--color-primary-dark` | `#B0021F` | Dark Crimson — Hover states for primary buttons and accents |
| `--color-navy` | `#18213F` | Deep Navy — Headers, hero backgrounds, primary text, high-contrast sections |
| `--color-navy-light` | `#2A3660` | Light Navy — Sub-headers, secondary card backgrounds |
| `--color-gold` | `#FFC400` | Victory Gold — Rating stars, sub-accents, special program highlights |
| `--color-silver` | `#5A6E85` | Accessible Slate/Silver — Body text, captions, secondary labels (WCAG AA compliant) |
| `--color-light` | `#F2F3F5` | Light Gray — Section backgrounds, table alternate rows, card backgrounds |
| `--color-light-2` | `#E8EAF0` | Border Gray — Card borders, input outlines, divider lines |

### Typography
* **Heading Font**: `Cairo` (Weights: 700, 800, 900) — used for all headings, titles, price numbers, and primary buttons.
* **Body Font**: `Tajawal` & `Cairo` (Weights: 400, 500, 600) — used for readable body copy, descriptions, and lists.
* **Tabular Numbers**: `font-variant-numeric: tabular-nums` enabled globally for prices, timestamps, phone numbers, capacities, and step numbers.

### Directionality & RTL
* `dir="rtl"` and `lang="ar"` defined on the root `<html>` tag in `index.html`.
* Forward motion and link arrows use `ArrowLeft` or `ChevronLeft` to adhere to native Right-to-Left reading flow.

### Browser Surfaces
* **Text Selection**: Custom crimson background `::selection { background-color: #D90429; color: #FFFFFF; }`.
* **Focus Rings**: Accessible `:focus-visible { outline: 2px solid #D90429; outline-offset: 2px; }`.
* **Caret Color**: `caret-color: #D90429` across all form fields.
* **Scrollbar**: Themed crimson thumb and light gray track.

---

## 17. Business Logic

1. **Age-Tier Categorization**:
   * **Mini (الناشئون المصغر)**: Ages 3–6 (45 min sessions, Gymnastics, Swimming, Skating).
   * **Beginners (الناشئون الأساسي)**: Ages 7–10 (60–75 min sessions, foundational skills).
   * **Youth (الشباب والتطوير)**: Ages 11–15 (90 min sessions, league and tournament prep).
   * **Elite (النخبة والاحتراف)**: Ages 16+ (120 min sessions, high-performance coaching).

2. **Session Capacity Thresholds**:
   * Progress percentage: `(enrolled / capacity) * 100`.
   * Warning badge (`مقاعد محدودة` / Orange) triggers automatically when enrollment reaches $\ge 85\%$.

3. **Quarterly Subscription Pricing**:
   * Quarterly subscriptions offer a 10% discount compared to 3 months of monthly rates (e.g., Basic Monthly = 299 SAR/mo vs. Basic Quarterly = 799 SAR/3mo).

4. **Form Validation Rules**:
   * Student Age: Integer between 3 and 25 years.
   * Phone Number: Regex `/^[0-9+\s-]{9,15}$/`.
   * Email: Standard RFC-compliant regex pattern.
   * Compulsory Terms & Privacy agreement before final step submission.

---

## 18. Important Files

| File Path | Description & Responsibility |
| :--- | :--- |
| `src/App.tsx` | Main routing map defining all 15 routes, Layout wrapper, and scroll restoration. |
| `src/index.css` | Tailwind v4 theme definitions, typography styling, custom scrollbars, animations, and focus ring tokens. |
| `src/data/sports.ts` | The single source of truth for all 7 sports programs, features, age ranges, and skill levels. |
| `src/data/schedule.ts` | Timetable data model specifying days, times, durations, coaches, venues, and enrollment metrics. |
| `src/pages/Register.tsx` | Interactive 3-step athlete registration form with step management, error validation, and summary screen. |
| `src/pages/Schedule.tsx` | Weekly timetable view featuring sport & day filtering algorithms and seat capacity indicators. |
| `src/pages/Subscriptions.tsx` | Pricing table, monthly/quarterly toggle, and feature comparison matrix. |
| `src/components/ui/SportIcon.tsx` | Dynamic SVG vector icon mapper linking sport identifiers to Lucide icons. |
| `src/components/layout/Header.tsx` | Top info bar, sticky navigation, nested dropdowns, and responsive mobile navigation drawer. |
| `vite.config.ts` | Build configuration enabling React, Tailwind CSS v4, and single-file inlining. |
| `PRODUCT.md` | Strategic product requirements, brand commitments, and user persona documentation. |

---

## 19. Current Project Status

### Completed
- [x] Full 15-page client-side routing and responsive layout.
- [x] RTL Arabic typography integration with Google Fonts (`Cairo`, `Tajawal`).
- [x] 7 dedicated sports programs with dynamic route detail view (`/sports/:sportId`).
- [x] Timetable system with multi-criteria filtering and capacity progress indicators.
- [x] Subscriptions view with Monthly/Quarterly toggle and comparison table.
- [x] 3-step interactive registration wizard with step validation and success state.
- [x] FAQ search and category filter with CSS grid accordion animation.
- [x] Sports blog with search, category filtering, and full article reader.
- [x] Contact page with validated feedback form and direct WhatsApp link.
- [x] High-contrast accessible color palette complying with WCAG 2.1 AA.
- [x] 0 compiler/linter warnings and clean single-file production build.

### In Progress
- [ ] Backend persistence for registration submissions (currently displays client-side confirmation).
- [ ] Contact form email dispatch (currently validates and displays client-side confirmation).

### Known Issues
- None. All pages render cleanly, routes resolve without errors, and the production build compiles with exit code 0.

### TODO / Next Steps
- Connect registration form to a database or webhook (e.g. Supabase, Firebase, or an email service).
- Add Arabic/English language toggle if bilingual support is requested in the future.

---

## 20. Troubleshooting

### 1. `vite: not found` during build
* **Cause**: `node_modules` not installed or missing local binaries.
* **Fix**: Run `npm install` in the project root directory.

### 2. Single-File Bundle Notes
* **Behavior**: `vite-plugin-singlefile` inlines images and scripts into `dist/index.html`.
* **Note**: If you prefer separate `.js` and `.css` asset chunks (for CDN caching), remove `viteSingleFile()` from the plugins array in `vite.config.ts`.

### 3. RTL Alignment Quirks in Non-Arabic Browsers
* **Check**: Ensure `dir="rtl"` and `lang="ar"` are present on the `<html>` element in `index.html`.

---

## 21. Future Development & Possible Improvements

### Possible Improvements
1. **Backend Integration**: Connect form submissions to a PostgreSQL / Supabase backend for managing student registrations and coach schedules.
2. **Online Payment Gateway**: Integrate Saudi payment gateways (Mada, Apple Pay, Moyasar, HyperPay, or Stripe) for instant subscription checkout.
3. **Parent / Student Portal**: Create an authenticated dashboard where parents can track their athlete's attendance, monthly evaluation reports, and tournament fixtures.
4. **Bilingual Support (i18n)**: Implement `react-i18next` to offer an optional English locale alongside Arabic.
5. **Coach Management Panel**: A portal for coaches to take attendance, record fitness metrics, and publish evaluation reports.

---

## 22. Developer Quick Start

To start working on the project right away:

```bash
# 1. Navigate to the project folder
cd "d:/front end dev/alqima-sports-"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:5173

# 5. Build for production
npm run build
```

* **To modify sports or schedule**: Edit `src/data/sports.ts` or `src/data/schedule.ts`.
* **To add/modify pages**: Edit `src/pages/` and register the route in `src/App.tsx`.
* **To adjust colors or styles**: Edit `src/index.css`.
