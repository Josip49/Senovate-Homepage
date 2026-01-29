import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import wavePattern from "@/assets/wave-pattern.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Wave Pattern */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${wavePattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <div className="container-narrow relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            {/* Tagline */}
            <p className="tagline mb-6 opacity-0 animate-fade-up">
              Website nach Wunsch
            </p>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up animation-delay-100">
              Für Unternehmer.
              <br />
              <span className="text-accent">Nicht für Bastler.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Wir bauen Ihre professionelle Website – damit Sie sich auf Ihr Geschäft konzentrieren können.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
              <Button size="lg" asChild className="text-base px-8 py-6 group">
                <a href="#kontakt">
                  Kostenloses Erstgespräch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base px-8 py-6">
                <a href="#preise">Pakete ansehen</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-12 mb-24 md:mb-0 pt-8 border-t border-border/50 opacity-0 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Keine Vorkasse</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Festpreise</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Persönliche Betreuung</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Decorative Code Icon */}
              <div className="w-64 h-64 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                  {/* Monitor */}
                  <rect x="20" y="30" width="160" height="110" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="6" />
                  {/* Screen */}
                  <rect x="30" y="40" width="140" height="90" rx="6" fill="hsl(var(--background))" />
                  {/* Stand */}
                  <rect x="80" y="140" width="40" height="20" fill="hsl(var(--foreground))" />
                  {/* Base */}
                  <rect x="60" y="160" width="80" height="8" rx="4" fill="hsl(var(--foreground))" />
                  {/* Code brackets */}
                  <path d="M65 75 L50 90 L65 105" stroke="hsl(var(--accent))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M135 75 L150 90 L135 105" stroke="hsl(var(--accent))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* Slash */}
                  <path d="M110 65 L90 115" stroke="hsl(var(--accent))" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gold/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-narrow px-4 md:px-8">
          <div className="flex justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground opacity-0 animate-fade-up animation-delay-500">
            <span>Egal wann.</span>
            <span>Immer sichtbar.</span>
            <span>Egal wo.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
