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
      "In der Regel benötigen wir 2-4 Wochen für die komplette Umsetzung – abhängig vom Umfang und deiner Reaktionszeit bei Feedback. Nach dem Erstgespräch nennen wir dir einen konkreten Zeitrahmen.",
  },
  {
    question: "Was ist in der monatlichen Gebühr enthalten?",
    answer:
      "Die monatliche Gebühr deckt Hosting, SSL-Zertifikat, technische Wartung und Sicherheitsupdates ab. Deine Website bleibt damit immer online, sicher und funktionsfähig.",
  },
  {
    question: "Kann ich meine Website später erweitern?",
    answer:
      "Selbstverständlich. Du kannst jederzeit in ein größeres Paket wechseln oder einzelne Funktionen hinzubuchen. Wir wachsen gerne mit deinem Unternehmen mit.",
  },
  {
    question: "Was passiert, wenn ich kündige?",
    answer:
      "Bei Kündigung kannst du deine Website-Daten (Texte, Bilder) exportieren. Die Website selbst wird nach Vertragsende deaktiviert. Es gibt keine versteckten Kosten bei der Kündigung.",
  },
  {
    question: "Muss ich technisches Wissen mitbringen?",
    answer:
      "Nein, überhaupt nicht. Wir kümmern uns um alle technischen Aspekte. Du lieferst uns deine Inhalte (Texte, Bilder, Logo), und wir machen den Rest.",
  },
  {
    question: "Ist meine Website auch für Suchmaschinen optimiert?",
    answer:
      "Ja, alle unsere Websites werden mit SEO-Grundlagen erstellt: schnelle Ladezeiten, mobile Optimierung, Meta-Tags und strukturierte Daten.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="tagline mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Hier findest du Antworten auf die wichtigsten Fragen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 md:px-8 shadow-sm border border-border/30 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
