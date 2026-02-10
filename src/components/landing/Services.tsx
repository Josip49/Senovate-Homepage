import { Globe, Palette, Smartphone, Zap, Shield, HeadphonesIcon } from "lucide-react";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceResponsive from "@/assets/service-responsive.jpg";
import serviceSpeed from "@/assets/service-speed.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceSupport from "@/assets/service-support.jpg";

const services = [
  {
    icon: Globe,
    title: "Webdesign & Entwicklung",
    description: "Moderne, professionelle Websites, die deine Marke repräsentieren und Besucher zu Kunden machen.",
    image: serviceWebdesign,
  },
  {
    icon: Palette,
    title: "Individuelles Design",
    description: "Kein Template von der Stange – wir gestalten passend zu deiner Unternehmensidentität.",
    image: serviceDesign,
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobil",
    description: "Optimale Darstellung auf allen Geräten – vom Smartphone bis zum Desktop-Monitor.",
    image: serviceResponsive,
  },
  {
    icon: Zap,
    title: "Schnelle Ladezeiten",
    description: "Performance-optimiert für beste Nutzererfahrung und besseres Google-Ranking.",
    image: serviceSpeed,
  },
  {
    icon: Shield,
    title: "Sicherheit & Updates",
    description: "SSL-Verschlüsselung und regelmäßige Wartung für einen sicheren Webauftritt.",
    image: serviceSecurity,
  },
  {
    icon: HeadphonesIcon,
    title: "Persönlicher Support",
    description: "Direkter Ansprechpartner für alle Fragen – keine Warteschleifen, keine Tickets.",
    image: serviceSupport,
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
            Alles für deinen Webauftritt
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
              className="group relative bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/30 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Image Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/70" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
