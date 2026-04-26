import de from "./de";
import fr from "./fr";
import it from "./it";
import en from "./en";
import es from "./es";
import type { Dict, LocaleCode } from "./types";

export const locales: Record<LocaleCode, Dict> = { de, fr, it, en, es };

export const localeMeta: Record<
  LocaleCode,
  { label: string; htmlLang: string; path: string }
> = {
  de: { label: "Deutsch", htmlLang: "de-CH", path: "/" },
  fr: { label: "Français", htmlLang: "fr-CH", path: "/fr" },
  it: { label: "Italiano", htmlLang: "it-CH", path: "/it" },
  en: { label: "English", htmlLang: "en-CH", path: "/en" },
  es: { label: "Español", htmlLang: "es", path: "/es" },
};

export const localeOrder: LocaleCode[] = ["de", "fr", "it", "en", "es"];

export type { Dict, LocaleCode };
