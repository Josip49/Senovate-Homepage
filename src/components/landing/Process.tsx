import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Erstgespräch",
    description: "Wir lernen dich und dein Unternehmen kennen. Gemeinsam definieren wir Ziele und Wünsche.",
    color: "bg-gold/20 text-gold",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Konzept & Design",
    description: "Wir erstellen ein maßgeschneidertes Designkonzept. Du gibst Feedback, wir optimieren.",
    color: "bg-silver/20 text-silver",
  },
  {
    icon: Code2,
    number: "03",
    title: "Entwicklung",
    description: "Dein Design wird zum Leben erweckt. Responsive, schnell und SEO-optimiert.",
    color: "bg-bronze/20 text-bronze",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "Deine Website geht live. Wir stehen auch danach für Fragen zur Verfügung.",
    color: "bg-accent/20 text-accent",
  },
];

const Process = () => {
  return (
    <section id="prozess" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="tagline mb-4">Ablauf</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            In 4 Schritten zu deiner Website
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein klarer, transparenter Prozess – damit du immer weißt, wo wir stehen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line (hidden on mobile and for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/30 h-full group-hover:bg-foreground group-hover:border-foreground/20">
                {/* Number Badge */}
                <div className="absolute -top-4 right-6 bg-foreground text-primary-foreground text-sm font-bold px-4 py-2 rounded-full group-hover:bg-accent transition-colors duration-500">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-white mb-3 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
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
