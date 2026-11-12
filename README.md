# Form & Flair 💅✨

> **A luxury, modern, and fully responsive nail salon & beauty lounge web application.**

Welcome to the official repository for **Form & Flair**. Crafted with an elegant plum-and-rose aesthetic, modern typography, and smooth interactive animations, this website delivers a seamless digital experience for clients seeking bespoke manicures, pedicures, creative nail art, and restorative hand & foot therapies.

---

## 🌟 Key Features

- **💎 Luxury Studio Aesthetics:** Deep plum (`#8f0365`) and soft blush accents complemented by Google Fonts (`Montserrat`) and fluid layouts.
- **📱 Responsive Mobile-First Design:** Optimized across mobile smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **🧭 Intuitive Navigation:**
  - **Top Navigation Bar:** Quick-access primary and alternative phone hotlines, operating schedule, language switcher, and social links.
  - **Main Navigation Bar:** Brand logo anchor, responsive sliding hamburger menu drawer, and smooth anchor scrolling to page sections (`#about`, `#pricing`, `#contact`).
- **💅 Comprehensive Services Showcase:**
  - **Manicure:** Stimulating nail growth, cuticle care, and nourishing treatments.
  - **Pedicure:** Full nail restoration, exfoliation, and high-shine finishing.
  - **Nail Art:** Hand-painted designs, modern textures, and custom embellishments.
  - **Paraffin Wax:** Deep hydration therapy complementing manicures and pedicures.
- **🛡️ Clinical Sterilization & Quality Guarantee:**
  - Transparent sterilization protocol: Medical-grade Barbicide disinfection, sealed pouch indicators, and dry-heat autoclave sterilization at 180°C.
  - 100% client satisfaction guarantee with complimentary 5-day touch-ups.
- **👩‍🎨 Expert Stylist Spotlight:**
  - Dedicated team showcase featuring certified nail artists (e.g., Mary Lucas) with direct contact links.
- **💬 Interactive Testimonials Carousel:**
  - Touch- and swipe-enabled client review slider powered by **Keen-Slider**, complete with navigation arrows and pagination dots.
- **🏷️ Transparent Pricing Menu:**
  - Clear rate cards detailing session durations and service prices.
- **📸 Visual Portfolio Gallery:**
  - Dynamic multi-column responsive grid highlighting creative nail designs, textures, and finished artistry.
- **📅 Appointment & Inquiry Form:**
  - Interactive form with dedicated icon indicators collecting Name, Email, Phone, and Message.
  - Embedded Google Maps location pin for easy client navigation.
- **📞 Dual Contact Channels:**
  - Full support for **Primary** and **Alternative** contact numbers and emails across the top bar, contact section, and footer.

---

## 📞 Studio Contact Information

All active contact details configured across the website:

| Channel | Primary Detail | Alternative Detail |
|---|---|---|
| **Brand Name** | **Form & Flair** | — |
| **Phone / Hotline** | `+1 (555) 234-5678` | `+1 (555) 876-5432` |
| **Email Address** | `info@formandflair.com` | `booking@formandflair.com` |
| **Team Direct** | `mary@formandflair.com` | — |
| **Studio Address** | 742 Fashion Avenue, Suite 300, New York, NY 10018 | — |
| **Operating Hours** | Monday – Friday: 9:00 AM – 8:00 PM | Saturday: 9:00 AM – 6:00 PM<br/>Sunday: 10:00 AM – 4:00 PM |
| **Social Links** | Facebook, Twitter, Google, YouTube, Pinterest | — |

---

## 📁 Project Structure

