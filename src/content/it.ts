import type { PageContent } from "@/components/site/PageSections";

export const contentIT: PageContent = {
  hero: {
    eyebrow: "Sistema voucher per ristoranti gourmet",
    titleA: "Vendi voucher sul tuo sito.",
    titleB: "Senza intermediari.",
    subtitle: "Voltaire si integra nativamente nel tuo sito. Niente marketplace, niente commissioni terze. Solo tu e i tuoi ospiti.",
    ctaPrimary: "Richiedi una demo",
    ctaSecondary: "Scopri di più",
    note: "Nessun costo di setup · Online in 7 giorni · TWINT, Stripe & Wimag",
  },
  social: { label: "La fiducia dei ristoranti d'autore svizzeri" },
  solution: {
    eyebrow: "Piattaforma",
    title: "Un motore voucher che vive nel tuo brand.",
    subtitle: "Nessun redirect a siti esterni. Tutto avviene sul tuo dominio.",
    cards: [
      { title: "Integrazione nativa", description: "Una riga di codice. Compatibile con WordPress, Webflow, Wix o stack custom." },
      { title: "La tua identità", description: "Design, font e colori dei voucher allineati al tuo brand." },
      { title: "Pagamenti svizzeri", description: "TWINT, carte e bonifico. Settlement in CHF, conforme IVA." },
    ],
  },
  pricing: {
    eyebrow: "Prezzi",
    title: "2% di commissione. 0 CHF fissi. 0 CHF setup.",
    subtitle: "per transazione",
    bullets: [
      "Nessun canone mensile, nessun costo nascosto",
      "Guadagniamo solo quando vendi",
      "Pagamenti in CHF, ogni settimana",
      "Conforme IVA e GDPR",
    ],
    cta: "Inizia ora",
  },
  trust: { title: "Integrazione nativa con", items: ["TWINT", "Stripe", "Wimag"] },
  contact: {
    eyebrow: "Contatti",
    title: "Parla con il nostro team.",
    subtitle: "Rispondiamo entro un giorno lavorativo e pianifichiamo una demo di 20 minuti.",
    fields: { name: "Nome", restaurant: "Ristorante", website: "Sito web", email: "Email" },
    submit: "Richiedi una demo",
    success: { title: "Grazie!", body: "Ti ricontatteremo entro un giorno lavorativo." },
    errors: { required: "Campo obbligatorio", email: "Email non valida", url: "URL valido richiesto (https://)" },
  },
};

export const navIT = { solution: "Piattaforma", pricing: "Prezzi", contact: "Contatti" };
export const ctaIT = "Richiedi una demo";
export const footerIT = { tagline: "Il sistema voucher per i ristoranti gourmet svizzeri.", rights: "Tutti i diritti riservati." };
export const metaIT = {
  title: "Voltaire — Sistema voucher per ristoranti svizzeri",
  description: "Vendi voucher direttamente sul tuo sito. 2% di commissione. TWINT, Stripe & Wimag. Senza intermediari.",
};
