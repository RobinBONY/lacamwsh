# CLAUDE.md — Contexte projet

Fichier d'environnement pour les sessions Claude Code. À tenir à jour à chaque décision structurante.

---

## 1. Nature du projet

Site vitrine pour un **photographe** (client final), construit avec **Astro** afin que le client puisse **ajouter de nouvelles collections sans recoder** — chaque collection = un fichier `.md` dans un dossier dédié.

**Domaine de prod (prévu)** : `https://robinbony.github.io` (GitHub Pages, déploiement via Actions).

---

## 2. Stack technique

- **Framework** : Astro 5.17 (migration vers 6.x à prévoir)
- **CSS** : Tailwind CSS 4 (via `@tailwindcss/vite`) + design tokens via `@theme`
- **SEO** : `@astrojs/sitemap` (génère `sitemap-index.xml` + hreflang multi-langue)
- **i18n** : Astro natif (FR par défaut, /en/, /pt/ préfixés)
- **Thème** : dark/light toggle via `localStorage` + classe `.dark` sur `<html>`
- **Composants UI** : ❌ Flowbite désinstallé — composants custom (lightbox, dropdown lang, navbar intercalaires) plus légers et cohérents avec l'identité artistique

---

## 3. Architecture des pages & layouts

### Pages (i18n natif Astro — FR par défaut, /en/ et /pt/ préfixés)

| Route                          | Rôle                                                     |
|--------------------------------|----------------------------------------------------------|
| `/` + `/en/` + `/pt/`          | Accueil — 3 écrans full-height : Hero, À propos, Contact |
| `/collections` + `/en/...` + `/pt/...` | Mosaïque listant toutes les collections          |
| `/collections/[slug]` + `/en/...` + `/pt/...` | Page d'une collection : galerie aléatoire |

**Pattern** : chaque page-fichier (`src/pages/[locale]/.../page.astro`) est une coquille à 3 lignes qui importe le composant réutilisable de `src/components/pages/` et lui passe `locale` en prop. Les composants traduisent au build via `getT(locale)` (helper dans `src/i18n/utils.ts`).

### Layouts à créer

1. **`MainLayout.astro`** *(existe — à compléter)* — shell global : `<head>`, panel (logo + menu + navbar verticale), `<slot/>`. Inclut le thème dark/light.
2. **`CollectionsIndexLayout.astro`** *(à créer)* — mosaïque des covers, lit le frontmatter `cover` de chaque `.md`.
3. **`CollectionLayout.astro`** *(à créer)* — galerie aléatoire d'une collection. Utilise Flowbite Gallery. **Ordre des photos randomisé à chaque visite** (client-side après hydratation, pour ne pas casser le SSG).

### Source de contenu

- Collections : `src/content/collections/*.md`
- Frontmatter attendu (à valider avec Astro Content Collections) :
  ```yaml
  ---
  title: "Portraits d'atelier"
  slug: "portraits-atelier"
  cover: "/images/collections/portraits-atelier/cover.jpg"
  description: "Série réalisée à l'hiver 2025"
  date: 2025-01-15
  photos:
    - "/images/collections/portraits-atelier/01.jpg"
    - "/images/collections/portraits-atelier/02.jpg"
  ---
  ```
- À implémenter avec **`astro:content`** (typage Zod + collection automatique).

---

## 4. Navigation

- **Logo top-left** → retour accueil (`/`)
- **Bouton "Toutes les collections"** → `/collections`
- **Navbar verticale gauche** : intercalaires type **trieur scolaire** — un onglet par collection, scrollable verticalement. Généré dynamiquement depuis la collection Astro.
- État actuel : navbar a deux items statiques (Séries, Vidéos) — **à remplacer** par la liste dynamique des collections.

---

## 5. Identité visuelle (décisions du 2026-05-25)

| Axe                     | Choix                                                              |
|-------------------------|--------------------------------------------------------------------|
| Univers photo           | **Portraits / mode éditoriale**                                    |
| Palette                 | **Noir profond** dominant + **papier déchiré clair** (ivoire/blanc cassé) qui révèle le contenu |
| Typographie             | **Helvetica** (Swiss modernist — contraste avec le côté organique du papier) |
| Effet « papier déchiré »| **Partout** comme effet de style : backgrounds, transitions de sections, cadres photos, intercalaires navbar, accents UI |

