import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { contentEN, ctaEN, footerEN, navEN } from "@/content/en";

export const Route = createFileRoute("/en")({
  component: () => (
    <HomePage lang="en" content={contentEN} nav={navEN} cta={ctaEN} footer={footerEN} />
  ),
});
