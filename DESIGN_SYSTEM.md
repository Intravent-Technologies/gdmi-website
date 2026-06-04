# GBENGA DAHUNSI MINISTRY INTERNATIONAL (GDMI)
## Design System & Wireframe

---

# PART 1: DESIGN SYSTEM

## 1. Brand Identity

| Attribute | Value |
|-----------|-------|
| **Ministry Name** | GBENGA DAHUNSI MINISTRY INTERNATIONAL |
| **Short Name** | GDMI |
| **Tagline** | *Set Apart for His Glory* |
| **Brand Essence** | Royalty, Holiness, Distinction, Power, Compassion |
| **Tone** | Prophetic, Authoritative yet Fatherly, Warm, Inspiring |
| **Target Audience** | Believers, Partners, Event Attendees, Online Congregation |

---

## 2. Color Palette

### Primary Colors

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| ■ | **Deep Royal Purple** | `#2D1B69` | Primary brand color, headers, navigation, buttons |
| ■ | **Gold** | `#C9A84C` | Accent, CTAs, highlights, icons |
| ■ | **Pure White** | `#FFFFFF` | Backgrounds, text on dark |

### Secondary Colors

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| ■ | **Dark Midnight** | `#1A0A3E` | Footer, dark sections, overlay |
| ■ | **Warm Amber** | `#E8A838` | Hover states, secondary accents, fire motif |
| ■ | **Soft Cream** | `#F8F6F3` | Card backgrounds, section alternates |
| ■ | **Light Lavender** | `#EDE7F6` | Subtle backgrounds, dividers |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#10B981` | Progress bars, success messages |
| **Error** | `#EF4444` | Errors, required fields |
| **Info** | `#3B82F6` | Information banners |
| **Text Primary** | `#1A1A2E` | Body text |
| **Text Muted** | `#6B7280` | Captions, secondary text |

### Gradient

```
Hero Gradient: #1A0A3E → #2D1B69 (top to bottom)
Gold Gradient: #C9A84C → #E8A838 (left to right)
```

---

## 3. Typography

### Font Stack

| Usage | Font | Weight | Fallback |
|-------|------|--------|----------|
| **Headings (H1-H4)** | `Playfair Display` | 400, 600, 700, 800 | serif |
| **Body Text** | `Inter` | 300, 400, 500, 600 | sans-serif |
| **Buttons/UI** | `Inter` | 500, 600, 700 | sans-serif |
| **Accent/Display** | `Playfair Display` | 700 (italic) | serif |

### Type Scale

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| **H1 (Hero)** | 56px / 3.5rem | 700 | 1.1 | -0.02em |
| **H2 (Section)** | 40px / 2.5rem | 600 | 1.2 | -0.01em |
| **H3 (Card)** | 28px / 1.75rem | 600 | 1.3 | normal |
| **H4** | 20px / 1.25rem | 600 | 1.4 | normal |
| **Body Large** | 18px / 1.125rem | 400 | 1.6 | normal |
| **Body** | 16px / 1rem | 400 | 1.6 | normal |
| **Body Small** | 14px / 0.875rem | 400 | 1.5 | normal |
| **Caption** | 12px / 0.75rem | 500 | 1.4 | 0.05em |
| **Button** | 16px / 1rem | 600 | 1 | 0.02em |

---

## 4. Spacing System

Based on 4px grid:

| Token | Pixels | Rem |
|-------|--------|-----|
| **space-1** | 4px | 0.25rem |
| **space-2** | 8px | 0.5rem |
| **space-3** | 12px | 0.75rem |
| **space-4** | 16px | 1rem |
| **space-5** | 20px | 1.25rem |
| **space-6** | 24px | 1.5rem |
| **space-8** | 32px | 2rem |
| **space-10** | 40px | 2.5rem |
| **space-12** | 48px | 3rem |
| **space-16** | 64px | 4rem |
| **space-20** | 80px | 5rem |
| **space-24** | 96px | 6rem |

