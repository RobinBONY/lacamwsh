import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Collection « collections » = une page-galerie par fichier .md
 * dans src/content/collections/<slug>.md
 *
 * Le slug de l'URL est dérivé du nom de fichier :
 *   portraits-atelier.md  →  /collections/portraits-atelier
 *
 * Les champs cover/photos acceptent :
 *  - une URL externe (string)        → ex. Unsplash, CDN
 *  - un chemin local depuis /public/  → ex. /images/atelier/cover.jpg
 *
 * Pour les images locales optimisées via `astro:assets`, importer dans
 * un composant : import { Image } from "astro:assets" puis bénéficier
 * du sizing, webp/avif automatique, lazy loading natif.
 */
const photoCollections = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/collections",
  }),
  schema: z.object({
    /** Titre affiché dans la navbar, la cover et la page collection */
    title: z.string(),
    /** Phrase courte affichée sous le titre (optionnel) */
    description: z.string().optional(),
    /** Date de la série — sert au tri (plus récent en premier) */
    date: z.coerce.date(),
    /** Image de couverture pour la mosaïque /collections (URL ou chemin /public) */
    cover: z.string().url().or(z.string().startsWith("/")),
    /** Liste des photos (URLs ou chemins /public) */
    photos: z
      .array(z.string().url().or(z.string().startsWith("/")))
      .min(1, "Au moins 1 photo requise"),
    /** Tags pour catégoriser (optionnel) — ex. ["portrait", "noir-et-blanc"] */
    tags: z.array(z.string()).optional(),
    /** Mettre à true pour cacher la collection du site (brouillon) */
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  collections: photoCollections,
};
