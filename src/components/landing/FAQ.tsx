import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert die Erstellung meiner Website?",
    answer:
      "In der Regel benötigen wir 2-4 Wochen für die komplette Umsetzung – abhängig vom Umfang und Ihrer Reaktionszeit bei Feedback. Nach dem Erstgespräch nennen wir Ihnen einen konkreten Zeitrahmen.",
  },
  {
    question: "Was ist in der monatlichen Gebühr enthalten?",
    answer:
      "Die monatliche Gebühr deckt Hosting, SSL-Zertifikat, technische Wartung und Sicherheitsupdates ab. Ihre Website bleibt damit immer online, sicher und funktionsfähig.",
  },
  {
    question: "Kann ich meine Website später erweitern?",
    answer:
      "Selbstverständlich. Sie können jederzeit in ein größeres Paket wechseln oder einzelne Funktionen hinzubuchen. Wir wachsen gerne mit Ihrem Unternehmen mit.",
  },
  {
    question: "Was passiert, wenn ich kündige?",
    answer:
      "Bei Kündigung können Sie Ihre Website-Daten (Texte, Bilder) exportieren. Die Website selbst wird nach Vertragsende deaktiviert. Es gibt keine versteckten Kosten bei der Kündigung.",
  },
  {
    question: "Muss ich technisches Wissen mitbringen?",
    answer:
      "Nein, überhaupt nicht. Wir kümmern uns um alle technischen Aspekte. Sie liefern uns Ihre Inhalte (Texte, Bilder, Logo), und wir machen den Rest. Für Änderungen können Sie den Support nutzen.",
  },
  {
    question: "Ist meine Website auch für Suchmaschinen optimiert?",
    answer:
      "Ja, alle unsere Websites werden mit SEO-Grundlagen erstellt: schnelle Ladezeiten, mobile Optimierung, Meta-Tags und strukturierte Daten. Premium-SEO-Pakete beinhalten erweiterte Optimierungen.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer:
      "Wir akzeptieren Überweisung und SEPA-Lastschrift. Die Einrichtungsgebühr wird nach Fertigstellung fällig, die monatliche Gebühr per Lastschrift eingezogen.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground text-lg">
            Hier finden Sie Antworten auf die wichtigsten Fragen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-premium border-none"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
