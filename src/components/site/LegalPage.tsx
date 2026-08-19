import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Envoltorio sobrio para las páginas legales. Deliberadamente sin la cabecera
 * comercial del sitio: quien llega aquí busca leer, no que le vendan.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link to="/" className="text-sm text-muted-foreground underline">
          ← swissicoupons.com
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Stand: {updated}</p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-foreground">{children}</div>

        <div className="mt-16 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <Link to="/impressum" className="underline">
            Impressum
          </Link>
          {" · "}
          <Link to="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
