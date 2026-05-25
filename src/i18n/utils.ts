import {
  translations,
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
} from "./translations";

/**
 * Base path du déploiement (ex. "/lacamwsh/" sur GitHub Pages, "/" en dev).
 * Fourni par Vite/Astro via la config `base` dans astro.config.mjs.
 * On normalise pour garantir un trailing slash (Vite ne le fait pas toujours).
 */
const BASE_RAW = import.meta.env.BASE_URL;
const BASE = BASE_RAW.endsWith("/") ? BASE_RAW : `${BASE_RAW}/`;
/** Base sans le trailing slash, ou "" si on est à la racine. */
const BASE_PREFIX = BASE === "/" ? "" : BASE.replace(/\/$/, "");

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
 * Retire le préfixe `base` (`/lacamwsh`) d'un chemin pour pouvoir raisonner
 * en chemins logiques. No-op si on déploie à la racine.
 *   stripBase("/lacamwsh/en/collections") → "/en/collections"
 *   stripBase("/en/collections")          → "/en/collections" (si pas de base)
 */
function stripBase(path: string): string {
  if (!BASE_PREFIX) return path;
  if (path === BASE_PREFIX) return "/";
  if (path.startsWith(BASE_PREFIX + "/")) return path.slice(BASE_PREFIX.length);
  return path;
}

/**
 * Préfixe un chemin avec le `base` du déploiement.
 *   addBase("/en/collections") → "/lacamwsh/en/collections"
 *   addBase("/")               → "/lacamwsh"
 */
function addBase(path: string): string {
  if (!BASE_PREFIX) return path || "/";
  if (path === "/" || path === "") return BASE_PREFIX;
  return `${BASE_PREFIX}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Préfixe un chemin avec la locale + le base path du déploiement.
 *   localizePath("/collections", "en") → "/lacamwsh/en/collections"
 *   localizePath("/collections", "fr") → "/lacamwsh/collections" (locale par défaut, pas de préfixe)
 *   localizePath("/",            "pt") → "/lacamwsh/pt"
 *
 * Note : pour les anchors (#contact) ou liens externes (https://, mailto:),
 * ne PAS passer par cette fonction — utiliser le href tel quel.
 */
export function localizePath(
  path: string,
  locale: Locale | string | undefined,
): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  let withLocale: string;
  if (!locale || locale === DEFAULT_LOCALE) {
    withLocale = cleanPath;
  } else if (cleanPath === "/") {
    withLocale = `/${locale}`;
  } else {
    withLocale = `/${locale}${cleanPath}`;
  }
  return addBase(withLocale);
}

/**
 * Retire le préfixe de locale d'un chemin (ET le base path).
 *   stripLocaleFromPath("/lacamwsh/en/collections") → "/collections"
 *   stripLocaleFromPath("/lacamwsh/pt")             → "/"
 *   stripLocaleFromPath("/lacamwsh/collections")    → "/collections"
 */
export function stripLocaleFromPath(path: string): string {
  const noBase = stripBase(path);
  for (const loc of LOCALES) {
    if (loc === DEFAULT_LOCALE) continue;
    if (noBase === `/${loc}` || noBase === `/${loc}/`) return "/";
    if (noBase.startsWith(`/${loc}/`)) return noBase.slice(loc.length + 1);
  }
  return noBase;
}

/**
 * Renvoie le chemin équivalent dans une autre langue (avec base inclus).
 *   switchLocale("/lacamwsh/en/collections/portraits", "pt")
 *     → "/lacamwsh/pt/collections/portraits"
 *   switchLocale("/lacamwsh/en/collections/portraits", "fr")
 *     → "/lacamwsh/collections/portraits"
 */
export function switchLocale(
  currentPath: string,
  targetLocale: Locale,
): string {
  const stripped = stripLocaleFromPath(currentPath);
  return localizePath(stripped, targetLocale);
}

/**
 * Préfixe un asset statique de /public avec le base path.
 *   asset("favicon.svg") → "/lacamwsh/favicon.svg"
 *   asset("/favicon.svg") → "/lacamwsh/favicon.svg"
 */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
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
