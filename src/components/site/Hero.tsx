import heroImg from "@/assets/hero.jpg";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:pt-24 md:pb-28 md:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-[3.5rem]">
            {t.hero.title}
            <span className="block text-muted-foreground">
              {t.hero.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/85"
            >
              {t.hero.cta}
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground/40"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{t.hero.note}</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-secondary/60 blur-2xl" />
          <div className="overflow-hidden rounded-xl border border-border/60 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
            <img
              src={heroImg}
              alt="Fine-dining table setting at a Swiss Michelin restaurant"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
