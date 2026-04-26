import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t.pricing.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
            {t.pricing.title}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid gap-10 p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16 md:p-14">
            <div className="text-center md:text-left">
              <div className="font-serif text-7xl tracking-tight text-foreground md:text-8xl">
                {t.pricing.fee}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.pricing.feeUnit}
              </div>
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.pricing.subtitle}
              </p>
              <ul className="mt-6 space-y-3">
                {t.pricing.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/85"
              >
                {t.pricing.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
