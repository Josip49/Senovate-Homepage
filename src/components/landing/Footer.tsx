const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow px-4 md:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Icon */}
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                <rect x="4" y="6" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" className="text-primary-foreground" />
                <path d="M16 28h8v4H16z" fill="currentColor" className="text-primary-foreground" />
                <path d="M12 32h16" stroke="currentColor" strokeWidth="2.5" className="text-primary-foreground" strokeLinecap="round" />
                <path d="M13 15l4 4-4 4M22 15l4 4-4 4" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-serif text-2xl font-bold">Senovate</span>
            </div>
            <p className="text-primary-foreground/60 max-w-sm mb-6">
              Professionelle Websites für Unternehmer. Ohne technischen Stress, ohne versteckte Kosten.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Für Unternehmer. Nicht für Bastler.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#leistungen" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#prozess" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Ablauf
                </a>
              </li>
              <li>
                <a href="#preise" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="/impressum" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Senovate. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-sm text-primary-foreground/50">
            <span>Egal wann.</span>
            <span>Immer sichtbar.</span>
            <span>Egal wo.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