```text
Form-and-Flair/
├── public/
│   ├── favicon.ico              # Studio favicon
│   ├── index.html               # Main HTML entry with meta tags & external fonts
│   ├── logo192.png              # App icon (192x192)
│   ├── logo512.png              # App icon (512x512)
│   ├── manifest.json            # Web app manifest for PWA capabilities
│   └── robots.txt               # Search engine crawler instructions
│
├── src/
│   ├── App.js                   # Root React component managing navigation state
│   ├── index.js                 # React DOM mount point
│   ├── reportWebVitals.js       # Core Web Vitals telemetry
│   │
│   ├── assets/                  # Graphics, vectors, badges & photography
│   │   ├── about/               # About section imagery
│   │   ├── category/            # Service category icons
│   │   ├── Contact/             # Form input SVG icons & frame overlays
│   │   ├── expert/              # Specialist portrait photography
│   │   ├── Footer/              # Footer backgrounds & location icons
│   │   ├── galery/              # Portfolio nail photography grid
│   │   ├── header/              # Hero background shapes & overlays
│   │   ├── icons/               # Social platform icons (Facebook, Twitter, etc.)
│   │   ├── Pricing/             # Pricing decorative frames
│   │   ├── process/             # Sterilization section imagery
│   │   ├── testimonials/        # Quotation marks & client avatars
│   │   └── logo.png             # Studio brand logo
│   │
│   ├── components/              # Modular React UI components
│   │   ├── About/               # About.js (Studio story & client benefits)
│   │   ├── Carusel/             # Carusel.js (Testimonials slider via Keen-Slider)
│   │   ├── Category/            # Category.js (4 core salon services)
│   │   ├── Contact/             # Contact.js (Google map & inquiry form)
│   │   ├── Expert/              # Expert.js (Artist team card & bio)
│   │   ├── Footer/              # TopFooter.js (Contact, hours, articles) & BottomFooter.js
│   │   ├── Galery/              # Galery.js (Portfolio image grid)
│   │   ├── Header/              # HeaderSection.js (Hero section with CTA)
│   │   ├── Navigation/          # MainNav.js (Navbar drawer) & TopNav.js (Top hotline bar)
│   │   ├── Pricing/             # Pricing.js & Price.js (Service menu cards)
│   │   └── Process/             # Process.js (Hygiene & quality guarantee)
│   │
│   ├── pages/
│   │   └── HomePage.js          # Main single-page assembly
│   │
│   └── styles/                  # Modular SCSS stylesheets
│       ├── App.scss             # Global variables, reset, and base layout
│       ├── _about.scss          # About section styling & keyframes
│       ├── _carusel.scss        # Keen slider custom overrides & dots
│       ├── _category.scss       # Service cards grid
│       ├── _contact.scss        # Contact section & form controls
│       ├── _expert.scss         # Specialist profile card
│       ├── _footer.scss         # Multi-column footer & copyright bar
│       ├── _galery.scss         # Responsive portfolio gallery grid
│       ├── _header.scss         # Hero banner typography & floating badges
│       ├── _navigation.scss     # Top bar, hamburger drawer & responsive navbar
│       ├── _pricing.scss        # Pricing tables styling
│       └── _proccess.scss       # Sterilization section layout
│
├── package.json                 # Project dependencies and npm scripts
├── yarn.lock                    # Dependency lockfile
└── README.md                    # Project documentation & reference
```

---

## 🛠️ Built With

- **[React](https://reactjs.org/) (v17):** Component-based UI library.
- **[Sass (SCSS)](https://sass-lang.com/):** Nested styling, responsive breakpoints, and CSS modular architecture.
- **[Keen Slider](https://keen-slider.io/):** Touch-friendly, performant slider for client testimonials.
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/):** Scroll-triggered animations (`fade-up`, `fade-left`, `zoom-in`, `flip-left`).
- **[Font Awesome 5](https://fontawesome.com/):** UI iconography for drawers, toggles, and status badges.
- **[Google Fonts](https://fonts.google.com/):** Elegant typography (`Montserrat` weights 100–900).

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- **Node.js** (v14.x or higher recommended)
- **npm** or **yarn** package manager

### 1. Clone or Open the Repository

```bash
cd Form-and-Flair
```

### 2. Install Dependencies

Using Yarn:
```bash
yarn install
```

Or using npm:
```bash
npm install
```

### 3. Run the Development Server

You can run the development server with:

```bash
npm start
# or
npm run dev
```

The application will launch automatically at:
[http://localhost:3000](http://localhost:3000)

### 4. Build for Production

To create an optimized production bundle:

```bash
yarn build
# or
npm run build
```

The compiled assets will be output to the `./build` directory, ready to deploy to Netlify, Vercel, AWS S3, or any static hosting provider.

---

## ⚙️ Customization Guide

### Updating Contact Information
- **Top Hotline & Hours:** Edit [`src/components/Navigation/TopNav.js`](file:///src/components/Navigation/TopNav.js).
- **Footer Contact, Hours & Addresses:** Edit [`src/components/Footer/TopFooter.js`](file:///src/components/Footer/TopFooter.js).
- **Interactive Form & Map Location:** Edit [`src/components/Contact/Contact.js`](file:///src/components/Contact/Contact.js).
- **Artist Email:** Edit [`src/components/Expert/Expert.js`](file:///src/components/Expert/Expert.js).

### Modifying Services & Pricing
- **Category Highlights:** Edit [`src/components/Category/Category.js`](file:///src/components/Category/Category.js).
- **Prices & Treatment Durations:** Edit [`src/components/Pricing/Pricing.js`](file:///src/components/Pricing/Pricing.js).

### SEO & Web App Metadata
- Update title, description, and social graph meta tags in [`public/index.html`](file:///public/index.html) and [`public/manifest.json`](file:///public/manifest.json).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
© 2026 **Form & Flair**. All rights reserved.