**Section padding:** `py-20` (80px top/bottom) desktop, `py-12` (48px) mobile
**Container max-width:** 1280px
**Content max-width:** 768px (blog posts, articles)

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| **radius-sm** | 4px | Inputs, small elements |
| **radius-md** | 8px | Cards, buttons, images |
| **radius-lg** | 12px | Modals, large cards |
| **radius-xl** | 16px | Sections, containers |
| **radius-full** | 9999px | Avatars, badges, pills |

---

## 6. Shadows

| Token | Value |
|-------|-------|
| **shadow-sm** | `0 1px 2px rgba(26,10,62,0.05)` |
| **shadow-md** | `0 4px 6px rgba(26,10,62,0.07)` |
| **shadow-lg** | `0 10px 25px rgba(26,10,62,0.1)` |
| **shadow-xl** | `0 20px 50px rgba(26,10,62,0.15)` |
| **shadow-glow** | `0 0 30px rgba(201,168,76,0.3)` |

---

## 7. Component Design Tokens

### Buttons

| Variant | BG | Text | Hover BG | Border |
|---------|----|------|----------|--------|
| **Primary (Purple)** | `#2D1B69` | White | `#1A0A3E` | none |
| **Secondary (Gold)** | `#C9A84C` | `#1A0A3E` | `#E8A838` | none |
| **Outline** | transparent | `#2D1B69` | `#F8F6F3` | `#2D1B69` |
| **Ghost** | transparent | `#2D1B69` | `#EDE7F6` | none |

Sizes: **sm** (32px), **md** (44px), **lg** (56px), **xl** (64px)

### Cards

- **BG:** White or Soft Cream
- **Border-radius:** 12px (radius-lg)
- **Shadow:** shadow-md (elevated variants: shadow-lg)
- **Padding:** 24px (space-6)
- **Transition:** 0.2s ease all

### Form Inputs

- **Height:** 48px (text inputs), 120px (textarea)
- **Border:** 1.5px solid `#D1D5DB` (focused: `#2D1B69`)
- **Border-radius:** 8px
- **Padding:** 12px 16px
- **Label:** Inter 500, 14px, `#1A1A2E`

### Navigation

- **Height:** 72px (desktop), 64px (mobile)
- **Background:** Transparent (becomes `#1A0A3E` on scroll)
- **Links:** 16px, Inter 500
- **Mobile:** Slide-out drawer from right

---

# PART 2: SITE ARCHITECTURE

```
gdmi.vercel.app (or custom domain)
│
├── / (Home)
├── /about
│   ├── /about/pastor-gbenga-dahunsi
│   └── /about/our-beliefs
├── /events
│   ├── /events/business-career-summit
│   ├── /events/crusades
│   ├── /events/ibadan-prophetic-conference
│   ├── /events/lagos-prophetic-conference
│   ├── /events/prophetic-ladies-conference
│   ├── /events/campus-outreaches
│   └── /events/widows-outreaches
├── /projects
│   ├── /projects/[project-slug] (individual project)
│   └── /projects/[slug]/donate
├── /media
│   ├── /media/watch (YouTube integration)
│   ├── /media/ listen (Telegram audio)
│   └── /media/gallery
├── /blog
│   ├── /blog (list)
│   └── /blog/[post-slug] (individual post)
├── /give (/donate)
│   └── /give/[project-slug]
├── /contact
├── /newsletter (signup page)
└── /privacy-policy
```

---

# PART 3: PAGE WIREFRAMES

---

## 3.1 HOME PAGE

