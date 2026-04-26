import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { localizedHead } from "@/lib/seo";
import { locales } from "@/locales";

export const Route = createFileRoute("/it")({
  head: () => localizedHead("it", locales.it),
  component: () => <LandingPage locale="it" />,
});
