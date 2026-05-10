import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { contentFR, ctaFR, footerFR, navFR } from "@/content/fr";

export const Route = createFileRoute("/fr")({
  component: () => (
    <HomePage lang="fr" content={contentFR} nav={navFR} cta={ctaFR} footer={footerFR} />
  ),
});
