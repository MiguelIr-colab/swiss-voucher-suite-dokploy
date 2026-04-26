import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHead } from "@/lib/seo";
import { contentES, ctaES, footerES, metaES, navES } from "@/content/es";

export const Route = createFileRoute("/es")({
  head: () => buildHead({ ...metaES, path: "/es", htmlLang: "es" }),
  component: () => (
    <HomePage lang="es" content={contentES} nav={navES} cta={ctaES} footer={footerES} />
  ),
});
