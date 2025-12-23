# GENIUS Office — Environmental AI Studio I (Template)

This is a runnable **Next.js + Tailwind + Supabase-ready** template website for:
**“GENIUS Office: Environmental AI Studio I”** (project-based, no exams, explainability-first).

It runs in **demo mode** (no Supabase) out of the box, so you can show it to stakeholders immediately.

## 1) Requirements
- Node.js 18+ (recommended: 20)
- npm (or pnpm/yarn)

## 2) Run locally
```bash
cd genius-office-eai-studio1
npm install
npm run dev
```
Open: http://localhost:3000

## 3) (Optional) Connect Supabase
Create a Supabase project and set environment variables:

Create `.env.local` in the project root:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

Then extend the `/submit` page to store artifact metadata and upload files to Supabase Storage.

## 4) Pages included
- Mission Control: `/`
- Case Files: `/case-files` and `/case-files/[slug]`
- Studio (weekly missions): `/studio`
- Trust Score (demo): `/scoreboard`
- Poster Factory: `/poster-factory`
- Submissions (demo): `/submit`

## 5) Assets
- GENIUS Lab logo: `public/genius_logo.png`
- Prof. Kyung photo: `public/prof_kyung.jpg`

Lab website: https://genius.ulsan.ac.kr/home

---

**Motto:** Baseline-first · Leakage-zero · Stress-test · Explainability → Action · Reproducibility
