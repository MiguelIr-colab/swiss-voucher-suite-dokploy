export type LocaleCode = "de" | "fr" | "it" | "en" | "es";

export interface Dict {
  meta: { title: string; description: string };
  nav: { solution: string; pricing: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    note: string;
  };
  socialProof: { label: string };
  solution: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    fee: string;
    feeUnit: string;
    subtitle: string;
    bullets: string[];
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      restaurant: string;
      email: string;
      website: string;
      message: string;
    };
    submit: string;
    success: { title: string; body: string };
    errors: {
      required: string;
      email: string;
      url: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    languageLabel: string;
  };
}
