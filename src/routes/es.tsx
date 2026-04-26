import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { localizedHead } from "@/lib/seo";
import { locales } from "@/locales";

export const Route = createFileRoute("/es")({
  head: () => localizedHead("es", locales.es),
  component: () => <LandingPage locale="es" />,
});
