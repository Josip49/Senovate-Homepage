import { Check, Heart } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Bronze",
    tier: "bronze",
    tagline: "Dein kleines digitales Schaufenster.",
    price24: 49,
    price12: 69,
    features: [
      { text: "One-Pager", included: true },
      { text: "Responsives Design", included: true },
      { text: "SSL-Zertifikat", included: true },
    ],
    popular: false,
  },
  {
    name: "Silber",
    tier: "silver",
    tagline: "Für alle, denen Bronze nicht genug ist.",
    price24: 79,
    price12: 99,
    features: [
      { text: "bis zu 2 Unterseiten", included: true },
      { text: "Mehr Reichweite", included: true },
      { text: "Social-Media Button", included: true },
      { text: "SSL-Zertifikat", included: true },
    ],
    popular: false,
  },
  {
    name: "Gold",
    tier: "gold",
    tagline: "Für dich, wenn du online überzeugen willst.",
    price24: 99,
    price12: 119,
    features: [
      { text: "bis zu 4 Unterseiten", included: true },
      { text: "Social-Media-Button", included: true },
      { text: "Mehr Reichweite", included: true },
      { text: "Fotos von deinem Unternehmen", included: true },
      { text: "Premium Support", included: true },
    ],
    popular: true,
  },
];

const Pricing = () => {
  const [duration, setDuration] = useState<"24" | "12">("24");

  return (
    <section id="preise" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="tagline mb-4">Preise</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Wähle das passende Paket für dein Unternehmen.
          </p>
          <p className="text-base text-muted-foreground bg-secondary/50 rounded-2xl px-6 py-4 inline-block">
            Wir sind nicht die Agentur, die 5.000–10.000 € für eine Homepage verlangt.<br />
            <span className="font-medium text-foreground">Wir wollen fair sein – und liefern trotzdem Qualität.</span>
          </p>
        </div>

        {/* Duration Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-card rounded-full p-1.5 border border-border/50 shadow-sm">
            <button
              onClick={() => setDuration("24")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                duration === "24"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              24 Monate
            </button>
            <button
              onClick={() => setDuration("12")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                duration === "12"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              12 Monate
            </button>
          </div>
        </div>

        {/* Savings hint */}
        {duration === "24" && (
          <p className="text-center text-sm text-accent font-medium mb-8">
            Du sparst bis zu 29 % gegenüber dem 12-Monats-Abo!
          </p>
        )}
        {duration === "12" && (
          <p className="text-center text-sm text-muted-foreground mb-8">
            Wechsle zu 24 Monaten und spare bis zu 240 € pro Jahr.
          </p>
        )}

        {/* Setup Fee Notice */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-2 bg-card px-6 py-4 rounded-2xl shadow-sm border border-border/50">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Einrichtung:</span>
              <span className="font-serif text-xl font-bold text-foreground">einmalig 199€</span>
            </div>
            <span className="text-sm text-muted-foreground">Alle Preise verstehen sich netto zzgl. MwSt.</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => {
            const price = duration === "24" ? plan.price24 : plan.price12;
            const monthlySaving = plan.price12 - plan.price24;
            const yearlySaving = monthlySaving * 12;
            const savingPercent = Math.round((monthlySaving / plan.price12) * 100);

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? "md:scale-105 z-10" : ""
                }`}
              >
                {/* Card Background */}
                <div
                  className={`h-full flex flex-col ${
                    plan.tier === "bronze"
                      ? "bg-gradient-to-b from-bronze-bg via-bronze-bg to-bronze-card/40"
                      : plan.tier === "silver"
                      ? "bg-gradient-to-b from-silver-bg via-silver-bg to-silver-card/50"
                      : "bg-gradient-to-b from-gold-bg via-gold-bg to-gold-card/50"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-6 right-6">
                      <Heart className="w-8 h-8 text-gold fill-gold" />
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-8 flex-grow">
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 min-h-[40px]">
                      {plan.tagline}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Footer */}
                  <div
                    className={`px-8 py-6 ${
                      plan.tier === "bronze"
                        ? "bg-bronze-card"
                        : plan.tier === "silver"
                        ? "bg-silver-card"
                        : "bg-gold-card"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-4xl font-bold text-foreground">
                        {price}€
                      </span>
                      <span className="text-foreground/80 font-medium">/mtl.</span>
                    </div>
                    {duration === "24" && (
                      <p className="text-xs text-accent font-medium mt-2">
                        Spare {savingPercent} % · {yearlySaving}€ weniger pro Jahr
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className="flex justify-center gap-8 md:gap-16 mt-16 text-sm font-medium text-muted-foreground">
          <span>Egal wann.</span>
          <span>Immer sichtbar.</span>
          <span>Egal wo.</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
