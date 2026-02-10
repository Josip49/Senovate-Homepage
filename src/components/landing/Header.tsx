import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#prozess", label: "Ablauf" },
    { href: "#preise", label: "Preise" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-10 h-10">
              {/* Monitor */}
              <rect x="20" y="30" width="160" height="110" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="6" />
              {/* Screen */}
              <rect x="30" y="40" width="140" height="90" rx="6" fill="hsl(var(--background))" />
              {/* Stand */}
              <rect x="80" y="140" width="40" height="20" fill="hsl(var(--foreground))" />
              {/* Base */}
              <rect x="60" y="160" width="80" height="8" rx="4" fill="hsl(var(--foreground))" />
              {/* Code brackets */}
              <path d="M65 75 L50 90 L65 105" stroke="hsl(var(--accent))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M135 75 L150 90 L135 105" stroke="hsl(var(--accent))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              {/* Slash */}
              <path d="M110 65 L90 115" stroke="hsl(var(--accent))" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif text-2xl font-bold text-foreground tracking-tight">
            Senovate
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="lg" className="ml-4">
            <a href="#kontakt">Erstgespräch buchen</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-lg border-t border-border animate-fade-in">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-4 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-4" size="lg">
              <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                Erstgespräch buchen
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
