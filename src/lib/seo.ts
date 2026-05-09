const SITE = "https://swissicoupons.com";

const ALT: { lang: string; path: string; hreflang: string }[] = [
  { lang: "de", path: "/", hreflang: "de-CH" },
  { lang: "fr", path: "/fr", hreflang: "fr-CH" },
  { lang: "it", path: "/it", hreflang: "it-CH" },
  { lang: "en", path: "/en", hreflang: "en-CH" },
  { lang: "es", path: "/es", hreflang: "es" },
];

export function buildHead(opts: {
  title: string;
  description: string;
  path: string;
  htmlLang: string;
}) {
  const url = `${SITE}${opts.path === "/" ? "" : opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "language", content: opts.htmlLang },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: opts.htmlLang.replace("-", "_") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [
      { rel: "canonical", href: url },
      ...ALT.map((a) => ({
        rel: "alternate",
        hrefLang: a.hreflang,
        href: `${SITE}${a.path === "/" ? "" : a.path}`,
      })),
      { rel: "alternate", hrefLang: "x-default", href: `${SITE}/` },
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
          description: opts.description,
          url,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CHF",
            description: "1% per voucher sold. No setup, no monthly fee.",
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
