import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container-narrow px-4 md:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="section-padding">
        <div className="container-narrow px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Impressum
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  Secgin Özdösemeci<br />
                  Senovate – Website nach Wunsch<br />
                  [PLATZHALTER: Straße und Hausnummer]<br />
                  [PLATZHALTER: PLZ] Nürnberg<br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Kontakt
                </h2>
                <p>
                  Telefon: +49 160 2231994<br />
                  E-Mail: info@senovate.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [PLATZHALTER: USt-IdNr.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p>
                  Secgin Özdösemeci<br />
                  [PLATZHALTER: Straße und Hausnummer]<br />
                  [PLATZHALTER: PLZ] Nürnberg
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  EU-Streitschlichtung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Haftung für Inhalte
                </h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
                  entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Haftung für Links
                </h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Urheberrecht
                </h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link to="/">← Zurück zur Startseite</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
