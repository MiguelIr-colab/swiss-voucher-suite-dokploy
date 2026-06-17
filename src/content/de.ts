import type { PageContent } from "@/components/site/PageSections";

export const contentDE: PageContent = {
  hero: {
    eyebrow: "Voucher-System für Gourmet-Restaurants",
    titleA: "Verkaufe Vouchers auf deiner Website.",
    titleB: "Ohne Zwischenhändler.",
    subtitle: "Voltaire integriert sich nativ in deine Website. Kein Marketplace, keine Provisionen an Dritte. Nur du und deine Gäste.",
    ctaPrimary: "Demo anfragen",
    ctaSecondary: "Mehr erfahren",
    note: "Keine Einrichtungskosten · Live in 7 Tagen · TWINT, Stripe & Wimag",
  },
  social: { label: "Vertraut von führenden Schweizer Restaurants" },
  solution: {
    eyebrow: "Plattform",
    title: "Eine Voucher-Engine, die in deiner Marke lebt.",
    subtitle: "Kein Redirect zu externen Seiten. Alles passiert auf deiner eigenen Domain.",
    cards: [
      { title: "Native Integration", description: "Eine Zeile Code. Funktioniert mit WordPress, Webflow, Wix oder eigenem Stack." },
      { title: "Deine Identität", description: "Voucher-Design, Schriftarten und Farben passen zu deinem Brand." },
      { title: "Schweizer Zahlungen", description: "TWINT, Karten und Banküberweisung. CHF-Settlement, MwSt-konform." },
    ],
  },
  pricing: {
    eyebrow: "Preise",
    title: "2% + Plattformgebühr. 0 CHF fix. 0 CHF Setup.",
    subtitle: "pro Transaktion + Plattformgebühr",
    bullets: [
      "Keine monatlichen Gebühren, keine versteckten Kosten",
      "Wir verdienen nur, wenn du verkaufst",
      "Auszahlung in CHF, jede Woche",
      "Vollständig MwSt- und DSGVO-konform",
    ],
    cta: "Jetzt starten",
  },
  trust: {
    title: "Native Integration mit",
    items: ["TWINT", "Stripe", "Wimag", "Worldline"],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprich mit unserem Team.",
    subtitle: "Wir antworten innerhalb eines Werktages und planen eine 20-minütige Demo mit deinem Team.",
    fields: { name: "Name", restaurant: "Restaurant", website: "Website", email: "E-Mail" },
    submit: "Demo anfragen",
    success: { title: "Danke!", body: "Wir melden uns innerhalb eines Werktages bei dir." },
    errors: { required: "Pflichtfeld", email: "Ungültige E-Mail", url: "Gültige URL erforderlich (https://)" },
  },
};

export const navDE = { solution: "Plattform", pricing: "Preise", contact: "Kontakt" };
export const ctaDE = "Demo anfragen";
export const footerDE = { tagline: "Das Voucher-System für Schweizer Gourmet-Restaurants.", rights: "Alle Rechte vorbehalten." };
export const metaDE = {
  title: "Voltaire — Voucher-System für Schweizer Gourmet-Restaurants",
  description: "Verkaufe Vouchers direkt auf deiner Website. 2% + Plattformgebühr. TWINT, Stripe & Wimag. Keine Zwischenhändler.",
};
