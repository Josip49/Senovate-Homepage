import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
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
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
                  Text aufgeführten Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  Secgin Özdösemeci<br />
                  Senovate – Website nach Wunsch<br />
                  [PLATZHALTER: Straße und Hausnummer]<br />
                  [PLATZHALTER: PLZ] Nürnberg<br />
                  Deutschland
                </p>
                <p>
                  Telefon: +49 160 2231994<br />
                  E-Mail: info@senovate.de
                </p>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                  Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                  Kontaktdaten können Sie dem Abschnitt „Verantwortliche Stelle" in dieser 
                  Datenschutzerklärung entnehmen.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  Wie erfassen wir Ihre Daten?
                </h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
                  es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                  durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. 
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser 
                  Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  Wofür nutzen wir Ihre Daten?
                </h3>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h3>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                  Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                  Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  4. Hosting
                </h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <p>
                  [PLATZHALTER: Hosting-Anbieter und dessen Datenschutzinformationen]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  5. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                  Datenschutz
                </h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
                  behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
                  sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </h3>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h3>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                  einer Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
                  verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  Recht auf Datenübertragbarkeit
                </h3>
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
                  eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
                  gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </p>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3 mt-6">
                  SSL- bzw. TLS-Verschlüsselung
                </h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
                  senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  6. Kontaktformular
                </h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns 
                  gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 
                  Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  7. Cookies
                </h2>
                <p>
                  [PLATZHALTER: Informationen zu verwendeten Cookies – falls zutreffend]
                </p>
                <p>
                  Derzeit verwendet diese Website keine Tracking-Cookies oder Analyse-Tools von 
                  Drittanbietern.
                </p>
              </section>

              <section className="bg-secondary/50 rounded-2xl p-6">
                <p className="text-sm">
                  <strong>Hinweis:</strong> Diese Datenschutzerklärung enthält Platzhalter und muss vor 
                  der Veröffentlichung von einem Rechtsexperten geprüft und vervollständigt werden.
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

export default Datenschutz;
