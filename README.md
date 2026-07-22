# SIDDHI Detergent — Website

A modern, animated, fully responsive single-page website for **SIDDHI Detergent Soap**,
manufactured by **Vrajbhoomi Chemicals Private Limited** (GIDC-2, Sabalpur, Junagadh).

Built with **React + TypeScript + Vite** and **Framer Motion**, with full
**English ⇄ Gujarati** language switching.

## ✨ Features

- **TypeScript** — fully typed components, data and i18n (`npm run typecheck`).
- **Bilingual** — instant EN / ગુજરાતી toggle (choice remembered via `localStorage`).
  Gujarati automatically switches to the *Noto Sans Gujarati* font.
- **Custom SVG icon set** — every icon (mail, location, phone, product illustrations,
  feature icons) is a hand-built inline SVG in `src/components/Icon.tsx` — no emoji.
- **Rich animations** — hero entrance with count-up stats, a 3D mouse-tilt product
  card, dual rotating discs, scroll parallax, a nav scroll-progress bar, rising
  soap-bubbles, scroll-reveal sections, animated product filtering, an infinite
  marquee, and a pinging WhatsApp button.
- **Google Map section** — an embedded map of the Junagadh factory with an animated
  pin; click the map (or "Get Directions") to open turn-by-turn navigation.
- **All catalog products** — Washing Powder, Detergent Powder, Washing Machine Liquid,
  Dishwash Liquid, Herbal / Semi / White / Purple / Big-Bar detergent cakes, and the
  Prasiddhi herbal shampoos — filterable by category.
- **Responsive** — mobile-first layout with a hamburger menu; looks great on phone,
  tablet and desktop.
- **WhatsApp enquiries** — the contact form assembles a polished, professionally
  formatted WhatsApp message (greeting, your details, and a closing note) in the
  active language, then opens WhatsApp ready to send. Plus click-to-call / email
  and floating WhatsApp + back-to-top buttons.

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:5173
npm run typecheck# type-check without emitting
npm run build    # type-check + production build into /dist
npm run preview  # preview the production build
```

## 🗂 Project structure

```
src/
├─ components/        UI sections + Icon.tsx (SVG set), Counter.tsx, MapSection.tsx …
├─ context/           LanguageContext.tsx — the t() / pick() translation helpers
├─ data/
│  ├─ products.ts     every product, bilingual & typed (add/change products here)
│  └─ company.ts      phone / email / address / WhatsApp / map query
├─ i18n/
│  └─ translations.ts all static UI text in English + Gujarati
├─ types.ts           shared TypeScript types (Product, Localized, IconName …)
├─ index.css          full design system + animations
├─ App.tsx            page composition
└─ main.tsx           entry point
```

## 🛠 Customising

- **Product photos** — the cards use themed CSS gradient tiles with an SVG product
  illustration. To use real photos, drop images in `src/assets/` and swap the
  `.pc-visual` block in `src/components/ProductCard.tsx` for an `<img>`.
- **Icons** — add or edit inline SVGs in `src/components/Icon.tsx` (one `IconName`
  entry each). Used everywhere via `<Icon name="mail" size={22} />`.
- **Map / address** — edit `mapQuery` and `address` in `src/data/company.ts`. The
  embedded map and "Get Directions" deep link are derived from it (no API key needed).
- **WhatsApp message** — the professional enquiry template lives under the `wa` keys
  in `src/i18n/translations.ts`; it's assembled in `src/components/Contact.tsx`.
- **Text / translations** — edit `src/i18n/translations.ts` (UI) and
  `src/data/products.ts` (product copy). Both hold `en` and `gu` for every string.
- **Colours** — tweak the CSS variables at the top of `src/index.css`.

---

*Feel the Purity and Freshness.* 💧
