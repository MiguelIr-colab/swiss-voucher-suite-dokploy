import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localeMeta, localeOrder, type LocaleCode } from "@/locales";
import { cn } from "@/lib/utils";

export function Header() {
  const { locale, t, path } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to={path(locale)}
          className="font-serif text-xl tracking-tight text-foreground"
        >
          Voltaire<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#solution" className="transition hover:text-foreground">
            {t.nav.solution}
          </a>
          <a href="#pricing" className="transition hover:text-foreground">
            {t.nav.pricing}
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-foreground/40"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <Globe size={14} strokeWidth={1.5} />
              <span>{localeMeta[locale].label}</span>
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-44 overflow-hidden rounded-md border border-border bg-popover py-1 shadow-sm"
              >
                {localeOrder.map((loc: LocaleCode) => (
                  <li key={loc}>
                    <Link
                      to={path(loc)}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 text-sm transition hover:bg-secondary",
                        loc === locale
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      <span>{localeMeta[loc].label}</span>
                      {loc === locale && <Check size={14} strokeWidth={1.5} />}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a
            href="#contact"
            className="hidden rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:bg-foreground/85 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
