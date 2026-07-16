# Portfolio — Project Context

**Identité :** portfolio vitrine de **Hicham Guendouz** — développeur fullstack (React, Node.js, Python, data & automation).  
**Stack :** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind · Framer Motion · export statique GitHub Pages.  
**URL prod :** `https://hicham77500.github.io/Portfolio`  
**Dernière mise à jour :** 2026-07-16

---

## Flags actifs (lire avant tout changement)

| Flag | Détail |
|------|--------|
| **Source de contenu** | Tout texte marketing / projets / parcours vit dans `src/data/portfolio.ts`. Les composants ne hardcodent pas de copy produit. |
| **Export statique** | `next.config.js` → `output: 'export'`. Pas d’API routes ni de `next/image` optimization serveur. `basePath` `/Portfolio` en prod uniquement. |
| **Assets publics** | Chemins `/projects/...` via `withBasePath()` (`src/lib/paths.ts`) — obligatoire pour GitHub Pages. |
| **Section Production** | « Projets réalisés » = seule section projets (`#production`). Pas de section études de cas GitHub. |
| **Reply Fitness** | Produit iOS live sur App Store. Assets : `public/projects/reply-fitness/`. Repo code : workspace `../FitPro` (hors ce dépôt). |
| **Chellois·es** | Archivé — **ne plus réintroduire** dans `productionProjects`. |
| **IDs de section** | Ancres = `navSections[].id` (`hero`, `positioning`, `architecture`, `production`, `skills`, `experience`, `contact`). Garder synchro avec `LandingShell` + `useActiveSection`. |
| **Alias `@/`** | Pointe vers `src/` (`tsconfig.json`). Préférer `@/components/...`, `@/data/portfolio`. |
| **Design tokens** | Couleurs / radii / motion dans `src/styles/design-tokens.css`. Classes Tailwind mappées via `tailwind.config.ts`. |
| **Skills workspace** | Skills générales (iOS, ASO, design mobile…) dans `../AllSkills`. Ce repo n’importe pas les skills Reply iOS. |

---

## Conventions de nommage

### Contenu (`src/data/portfolio.ts`)

| Symbole | Rôle |
|---------|------|
| `navSections` | Navigation + IDs d’ancres |
| `heroContent` | Hero (eyebrow, title, CTAs, metrics) |
| `positioningContent` | Blocs positionnement |
| `architectureNodes` | Nœuds du schéma architecture |
| `productionProjects` | Produits publiés — section `#production` |
| `skillGroups` / `complementarySkills` | Compétences |
| `experience` / `education` | Parcours |
| `contactLinks` | GitHub / LinkedIn |

### Types

| Type | Usage |
|------|--------|
| `ProductionProject` | Produit live (`title`, `description`, `work[]`, `url`, `badge?`, `tagline?`, `iconSrc?`, `imageSrc?`, `repoStatus?`) |
| `ExperienceItem` / `EducationItem` | Parcours |

### Composants

| Pattern | Exemple |
|---------|---------|
| Section page | `*Section.tsx` dans `src/components/` (`HeroSection`, `ProductionSection`…) |
| Shell page | `LandingShell.tsx` — assemble les sections + nav |
| Carte | — |
| Nav | `navigation/NavMenu.tsx` |
| Form | `forms/ContactForm.tsx` |

### Assets publics

```
public/projects/<slug>/
  icon.png    # icône app / logo
  promo.png   # visuel marketing / screens
```

Slug = kebab-case du produit (`reply-fitness`).

### Flags de contenu produit

| Champ `ProductionProject` | Sens |
|---------------------------|------|
| `badge` | Label store (`App Store`, `Live`, …) |
| `url` | Lien principal (store ou site) |
| `iconSrc` / `imageSrc` | Chemins sous `/projects/...` (préfixer `basePath` géré par Next en prod via chemins relatifs depuis `public/`) |
| `tagline` | Phrase courte sous le titre |
| `work` | Liste « travaux réalisés » / stack mise en avant |

---

## Carte du code

```
Portfolio/
├── PROJECT_CONTEXT.md          ← ce fichier (conventions + flags)
├── next.config.js              ← export statique + basePath prod
├── public/projects/            ← assets produits
├── src/
│   ├── app/                    ← layout, page, globals.css
│   ├── components/             ← UI sections
│   ├── data/portfolio.ts       ← **seule source de contenu**
│   ├── hooks/useActiveSection.ts
│   └── styles/design-tokens.css
└── .cursor/
    ├── rules/                  ← règles agent toujours actives
    └── skills/portfolio-content/
```

### Flux de rendu

```
app/page.tsx
  → LandingShell
      → NavMenu (navSections)
      → HeroSection … ContactSection (données portfolio.ts)
```

---

## Modifier les projets réalisés

1. Éditer uniquement `productionProjects` dans `src/data/portfolio.ts`.
2. Placer les images dans `public/projects/<slug>/`.
3. Mettre à jour ce fichier si un flag change (nouveau produit, archive, convention).
4. Ne pas dupliquer la copy dans les composants.

---

## Liens utiles

| Ressource | Chemin / URL |
|-----------|----------------|
| Reply Fitness (App Store) | https://apps.apple.com/fr/app/reply-fitness/id6785667481 |
| Code Reply (workspace) | `../FitPro` + `../FitPro/PROJECT_CONTEXT.md` |
| AllSkills (index) | `../AllSkills/README.md` |
| Privacy / legal Reply | https://reply-fitness.web.app/privacy |
