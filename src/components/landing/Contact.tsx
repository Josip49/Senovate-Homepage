import { Mail, Phone, MapPin } from "lucide-react";
import PackageConfigurator from "./PackageConfigurator";

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="tagline mb-4">Kontakt</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dein Anfang
          </h2>
          <p className="text-lg text-muted-foreground">
            Konfiguriere dein Wunschpaket und wir melden uns bei dir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Telefon</h3>
                  <a href="tel:+4915207493245" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                    +49 1520 7493245
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">E-Mail</h3>
                  <a href="mailto:info@senovate.de" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                    info@senovate.de
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Standort</h3>
                  <p className="text-muted-foreground text-lg">
                    Bahnhofsstrasse 2a, Nürnberg
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="bg-secondary/50 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Dein Ansprechpartner</p>
              <p className="font-serif text-xl font-semibold text-foreground">Egzon Ramadani</p>
              <p className="text-muted-foreground">Co-Founder</p>
            </div>
          </div>

          {/* Right Column - Package Configurator */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            <PackageConfigurator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
