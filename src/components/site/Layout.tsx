import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type Lang = "de" | "fr" | "it" | "en" | "es";

const LANGS: { code: Lang; label: string; path: string }[] = [
  { code: "de", label: "DE", path: "/" },
  { code: "fr", label: "FR", path: "/fr" },
  { code: "it", label: "IT", path: "/it" },
  { code: "en", label: "EN", path: "/en" },
  { code: "es", label: "ES", path: "/es" },
];

export function Layout({
  current,
  nav,
  ctaLabel,
  footerTagline,
  footerRights,
  children,
}: {
  current: Lang;
  nav: { solution: string; pricing: string; contact: string };
  ctaLabel: string;
  footerTagline: string;
  footerRights: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            to={LANGS.find((l) => l.code === current)!.path}
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Swissicoupons<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#solution" className="transition hover:text-foreground">{nav.solution}</a>
            <a href="#pricing" className="transition hover:text-foreground">{nav.pricing}</a>
            <a href="#contact" className="transition hover:text-foreground">{nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <ul className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground sm:flex">
              {LANGS.map((l, i) => (
                <li key={l.code} className="flex items-center gap-2">
                  <Link
                    to={l.path}
                    hrefLang={l.code === "es" ? "es" : `${l.code}-CH`}
                    className={
                      l.code === current
                        ? "text-foreground"
                        : "transition hover:text-foreground"
                    }
                  >
                    {l.label}
                  </Link>
                  {i < LANGS.length - 1 && <span className="text-border">|</span>}
                </li>
              ))}
            </ul>
            <a href="#contact" className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-foreground/85 sm:inline-flex">
              {ctaLabel}
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <p className="text-lg font-bold text-foreground">
                Swissicoupons<span className="text-accent">.</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{footerTagline}</p>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm">
              {LANGS.map((l, i) => (
                <li key={l.code} className="flex items-center gap-3">
                  <Link
                    to={l.path}
                    hrefLang={l.code === "es" ? "es" : `${l.code}-CH`}
                    className={
                      l.code === current
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground transition hover:text-foreground"
                    }
                  >
                    {l.label}
                  </Link>
                  {i < LANGS.length - 1 && <span className="text-border">|</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <Link to="/impressum" className="underline transition hover:text-foreground">
              Impressum
            </Link>
            <Link to="/datenschutz" className="underline transition hover:text-foreground">
              Datenschutzerklärung
            </Link>
            <a
              href="https://admin.swissicoupons.com/legal/agb/1.0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition hover:text-foreground"
            >
              AGB
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Pedro Miguel Irurzun · Swissicoupons · Zürich · {footerRights}</p>
            <p>Made in Switzerland 🇨🇭</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
