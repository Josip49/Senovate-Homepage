import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="kontakt" className="section-padding relative overflow-hidden">
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
            Lass uns über dein Projekt sprechen. Wir freuen uns auf dich.
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
                  <a href="tel:+491602231994" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                    +49 160 2231994
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
              <p className="text-sm text-muted-foreground mb-2">Ihr Ansprechpartner</p>
              <p className="font-serif text-xl font-semibold text-foreground">Max Mustermann </p>
              <p className="text-muted-foreground">Co-Founder</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30">
            {isSubmitted ? <div className="text-center py-12">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Vielen Dank!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Neue Nachricht senden
                </Button>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ihr vollständiger Name" required className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ihre@email.de" required className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon (optional)
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+49 123 456789" className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Nachricht
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Erzählen Sie uns von Ihrem Projekt..." rows={4} required className="bg-background/50 resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : <>
                      Nachricht senden
                      <Send className="ml-2 w-4 h-4" />
                    </>}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;