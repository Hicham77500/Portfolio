---
name: portfolio-content
description: >-
  Met à jour le contenu du portfolio (projets réalisés, hero, parcours).
  Utiliser quand on ajoute/retire un produit, change une section, ou aligne
  la copy avec Reply Fitness / AllSkills.
---

# Portfolio content

## Avant de modifier

1. Ouvrir `PROJECT_CONTEXT.md` — section **Flags actifs**.
2. Éditer `src/data/portfolio.ts` (source unique).
3. Assets → `public/projects/<slug>/`.

## Projets réalisés (`productionProjects`)

```ts
{
  title: 'Reply Fitness',
  tagline: '…',
  description: '…',
  work: ['SwiftUI', '…'],
  url: 'https://apps.apple.com/fr/app/reply-fitness/id6785667481',
  badge: 'App Store',
  imageSrc: '/projects/reply-fitness/promo.png',
}
```

- Produit App Store / live → `productionProjects` + `badge`.
- Pas de section études de cas GitHub.
- Ne jamais remettre Chellois·es.

## Navigation

`navSections` doit rester synchronisé avec les sections de `LandingShell`.
Ancres actuelles : `hero`, `positioning`, `architecture`, `production`, `skills`, `experience`, `contact`.

## Références externes

| Besoin | Où |
|--------|-----|
| Détail produit Reply | `../FitPro/PROJECT_CONTEXT.md` |
| Skills mobiles / ASO | `../AllSkills/README.md` |
