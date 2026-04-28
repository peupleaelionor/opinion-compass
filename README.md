# ZAWIOS

Premium mobile-first React/Vite web app for structured opinion signals, reputation and calm public prediction.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Lovable Cloud-ready authentication/data layer

## Local setup

```bash
bun install
bun run dev
```

## Production build

```bash
bun run build
bun run preview
```

## Vercel

The project includes `vercel.json` with:

- `buildCommand`: `bun run build`
- `outputDirectory`: `dist`
- SPA rewrites to `index.html`

Required environment variables are the same frontend variables provided by Lovable Cloud:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

## Product direction

See `docs/zawios-supra-prompt.md` for the ZAWIOS art direction and product principles.
