# Portfolio — Hicham Guendouz

Site vitrine personnel : présentation de mon profil développeur fullstack (React, Node.js, Python, data & automation) et des produits publiés.

**En ligne :** [hicham77500.github.io/Portfolio](https://hicham77500.github.io/Portfolio)

## Contenu

| Section | Contenu |
| --- | --- |
| Intro | Positionnement et stack |
| Positionnement / Architecture | Approche technique |
| **Projets réalisés** | Produits live (ex. [Reply Fitness](https://apps.apple.com/fr/app/reply-fitness/id6785667481) sur l’App Store) |
| Compétences | Frontend, backend, data |
| Parcours | Expérience et formation |
| Contact | GitHub, LinkedIn, formulaire |

Le contenu éditorial vit dans `src/data/portfolio.ts`. Les conventions et flags agent sont dans `PROJECT_CONTEXT.md`.

## Stack

- Next.js 16 (App Router) + React 19 — export statique (`output: 'export'`)
- TypeScript + Tailwind CSS
- Framer Motion (navigation)
- Web3Forms (contact)
- Déploiement GitHub Pages (`basePath` `/Portfolio` en production)

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
