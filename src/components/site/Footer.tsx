import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { localeMeta, localeOrder } from "@/locales";

export function Footer() {
  const { locale, t, path } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg text-foreground">
              Voltaire<span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {t.footer.languageLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {localeOrder.map((loc) => (
                <li key={loc}>
                  <Link
                    to={path(loc)}
                    className={
                      loc === locale
                        ? "text-foreground"
                        : "text-muted-foreground transition hover:text-foreground"
                    }
                    hrefLang={localeMeta[loc].htmlLang}
                  >
                    {localeMeta[loc].label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Voltaire SA · Zürich · {t.footer.rights}</p>
          <p>Made in Switzerland 🇨🇭</p>
        </div>
      </div>
    </footer>
  );
}
