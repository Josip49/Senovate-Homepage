import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Erstgespräch",
    description: "Wir lernen Sie und Ihr Unternehmen kennen. Gemeinsam definieren wir Ziele, Wünsche und den Umfang Ihres Projekts.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Konzept & Design",
    description: "Wir erstellen ein maßgeschneidertes Designkonzept. Sie geben Feedback, wir optimieren – bis alles passt.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Entwicklung",
    description: "Ihr Design wird zum Leben erweckt. Responsive, schnell, SEO-optimiert und bereit für den Einsatz.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "Ihre Website geht live. Wir stehen auch danach für Fragen und Anpassungen zur Verfügung.",
  },
];

const Process = () => {
  return (
    <section id="prozess" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Ablauf
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            In 4 Schritten zu Ihrer Website
          </h2>
          <p className="text-muted-foreground text-lg">
            Ein klarer, transparenter Prozess – damit Sie immer wissen, wo wir stehen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
