import type { Dict } from "./types";

const de: Dict = {
  meta: {
    title: "Voltaire — Gutscheinsystem für die gehobene Gastronomie",
    description:
      "Natives Gutscheinsystem für Schweizer Spitzenrestaurants. Direktverkauf auf Ihrer Website. Nur 1% Gebühr. TWINT, Stripe & Wimag Integration.",
  },
  nav: {
    solution: "Lösung",
    pricing: "Preise",
    contact: "Kontakt",
    cta: "Gratis installieren",
  },
  hero: {
    eyebrow: "Schweizer Gutscheinsystem · Made for Fine Dining",
    title: "Verkaufen Sie Gutscheine direkt.",
    titleAccent: "Ohne Marketplace. Ohne 20% Provision.",
    subtitle:
      "Voltaire integriert sich nativ in die Website Ihres Restaurants. Ihre Gäste kaufen Gutscheine in Ihrer Marke, in Ihrem Design — Sie behalten 99% des Umsatzes.",
    cta: "Gratis installieren",
    secondaryCta: "Demo ansehen",
    note: "Keine Einrichtungsgebühr · TWINT-fähig · DSGVO/revDSG konform",
  },
  socialProof: {
    label: "Vertraut von Restaurants in Zürich, Genf und Lugano",
  },
  solution: {
    eyebrow: "Die native Lösung",
    title: "Drei Zeilen Code. Null Reibung.",
    subtitle:
      "Kein neuer Marketplace. Kein neuer Login für Ihre Gäste. Nur ein Gutscheinsystem, das wie ein Teil Ihrer Website wirkt.",
    cards: [
      {
        title: "Native Integration",
        description:
          "Ein einziges Snippet auf Ihrer bestehenden Website. Keine Subdomain, keine Weiterleitung, keine fremde Marke.",
      },
      {
        title: "Vollständig anpassbar",
        description:
          "Ihre Typografie, Ihre Farben, Ihre Bildsprache. Voltaire wirkt wie eine Erweiterung Ihrer Marke.",
      },
      {
        title: "Schweizer Zahlungsmethoden",
        description:
          "Direkte Verbindung zu Ihrem Stripe-, Wimag- oder TWINT-Konto. Auszahlung am nächsten Werktag.",
      },
    ],
  },
  pricing: {
    eyebrow: "Preise",
    title: "Transparente 1% Gebühr pro Gutschein.",
    fee: "1%",
    feeUnit: "pro verkauftem Gutschein",
    subtitle:
      "Keine Einrichtungsgebühr. Keine monatlichen Fixkosten. Sie zahlen nur, wenn Sie verkaufen.",
    bullets: [
      "Unbegrenzte Gutscheine",
      "TWINT, Stripe, Wimag",
      "Mehrsprachiger Checkout",
      "Persönlicher Onboarding-Berater",
    ],
    cta: "Restaurant anmelden",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Gratis Analyse Ihrer Website.",
    subtitle:
      "Hinterlassen Sie uns Ihre Angaben. Ein Berater von Voltaire prüft Ihre Website und meldet sich innerhalb von 24 Stunden.",
    fields: {
      name: "Vollständiger Name",
      restaurant: "Name des Restaurants",
      email: "Geschäftliche E-Mail",
      website: "Website-URL",
      message: "Nachricht (optional)",
    },
    submit: "Anfrage senden",
    success: {
      title: "Vielen Dank.",
      body: "Ein Berater von Voltaire analysiert Ihre Website und kontaktiert Sie innerhalb von 24 Stunden.",
    },
    errors: {
      required: "Pflichtfeld",
      email: "Ungültige E-Mail-Adresse",
      url: "Ungültige URL (z. B. https://...)",
    },
  },
  footer: {
    tagline: "Das Gutscheinsystem für die Schweizer Spitzengastronomie.",
    rights: "Alle Rechte vorbehalten.",
    languageLabel: "Sprache",
  },
};

export default de;
