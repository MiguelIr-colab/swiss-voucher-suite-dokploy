import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { Solution } from "@/components/site/Solution";
import { Pricing } from "@/components/site/Pricing";
import { ContactForm } from "@/components/site/ContactForm";
import type { LocaleCode } from "@/locales";

export function LandingPage({ locale }: { locale: LocaleCode }) {
  return (
    <I18nProvider locale={locale}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <SocialProof />
          <Solution />
          <Pricing />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
