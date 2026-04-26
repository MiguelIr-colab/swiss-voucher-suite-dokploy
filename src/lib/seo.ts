import { localeMeta, type LocaleCode } from "@/locales";

const SITE_URL = "https://voltaire.ch";

export function localizedHead(locale: LocaleCode, dict: {
  meta: { title: string; description: string };
}) {
  const current = localeMeta[locale];
  const url = `${SITE_URL}${current.path === "/" ? "" : current.path}`;

  const alternates = (Object.keys(localeMeta) as LocaleCode[]).map((l) => ({
    rel: "alternate",
    hrefLang: localeMeta[l].htmlLang,
    href: `${SITE_URL}${localeMeta[l].path === "/" ? "" : localeMeta[l].path}`,
  }));

  return {
    meta: [
      { title: dict.meta.title },
      { name: "description", content: dict.meta.description },
      { name: "language", content: current.htmlLang },
      { property: "og:title", content: dict.meta.title },
      { property: "og:description", content: dict.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: current.htmlLang.replace("-", "_") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: dict.meta.title },
      { name: "twitter:description", content: dict.meta.description },
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates,
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: `${SITE_URL}/`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Voltaire",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: dict.meta.description,
          url,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CHF",
            description: "1% fee per voucher sold. No setup, no monthly fee.",
          },
          provider: {
            "@type": "Organization",
            name: "Voltaire SA",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CH",
              addressLocality: "Zürich",
            },
          },
        }),
      },
    ],
  };
}
