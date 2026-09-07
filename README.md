# Atharv — Portfolio

A premium, cinematic personal portfolio built with React + Vite + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```
Output goes to `dist/`. Deploy that folder anywhere static (Vercel, Netlify, GitHub Pages, etc).

## Before you launch

1. **Portrait** — drop your photo at `public/portrait.jpg` (any landscape/portrait aspect works; it's cropped to a 4:5 frame). Until you add it, a placeholder panel is shown automatically.
2. **Contact details** — open `src/data/config.js` and replace the `contact` object (email, phone, GitHub, LinkedIn, Instagram) — every value currently reads `CONFIGURE_ME`.
3. **Content** — everything else (bio, skills, projects, journey, interests) also lives in `src/data/config.js`, so you can edit copy without touching any component.
4. **OG image** (optional) — add `public/og-image.jpg` (1200×630) for nicer social-share previews; referenced in `index.html`.

## Structure

```
src/
  components/   UI sections (Hero, About, Skills, Projects, Journey, Stack, Interests, Contact, Footer, Navbar, CustomCursor, Reveal)
  data/config.js  All editable content lives here
  styles/global.css  Design tokens, resets, accessibility
```

## Notes

- Respects `prefers-reduced-motion`.
- Custom cursor auto-disables on touch devices.
- Skip-to-content link for keyboard/screen-reader users.
