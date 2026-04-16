# Muhammad Sholehhudin — Portfolio

A premium, dark-mode portfolio for a Frontend Engineer specializing in React.js and Next.js. Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: DM Sans, DM Mono, Fraunces (Google Fonts via `next/font`)

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, Tailwind directives, CSS vars
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page — composes all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed navbar with mobile menu
│   │   └── Footer.tsx       # Footer with links
│   │
│   ├── ui/
│   │   ├── Button.tsx       # Primary / secondary / outline button
│   │   ├── Divider.tsx      # Section divider line
│   │   ├── Reveal.tsx       # Framer Motion scroll-reveal wrapper
│   │   ├── SectionLabel.tsx # Mono uppercase label with decorative line
│   │   ├── Tag.tsx          # Colored badge (blue / green / amber / neutral)
│   │   └── TechPill.tsx     # Small mono tech chip
│   │
│   └── sections/
│       ├── HeroSection.tsx        # Full-screen hero with name, role, CTAs
│       ├── AboutSection.tsx       # Story, stats, career timeline
│       ├── StackSection.tsx       # Animated tech stack grid
│       ├── ProjectsSection.tsx    # Featured + secondary project cards
│       ├── BrowserMockup.tsx      # Decorative browser UI for featured project
│       ├── ProjectModal.tsx       # Animated modal for project case studies
│       ├── ExperienceSection.tsx  # Vertical experience timeline
│       ├── RemoteSection.tsx      # Remote work credentials + live tz clocks
│       └── ContactSection.tsx     # Contact CTA with links
│
├── lib/
│   ├── data.ts              # All content: person info, projects, experience
│   └── utils.ts             # cn() class utility (clsx)
│
└── types/
    └── index.ts             # TypeScript interfaces
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

All personal content lives in **`src/lib/data.ts`**:

- `PERSON` — name, email, LinkedIn, GitHub, CV URL
- `PROJECTS` — project cards with descriptions, tech, and modal content
- `EXPERIENCE` — work history
- `STACK` — tech cards
- `REMOTE_CARDS` — remote capability highlights
- `TIMEZONES` — live timezone display

---

## Deployment

Deploy instantly on Vercel:

```bash
npx vercel
```

Or push to GitHub and connect via the Vercel dashboard.
