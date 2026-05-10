import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { contentDE, ctaDE, footerDE, navDE } from "@/content/de";

export const Route = createFileRoute("/")({
  component: () => (
    <HomePage lang="de" content={contentDE} nav={navDE} cta={ctaDE} footer={footerDE} />
  ),
});
