import { Layout, type Lang } from "@/components/site/Layout";
import { ContactForm, Hero, Pricing, SocialProof, Solution, type PageContent } from "@/components/site/PageSections";

export function HomePage({
  lang,
  content,
  nav,
  cta,
  footer,
}: {
  lang: Lang;
  content: PageContent;
  nav: { solution: string; pricing: string; contact: string };
  cta: string;
  footer: { tagline: string; rights: string };
}) {
  return (
    <Layout
      current={lang}
      nav={nav}
      ctaLabel={cta}
      footerTagline={footer.tagline}
      footerRights={footer.rights}
    >
      <Hero c={content.hero} />
      <SocialProof label={content.social.label} />
      <Solution c={content.solution} />
      <Pricing c={content.pricing} trust={content.trust} />
      <ContactForm c={content.contact} />
    </Layout>
  );
}