```
┌──────────────────────────────────────────────┐
│  [Logo]  Nav: About | Media | Projects │
│          Events | Blog | Give | Contact      │
│              ┌─────────────┐  [Donate]       │
│              │  [≡ Mobile] │                 │
├──────────────────────────────────────────────┤
│                                              │
│   ┌── HERO SECTION (full viewport) ──────┐  │
│   │                                        │  │
│   │   ✦ Gbenga Dahunsi                    │  │
│   │   Ministry International              │  │
│   │                                        │  │
│   │   "Set Apart for His Glory"           │  │
│   │                                        │  │
│   │   [Watch Live →]  [Partner With Us]   │  │
│   │                                        │  │
│   │   ┌──────────────────────┐            │  │
│   │   │  Background: Hero    │            │  │
│   │   │  image/video of     │            │  │
│   │   │  Pastor preaching   │            │  │
│   │   └──────────────────────┘            │  │
│   └──────────────────────────────────────────┘
│                                              │
│   ── SCROLL TRIGGER ──────────────────────────
│                                              │
│   ┌── ABOUT STRIP ──────────────────────┐   │
│   │  "We are called to raise a people   │   │
│   │   set apart for God's glory..."     │   │
│   │                                      │   │
│   │  [Vision] [Mission] [Mandate]       │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── UPCOMING EVENTS ──────────────────┐   │
│   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │   │
│   │  │Biz &│ │Crus-│ │Ibad│ │Lagos│   │   │
│   │  │Career│ │ades │ │Proph│ │Proph│   │   │
│   │  │Summit│ │     │ │Conf│ │Conf │   │   │
│   │  └─────┘ └─────┘ └─────┘ └─────┘   │   │
│   │  ← scrollable carousel →            │   │
│   │                                      │   │
│   │  [View All Events →]                │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── FEATURED PROJECTS ────────────────┐   │
│   │  "See what we're building together" │   │
│   │                                      │   │
│   │  ┌──────────────────────────────┐   │   │
│   │  │ 📸 Project Image             │   │   │
│   │  │ 🏗️ Widows' Empowerment       │   │   │
│   │  │    ████████░░░░ 65%          │   │   │
│   │  │    🤝 1,240 Partners         │   │   │
│   │  │    💰 ₦12.4M / ₦20M raised  │   │   │
│   │  │    [Give Now →]              │   │   │
│   │  └──────────────────────────────┘   │   │
│   │                                      │   │
│   │  ┌──────────────────────────────┐   │   │
│   │  │ 📸 Project Image             │   │   │
│   │  │ 🏫 Campus Outreach Center    │   │   │
│   │  │    ██████░░░░░░ 48%          │   │   │
│   │  │    🤝 872 Partners           │   │   │
│   │  │    💰 ₦4.8M / ₦10M raised   │   │   │
│   │  │    [Give Now →]              │   │   │
│   │  └──────────────────────────────┘   │   │
│   │                                      │   │
│   │  [View All Projects →]             │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── PARTNER SOCIAL PROOF ─────────────┐   │
│   │                                      │   │
│   │   ╔══════════════════════════╗      │   │
│   │   ║  LIVE PARTNER RADAR     ║      │   │
│   │   ║                         ║      │   │
│   │   ║   2,847 Partners        ║      │   │
│   │   ║   ₦45.2M Raised Total  ║      │   │
│   │   ║   ┌───┐ ┌───┐ ┌───┐   ║      │   │
│   │   ║   │J D│ │T M│ │A O│...║      │   │
│   │   ║   └───┘ └───┘ └───┘   ║      │   │
│   │   ║  "Just partnered!"     ║      │   │
│   │   ╚══════════════════════════╝      │   │
│   │                                      │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── LATEST BLOG POSTS ───────────────┐   │
│   │  ┌────┐ ┌────┐ ┌────┐             │   │
│   │  │Post│ │Post│ │Post│             │   │
│   │  │  1 │ │  2 │ │  3 │             │   │
│   │  └────┘ └────┘ └────┘             │   │
│   │  [Read All Articles →]            │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── NEWSLETTER ──────────────────────┐   │
│   │  "Join our mailing list"           │   │
│   │  [email@example.com] [Subscribe]   │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── FOOTER ──────────────────────────┐   │
│   │  Logo | Quick Links | Socials      │   │
│   │  YouTube | Telegram | Instagram    │   │
│   │  © GDMI 2026 | Privacy Policy     │   │
│   └──────────────────────────────────────────┘
└──────────────────────────────────────────────┘
```

