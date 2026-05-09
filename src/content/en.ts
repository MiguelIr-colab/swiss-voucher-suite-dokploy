import type { PageContent } from "@/components/site/PageSections";

export const contentEN: PageContent = {
  hero: {
    eyebrow: "Voucher system for fine-dining restaurants",
    titleA: "Sell vouchers on your own website.",
    titleB: "No middlemen.",
    subtitle: "Voltaire integrates natively into your website. No marketplace, no third-party fees. Just you and your guests.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "Learn more",
    note: "No setup fees · Live in 7 days · TWINT, Stripe & Wimag",
  },
  social: { label: "Trusted by Switzerland's leading restaurants" },
  solution: {
    eyebrow: "Platform",
    title: "A voucher engine that lives inside your brand.",
    subtitle: "No redirect to external sites. Everything happens on your own domain.",
    cards: [
      { title: "Native integration", description: "One line of code. Works with WordPress, Webflow, Wix or custom stacks." },
      { title: "Your identity", description: "Voucher design, fonts and colors match your brand." },
      { title: "Swiss payments", description: "TWINT, cards and bank transfer. CHF settlement, VAT-compliant." },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "2% commission. CHF 0 fixed. CHF 0 setup.",
    subtitle: "per transaction",
    bullets: [
      "No monthly fees, no hidden costs",
      "We only earn when you sell",
      "CHF payouts, every week",
      "Fully VAT and GDPR compliant",
    ],
    cta: "Get started",
  },
  trust: { title: "Native integration with", items: ["TWINT", "Stripe", "Wimag"] },
  contact: {
    eyebrow: "Contact",
    title: "Talk to our team.",
    subtitle: "We reply within one business day and schedule a 20-minute demo with your team.",
    fields: { name: "Name", restaurant: "Restaurant", website: "Website", email: "Email" },
    submit: "Request a demo",
    success: { title: "Thank you!", body: "We will get back to you within one business day." },
    errors: { required: "Required field", email: "Invalid email", url: "Valid URL required (https://)" },
  },
};

export const navEN = { solution: "Platform", pricing: "Pricing", contact: "Contact" };
export const ctaEN = "Request demo";
export const footerEN = { tagline: "The voucher system for Swiss fine-dining restaurants.", rights: "All rights reserved." };
export const metaEN = {
  title: "Voltaire — Voucher system for Swiss fine-dining restaurants",
  description: "Sell vouchers directly on your own website. 2% commission. TWINT, Stripe & Wimag. No middlemen.",
};
