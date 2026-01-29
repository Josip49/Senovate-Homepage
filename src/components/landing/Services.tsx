import { Globe, Palette, Smartphone, Zap, Shield, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webdesign & Entwicklung",
    description: "Moderne, professionelle Websites, die Ihre Marke repräsentieren und Besucher zu Kunden machen.",
  },
  {
    icon: Palette,
    title: "Individuelles Design",
    description: "Kein Template von der Stange – wir gestalten passend zu Ihrer Unternehmensidentität.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobil",
    description: "Optimale Darstellung auf allen Geräten – vom Smartphone bis zum Desktop-Monitor.",
  },
  {
    icon: Zap,
    title: "Schnelle Ladezeiten",
    description: "Performance-optimiert für beste Nutzererfahrung und besseres Google-Ranking.",
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
    <section id="leistungen" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="tagline mb-4">Leistungen</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Alles für Ihren Webauftritt
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der ersten Idee bis zur fertigen Website – wir kümmern uns um alles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
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
