import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Bronze",
    price: "49",
    tier: "bronze",
    description: "Perfekt für den Einstieg",
    features: [
      "1-Seiten-Website (OnePager)",
      "Responsives Design",
      "Kontaktformular",
      "SSL-Zertifikat",
      "Basis-SEO",
      "1 Korrekturschleife",
    ],
    cta: "Paket wählen",
    popular: false,
  },
  {
    name: "Silber",
    price: "79",
    tier: "silver",
    description: "Unser beliebtestes Paket",
    features: [
      "Bis zu 5 Unterseiten",
      "Responsives Design",
      "Kontaktformular",
      "SSL-Zertifikat",
      "Erweitertes SEO",
      "2 Korrekturschleifen",
      "Google Maps Integration",
      "Social Media Verlinkung",
    ],
    cta: "Paket wählen",
    popular: true,
  },
  {
    name: "Gold",
    price: "99",
    tier: "gold",
    description: "Für maximale Wirkung",
    features: [
      "Bis zu 10 Unterseiten",
      "Premium responsives Design",
      "Erweiterte Formulare",
      "SSL-Zertifikat",
      "Premium SEO-Paket",
      "3 Korrekturschleifen",
      "Google Maps Integration",
      "Social Media Verlinkung",
      "Blog-Funktion",
      "Bildergalerie",
    ],
    cta: "Paket wählen",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="preise" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Preise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Transparente Preise, keine Überraschungen
          </h2>
          <p className="text-muted-foreground text-lg">
            Wählen Sie das passende Paket für Ihr Unternehmen.
          </p>
        </div>

        {/* Setup Fee Notice */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-premium">
            <span className="text-muted-foreground">Einmalige Einrichtung:</span>
            <span className="font-semibold text-foreground">199 €</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-3xl p-8 shadow-premium transition-all duration-300 hover:shadow-premium-hover ${
                plan.popular ? "ring-2 ring-accent scale-105 md:scale-110" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Beliebt
                </div>
              )}

              {/* Tier Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.tier === "bronze"
                    ? "bg-bronze-bg"
                    : plan.tier === "silver"
                    ? "bg-silver-bg"
                    : "bg-gold-bg"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full ${
                    plan.tier === "bronze"
                      ? "bg-bronze"
                      : plan.tier === "silver"
                      ? "bg-silver"
                      : "bg-gold"
                  }`}
                />
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-serif text-4xl font-bold text-foreground">
                  {plan.price} €
                </span>
                <span className="text-muted-foreground">/Monat</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                size="lg"
              >
                <a href="#kontakt">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Support Add-on */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-premium max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Optional: Monatlicher Support
              </h3>
              <p className="text-muted-foreground">
                1 Update pro Monat inklusive (Text, Bilder, kleine Anpassungen)
              </p>
            </div>
            <div className="text-right">
              <div className="font-serif text-3xl font-bold text-foreground">
                8 €<span className="text-lg font-normal text-muted-foreground">/Monat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
