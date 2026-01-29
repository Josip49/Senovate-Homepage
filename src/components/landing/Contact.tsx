import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (no backend configured)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch. Wir freuen uns
              darauf, Sie und Ihre Ideen kennenzulernen.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">E-Mail</h3>
                  {/* TODO: Replace placeholder with actual email */}
                  <a
                    href="mailto:[PLATZHALTER@email.de]"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    [PLATZHALTER@email.de]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Telefon</h3>
                  {/* TODO: Replace placeholder with actual phone */}
                  <a
                    href="tel:[PLATZHALTER]"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    [PLATZHALTER]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Standort</h3>
                  {/* TODO: Replace placeholder with actual location */}
                  <p className="text-muted-foreground">[PLATZHALTER Ort, Deutschland]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-premium">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Vielen Dank!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Neue Nachricht senden
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefon (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456789"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    rows={4}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
