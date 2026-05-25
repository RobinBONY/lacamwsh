import {
  translations,
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
} from "./translations";

/**
 * Renvoie une fonction `t(key)` qui résout les traductions pour la locale donnée.
 * Fallback : si la clé n'existe pas pour `locale`, on cherche en FR, sinon on renvoie la clé.
 */
export function getT(locale: Locale | string | undefined) {
  const l = (locale && LOCALES.includes(locale as Locale) ? locale : DEFAULT_LOCALE) as Locale;
  return (key: string): string => {
    return translations[l]?.[key] ?? translations[DEFAULT_LOCALE][key] ?? key;
  };
}

/**
 * Préfixe un chemin avec la locale (sauf si c'est la locale par défaut).
 *   localizePath("/collections", "en") → "/en/collections"
 *   localizePath("/collections", "fr") → "/collections"
 *   localizePath("/",            "pt") → "/pt"
 */
export function localizePath(
  path: string,
  locale: Locale | string | undefined,
): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (!locale || locale === DEFAULT_LOCALE) return cleanPath;
  // Cas particulier de la racine
  if (cleanPath === "/") return `/${locale}`;
  return `/${locale}${cleanPath}`;
}

/**
 * Retire le préfixe de locale d'un chemin.
 *   stripLocale("/en/collections") → "/collections"
 *   stripLocale("/pt")             → "/"
 *   stripLocale("/collections")    → "/collections"
 */
export function stripLocaleFromPath(path: string): string {
  for (const loc of LOCALES) {
    if (loc === DEFAULT_LOCALE) continue;
    if (path === `/${loc}`) return "/";
    if (path.startsWith(`/${loc}/`)) return path.slice(loc.length + 1);
  }
  return path;
}

/**
 * Renvoie le chemin équivalent dans une autre langue.
 *   switchLocale("/en/collections/portraits", "pt") → "/pt/collections/portraits"
 *   switchLocale("/en/collections/portraits", "fr") → "/collections/portraits"
 */
export function switchLocale(
  currentPath: string,
  targetLocale: Locale,
): string {
  const stripped = stripLocaleFromPath(currentPath);
  return localizePath(stripped, targetLocale);
}

/**
 * Formatte une date selon la locale (pour les pages collection).
 */
export function formatDate(
  date: Date,
  locale: Locale | string | undefined,
): string {
  const l = (locale && LOCALES.includes(locale as Locale) ? locale : DEFAULT_LOCALE) as Locale;
  const tag = l === "en" ? "en-GB" : l === "pt" ? "pt-PT" : "fr-FR";
  return date.toLocaleDateString(tag, {
    year: "numeric",
    month: "long",
  });
}

export { LOCALES, DEFAULT_LOCALE, type Locale };
