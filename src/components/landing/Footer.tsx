const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container-narrow px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-bold">Senovate</span>
            <p className="mt-4 text-primary-foreground/70 max-w-sm">
              Professionelle Websites für Unternehmer. Ohne technischen Stress,
              ohne versteckte Kosten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#leistungen"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#prozess"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Ablauf
                </a>
              </li>
              <li>
                <a
                  href="#preise"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {/* TODO: Add actual legal pages */}
              <li>
                <a
                  href="#impressum"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#datenschutz"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="#agb"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Senovate. Alle Rechte vorbehalten.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Made with ♥ in Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
