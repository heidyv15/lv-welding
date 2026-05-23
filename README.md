# LV Welding Services — Website

Premium website for LV Welding Services, built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Local Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# 1. Navigate to the project
cd lv-welding

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
lv-welding/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Fixed top nav + mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── Gallery.tsx         # Project gallery / portfolio
│   ├── About.tsx           # About / company story
│   ├── WhyUs.tsx           # Why Choose Us section
│   ├── ServiceAreas.tsx    # Service areas map section
│   ├── Contact.tsx         # Contact form + methods
│   └── Footer.tsx          # Site footer
├── public/
│   └── images/             # Drop real photos here
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## Adding Real Photos

All photo placeholders are clearly marked with comments in the components. To add photos:

1. Place images in `/public/images/` (e.g., `hero-bg.jpg`, `project-1.jpg`)
2. Find the `PHOTO PLACEHOLDER` comments in components
3. Replace placeholder `<div>` elements with `<Image>` components:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero-bg.jpg"
  alt="LV Welding craftsmanship"
  fill
  className="object-cover"
  priority
/>
```

**Recommended photos to source:**
- Hero background: cinematic welding action or finished project
- Gallery: 6 project photos (gates, railings, staircases, structural work)
- About: team photo or shop/workshop shot
- Instagram: @lvwelding has real project photos

---

## Connecting the Contact Form

The contact form has a placeholder submission handler in `components/Contact.tsx`.

**Option 1 — Formspree (easiest):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Replace the `handleSubmit` function:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitting(true)
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitting(false)
  if (res.ok) setSubmitted(true)
}
```

**Option 2 — API Route (advanced):**
Create `app/api/contact/route.ts` and wire up email via SendGrid, Resend, or Nodemailer.

---

## Production Build

```bash
npm run build
npm start
```

---

## Upload to GitHub

```bash
# Initialize git in the project folder
cd lv-welding
git init
git add .
git commit -m "Initial commit — LV Welding Services website"

# Create a repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/lv-welding.git
git branch -M main
git push -u origin main
```

---

## Deploy to Vercel

**Option A — Vercel CLI:**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts — it auto-detects Next.js
```

**Option B — Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

---

## Connecting a Custom Domain

1. In Vercel, go to your project → **Settings → Domains**
2. Add your domain: `lvweldingservices.com`
3. Copy the DNS records Vercel provides (A record + CNAME)
4. In your domain registrar (GoDaddy, Namecheap, etc.), update the DNS records
5. Wait 1–48 hours for propagation
6. Vercel auto-provisions an SSL certificate

---

## Placeholder Checklist

Before going live, fill in these placeholders:

- [ ] **Email address** — update in `Contact.tsx` and `Footer.tsx`
- [ ] **Hero background photo** — replace placeholder in `Hero.tsx`
- [ ] **Gallery photos** — replace 6 placeholders in `Gallery.tsx`
- [ ] **About photo** — replace placeholder in `About.tsx`
- [ ] **Contact form handler** — connect Formspree or custom API
- [ ] **Favicon** — add `favicon.ico` to `/public/`
- [ ] **Owner name** — add to About section if desired
- [ ] **Google Business Profile link** — update in `Contact.tsx`

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 | React framework + SSR |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.412 | Icons |
| TypeScript | 5 | Type safety |

---

## Business Info (for reference)

- **Business:** LV Welding Services Inc.
- **Phone:** (786) 744-7479
- **Address:** 9921 NW 80th Ave Unit 1J, Hialeah Gardens, FL 33016
- **Hours:** Open 24/7
- **Instagram:** @lvwelding
- **Payment:** Zelle, Check
- **Licensed & Insured:** Yes
- **Founded:** 2018