---

## 3.2 PROJECTS PAGE

```
┌──────────────────────────────────────────────┐
│  Header (as always)                           │
├──────────────────────────────────────────────┤
│                                              │
│   ┌── PAGE HEADER ──────────────────────┐   │
│   │  "Our Projects"                      │   │
│   │  Every project is a story of faith  │   │
│   │  in action. Partner with us today.  │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── PROJECT FILTERS ──────────────────┐   │
│   │  [All] [Outreaches] [Building]      │   │
│   │  [Conferences] [Community]          │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── PROJECT GRID (3 columns) ────────┐   │
│   │                                      │   │
│   │  ┌──────────┐ ┌──────────┐ ┌──────┐ │   │
│   │  │  Image    │ │  Image   │ │Image │ │   │
│   │  │  🏗️     │ │  🏫     │ │🍽️   │ │   │
│   │  │  Widows  │ │  Campus │ │Food  │ │   │
│   │  │  ─────── │ │  ────── │ │Drive │ │   │
│   │  │  ████░░  │ │  ██░░░░ │ │█░░░░░│ │   │
│   │  │  65%     │ │  48%    │ │20%   │ │   │
│   │  │  1,240   │ │  872    │ │312   │ │   │
│   │  │  [Give]  │ │  [Give] │ │[Give]│ │   │
│   │  └──────────┘ └──────────┘ └──────┘ │   │
│   │                                      │   │
│   │  ┌──────────┐ ┌──────────┐ ┌──────┐ │   │
│   │  │  Image   │ │  Image   │ │Image │ │   │
│   │  │  🙏     │ │  📖     │ │🏥   │ │   │
│   │  │  Prophe- │ │  Bible   │ │Medi- │ │   │
│   │  │  tic Conf│ │  Dist.   │ │cal   │ │   │
│   │  │  COMPLETED✓││  NEW!   │ │NEW!│ │   │
│   │  │  [View] │ │  ██░░░░ │ │█░░░░░│ │   │
│   │  └──────────┘ └──────────┘ └──────┘ │   │
│   │                                      │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── PROJECT DETAIL (MODAL/PAGE) ──────┐   │
│   │  (When clicked, opens project)       │   │
│   │                                      │   │
│   │  ┌──────────────────────────────┐   │   │
│   │  │  📸 Full-width hero image    │   │   │
│   │  └──────────────────────────────┘   │   │
│   │                                      │   │
│   │  ┌── GIVE CARD (sticky) ───────┐   │   │
│   │  │  🤝 1,240 Partners          │   │   │
│   │  │  ████████░░ 65%             │   │   │
│   │  │  ₦12.4M / ₦20M raised       │   │   │
│   │  │                              │   │   │
│   │  │  ₦ [________]               │   │   │
│   │  │  [1k] [5k] [10k] [20k]     │   │   │
│   │  │  [Give Now]                 │   │   │
│   │  └──────────────────────────────┘   │   │
│   │                                      │   │
│   │  Project story text...               │   │
│   │  Gallery of images/videos...         │   │
│   │  Updates from ministry...            │   │
│   │                                      │   │
│   └──────────────────────────────────────────┘
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3.3 GIVE/DONATE PAGE

```
┌──────────────────────────────────────────────┐
│  Header                                       │
├──────────────────────────────────────────────┤
│                                              │
│   ┌── GIVE SECTION ─────────────────────┐   │
│   │                                      │   │
│   │  ┌─── SOCIAL PROOF ──────────────┐  │   │
│   │  │   ✦ Live Partner Radar        │  │   │
│   │  │                                │  │   │
│   │  │     2,847 Partners            │  │   │
│   │  │     ₦45.2M Total Raised       │  │   │
│   │  │                                │  │   │
│   │  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐    │  │   │
│   │  │  │JD │ │TM │ │AO │ │...│    │  │   │
│   │  │  └───┘ └───┘ └───┘ └───┘    │  │   │
│   │  │  "God bless you, John D just │  │   │
│   │  │   partnered with ₦50,000"    │  │   │
│   │  └──────────────────────────────┘  │   │
│   │                                      │   │
│   │  ┌─── GIVE FORM ────────────────┐  │   │
│   │  │                              │  │   │
│   │  │  Step 1: Select Project      │  │   │
│   │  │                              │  │   │
│   │  │  ○ General Offering          │  │   │
│   │  │  ○ Widows' Empowerment       │  │   │
│   │  │  ○ Campus Outreach           │  │   │
│   │  │  ○ Crusades                  │  │   │
│   │  │  ○ Prophetic Conference      │  │   │
│   │  │  ○ Other                    │  │   │
│   │  │                              │  │   │
│   │  │  Step 2: Enter Amount        │  │   │
│   │  │                              │  │   │
│   │  │  ₦ [               ]        │  │   │
│   │  │                              │  │   │
│   │  │  [₦1,000] [₦5,000]          │  │   │
│   │  │  [₦10,000] [₦20,000]        │  │   │
│   │  │  [₦50,000] [Custom]         │  │   │
│   │  │                              │  │   │
│   │  │  Step 3: Your Details        │  │   │
│   │  │                              │  │   │
│   │  │  Full Name [___________]    │  │   │
│   │  │  Email    [___________]     │  │   │
│   │  │  Phone    [___________]     │  │   │
│   │  │                              │  │   │
│   │  │  [✓] I'd like to receive     │  │   │
│   │  │      newsletter updates      │  │   │
│   │  │                              │  │   │
│   │  │  [Give Now → Paystack]       │  │   │
│   │  │                              │  │   │
│   │  │  🔒 Secured by Paystack     │  │   │
│   │  └──────────────────────────────┘  │   │
│   │                                      │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── TESTIMONIALS ─────────────────────┐   │
│   │  "I partnered with this ministry    │   │
│   │   and my life was transformed..."   │   │
│   └──────────────────────────────────────────┘
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3.4 MEDIA PAGE

