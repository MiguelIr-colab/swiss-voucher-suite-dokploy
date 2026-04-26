import type { Dict } from "./types";

const it: Dict = {
  meta: {
    title: "Voltaire — Sistema di buoni regalo per l'alta ristorazione",
    description:
      "Sistema di buoni regalo nativo per i ristoranti svizzeri d'eccellenza. Vendita diretta sul tuo sito. Solo 1% di commissione. TWINT, Stripe & Wimag.",
  },
  nav: {
    solution: "Soluzione",
    pricing: "Prezzi",
    contact: "Contatto",
    cta: "Installa gratis",
  },
  hero: {
    eyebrow: "Sistema svizzero di buoni regalo · Pensato per l'alta ristorazione",
    title: "Vendi i tuoi buoni regalo direttamente.",
    titleAccent: "Senza marketplace. Senza 20% di commissione.",
    subtitle:
      "Voltaire si integra nativamente nel sito del tuo ristorante. I tuoi ospiti acquistano i buoni nel tuo brand, nel tuo design — tu mantieni il 99% del fatturato.",
    cta: "Installa gratis",
    secondaryCta: "Guarda la demo",
    note: "Nessun costo di installazione · Compatibile TWINT · Conforme nLPD/GDPR",
  },
  socialProof: {
    label: "Scelto da ristoranti a Zurigo, Ginevra e Lugano",
  },
  solution: {
    eyebrow: "La soluzione nativa",
    title: "Tre righe di codice. Zero attrito.",
    subtitle:
      "Nessun nuovo marketplace. Nessun nuovo account per i tuoi ospiti. Solo un sistema di buoni regalo che sembra parte del tuo sito.",
    cards: [
      {
        title: "Integrazione nativa",
        description:
          "Un solo snippet sul tuo sito esistente. Nessun sottodominio, nessun reindirizzamento, nessun brand esterno.",
      },
      {
        title: "Completamente personalizzabile",
        description:
          "La tua tipografia, i tuoi colori, il tuo immaginario. Voltaire diventa un'estensione del tuo brand.",
      },
      {
        title: "Pagamenti svizzeri",
        description:
          "Connessione diretta al tuo account Stripe, Wimag o TWINT. Accredito il giorno lavorativo successivo.",
      },
    ],
  },
  pricing: {
    eyebrow: "Prezzi",
    title: "Commissione trasparente dell'1% per buono.",
    fee: "1%",
    feeUnit: "per buono venduto",
    subtitle:
      "Nessun costo di installazione. Nessun canone mensile. Paghi solo quando vendi.",
    bullets: [
      "Buoni illimitati",
      "TWINT, Stripe, Wimag",
      "Checkout multilingue",
      "Consulente di onboarding dedicato",
    ],
    cta: "Iscrivi il mio ristorante",
  },
  contact: {
    eyebrow: "Contatto",
    title: "Audit gratuito del tuo sito.",
    subtitle:
      "Lasciaci i tuoi dati. Un consulente Voltaire analizzerà il tuo sito e ti contatterà entro 24 ore.",
    fields: {
      name: "Nome completo",
      restaurant: "Nome del ristorante",
      email: "Email aziendale",
      website: "URL del sito",
      message: "Messaggio (opzionale)",
    },
    submit: "Invia richiesta",
    success: {
      title: "Grazie.",
      body: "Un consulente Voltaire analizzerà il tuo sito e ti contatterà entro 24 ore.",
    },
    errors: {
      required: "Campo obbligatorio",
      email: "Email non valida",
      url: "URL non valida (es. https://...)",
    },
  },
  footer: {
    tagline: "Il sistema di buoni regalo per l'alta ristorazione svizzera.",
    rights: "Tutti i diritti riservati.",
    languageLabel: "Lingua",
  },
};

export default it;
