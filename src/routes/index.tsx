import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHead } from "@/lib/seo";
import { contentDE, ctaDE, footerDE, metaDE, navDE } from "@/content/de";

export const Route = createFileRoute("/")({
  head: () => buildHead({ ...metaDE, path: "/", htmlLang: "de-CH" }),
  component: () => (
    <HomePage lang="de" content={contentDE} nav={navDE} cta={ctaDE} footer={footerDE} />
  ),
});