```
┌──────────────────────────────────────────────┐
│  Header                                       │
├──────────────────────────────────────────────┤
│                                              │
│   ┌── MEDIA HUB ────────────────────────┐   │
│   │                                      │   │
│   │  ┌──────────────────────────────┐   │   │
│   │  │  🎥 WATCH SERVICES            │   │   │
│   │  │  Latest Sermon: "Set Apart"   │   │   │
│   │  │  ┌────────────────────┐      │   │   │
│   │  │  │  YouTube Embed    │      │   │   │
│   │  │  │  (latest video)   │      │   │   │
│   │  │  └────────────────────┘      │   │   │
│   │  │  [View All on YouTube →]     │   │   │
│   │  └──────────────────────────────┘   │   │
│   │                                      │   │
│   │  ┌──────────────────────────────┐   │   │
│   │  │  🎧 AUDIO MESSAGES            │   │   │
│   │  │  Latest message: "The Year   │   │   │
│   │  │  of Divine Speed"            │   │   │
│   │  │                               │   │   │
│   │  │  ┌─ Audio Player Card ─────┐ │   │   │
│   │  │  │ ▶ The Prophetic Mantle  │ │   │   │
│   │  │  │ ───●────────────────   │ │   │   │
│   │  │  │ ⏮ ⏸ ⏭                  │ │   │   │
│   │  │  └────────────────────────┘ │   │   │
│   │  │                               │   │   │
│   │  │  [All Audio on Telegram →]   │   │   │
│   │  └──────────────────────────────┘   │   │
│   │                                      │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── GALLERY ──────────────────────────┐   │
│   │  ┌──┐ ┌──┐ ┌──┐ ┌──┐              │   │
│   │  │📸│ │📸│ │📸│ │📸│              │   │
│   │  └──┘ └──┘ └──┘ └──┘              │   │
│   │  ┌──┐ ┌──┐ ┌──┐ ┌──┐              │   │
│   │  │📸│ │📸│ │📸│ │📸│              │   │
│   │  └──┘ └──┘ └──┘ └──┘              │   │
│   │  [View Full Gallery →]             │   │
│   └──────────────────────────────────────────┘
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3.5 EVENTS PAGE

```
┌──────────────────────────────────────────────┐
│  Header                                       │
├──────────────────────────────────────────────┤
│                                              │
│   ┌── PAGE HEADER ──────────────────────┐   │
│   │  "Events & Conferences"             │   │
│   │  Gathering the set apart ones       │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── UPCOMING EVENTS ──────────────────┐   │
│   │                                      │   │
│   │  ┌── EVENT CARD (featured) ──────┐ │   │
│   │  │  ┌──────────────────────┐     │ │   │
│   │  │  │  Event Hero Image    │     │ │   │
│   │  │  └──────────────────────┘     │ │   │
│   │  │                                │ │   │
│   │  │  BUSINESS & CAREER SUMMIT     │ │   │
│   │  │  📅 June 15-17, 2026          │ │   │
│   │  │  📍 Ibadan, Nigeria           │ │   │
│   │  │                                │ │   │
│   │  │  "Raising kingdom-minded       │ │   │
│   │  │   entrepreneurs..."            │ │   │
│   │  │                                │ │   │
│   │  │  [Register Now →]             │ │   │
│   │  └────────────────────────────────┘ │   │
│   │                                      │   │
│   │  ┌─────┐ ┌─────┐ ┌─────┐          │   │
│   │  │Crus-│ │Ibad-│ │Lagos│          │   │
│   │  │ades │ │an   │ │Proph│          │   │
│   │  │     │ │Proph│ │Conf │          │   │
│   │  │[See]│ │[See]│ │[See]│          │   │
│   │  └─────┘ └─────┘ └─────┘          │   │
│   │                                      │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── PAST EVENTS GALLERY ──────────────┐   │
│   │  Grid of past event photos           │   │
│   │  with overlay labels                 │   │
│   └──────────────────────────────────────────┘
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3.6 BLOG PAGE

