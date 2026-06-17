import type { PageContent } from "@/components/site/PageSections";

export const contentES: PageContent = {
  hero: {
    eyebrow: "Sistema de vouchers para alta gastronomía",
    titleA: "Vende vouchers en tu propia web.",
    titleB: "Sin intermediarios.",
    subtitle: "Voltaire se integra de forma nativa en tu web. Sin marketplace, sin comisiones de terceros. Solo tú y tus clientes.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Saber más",
    note: "Sin coste de instalación · Online en 7 días · TWINT, Stripe & Wimag",
  },
  social: { label: "La confianza de los grandes restaurantes suizos" },
  solution: {
    eyebrow: "Plataforma",
    title: "Un motor de vouchers que vive dentro de tu marca.",
    subtitle: "Sin redirecciones a webs externas. Todo ocurre en tu propio dominio.",
    cards: [
      { title: "Integración nativa", description: "Una línea de código. Compatible con WordPress, Webflow, Wix o stack propio." },
      { title: "Tu identidad", description: "Diseño, tipografía y colores del voucher alineados con tu marca." },
      { title: "Pagos suizos", description: "TWINT, tarjetas y transferencia. Liquidación en CHF, IVA suizo." },
    ],
  },
  pricing: {
    eyebrow: "Precio",
    title: "2% + comisión de plataforma de pago. 0€ fijos. 0€ instalación.",
    subtitle: "por transacción + comisión de plataforma",
    bullets: [
      "Sin cuotas mensuales ni costes ocultos",
      "Solo ganamos cuando tú vendes",
      "Liquidación semanal en CHF",
      "Cumple IVA y RGPD",
    ],
    cta: "Empezar ahora",
  },
  trust: { title: "Integración nativa con", items: ["TWINT", "Stripe", "Wimag", "Worldline"] },
  contact: {
    eyebrow: "Contacto",
    title: "Habla con nuestro equipo.",
    subtitle: "Respondemos en menos de un día laborable y agendamos una demo de 20 minutos.",
    fields: { name: "Nombre", restaurant: "Restaurante", website: "Web", email: "Email" },
    submit: "Solicitar demo",
    success: { title: "¡Gracias!", body: "Te contactaremos en menos de un día laborable." },
    errors: { required: "Campo obligatorio", email: "Email no válido", url: "URL válida (https://)" },
  },
};

export const navES = { solution: "Plataforma", pricing: "Precio", contact: "Contacto" };
export const ctaES = "Solicitar demo";
export const footerES = { tagline: "El sistema de vouchers para restaurantes de alta gastronomía suizos.", rights: "Todos los derechos reservados." };
export const metaES = {
  title: "Voltaire — Sistema de vouchers para restaurantes suizos",
  description: "Vende vouchers directamente en tu web. 2% + comisión de plataforma de pago. TWINT, Stripe & Wimag. Sin intermediarios.",
};
