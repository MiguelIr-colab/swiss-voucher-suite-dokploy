import type { Dict } from "./types";

const fr: Dict = {
  meta: {
    title: "Voltaire — Système de bons cadeaux pour la haute gastronomie",
    description:
      "Système de bons cadeaux natif pour les restaurants suisses d'exception. Vente directe sur votre site. Seulement 1% de commission. TWINT, Stripe & Wimag.",
  },
  nav: {
    solution: "Solution",
    pricing: "Tarifs",
    contact: "Contact",
    cta: "Installer gratuitement",
  },
  hero: {
    eyebrow: "Système suisse de bons cadeaux · Pensé pour la haute gastronomie",
    title: "Vendez vos bons cadeaux en direct.",
    titleAccent: "Sans marketplace. Sans 20% de commission.",
    subtitle:
      "Voltaire s'intègre nativement au site de votre restaurant. Vos clients achètent vos bons dans votre marque, dans votre design — vous conservez 99% du chiffre d'affaires.",
    cta: "Installer gratuitement",
    secondaryCta: "Voir la démo",
    note: "Sans frais d'installation · Compatible TWINT · Conforme nLPD/RGPD",
  },
  socialProof: {
    label: "Approuvé par des restaurants à Zurich, Genève et Lugano",
  },
  solution: {
    eyebrow: "La solution native",
    title: "Trois lignes de code. Aucune friction.",
    subtitle:
      "Pas de nouveau marketplace. Pas de nouveau compte pour vos clients. Juste un système de bons cadeaux qui semble faire partie de votre site.",
    cards: [
      {
        title: "Intégration native",
        description:
          "Un simple snippet sur votre site existant. Pas de sous-domaine, pas de redirection, aucune marque tierce.",
      },
      {
        title: "Entièrement personnalisable",
        description:
          "Votre typographie, vos couleurs, votre univers visuel. Voltaire devient une extension de votre marque.",
      },
      {
        title: "Paiements suisses",
        description:
          "Connexion directe à votre compte Stripe, Wimag ou TWINT. Versement le jour ouvré suivant.",
      },
    ],
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "1% de commission, en toute transparence.",
    fee: "1%",
    feeUnit: "par bon vendu",
    subtitle:
      "Aucun frais d'installation. Aucun abonnement mensuel. Vous ne payez que lorsque vous vendez.",
    bullets: [
      "Bons illimités",
      "TWINT, Stripe, Wimag",
      "Checkout multilingue",
      "Conseiller d'onboarding dédié",
    ],
    cta: "Inscrire mon restaurant",
  },
  contact: {
    eyebrow: "Contact",
    title: "Audit gratuit de votre site.",
    subtitle:
      "Laissez-nous vos coordonnées. Un consultant Voltaire analyse votre site et vous recontacte sous 24 heures.",
    fields: {
      name: "Nom complet",
      restaurant: "Nom du restaurant",
      email: "Email professionnel",
      website: "URL du site",
      message: "Message (optionnel)",
    },
    submit: "Envoyer ma demande",
    success: {
      title: "Merci.",
      body: "Un consultant Voltaire analysera votre site et vous contactera sous 24 heures.",
    },
    errors: {
      required: "Champ requis",
      email: "Adresse e-mail invalide",
      url: "URL invalide (ex. https://...)",
    },
  },
  footer: {
    tagline: "Le système de bons cadeaux pour la haute gastronomie suisse.",
    rights: "Tous droits réservés.",
    languageLabel: "Langue",
  },
};

export default fr;
