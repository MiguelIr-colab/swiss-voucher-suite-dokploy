import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Code2, CreditCard, Palette, CheckCircle2 } from "lucide-react";
import voucherImg from "@/assets/voucher-hero.png";

export interface PageContent {
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  social: { label: string };
  solution: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    cta: string;
  };
  trust: { title: string; items: string[] };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: { name: string; restaurant: string; website: string; email: string };
    submit: string;
    success: { title: string; body: string };
    errors: { required: string; email: string; url: string };
  };
}

export function Hero({ c }: { c: PageContent["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 surface-soft" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-24 md:grid-cols-[1.15fr_1fr] md:gap-16 md:pt-32 md:pb-32">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            {c.eyebrow}
          </span>
          <h1 className="mt-6 text-5xl leading-[1.02] font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {c.titleA}
            <span className="block text-muted-foreground">{c.titleB}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {c.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              {c.ctaPrimary}
              <ArrowRight size={16} strokeWidth={2} className="transition group-hover:translate-x-0.5" />
            </a>
            <a href="#solution" className="btn-secondary">{c.ctaSecondary}</a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{c.note}</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl" />
          <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-border bg-background p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)]">
            <img
              src={voucherImg}
              alt="Premium voucher card"
              width={1024}
              height={1024}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof({ label }: { label: string }) {
  const logos = ["KLE", "DAR", "OKO"];
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 sm:gap-x-24">
          {logos.map((n) => (
            <li
              key={n}
              className="text-3xl font-bold tracking-[0.3em] text-foreground/30 transition hover:text-foreground sm:text-4xl"
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const ICONS = [Code2, Palette, CreditCard];

export function Solution({ c }: { c: PageContent["solution"] }) {
  return (
    <section id="solution" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{c.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {c.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={card.title}
                className="group flex flex-col gap-5 rounded-3xl border border-border bg-secondary/40 p-8 transition-all duration-200 hover:-translate-y-1 hover:bg-background hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background shadow-sm">
                  <Icon size={20} strokeWidth={1.5} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Pricing({ c, trust }: { c: PageContent["pricing"]; trust: PageContent["trust"] }) {
  return (
    <section id="pricing" className="border-y border-border/60 surface-soft">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {c.title}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-background p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:p-14">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
            <div className="text-center md:text-left">
              <div className="text-7xl font-bold tracking-tight text-foreground md:text-8xl">1%</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {c.subtitle}
              </div>
            </div>
            <div>
              <ul className="space-y-3">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary mt-8">{c.cta}</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {trust.title}
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trust.items.map((i) => (
              <li key={i} className="text-base font-semibold text-foreground/70">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ContactForm({ c }: { c: PageContent["contact"] }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = c.errors.required;
    if (!data.restaurant?.trim()) errs.restaurant = c.errors.required;
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) errs.email = c.errors.email;
    if (!/^https?:\/\/\S+\.\S+/.test(data.website || "")) errs.website = c.errors.url;
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {c.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.title}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                {c.subtitle}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-4">
                  <CheckCircle2 size={36} strokeWidth={1.5} className="text-accent" />
                  <h3 className="text-2xl font-semibold text-foreground">{c.success.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.success.body}</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <Field name="name" label={c.fields.name} error={errors.name} />
                  <Field name="restaurant" label={c.fields.restaurant} error={errors.restaurant} />
                  <Field name="website" type="url" placeholder="https://" label={c.fields.website} error={errors.website} />
                  <Field name="email" type="email" label={c.fields.email} error={errors.email} />
                  <button type="submit" disabled={pending} className="btn-primary w-full disabled:opacity-60">
                    {c.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className={
          "mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 " +
          (error ? "border-destructive/60" : "border-border")
        }
        aria-invalid={!!error}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
