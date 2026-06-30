# Cameron Liquori — Portfolio

## What's in here

- `app/page.tsx` — the homepage (Hero + Selected Work grid)
- `app/work/*/page.tsx` — one folder per case study (hood-holidays, gold-card, gold-rewards, page-ai-chatbot). Each is a thin file that just passes its data into the shared template
- `components/CaseStudyTemplate.tsx` — the actual case study layout. All 4 case studies share this one file for structure
- `lib/caseStudies.ts` — **this is where the actual content lives.** Project titles, descriptions, challenge/decision copy, metrics. Edit this file to change what's on the site — no need to touch the template files
- `components/` — the reusable building blocks (cards, buttons, sections)

## How to add real case study copy

Open `lib/caseStudies.ts`. Each case study is one object in the `caseStudies` array. Replace the placeholder strings (the "Lorem ipsum set dolor" ones) with real copy. The page will pick it up automatically — no other files need to change.

## How to add real images

Images are currently gray placeholder blocks (the `placeholder-block` divs). When you have real screenshots, they'd go in the `public/` folder and get swapped into the `ArtifactBlock` components — happy to do this with you when you have assets ready.

## Running this locally (optional)

You don't need to do this to deploy — Vercel handles it. But if you ever want to preview on your own computer:

1. Install [Node.js](https://nodejs.org) (the LTS version)
2. In a terminal, navigate to this folder and run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`
