import type { PageContent } from "@/components/site/PageSections";

export const contentFR: PageContent = {
  hero: {
    eyebrow: "Système de bons cadeaux pour la haute gastronomie",
    titleA: "Vendez des bons sur votre propre site.",
    titleB: "Sans intermédiaires.",
    subtitle: "Swissicoupons s'intègre nativement à votre site. Pas de marketplace, pas de commissions tierces. Juste vous et vos clients.",
    ctaPrimary: "Demander une démo",
    ctaSecondary: "En savoir plus",
    note: "Aucun frais d'installation · En ligne en 7 jours · TWINT, Stripe & Wimag",
  },
  social: { label: "La confiance des restaurants suisses d'exception" },
  solution: {
    eyebrow: "Plateforme",
    title: "Un moteur de bons qui vit dans votre marque.",
    subtitle: "Aucune redirection vers un site externe. Tout se passe sur votre domaine.",
    cards: [
      { title: "Intégration native", description: "Une ligne de code. Compatible WordPress, Webflow, Wix ou stack sur mesure." },
      { title: "Votre identité", description: "Design, typographie et couleurs des bons alignés sur votre marque." },
      { title: "Paiements suisses", description: "TWINT, cartes et virement. Règlement en CHF, conforme TVA." },
    ],
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "2% + frais de plateforme. 0 CHF fixes. 0 CHF d'installation.",
    subtitle: "par transaction + frais de plateforme",
    bullets: [
      "Aucun abonnement mensuel, aucun frais caché",
      "Nous gagnons uniquement quand vous vendez",
      "Versement en CHF, chaque semaine",
      "Conforme TVA et RGPD",
    ],
    cta: "Commencer maintenant",
  },
  trust: { title: "Intégration native avec", items: ["TWINT", "Stripe", "Wimag", "Worldline"] },
  contact: {
    eyebrow: "Contact",
    title: "Parlez à notre équipe.",
    subtitle: "Nous répondons sous un jour ouvré et planifions une démo de 20 minutes avec votre équipe.",
    fields: { name: "Nom", restaurant: "Restaurant", website: "Site web", email: "E-mail" },
    submit: "Demander une démo",
    success: { title: "Merci !", body: "Nous revenons vers vous sous un jour ouvré." },
    errors: { required: "Champ requis", email: "E-mail invalide", url: "URL valide requise (https://)" },
  },
};

export const navFR = { solution: "Plateforme", pricing: "Tarifs", contact: "Contact" };
export const ctaFR = "Demander une démo";
export const footerFR = { tagline: "Le système de bons des restaurants gastronomiques suisses.", rights: "Tous droits réservés." };
export const metaFR = {
  title: "Swissicoupons — Système de bons cadeaux pour restaurants suisses",
  description: "Vendez des bons cadeaux directement sur votre site. 2% + frais de plateforme. TWINT, Stripe & Wimag. Sans intermédiaires.",
};
