import { Code2, Palette, CreditCard } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Code2, Palette, CreditCard];

export function Solution() {
  const { t } = useI18n();
  return (
    <section id="solution" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t.solution.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
            {t.solution.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {t.solution.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <article
                key={card.title}
                className="flex flex-col gap-4 bg-card p-8"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
