# Change Log

## 2026-03-07

### 17:40
- Task: Rendre le sommaire flottant avec sticky scroll.
- Fichiers: `src/components/navigation/NavMenu.tsx`
- Tests: Non executes (changement purement UI).

### 17:43
- Task: Corriger la 404 en rendant le basePath conditionnel (dev vs production).
- Fichiers: `next.config.js`
- Tests: Non executes (changer config Next; necessite relancer le dev server).

### 17:44
- Task: Mettre le label du sommaire en "Intro" et supprimer les hints pour ne plus afficher le sommaire en double.
- Fichiers: `src/data/portfolio.ts`
- Tests: Non executes (simple data change).

### 17:48
- Task: Stabiliser la detection de section active (observer multi seuils + memo ids) pour que le hover/actif suive scroll et clic.
- Fichiers: `src/hooks/useActiveSection.ts`, `src/components/LandingShell.tsx`
- Tests: Non executes (controle a faire via navigation manuelle).

### 17:50
- Task: Gestion du cas fin de page pour activer "Contact" lorsque l on atteint le bas.
- Fichiers: `src/hooks/useActiveSection.ts`
- Tests: Non executes (verifier via scroll manuel).
### 17:54
- Task: Remplacer Resend par un formulaire Web3Forms (component client, env example, nettoyage deps).
- Fichiers: `package.json`, `package-lock.json`, `src/components/ContactSection.tsx`, `src/components/forms/ContactForm.tsx`, `.env.example`
- Tests: Non executes (verification manuelle formulaire requise).
### 18:00
- Task: Assurer l'activation du sommaire Formation via un seuil precedent et garder Contact pour le bas de page.
- Fichiers: `src/hooks/useActiveSection.ts`
- Tests: Non executes (controle scroll requis).
### 18:03
- Task: Permettre l activation immediate du sommaire au clic (expose setter + callback NavMenu).
- Fichiers: `src/hooks/useActiveSection.ts`, `src/components/LandingShell.tsx`, `src/components/navigation/NavMenu.tsx`
- Tests: Non executes (verifier via clic/scroll nav).
### 18:08
- Task: Synchroniser le clic + scroll du sommaire (override manuel + smooth scroll CSS).
- Fichiers: `src/hooks/useActiveSection.ts`, `src/components/LandingShell.tsx`, `src/components/navigation/NavMenu.tsx`, `src/app/globals.css`
- Tests: Non executes (verifier clic/scroll nav).
### 18:10
- Task: Fusionner Experience et Formation (section combinee + menu nettoye).
- Fichiers: `src/components/ExperienceSection.tsx`, `src/components/LandingShell.tsx`, `src/data/portfolio.ts`
- Tests: Non executes (verifier nav/scroll manuellement).
### 18:34
- Task: Harmoniser le contenu SEO (nav sans "En ce moment", hero/sections re-rediges, contact mis a jour).
- Fichiers: `src/data/portfolio.ts`, `src/components/LandingShell.tsx`, `src/components/ContactSection.tsx`
- Tests: Non executes (verifier rendu statique).
