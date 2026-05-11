# Classic Car Legends

A premium, magazine-style React site for vintage automobile enthusiasts. Built with **React + Vite + Tailwind + Framer Motion + React Router**, served in production by **Express** with compression and SPA fallback.

## Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Router DOM 6
- Lucide React icons
- Express + compression (production server)

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Production Build
```bash
npm run build      # outputs to /dist
npm start          # serves /dist with Express on $PORT
```

## Environment Variables
None required for the default build. Google Analytics ID `G-4J046JXWVC` is hard-wired into `index.html` and `src/utils/analytics.js`.

## Deployment

### Heroku
```bash
heroku create classic-car-legends
git push heroku main
```
`Procfile`, `app.json`, `engines.node = 20.x`, and `heroku-postbuild` are configured.

### Vercel
1. Import repo on vercel.com.
2. Framework preset: **Vite**.
3. Build command: `npm run build`. Output dir: `dist`.

### Netlify
1. Connect repo.
2. Build command: `npm run build`. Publish dir: `dist`.
3. Add `_redirects` (or `netlify.toml`):
```
/*  /index.html  200
```

## Routes
`/`, `/about`, `/blog`, `/tutorials`, `/community`, `/contact`,
`/muscle-cars`, `/restoration-guides`, `/collector-stories`,
`/garage-workshops`, `/classic-reviews`, `/retro-road-trips`,
`/privacy`, `/terms`, `/refund`, plus a 404 fallback.

## Analytics & Consent
- Google Tag (`G-4J046JXWVC`) loaded in `index.html`.
- Consent Mode v2 defaults `denied`; the cookie banner toggles to `granted` after acceptance.
- Custom events: `nav_click`, `cta_click`, `hobby_expand`, `article_expand`, `article_share`, `newsletter_signup`, `contact_submit`, `cookie_consent`.

## Image Strategy
All images are **bundled locally** under `src/assets/images/**` as SVGs. No runtime remote URLs are used.