```
┌──────────────────────────────────────────────┐
│  Header                                       │
├──────────────────────────────────────────────┤
│                                              │
│   ┌── PAGE HEADER ──────────────────────┐   │
│   │  "Articles"                          │   │
│   │  Wisdom from Pastor Gbenga Dahunsi   │   │
│   └──────────────────────────────────────────┘
│                                              │
│   ┌── BLOG LAYOUT ──────────────────────┐   │
│   │                                      │   │
│   │  ┌─── MAIN ─────────── ┌── SIDEBAR │   │
│   │  │                     │           │   │
│   │  │ Featured Post       │ Categories │   │
│   │  │ ┌───────────────┐  │ □ Faith    │   │
│   │  │ │ Hero Image    │  │ □ Prayer   │   │
│   │  │ └───────────────┘  │ □ Prophecy │   │
│   │  │ "The Power of      │ □ Finances │   │
│   │  │  Set Apart Living" │ □ Family   │   │
│   │  │  Mar 1, 2026       │           │   │
│   │  │  Pastor Gbenga     │ Search    │   │
│   │  │                    │ [______]  │   │
│   │  │ ┌───────────────┐  │           │   │
│   │  │ │ Post 2        │  │ Subscribe │   │
│   │  │ └───────────────┘  │ [_____]   │   │
│   │  │                    │ [Sub]     │   │
│   │  │ ┌───────────────┐  │           │   │
│   │  │ │ Post 3        │  │           │   │
│   │  │ └───────────────┘  │           │   │
│   │  │                    │           │   │
│   │  │ [Load More]        │           │   │
│   │  └────────────────────┘           │   │
│   └──────────────────────────────────────────┘
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3.7 MOBILE NAVIGATION

```
┌──────────────────────────────────────────────┐
│  [Logo]                          [≡ Menu]    │
├──────────────────────────────────────────────┤
│                                              │
│  ┌── MOBILE MENU (slide from right) ──────┐  │
│  │  ┌──────────────────────────────────┐   │  │
│  │  │              [✕]                │   │  │
│  │  │                                  │   │  │
│  │  │  🏠 Home                        │   │  │
│  │  │  ℹ️ About                       │   │  │
│  │  │  📺 Media                       │   │  │
│  │  │     ▶ Watch                    │   │  │
│  │  │     🎧 Listen                  │   │  │
│  │  │     📸 Gallery                 │   │  │
│  │  │  🗓️ Events                     │   │  │
│  │  │  🏗️ Projects                   │   │  │
│  │  │  📝 Blog                       │   │  │
│  │  │  💝 Give                       │   │  │
│  │  │  📞 Contact                    │   │  │
│  │  │                                  │   │  │
│  │  │  ── Connect ──                  │   │  │
│  │  │  [YouTube][Telegram][Insta]     │   │  │
│  │  │                                  │   │  │
│  │  │  [Subscribe to Newsletter]      │   │  │
│  │  └──────────────────────────────────┘   │  │
│  └──────────────────────────────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

