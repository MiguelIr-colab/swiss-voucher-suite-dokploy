import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { contentES, ctaES, footerES, navES } from "@/content/es";

export const Route = createFileRoute("/es")({
  component: () => (
    <HomePage lang="es" content={contentES} nav={navES} cta={ctaES} footer={footerES} />
  ),
});
