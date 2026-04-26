import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { localizedHead } from "@/lib/seo";
import { locales } from "@/locales";

export const Route = createFileRoute("/en")({
  head: () => localizedHead("en", locales.en),
  component: () => <LandingPage locale="en" />,
});