---

# PART 4: INTERACTIONS & ANIMATIONS

## Page Load
- **Hero:** Content fades in + slight upward motion (0.6s)
- **Sections:** Staggered reveal on scroll (Intersection Observer)
- **Numbers:** Count-up animation when in view

## Hover States
- **Cards:** Lift up 4px + shadow intensifies
- **Buttons:** Scale 1.02 + brighter color
- **Navigation links:** Underline slide-in from center
- **Project images:** Zoom 1.05 with overlay

## Scroll Behavior
- **Navbar:** Sticky, transparent → solid purple on scroll
- **Back to top:** Floating button appears after 1 viewport
- **Smooth scroll:** All anchor links

## Give Flow
1. User clicks "Give Now" → form slides in
2. Select project (cards with radio selection)
3. Enter amount (quick-select chips + custom input)
4. Fill details → smooth step progression
5. Submit → Paystack modal opens
6. Success → confetti animation + thank you message

---

# PART 5: PAGE LOAD STRATEGY

```
Static Generation (SSG) — most pages
├── Homepage
├── About
├── Events listing
├── Projects listing (revalidate on update)
├── Media page
├── Blog listing
├── Contact

Server Side (SSR/ISR) — dynamic content
├── Individual blog post
├── Individual project
├── Give page (live partner count)

Third-party Integrations
├── YouTube API (latest video)
├── Paystack (payment processing)
├── Resend / Mailgun (newsletter)
├── Cloudinary (image optimization)
```

---

# PART 6: TECH STACK RECOMMENDATION

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 14+ (App Router) | SSG + SSR, great DX |
| **Styling** | Tailwind CSS v4 | Rapid development, consistent design tokens |
| **CMS** | Sanity.io or Payload CMS | Structured content for blog, events, projects |
| **Payment** | Paystack API | Best Nigeria payment gateway with SCUML |
| **Newsletter** | Resend + React Email | Reliable email delivery |
| **Media** | Cloudinary | Image optimization, video delivery |
| **Deployment** | Vercel | One-click deploy, edge functions |
| **Analytics** | Umami / Plausible | Privacy-focused analytics |

---

> **Next Step:** Once you approve this design system, I'll scaffold the Next.js project with Tailwind and start building all pages with full responsiveness, animations, and Paystack integration.
