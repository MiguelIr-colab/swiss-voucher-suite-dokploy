import { useI18n } from "@/lib/i18n";

const logos = ["KLE", "DAR", "OKO", "RIVA", "MONT"];

export function SocialProof() {
  const { t } = useI18n();
  return (
    <section className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t.socialProof.label}
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-16">
          {logos.map((name) => (
            <li
              key={name}
              className="font-serif text-xl tracking-[0.25em] text-muted-foreground/60 transition hover:text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
