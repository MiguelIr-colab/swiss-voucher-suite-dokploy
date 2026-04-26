import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHead } from "@/lib/seo";
import { contentIT, ctaIT, footerIT, metaIT, navIT } from "@/content/it";

export const Route = createFileRoute("/it")({
  head: () => buildHead({ ...metaIT, path: "/it", htmlLang: "it-CH" }),
  component: () => (
    <HomePage lang="it" content={contentIT} nav={navIT} cta={ctaIT} footer={footerIT} />
  ),
});
