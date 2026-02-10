const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground isolate transform-gpu will-change-transform">
      <div className="container-narrow px-4 md:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Icon */}
              <svg viewBox="0 0 200 200" className="w-10 h-10">
                <rect x="20" y="30" width="160" height="110" rx="12" fill="hsl(var(--card))" stroke="currentColor" strokeWidth="6" />
                <rect x="30" y="40" width="140" height="90" rx="6" fill="hsl(var(--background))" />
                <rect x="80" y="140" width="40" height="20" fill="currentColor" />
                <rect x="60" y="160" width="80" height="8" rx="4" fill="currentColor" />
                <path d="M65 75 L50 90 L65 105" stroke="hsl(var(--accent))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M135 75 L150 90 L135 105" stroke="hsl(var(--accent))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M110 65 L90 115" stroke="hsl(var(--accent))" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <span className="text-2xl font-black" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Senovate</span>
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
