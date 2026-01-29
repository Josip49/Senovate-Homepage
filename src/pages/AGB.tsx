import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AGB = () => {
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
              Allgemeine Geschäftsbedingungen
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 1 Geltungsbereich
                </h2>
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                  Secgin Özdösemeci, handelnd unter „Senovate – Website nach Wunsch" (nachfolgend 
                  „Anbieter") und dem Kunden (nachfolgend „Auftraggeber") über die Erstellung, Gestaltung 
                  und Pflege von Websites sowie damit verbundene Dienstleistungen.
                </p>
                <p>
                  (2) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der 
                  Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 2 Vertragsgegenstand
                </h2>
                <p>
                  (1) Der Anbieter erbringt Dienstleistungen im Bereich Webdesign und Webentwicklung. 
                  Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der 
                  Auftragsbestätigung.
                </p>
                <p>
                  (2) Die angebotenen Leistungspakete umfassen:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Bronze (49 €/Monat):</strong> 1-Seiten-Website, responsive Design, Kontaktformular, SEO-Grundlagen</li>
                  <li><strong>Silber (79 €/Monat):</strong> Bis zu 5 Seiten, erweiterte Funktionen, Premium-Support</li>
                  <li><strong>Gold (99 €/Monat):</strong> Bis zu 10 Seiten, individuelle Features, persönlicher Ansprechpartner</li>
                </ul>
                <p>
                  (3) Die einmalige Einrichtungsgebühr beträgt 199 €.
                </p>
                <p>
                  (4) Der optionale Änderungsservice kostet 8 €/Monat und beinhaltet eine Änderung pro Monat.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 3 Vertragsschluss
                </h2>
                <p>
                  (1) Die Darstellung der Leistungen auf der Website stellt kein verbindliches Angebot 
                  dar, sondern eine Aufforderung zur Abgabe eines Angebots.
                </p>
                <p>
                  (2) Der Vertrag kommt durch Annahme des Angebots durch den Anbieter zustande. Die 
                  Annahme erfolgt durch Auftragsbestätigung per E-Mail oder durch Beginn der Leistungserbringung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 4 Preise und Zahlung
                </h2>
                <p>
                  (1) Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten Preise. Alle Preise 
                  verstehen sich in Euro und [PLATZHALTER: inkl./zzgl.] der gesetzlichen Mehrwertsteuer.
                </p>
                <p>
                  (2) Die Einrichtungsgebühr ist vor Beginn der Arbeiten fällig.
                </p>
                <p>
                  (3) Die monatlichen Gebühren werden [PLATZHALTER: monatlich/jährlich] im Voraus in 
                  Rechnung gestellt und sind innerhalb von 14 Tagen nach Rechnungsstellung zahlbar.
                </p>
                <p>
                  (4) Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in Höhe von 5 
                  Prozentpunkten über dem Basiszinssatz zu berechnen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 5 Mitwirkungspflichten des Auftraggebers
                </h2>
                <p>
                  (1) Der Auftraggeber stellt dem Anbieter alle für die Durchführung des Auftrags 
                  erforderlichen Materialien (Texte, Bilder, Logos etc.) rechtzeitig und in geeigneter 
                  Form zur Verfügung.
                </p>
                <p>
                  (2) Der Auftraggeber ist für die Beschaffung der erforderlichen Nutzungsrechte an den 
                  bereitgestellten Materialien verantwortlich.
                </p>
                <p>
                  (3) Der Auftraggeber prüft die vom Anbieter erstellten Entwürfe unverzüglich und teilt 
                  Änderungswünsche innerhalb von 7 Werktagen mit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 6 Nutzungsrechte
                </h2>
                <p>
                  (1) Nach vollständiger Bezahlung räumt der Anbieter dem Auftraggeber die einfachen, 
                  nicht übertragbaren Nutzungsrechte an den erstellten Werken ein.
                </p>
                <p>
                  (2) Der Anbieter ist berechtigt, die erstellten Arbeiten als Referenz zu verwenden und 
                  auf der eigenen Website darzustellen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 7 Laufzeit und Kündigung
                </h2>
                <p>
                  (1) Die Vertragslaufzeit beginnt mit dem Datum der Auftragsbestätigung und beträgt 
                  [PLATZHALTER: 12/24] Monate (Mindestlaufzeit).
                </p>
                <p>
                  (2) Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils 
                  einen Monat, sofern er nicht mit einer Frist von 30 Tagen zum Monatsende gekündigt wird.
                </p>
                <p>
                  (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
                <p>
                  (4) Kündigungen bedürfen der Schriftform (E-Mail genügt).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 8 Haftung
                </h2>
                <p>
                  (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des 
                  Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
                </p>
                <p>
                  (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher 
                  Vertragspflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags 
                  überhaupt erst ermöglicht (Kardinalpflichten). In diesem Fall ist die Haftung auf den 
                  vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p>
                  (3) Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist 
                  ausgeschlossen, soweit gesetzlich zulässig.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 9 Gewährleistung
                </h2>
                <p>
                  (1) Der Anbieter gewährleistet, dass die erstellte Website zum Zeitpunkt der Abnahme 
                  den vertraglich vereinbarten Anforderungen entspricht.
                </p>
                <p>
                  (2) Mängel sind unverzüglich nach Entdeckung schriftlich anzuzeigen.
                </p>
                <p>
                  (3) Bei berechtigten Mängeln ist der Anbieter zunächst zur Nachbesserung berechtigt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 10 Datenschutz
                </h2>
                <p>
                  (1) Der Anbieter verarbeitet personenbezogene Daten des Auftraggebers ausschließlich 
                  zur Vertragserfüllung und im Einklang mit der Datenschutz-Grundverordnung (DSGVO).
                </p>
                <p>
                  (2) Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
                  <Link to="/datenschutz" className="text-accent hover:underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  § 11 Schlussbestimmungen
                </h2>
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p>
                  (2) Gerichtsstand ist, soweit gesetzlich zulässig, Nürnberg.
                </p>
                <p>
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
                  Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
                <p>
                  (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                </p>
              </section>

              <section className="bg-secondary/50 rounded-2xl p-6">
                <p className="text-sm">
                  <strong>Hinweis:</strong> Diese AGB enthalten Platzhalter und dienen als Vorlage. Sie 
                  müssen vor der Veröffentlichung von einem Rechtsanwalt geprüft und an die 
                  individuellen Gegebenheiten angepasst werden.
                </p>
              </section>

              <p className="text-sm text-muted-foreground">
                Stand: Januar 2026
              </p>
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

export default AGB;
