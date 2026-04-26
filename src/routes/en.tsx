import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildHead } from "@/lib/seo";
import { contentEN, ctaEN, footerEN, metaEN, navEN } from "@/content/en";

export const Route = createFileRoute("/en")({
  head: () => buildHead({ ...metaEN, path: "/en", htmlLang: "en-CH" }),
  component: () => (
    <HomePage lang="en" content={contentEN} nav={navEN} cta={ctaEN} footer={footerEN} />
  ),
});
