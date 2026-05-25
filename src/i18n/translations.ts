/**
 * Dictionnaire i18n — FR (référence) / EN / PT
 *
 * Usage côté HTML : <h2 data-i18n="about.title">À propos</h2>
 *   → le script i18n remplace le textContent selon la locale active.
 *
 * Pour les attributs : <a data-i18n-attr="aria-label:nav.home">…</a>
 *   → met à jour l'attribut `aria-label` avec la clé `nav.home`.
 */
export type Locale = "fr" | "en" | "pt";

export const LOCALES: Locale[] = ["fr", "en", "pt"];
export const DEFAULT_LOCALE: Locale = "fr";

export const translations: Record<Locale, Record<string, string>> = {
  fr: {
    "nav.all": "Toutes",
    "nav.collections": "Collections",
    "nav.home": "Accueil",
    "menu.contact": "Contact",
    "menu.theme.dark": "Mode sombre",
    "menu.theme.light": "Mode clair",
    "menu.lang.fr": "Français",
    "menu.lang.en": "Anglais",
    "menu.lang.pt": "Portugais",
    "hero.tagline": "Portraits & mode editorial",
    "about.eyebrow": "À propos",
    "about.title": "Camille Neto, portraitiste",
    "about.lead":
      "Photographe spécialisée dans la mode éditoriale et le portrait d'auteur, basée entre Paris et Lisbonne. Travaille principalement à la lumière naturelle.",
    "about.body":
      "Diplômée des Gobelins, publiée dans plusieurs magazines indépendants (Vogue Italia, Numéro, M Le Monde). Approche intimiste, attention aux textures et au geste — la photographie comme rencontre.",
    "contact.eyebrow": "Contact",
    "contact.title": "Travaillons ensemble",
    "collections.title": "Toutes les collections",
    "collections.eyebrow": "Index",
    "collections.meta": "séries",
    "scroll.cue": "Faire défiler",
  },
  en: {
    "nav.all": "All",
    "nav.collections": "Collections",
    "nav.home": "Home",
    "menu.contact": "Contact",
    "menu.theme.dark": "Dark mode",
    "menu.theme.light": "Light mode",
    "menu.lang.fr": "French",
    "menu.lang.en": "English",
    "menu.lang.pt": "Portuguese",
    "hero.tagline": "Portraits & editorial fashion",
    "about.eyebrow": "About",
    "about.title": "Camille Neto, portraitist",
    "about.lead":
      "Photographer specialising in editorial fashion and author portraits, based between Paris and Lisbon. Mainly works with natural light.",
    "about.body":
      "Graduate of Les Gobelins, published in several independent magazines (Vogue Italia, Numéro, M Le Monde). Intimate approach, attentive to textures and gestures — photography as an encounter.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's work together",
    "collections.title": "All collections",
    "collections.eyebrow": "Index",
    "collections.meta": "series",
    "scroll.cue": "Scroll down",
  },
  pt: {
    "nav.all": "Todas",
    "nav.collections": "Coleções",
    "nav.home": "Início",
    "menu.contact": "Contacto",
    "menu.theme.dark": "Modo escuro",
    "menu.theme.light": "Modo claro",
    "menu.lang.fr": "Francês",
    "menu.lang.en": "Inglês",
    "menu.lang.pt": "Português",
    "hero.tagline": "Retratos & moda editorial",
    "about.eyebrow": "Sobre",
    "about.title": "Camille Neto, retratista",
    "about.lead":
      "Fotógrafa especializada em moda editorial e retrato de autor, baseada entre Paris e Lisboa. Trabalha sobretudo com luz natural.",
    "about.body":
      "Diplomada pelos Gobelins, publicada em várias revistas independentes (Vogue Italia, Numéro, M Le Monde). Abordagem intimista, atenta às texturas e ao gesto — a fotografia como encontro.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Vamos trabalhar juntos",
    "collections.title": "Todas as coleções",
    "collections.eyebrow": "Índice",
    "collections.meta": "séries",
    "scroll.cue": "Descer",
  },
};
