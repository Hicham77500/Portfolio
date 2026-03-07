# Portfolio - Hicham Guendouz

Application Next.js monopage pour presenter mon travail de developpeur full stack (data, backend et frontend) avec un sommaire sticky, des sections data-driven et un formulaire de contact Web3Forms.

## Stack principale
- Next.js 16 (App Router) + React 19 avec `output: 'export'`
- TypeScript strict + ESLint config Next
- Tailwind CSS 3.4 avec design tokens personnalises
- Framer Motion pour les animations du menu
- Web3Forms pour l'envoi des messages de contact

## Fonctionnalites clefs
- Navigation sticky avec focus management accessible et overlay mobile anime.
- Sections de contenu alimentees par `src/data/portfolio.ts` (hero, projets, experience, liens).
- Cartes "Production" et timeline combinee experience/formation.
- Formulaire React client-side avec feedback d'etat, validations HTML5 et fallback LinkedIn.
- Build statique `next export` pret pour GitHub Pages (`basePath` = `Portfolio`).

## Prerequis
- Node.js 20 LTS (Next 16 requiert >= 18.17; recommande 20 pour aligner avec les builds Vercel / Pages).
- npm 10 (livre avec Node 20).

## Installation
1. Cloner le depot puis se placer a la racine :
   ```bash
   git clone https://github.com/Hicham77500/Portfolio.git
   cd Portfolio
   ```
2. Installer les dependances :
   ```bash
   npm install
   ```
3. Copier le fichier d'environnement :
   ```bash
   cp .env.example .env
   ```
4. Renseigner `NEXT_PUBLIC_WEB3FORMS_KEY` avec la cle obtenue sur https://web3forms.com (Dashboard > Access Key).

## Commandes utiles
- `npm run dev` : serveur de dev sur http://localhost:3000 avec hot reload.
- `npm run build` : compilation + `next export` vers `out/` (pret pour Pages/Netlify/etc.).
- `npm run start` : sert la version build en mode Node (debug local avant export).
- `npm run lint` : verifie les regles Next/TypeScript.

## Variables d'environnement
| Nom | Description |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Cle publique Web3Forms permettant d'activer l'envoi du formulaire de contact. Sans valeur, le composant affiche un message invitant a ajouter la cle. |

## Personnalisation du contenu
- `src/data/portfolio.ts` : toutes les sections (navigation, hero, projets, stacks, experience, scolarite, liens).
- `src/components/navigation/NavMenu.tsx` : libelles du sommaire et animations Framer Motion.
- `src/components/forms/ContactForm.tsx` : microcopy, messages de statut et champs exposes.
- `src/components/ContactSection.tsx` : description longue + liens GitHub/LinkedIn.

## Deploiement
1. Executer `npm run build` pour generer `out/`.
2. Publier le dossier `out/` sur l'hebergeur statique de votre choix (GitHub Pages, Cloudflare Pages, Netlify, etc.).
3. Si vous publiez sur GitHub Pages sous `https://<user>.github.io/Portfolio`, garder `basePath`/`assetPrefix` dans `next.config.js`. Pour un autre slug, adaptez-les avant l'export.
4. Mettre a jour la cle Web3Forms cote Dashboard pour autoriser le domaine final.

## Licence et attribution
Le code est diffuse sous licence MIT (voir `LICENSE`). Toute reutilisation doit conserver la mention complete :
```
Copyright (c) 2026 Hicham Guendouz
```
C'est la garantie que mon nom et mon prenom restent associes au projet lorsqu'il est repris.