**Référence d'ambiance** : catalogue d'exposition photo (Magnum, Aperture, MoMA) — sobre, dramatique, l'image prime.

---

## 6. Conventions de code

### Arborescence
```
src/
├── components/
│   ├── pages/            ← composants de page partagés entre locales (HomePage, CollectionsIndex, CollectionPage)
│   ├── ui/               ← briques UI réutilisables (SEO, SectionTitle, SectionEyebrow, SectionLead)
│   ├── TornPaper.astro   ← composant signature du projet
│   ├── Navbar.astro      ← intercalaires (desktop) / bandeau (mobile)
│   ├── Menu.astro        ← topbar droite : contact + thème + langue
│   ├── Logo.astro
│   └── Panel.astro       ← topbar + navbar wrapper
├── pages/                ← uniquement des coquilles 3 lignes qui appellent components/pages/
├── layouts/
│   └── MainLayout.astro  ← <html>, <head> via <SEO>, ClientRouter, theme script
├── i18n/
│   ├── translations.ts   ← dictionnaire FR/EN/PT
│   └── utils.ts          ← getT, localizePath, switchLocale, formatDate
├── content/collections/  ← .md du client (1 par série photo)
├── styles/global.css     ← @theme tokens + variables sémantiques bg/fg
└── content.config.ts     ← schéma Zod de la collection
```

### Règles
- **Tailwind d'abord** pour la mise en page, l'espacement, la typo. CSS scoped uniquement pour ce que Tailwind ne fait pas bien (animations, clip-path, ::after, sélecteurs complexes).
- **Variables CSS sémantiques** (`var(--color-bg)`, `var(--color-fg)`) pour ce qui change avec le thème.
- **Tokens raw** (`bg-paper`, `text-ink`) via `@theme` pour des couleurs fixes.
- Naming composants : PascalCase ; fichiers .md : kebab-case
- **`data-astro-prefetch`** sur les liens internes vers d'autres pages collections (latence perçue ↓)
- **SEO** : passer par `<SEO>` dans MainLayout, jamais écrire les meta à la main dans une page

---

## 7. Commandes utiles

```bash
npm run dev      # Astro dev sur localhost:4321
npm run build    # Build statique vers ./dist
npm run preview  # Servir le build
```

---

## 8. Roadmap

### ✅ Fait
- [x] Astro Content Collections (`src/content.config.ts` + 3 .md d'exemple)
- [x] Page `/collections` (mosaïque de cartes papier déchiré)
- [x] Route dynamique `/collections/[slug]` + galerie aléatoire client-side
- [x] Composant `<TornPaper />` réutilisable (5 variants, 3 tons, grain papier)
- [x] Navbar verticale en **intercalaires papier déchiré** (mobile : bandeau bas)
- [x] Home : 3 sections en scroll-snap avec animation Hero
- [x] Lightbox sur la galerie (clavier ←/→/Esc)
- [x] ~~i18n FR/EN/PT client-side~~ → **migré vers i18n natif Astro** (URLs `/`, `/en/`, `/pt/`, SEO + hreflang)
- [x] Polish : nom Camille Neto, bio, contacts, favicon monogramme CN, meta OG

### À venir
- [ ] Vraies photos locales (remplacer les unsplash placeholders) → utiliser `<Image />` d'`astro:assets`
- [ ] Formulaire de contact fonctionnel (Formspree / Netlify Forms)
- [ ] `robots.txt` (le sitemap est OK)
- [ ] Migration vers Astro 6
- [ ] Tests avec un volume élevé de collections (perf navbar verticale)
- [ ] Lighthouse audit complet

---

## 9. Notes & questions ouvertes

- **Identité du photographe** : nom, bio, photo, contacts (email, IG, tel) — à demander au client.
- **Volume attendu** de collections : ~10 ? 50 ? — influence le scroll de la navbar.
- **Photos hautes-résolutions** : prévoir optimisation via `astro:assets` (`<Image />`).
- **Effet papier déchiré** : technique privilégiée à valider — SVG `<mask>`, `clip-path: polygon()` irrégulier, ou image PNG avec alpha + `mask-image` ? (À tester après le prototype Claude Design.)
