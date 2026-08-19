import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

function Impressum() {
  return (
    <LegalPage title="Impressum" updated="19. August 2026">
      <LegalSection title="Verantwortlich für diese Website">
        <p>
          Pedro Miguel Irurzun
          <br />
          Einzelunternehmen, handelnd unter der Geschäftsbezeichnung «Swissicoupons»
          <br />
          Schwamendingenstrasse 24
          <br />
          8050 Zürich, Schweiz
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:miguel@swissicoupons.com" className="underline">
            miguel@swissicoupons.com
          </a>
        </p>
        <p className="text-muted-foreground">
          Das Unternehmen ist nicht im Handelsregister eingetragen und nicht
          mehrwertsteuerpflichtig.
        </p>
      </LegalSection>

      <LegalSection title="Zweck dieser Website">
        <p>
          Diese Website stellt die SaaS-Plattform Swissicoupons vor, mit der Gastronomiebetriebe
          digitale Gutscheine über einen eigenen Online-Shop verkaufen. Das Vertragsverhältnis mit
          den Restaurants richtet sich nach den{" "}
          <a
            href="https://admin.swissicoupons.com/legal/agb/1.0"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Allgemeinen Geschäftsbedingungen
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>
          Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit
          und Aktualität wird jedoch keine Gewähr übernommen. Haftungsansprüche wegen Schäden, die
          aus der Nutzung oder Nichtnutzung der veröffentlichten Informationen entstehen, sind
          ausgeschlossen, soweit kein nachweislich vorsätzliches oder grobfahrlässiges Verschulden
          vorliegt.
        </p>
        <p>
          Verweise auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs. Für deren
          Inhalte wird jede Verantwortung abgelehnt.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die Inhalte dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung oder
          Verwendung, auch auszugsweise, bedarf der vorgängigen schriftlichen Zustimmung.
        </p>
      </LegalSection>

      <LegalSection title="Datenschutz">
        <p>
          Wie wir mit Personendaten umgehen, steht in der{" "}
          <Link to="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export const Route = createFileRoute("/impressum")({ component: Impressum });
