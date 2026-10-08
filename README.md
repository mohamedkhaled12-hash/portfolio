# Mohamed Khaled Eid — Portfolio (Next.js 14 · Tailwind · Framer Motion)

## Run
`npm install` → `npm run dev` (http://localhost:3000) → `npm run build` → `npm start`

## Deploy to Vercel
Push to GitHub, import the repo in Vercel (framework auto-detected as Next.js), deploy. Optional env var: `NEXT_PUBLIC_SITE_URL` (your final URL, used for Open Graph).

## Update content (all in `data/`)
- **Personal info, about, skills, projects, education, experience:** `data/content.ts`
- **Profile photo:** replace `public/photo.png` (keep the name or update `components/Portfolio.tsx`)
- **CV:** replace `public/Mohamed_Khaled_Eid_CV.pdf`
- **Add a project:** add an object to `projects` in `data/content.ts`; put screenshots in `public/projects/` and set `image`
- **Add a certificate:** put a JPG/PNG in `public/certs/` and add an entry to `data/certificates.json`
- **GitHub link:** set `profile.github` in `data/content.ts` (button appears automatically)
