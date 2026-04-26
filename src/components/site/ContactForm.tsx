import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, t.contact.errors.required).max(120),
    restaurant: z.string().trim().min(1, t.contact.errors.required).max(120),
    email: z.string().trim().email(t.contact.errors.email).max(255),
    website: z
      .string()
      .trim()
      .url(t.contact.errors.url)
      .max(255),
    message: z.string().trim().max(1000).optional().or(z.literal("")),
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as string;
        if (!errs[k]) errs[k] = issue.message;
      }
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
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <CheckCircle2
                  size={32}
                  strokeWidth={1.5}
                  className="text-accent"
                />
                <h3 className="font-serif text-2xl text-foreground">
                  {t.contact.success.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.contact.success.body}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <Field
                  name="name"
                  label={t.contact.fields.name}
                  error={errors.name}
                />
                <Field
                  name="restaurant"
                  label={t.contact.fields.restaurant}
                  error={errors.restaurant}
                />
                <Field
                  name="email"
                  type="email"
                  label={t.contact.fields.email}
                  error={errors.email}
                />
                <Field
                  name="website"
                  type="url"
                  placeholder="https://"
                  label={t.contact.fields.website}
                  error={errors.website}
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    {t.contact.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-foreground/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex w-full items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 disabled:opacity-60 sm:w-auto"
                >
                  {t.contact.submit}
                </button>
              </form>
            )}
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
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className={
          "mt-2 w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-foreground/50 " +
          (error ? "border-destructive/60" : "border-border")
        }
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
