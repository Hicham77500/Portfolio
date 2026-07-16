# Portfolio — Hicham Guendouz

Site vitrine personnel : développeur fullstack & mobile. Produits publiés, dont [Reply Fitness](https://apps.apple.com/fr/app/reply-fitness/id6785667481) sur l’App Store.

**En ligne :** [hicham77500.github.io/Portfolio](https://hicham77500.github.io/Portfolio)

## Contenu

| Section | Contenu |
| --- | --- |
| Intro | Positionnement Mobile / Web / Cloud & Data |
| Positionnement / Architecture | Approche produit de bout en bout |
| **Projets réalisés** | Reply Fitness (App Store) |
| Compétences | Mobile, Web, Cloud & Backend |
| Parcours | Expérience et formation |
| Contact | GitHub, LinkedIn, formulaire |

Le contenu éditorial vit dans `src/data/portfolio.ts`. Les conventions agent sont dans `PROJECT_CONTEXT.md`.

## Stack du site

- Next.js 16 (App Router) + React 19 — export statique
- TypeScript + Tailwind CSS
- Framer Motion (navigation)
- Web3Forms (contact)
- GitHub Pages (`basePath` `/Portfolio`)

## Démarrage

```bash
git clone https://github.com/Hicham77500/Portfolio.git
cd Portfolio
npm install
cp .env.example .env   # renseigner NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev            # http://localhost:3000
```

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Développement local |
| `npm run build` | Build + export vers `out/` |
| `npm run lint` | ESLint |

## Personnalisation

- **Textes & projets** → `src/data/portfolio.ts`
- **Assets produits** → `public/projects/<slug>/`
- **Tokens UI** → `src/styles/design-tokens.css`
- **Contexte agent** → `PROJECT_CONTEXT.md`

## Licence

MIT — voir `LICENSE`.

```
Copyright (c) 2026 Hicham Guendouz
```
