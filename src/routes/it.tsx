import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { contentIT, ctaIT, footerIT, navIT } from "@/content/it";

export const Route = createFileRoute("/it")({
  component: () => (
    <HomePage lang="it" content={contentIT} nav={navIT} cta={ctaIT} footer={footerIT} />
  ),
});
