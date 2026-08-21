/**
 * Dictionnaire i18n — FR (référence) / EN / PT
 *
 * Résolu au build via getT(locale) (voir i18n/utils.ts).
 * Fallback : clé absente pour `locale` → FR → la clé elle-même.
 */
export type Locale = "fr" | "en" | "pt";

export const LOCALES: Locale[] = ["fr", "en", "pt"];
export const DEFAULT_LOCALE: Locale = "fr";

export const translations: Record<Locale, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.all": "Toutes",
    "nav.collections": "Toutes les collections",
    "nav.home": "Accueil",
    "nav.skip": "Aller au contenu",
    "menu.contact": "Contact",
    "menu.lang.fr": "Français",
    "menu.lang.en": "Anglais",
    "menu.lang.pt": "Portugais",

    // Hero
    "hero.kicker": "Édition 2026 · Paris — Lisbonne",
    "hero.tag1": "Portraits",
    "hero.tag2": "Mode éditoriale",
    "hero.tag3": "2016—2026",
    "hero.lead":
      "Le visage comme paysage. Dix ans de portraits à la frontière du document et de la fiction.",
    "hero.scroll": "Défiler",

    // À propos
    "about.eyebrow": "Biographie",
    "about.title": "Camille Neto, portraitiste",
    "about.lead":
      "Photographe spécialisée dans la mode éditoriale et le portrait d'auteur, basée entre Paris et Lisbonne. Travaille principalement à la lumière naturelle.",
    "about.body":
      "Diplômée des Gobelins, publiée dans plusieurs magazines indépendants (Vogue Italia, Numéro, M Le Monde). Approche intimiste, attention aux textures et au geste — la photographie comme rencontre.",
    "about.quote":
      "« Je ne cherche pas à révéler les gens. Je cherche à les laisser apparaître. »",
    "about.quoteAuthor": "— Camille Neto",
    "about.photoCaption": "CN_self_002.tif",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.title": "Écrire à l'atelier",
    "contact.lead":
      "Pour toute demande éditoriale, commande de portrait, tirage ou cours particulier, laissez-moi un mot. Réponse sous 5 jours ouvrés.",
    "contact.studioLabel": "Atelier",
    "contact.studio": "Paris 11ᵉ & Lisbonne",
    "contact.availLabel": "Disponibilité",
    "contact.avail": "Commandes ouvertes — 2026",
    "contact.formTag": "Formulaire — 03.01",
    "contact.form.nameLabel": "Nom complet",
    "contact.form.namePh": "Camille Lefèvre",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPh": "camille@studio.fr",
    "contact.form.subjectLabel": "Sujet",
    "contact.form.subject1": "Commande éditoriale",
    "contact.form.subject2": "Portrait privé",
    "contact.form.subject3": "Tirage / acquisition",
    "contact.form.subject4": "Autre",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePh": "Quelques mots sur le projet, ses dates et son contexte…",
    "contact.form.privacy": "Ne sera transmis qu'à l'atelier.",
    "contact.form.send": "Envoyer →",
    "contact.form.confirm": "✓ Message reçu. Réponse sous 5 jours ouvrés.",

    // Index des collections
    "collections.title": "Toutes les collections",
    "collections.eyebrow": "Index",
    "collections.meta": "séries",
    "collections.intro":
      "↳ Chaque série rassemble une planche-contact de portraits. Cliquer pour l'ouvrir en entier.",

    // Page collection
    "collection.back": "Index",
    "collection.metaPeriodLabel": "Période",
    "collection.metaFormatLabel": "Format",
    "collection.metaFormat": "Numérique & argentique, N&B",
    "collection.metaSeriesLabel": "Mots-clés",
    "collection.viewFull": "Voir la planche complète →",
    "collection.platesShown": "planches affichées",

    "scroll.cue": "Faire défiler",
  },
  en: {
    "nav.all": "All",
    "nav.collections": "All collections",
    "nav.home": "Home",
    "nav.skip": "Skip to content",
    "menu.contact": "Contact",
    "menu.lang.fr": "French",
    "menu.lang.en": "English",
    "menu.lang.pt": "Portuguese",

    "hero.kicker": "Edition 2026 · Paris — Lisbon",
    "hero.tag1": "Portraits",
    "hero.tag2": "Editorial fashion",
    "hero.tag3": "2016—2026",
    "hero.lead":
      "The face as landscape. Ten years of portraiture on the edge of document and fiction.",
    "hero.scroll": "Scroll",

    "about.eyebrow": "Biography",
    "about.title": "Camille Neto, portraitist",
    "about.lead":
      "Photographer specialising in editorial fashion and author portraits, based between Paris and Lisbon. Mainly works with natural light.",
    "about.body":
      "Graduate of Les Gobelins, published in several independent magazines (Vogue Italia, Numéro, M Le Monde). Intimate approach, attentive to textures and gestures — photography as an encounter.",
    "about.quote":
      "“I don't try to reveal people. I try to let them appear.”",
    "about.quoteAuthor": "— Camille Neto",
    "about.photoCaption": "CN_self_002.tif",

    "contact.eyebrow": "Contact",
    "contact.title": "Write to the studio",
    "contact.lead":
      "For any editorial request, portrait commission, print or private lesson, leave me a note. Reply within 5 working days.",
    "contact.studioLabel": "Studio",
    "contact.studio": "Paris 11th & Lisbon",
    "contact.availLabel": "Availability",
    "contact.avail": "Commissions open — 2026",
    "contact.formTag": "Form — 03.01",
    "contact.form.nameLabel": "Full name",
    "contact.form.namePh": "Camille Lefèvre",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPh": "camille@studio.fr",
    "contact.form.subjectLabel": "Subject",
    "contact.form.subject1": "Editorial commission",
    "contact.form.subject2": "Private portrait",
    "contact.form.subject3": "Print / acquisition",
    "contact.form.subject4": "Other",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePh": "A few words about the project, its dates and context…",
    "contact.form.privacy": "Sent to the studio only.",
    "contact.form.send": "Send →",
    "contact.form.confirm": "✓ Message received. Reply within 5 working days.",

    "collections.title": "All collections",
    "collections.eyebrow": "Index",
    "collections.meta": "series",
    "collections.intro":
      "↳ Each series gathers a contact sheet of portraits. Click to open it in full.",

    "collection.back": "Index",
    "collection.metaPeriodLabel": "Period",
    "collection.metaFormatLabel": "Format",
    "collection.metaFormat": "Digital & film, B&W",
    "collection.metaSeriesLabel": "Keywords",
    "collection.viewFull": "See the full contact sheet →",
    "collection.platesShown": "plates shown",

    "scroll.cue": "Scroll down",
  },
  pt: {
    "nav.all": "Todas",
    "nav.collections": "Todas as coleções",
    "nav.home": "Início",
    "nav.skip": "Ir para o conteúdo",
    "menu.contact": "Contacto",
    "menu.lang.fr": "Francês",
    "menu.lang.en": "Inglês",
    "menu.lang.pt": "Português",

    "hero.kicker": "Edição 2026 · Paris — Lisboa",
    "hero.tag1": "Retratos",
    "hero.tag2": "Moda editorial",
    "hero.tag3": "2016—2026",
    "hero.lead":
      "O rosto como paisagem. Dez anos de retrato na fronteira entre documento e ficção.",
    "hero.scroll": "Descer",

    "about.eyebrow": "Biografia",
    "about.title": "Camille Neto, retratista",
    "about.lead":
      "Fotógrafa especializada em moda editorial e retrato de autor, baseada entre Paris e Lisboa. Trabalha sobretudo com luz natural.",
    "about.body":
      "Diplomada pelos Gobelins, publicada em várias revistas independentes (Vogue Italia, Numéro, M Le Monde). Abordagem intimista, atenta às texturas e ao gesto — a fotografia como encontro.",
    "about.quote":
      "«Não procuro revelar as pessoas. Procuro deixá-las aparecer.»",
    "about.quoteAuthor": "— Camille Neto",
    "about.photoCaption": "CN_self_002.tif",

    "contact.eyebrow": "Contacto",
    "contact.title": "Escrever ao atelier",
    "contact.lead":
      "Para qualquer pedido editorial, encomenda de retrato, impressão ou aula particular, deixe-me uma mensagem. Resposta em 5 dias úteis.",
    "contact.studioLabel": "Atelier",
    "contact.studio": "Paris 11.º & Lisboa",
    "contact.availLabel": "Disponibilidade",
    "contact.avail": "Encomendas abertas — 2026",
    "contact.formTag": "Formulário — 03.01",
    "contact.form.nameLabel": "Nome completo",
    "contact.form.namePh": "Camille Lefèvre",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPh": "camille@studio.fr",
    "contact.form.subjectLabel": "Assunto",
    "contact.form.subject1": "Encomenda editorial",
    "contact.form.subject2": "Retrato privado",
    "contact.form.subject3": "Impressão / aquisição",
    "contact.form.subject4": "Outro",
    "contact.form.messageLabel": "Mensagem",
    "contact.form.messagePh": "Algumas palavras sobre o projeto, as suas datas e contexto…",
    "contact.form.privacy": "Enviado apenas ao atelier.",
    "contact.form.send": "Enviar →",
    "contact.form.confirm": "✓ Mensagem recebida. Resposta em 5 dias úteis.",

    "collections.title": "Todas as coleções",
    "collections.eyebrow": "Índice",
    "collections.meta": "séries",
    "collections.intro":
      "↳ Cada série reúne uma folha de contacto de retratos. Clique para a abrir por inteiro.",

    "collection.back": "Índice",
    "collection.metaPeriodLabel": "Período",
    "collection.metaFormatLabel": "Formato",
    "collection.metaFormat": "Digital & analógico, P&B",
    "collection.metaSeriesLabel": "Palavras-chave",
    "collection.viewFull": "Ver a folha de contacto completa →",
    "collection.platesShown": "provas mostradas",

    "scroll.cue": "Descer",
  },
};
