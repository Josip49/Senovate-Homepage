import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const benefits = [
    "Professionelles Design",
    "Schnelle Umsetzung",
    "Faire Preise",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dots-pattern opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />

      <div className="container-narrow relative z-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Website nach Wunsch
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Für Unternehmer.
            <br />
            <span className="text-accent">Nicht für Bastler.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Wir bauen Ihre professionelle Website – damit Sie sich auf Ihr Geschäft konzentrieren können. Ohne technischen Stress, ohne versteckte Kosten.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild className="text-base px-8 py-6">
              <a href="#kontakt">
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base px-8 py-6">
              <a href="#preise">Pakete ansehen</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="mt-10 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            ✓ Keine Vorkasse &nbsp; ✓ Festpreise &nbsp; ✓ Persönliche Betreuung
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
