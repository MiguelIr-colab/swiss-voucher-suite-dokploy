import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="19. August 2026">
      <p className="text-muted-foreground">
        Diese Erklärung betrifft die Website swissicoupons.com. Für die Verarbeitung von
        Personendaten innerhalb der Plattform selbst — also der Gutschein-Shops unserer
        Kundschaft — gilt die Datenbearbeitungsvereinbarung, die jedes Restaurant bei der
        Registrierung akzeptiert.
      </p>

      <LegalSection title="1. Verantwortliche Stelle">
        <p>
          Pedro Miguel Irurzun, «Swissicoupons», Schwamendingenstrasse 24, 8050 Zürich, Schweiz.
          Anfragen zum Datenschutz an{" "}
          <a href="mailto:miguel@swissicoupons.com" className="underline">
            miguel@swissicoupons.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Grundsatz">
        <p>
          Wir bearbeiten Personendaten nach dem Schweizer Bundesgesetz über den Datenschutz (nDSG)
          und, soweit anwendbar, nach der EU-Datenschutz-Grundverordnung (DSGVO). Wir erheben nur
          Daten, die wir für den jeweiligen Zweck tatsächlich benötigen.
        </p>
      </LegalSection>

      <LegalSection title="3. Kontaktformular">
        <p>
          Wenn Sie das Formular auf dieser Website absenden, übermitteln Sie uns Ihren Namen, den
          Namen und die Website Ihres Betriebs sowie Ihre E-Mail-Adresse. Wir verwenden diese
          Angaben ausschliesslich, um Ihre Anfrage zu beantworten und Ihnen die Plattform
          vorzustellen. Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt.
        </p>
        <p>
          Rechtsgrundlage ist Ihre Anfrage selbst, also die Anbahnung eines Vertragsverhältnisses.
          Wir bewahren die Angaben so lange auf, wie der Kontakt geschäftlich relevant ist, und
          löschen sie danach.
        </p>
      </LegalSection>

      <LegalSection title="4. Schutz vor automatisierten Anfragen (Google reCAPTCHA)">
        <p>
          Zum Schutz des Formulars vor Missbrauch setzen wir reCAPTCHA v3 von Google ein. Der
          Dienst wird auf allen Seiten geladen und wertet technische Angaben aus — insbesondere
          IP-Adresse, Browser- und Geräteinformationen sowie Ihr Verhalten auf der Seite —, um zu
          erkennen, ob die Anfrage von einem Menschen stammt. Dabei können Daten an Google
          übermittelt werden, auch in die USA.
        </p>
        <p>
          Anbieterin ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          Einzelheiten finden Sie in der{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Hosting und Server-Protokolle">
        <p>
          Diese Website wird bei der Hostinger International Ltd. in einem Rechenzentrum in
          Frankreich (EU) betrieben. Beim Aufruf entstehen technisch notwendige Server-Protokolle
          mit IP-Adresse, Zeitpunkt, aufgerufener Seite und Browserkennung. Sie dienen dem Betrieb
          und der Sicherheit und werden nicht zur Profilbildung verwendet.
        </p>
        <p>
          Die Europäische Kommission anerkennt die Schweiz als Land mit angemessenem
          Datenschutzniveau, und der Schweizerische Bundesrat führt die EU-/EWR-Staaten auf seiner
          Angemessenheitsliste. Für die Datenübermittlung zwischen der Schweiz und dem
          EU-Hosting-Standort sind daher keine zusätzlichen Garantien erforderlich.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies und Analyse">
        <p>
          Diese Website setzt keine Cookies zu Analyse-, Tracking- oder Werbezwecken. Es sind keine
          Analysedienste und keine Social-Media-Plugins eingebunden. Cookies können lediglich durch
          den in Ziff. 4 genannten Schutzdienst gesetzt werden.
        </p>
      </LegalSection>

      <LegalSection title="7. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft über die zu Ihrer Person bearbeiteten Daten sowie auf
          deren Berichtigung, Löschung oder Herausgabe. Eine formlose E-Mail an die oben genannte
          Adresse genügt; wir dürfen zur Sicherheit einen Identitätsnachweis verlangen.
        </p>
        <p>
          Wenn Sie der Ansicht sind, dass die Bearbeitung Ihrer Daten rechtswidrig erfolgt, können
          Sie sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB)
          beschweren.
        </p>
      </LegalSection>

      <LegalSection title="8. Änderungen">
        <p>
          Wir passen diese Erklärung an, wenn sich die Website oder die eingesetzten Dienste
          ändern. Massgebend ist die jeweils auf dieser Seite veröffentlichte Fassung. Siehe auch
          das{" "}
          <Link to="/impressum" className="underline">
            Impressum
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export const Route = createFileRoute("/datenschutz")({ component: Datenschutz });
