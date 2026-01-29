import { Globe, Palette, Smartphone, Zap, Shield, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webdesign & Entwicklung",
    description: "Moderne, professionelle Websites, die Ihre Marke perfekt repräsentieren und Besucher zu Kunden machen.",
  },
  {
    icon: Palette,
    title: "Individuelles Design",
    description: "Kein Template von der Stange. Wir gestalten Ihre Website passend zu Ihrer Unternehmensidentität.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobil",
    description: "Optimale Darstellung auf allen Geräten – vom Smartphone bis zum Desktop-Monitor.",
  },
  {
    icon: Zap,
    title: "Schnelle Ladezeiten",
    description: "Performance-optimierte Websites für beste Nutzererfahrung und besseres Google-Ranking.",
  },
  {
    icon: Shield,
    title: "Sicherheit & Updates",
    description: "SSL-Verschlüsselung und regelmäßige Wartung für einen sicheren Webauftritt.",
  },
  {
    icon: HeadphonesIcon,
    title: "Persönlicher Support",
    description: "Direkter Ansprechpartner für alle Fragen – keine Warteschleifen, keine Tickets.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Leistungen
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Alles, was Sie für Ihren Webauftritt brauchen
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der ersten Idee bis zur fertigen Website – wir kümmern uns um alles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
