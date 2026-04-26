import type { Dict } from "./types";

const en: Dict = {
  meta: {
    title: "Voltaire — Voucher Engine for Fine-Dining Restaurants",
    description:
      "Native voucher engine for Switzerland's finest restaurants. Direct sales on your own website. Only 1% per transaction. TWINT, Stripe & Wimag.",
  },
  nav: {
    solution: "Solution",
    pricing: "Pricing",
    contact: "Contact",
    cta: "Install for free",
  },
  hero: {
    eyebrow: "Swiss voucher engine · Built for fine dining",
    title: "Sell vouchers directly.",
    titleAccent: "No marketplace. No 20% cut.",
    subtitle:
      "Voltaire embeds natively into your restaurant's website. Your guests buy vouchers in your brand, in your design — you keep 99% of the revenue.",
    cta: "Install for free",
    secondaryCta: "See the demo",
    note: "No setup fee · TWINT ready · GDPR & revFADP compliant",
  },
  socialProof: {
    label: "Trusted by restaurants in Zurich, Geneva and Lugano",
  },
  solution: {
    eyebrow: "The native factor",
    title: "Three lines of code. Zero friction.",
    subtitle:
      "No new marketplace. No new account for your guests. Just a voucher engine that feels like part of your website.",
    cards: [
      {
        title: "Native integration",
        description:
          "A single snippet on your existing site. No subdomain, no redirect, no third-party branding.",
      },
      {
        title: "Fully customisable",
        description:
          "Your typography, your colours, your imagery. Voltaire becomes an extension of your brand.",
      },
      {
        title: "Swiss payments",
        description:
          "Direct connection to your Stripe, Wimag or TWINT account. Payout on the next business day.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "A transparent 1% fee per voucher.",
    fee: "1%",
    feeUnit: "per voucher sold",
    subtitle:
      "No setup fee. No monthly subscription. You only pay when you sell.",
    bullets: [
      "Unlimited vouchers",
      "TWINT, Stripe, Wimag",
      "Multilingual checkout",
      "Dedicated onboarding consultant",
    ],
    cta: "Onboard my restaurant",
  },
  contact: {
    eyebrow: "Contact",
    title: "Free audit of your website.",
    subtitle:
      "Leave us your details. A Voltaire consultant will review your site and reply within 24 hours.",
    fields: {
      name: "Full name",
      restaurant: "Restaurant name",
      email: "Business email",
      website: "Website URL",
      message: "Message (optional)",
    },
    submit: "Send my request",
    success: {
      title: "Thank you.",
      body: "A Voltaire consultant will review your website and contact you within 24 hours.",
    },
    errors: {
      required: "Required field",
      email: "Invalid email address",
      url: "Invalid URL (e.g. https://...)",
    },
  },
  footer: {
    tagline: "The voucher engine for Swiss fine dining.",
    rights: "All rights reserved.",
    languageLabel: "Language",
  },
};

export default en;
