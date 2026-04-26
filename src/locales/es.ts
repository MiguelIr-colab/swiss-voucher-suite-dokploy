import type { Dict } from "./types";

const es: Dict = {
  meta: {
    title: "Voltaire — Sistema de bonos regalo para alta gastronomía",
    description:
      "Sistema nativo de bonos regalo para restaurantes suizos de alta gama. Venta directa en tu propia web. Solo un 1% por transacción. TWINT, Stripe y Wimag.",
  },
  nav: {
    solution: "Solución",
    pricing: "Precios",
    contact: "Contacto",
    cta: "Instalar gratis",
  },
  hero: {
    eyebrow: "Sistema suizo de bonos regalo · Diseñado para alta gastronomía",
    title: "Vende tus bonos regalo directamente.",
    titleAccent: "Sin marketplace. Sin un 20% de comisión.",
    subtitle:
      "Voltaire se integra de forma nativa en la web de tu restaurante. Tus clientes compran bonos con tu marca, con tu diseño — tú conservas el 99% de los ingresos.",
    cta: "Instalar gratis",
    secondaryCta: "Ver la demo",
    note: "Sin coste de instalación · Compatible con TWINT · Conforme RGPD/revLPD",
  },
  socialProof: {
    label: "La confianza de restaurantes en Zúrich, Ginebra y Lugano",
  },
  solution: {
    eyebrow: "La solución nativa",
    title: "Tres líneas de código. Cero fricción.",
    subtitle:
      "Sin un nuevo marketplace. Sin una nueva cuenta para tus clientes. Solo un sistema de bonos que parece parte de tu propia web.",
    cards: [
      {
        title: "Integración nativa",
        description:
          "Un único snippet en tu web actual. Sin subdominios, sin redirecciones, sin marcas ajenas.",
      },
      {
        title: "Totalmente personalizable",
        description:
          "Tu tipografía, tus colores, tu imaginario visual. Voltaire se convierte en una extensión de tu marca.",
      },
      {
        title: "Pagos suizos",
        description:
          "Conexión directa con tu cuenta de Stripe, Wimag o TWINT. Liquidación al siguiente día hábil.",
      },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "Una comisión transparente del 1% por bono.",
    fee: "1%",
    feeUnit: "por bono vendido",
    subtitle:
      "Sin coste de instalación. Sin cuotas mensuales. Solo pagas cuando vendes.",
    bullets: [
      "Bonos ilimitados",
      "TWINT, Stripe, Wimag",
      "Checkout multilingüe",
      "Consultor de onboarding dedicado",
    ],
    cta: "Dar de alta mi restaurante",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Auditoría gratuita de tu web.",
    subtitle:
      "Déjanos tus datos. Un consultor de Voltaire analizará tu web y te contactará en menos de 24 horas.",
    fields: {
      name: "Nombre completo",
      restaurant: "Nombre del restaurante",
      email: "Email corporativo",
      website: "URL de la web",
      message: "Mensaje (opcional)",
    },
    submit: "Enviar solicitud",
    success: {
      title: "Gracias.",
      body: "Un consultor de Voltaire analizará tu web y te contactará en menos de 24 horas.",
    },
    errors: {
      required: "Campo obligatorio",
      email: "Email no válido",
      url: "URL no válida (ej. https://...)",
    },
  },
  footer: {
    tagline: "El sistema de bonos regalo para la alta gastronomía suiza.",
    rights: "Todos los derechos reservados.",
    languageLabel: "Idioma",
  },
};

export default es;
