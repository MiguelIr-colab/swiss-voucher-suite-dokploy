import { createContext, useContext, type ReactNode } from "react";
import { locales, localeMeta, type Dict, type LocaleCode } from "@/locales";

interface I18nValue {
  locale: LocaleCode;
  t: Dict;
  path: (loc: LocaleCode) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  children,
}: {
  locale: LocaleCode;
  children: ReactNode;
}) {
  const value: I18nValue = {
    locale,
    t: locales[locale],
    path: (loc) => localeMeta[loc].path,
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
