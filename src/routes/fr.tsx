import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHead } from "@/lib/seo";
import { contentFR, ctaFR, footerFR, metaFR, navFR } from "@/content/fr";

export const Route = createFileRoute("/fr")({
  head: () => buildHead({ ...metaFR, path: "/fr", htmlLang: "fr-CH" }),
  component: () => (
    <HomePage lang="fr" content={contentFR} nav={navFR} cta={ctaFR} footer={footerFR} />
  ),
});
