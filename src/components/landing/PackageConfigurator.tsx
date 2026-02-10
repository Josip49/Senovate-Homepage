import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Upload, X, ChevronLeft, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

// ─── Constants ───────────────────────────────────────────────

const PACKAGES = [
  { id: "bronze", name: "Bronze", maxPages: 2, price24: "49€", price12: "69€", tier: "bronze" },
  { id: "silver", name: "Silber", maxPages: 4, price24: "79€", price12: "99€", tier: "silver" },
  { id: "gold", name: "Gold", maxPages: 8, price24: "99€", price12: "119€", tier: "gold" },
] as const;

const COLOR_THEMES = [
  { name: "Ocean Blue", colors: ["#0077B6", "#00B4D8", "#90E0EF"] },
  { name: "Forest Green", colors: ["#2D6A4F", "#52B788", "#B7E4C7"] },
  { name: "Sunset Warm", colors: ["#E76F51", "#F4A261", "#E9C46A"] },
  { name: "Royal Purple", colors: ["#7209B7", "#B5179E", "#F72585"] },
  { name: "Elegant Dark", colors: ["#212529", "#495057", "#ADB5BD"] },
  { name: "Rose Gold", colors: ["#B76E79", "#E8B4B8", "#F5E6E8"] },
  { name: "Midnight Blue", colors: ["#1B263B", "#415A77", "#778DA9"] },
  { name: "Coral Fresh", colors: ["#FF6B6B", "#FFA07A", "#FFD93D"] },
];

const SUBPAGE_OPTIONS = [
  "Team", "Referenzen", "Partner", "Über uns", "Galerie",
  "Blog", "Karriere", "FAQ", "Leistungen", "Standorte",
];

const BRANCHEN = [
  "Handwerk", "Gastronomie", "Einzelhandel", "Dienstleistung",
  "Gesundheit & Fitness", "Immobilien", "Beratung / Coaching",
  "IT / Tech", "Sonstiges",
];

const NEEDS_OPTIONS = [
  "Neue Website",
  "Website modernisieren",
  "Landingpage für Werbung",
  "Bewerber-Seite / Recruiting",
  "Terminbuchung integrieren",
  "Google-Bewertungen / Google-Profil",
];

const URGENCY_OPTIONS = [
  "Sofort / diese Woche",
  "2–4 Wochen",
  "1–2 Monate",
  "Ich informiere mich",
];

const BUDGET_OPTIONS = [
  { label: "Abo (49€/Monat) + Setup", value: "abo" },
  { label: "Einmalzahlung (Angebot)", value: "einmal" },
  { label: "Weiß ich noch nicht", value: "unsicher" },
];

const CONTACT_METHODS = ["WhatsApp", "Anruf", "E-Mail"];

type PackageId = typeof PACKAGES[number]["id"];

// ─── Custom Select Component ────────────────────────────────

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-full items-center justify-between rounded-xl border-2 border-input bg-background/50 px-4 py-3 text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:border-accent"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-border bg-card shadow-lg max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-secondary transition-colors first:rounded-t-xl last:rounded-b-xl ${
                value === opt ? "bg-accent/10 text-foreground font-medium" : "text-foreground"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────

const PackageConfigurator = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 1: Package + Duration
  const [selectedPackage, setSelectedPackage] = useState<PackageId | null>(null);
  const [duration, setDuration] = useState<"24" | "12">("24");

  // Step 2: Color + Subpages
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [customColor, setCustomColor] = useState("");
  const [selectedSubpages, setSelectedSubpages] = useState<string[]>([]);
  const [subpageImages, setSubpageImages] = useState<Record<string, File[]>>({});

  // Step 3: Qualification
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [branche, setBranche] = useState("");
  const [websiteExists, setWebsiteExists] = useState<"ja" | "nein" | null>(null);
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("");
  const [budget, setBudget] = useState("");

  // Step 4: Preview-Boost + Submit
  const [wantsPreview, setWantsPreview] = useState<"ja" | "nein" | null>(null);
  const [existingUrl, setExistingUrl] = useState("");
  const [previewNotes, setPreviewNotes] = useState("");
  const [dsgvoAccepted, setDsgvoAccepted] = useState(false);

  const currentPackage = PACKAGES.find((p) => p.id === selectedPackage);
  const maxPages = currentPackage?.maxPages ?? 0;

  // ─── Handlers ──────────────────────────────────────────────

  const handleSubpageToggle = (page: string) => {
    setSelectedSubpages((prev) => {
      if (prev.includes(page)) {
        const updated = prev.filter((p) => p !== page);
        const newImages = { ...subpageImages };
        delete newImages[page];
        setSubpageImages(newImages);
        return updated;
      }
      if (prev.length >= maxPages) return prev;
      return [...prev, page];
    });
  };

  const handleImageUpload = (page: string, files: FileList | null) => {
    if (!files) return;
    setSubpageImages((prev) => ({
      ...prev,
      [page]: [...(prev[page] || []), ...Array.from(files)],
    }));
  };

  const removeImage = (page: string, index: number) => {
    setSubpageImages((prev) => ({
      ...prev,
      [page]: prev[page].filter((_, i) => i !== index),
    }));
  };

  const toggleNeed = (need: string) => {
    setNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
      });
    }, 1000);
  };

  const canProceedStep1 = selectedPackage !== null;
  const canProceedStep2 = (selectedColor || customColor.trim()) && selectedSubpages.length > 0;
  const canProceedStep3 =
    firstName.trim() && lastName.trim() && email.trim() && branche && needs.length > 0 && urgency && budget && contactMethod;
  const canSubmit = dsgvoAccepted;

  // ─── Success State ─────────────────────────────────────────

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Vielen Dank!</h3>
        <p className="text-muted-foreground mb-8">
          Deine Anfrage wurde gesendet. Wir melden uns in Kürze.
        </p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Neue Anfrage senden
        </Button>
      </div>
    );
  }

  // ─── Step Labels ───────────────────────────────────────────

  const stepLabels = ["Paket", "Design", "Über dich", "Abschluss"];

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-1 mb-8">
        {stepLabels.map((label, i) => {
          const s = i + 1;
          return (
            <div key={s} className="flex items-center gap-1">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                    step >= s ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                <span className="text-[10px] text-muted-foreground">{label}</span>
              </div>
              {s < 4 && (
                <div className={`w-6 h-0.5 mb-4 transition-colors ${step > s ? "bg-accent" : "bg-secondary"}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* ─── Step 1: Package Selection ─── */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-1">Paket wählen</h3>
            <p className="text-sm text-muted-foreground">Welches Paket passt zu dir?</p>
          </div>

          {/* Duration Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-secondary rounded-full p-1 border border-border/50">
              {(["24", "12"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDuration(d)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    duration === d ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {d} Monate
                </button>
              ))}
            </div>
          </div>

          {duration === "24" && (
            <p className="text-center text-xs text-foreground/70 font-medium">
              🎉 Du sparst bis zu 29 % gegenüber dem 12-Monats-Abo!
            </p>
          )}

          <div className="grid gap-3">
            {PACKAGES.map((pkg) => {
              const price = duration === "24" ? pkg.price24 : pkg.price12;
              const tierBg = pkg.tier === "bronze" ? "from-bronze-bg to-bronze-card/20" : pkg.tier === "silver" ? "from-silver-bg to-silver-card/30" : "from-gold-bg to-gold-card/30";
              const tierBorder = pkg.tier === "bronze" ? "border-bronze/50" : pkg.tier === "silver" ? "border-silver/50" : "border-gold/50";
              const tierBorderActive = pkg.tier === "bronze" ? "border-bronze ring-bronze/30" : pkg.tier === "silver" ? "border-silver ring-silver/30" : "border-gold ring-gold/30";

              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    if (selectedSubpages.length > pkg.maxPages) {
                      const trimmed = selectedSubpages.slice(0, pkg.maxPages);
                      setSelectedSubpages(trimmed);
                      const newImages: Record<string, File[]> = {};
                      trimmed.forEach((p) => { if (subpageImages[p]) newImages[p] = subpageImages[p]; });
                      setSubpageImages(newImages);
                    }
                  }}
                  className={`w-full text-left rounded-2xl p-5 border-2 transition-all bg-gradient-to-r ${tierBg} ${
                    selectedPackage === pkg.id ? `${tierBorderActive} ring-2 shadow-sm` : `${tierBorder} hover:shadow-md`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif text-lg font-bold text-foreground">{pkg.name}</span>
                      <p className="text-sm text-muted-foreground mt-0.5">bis zu {pkg.maxPages} Unterseiten</p>
                    </div>
                    <span className="font-serif text-xl font-bold text-foreground">{price}<span className="text-sm font-normal text-foreground/70">/mtl.</span></span>
                  </div>
                </button>
              );
            })}
          </div>

          <Button className="w-full" size="lg" disabled={!canProceedStep1} onClick={() => setStep(2)}>
            Weiter
          </Button>
        </div>
      )}

      {/* ─── Step 2: Color + Subpages ─── */}
      {step === 2 && (
        <div className="space-y-6">
          <BackButton onClick={() => setStep(1)} />

          {/* Color Theme */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-1">Farbtheme</h3>
            <p className="text-sm text-muted-foreground mb-4">Wähle dein bevorzugtes Farbschema</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {COLOR_THEMES.map((theme) => (
                <button
                  key={theme.name}
                  type="button"
                  onClick={() => { setSelectedColor(theme.name); setCustomColor(""); }}
                  className={`rounded-xl p-3 border-2 transition-all text-left ${
                    selectedColor === theme.name ? "border-accent bg-accent/5" : "border-border/50 hover:border-border"
                  }`}
                >
                  <div className="flex gap-1.5 mb-2">
                    {theme.colors.map((c) => (
                      <div key={c} className="w-6 h-6 rounded-full border border-border/30" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-foreground">{theme.name}</span>
                </button>
              ))}
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Oder eigene Farbe / Farbcode</label>
              <Input
                placeholder="z.B. #FF5733 oder 'Dunkelrot'"
                value={customColor}
                onChange={(e) => { setCustomColor(e.target.value); if (e.target.value.trim()) setSelectedColor(null); }}
                className="bg-background/50"
              />
            </div>
          </div>

          {/* Subpages */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-1">Unterseiten wählen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Wähle bis zu {maxPages} Unterseiten für dein {currentPackage?.name}-Paket
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {SUBPAGE_OPTIONS.map((page) => {
                const isSelected = selectedSubpages.includes(page);
                const isDisabled = !isSelected && selectedSubpages.length >= maxPages;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => !isDisabled && handleSubpageToggle(page)}
                    disabled={isDisabled}
                    className={`rounded-xl px-4 py-3 text-sm font-medium border-2 transition-all ${
                      isSelected ? "border-accent bg-accent/10 text-foreground"
                        : isDisabled ? "border-border/30 text-muted-foreground/50 cursor-not-allowed"
                        : "border-border/50 text-foreground hover:border-border"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Image uploads per subpage */}
            {selectedSubpages.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">Bilder hochladen (optional)</p>
                {selectedSubpages.map((page) => (
                  <div key={page} className="rounded-xl border border-border/50 p-4">
                    <p className="text-sm font-medium text-foreground mb-3">{page}</p>
                    {subpageImages[page]?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {subpageImages[page].map((file, idx) => (
                          <div key={idx} className="relative group">
                            <div className="w-16 h-16 rounded-lg bg-secondary overflow-hidden">
                              <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeImage(page, idx)}
                              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      <Upload className="w-4 h-4" />
                      <span>Bilder hinzufügen</span>
                      <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleImageUpload(page, e.target.files)} />
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button className="w-full" size="lg" disabled={!canProceedStep2} onClick={() => setStep(3)}>
            Weiter
          </Button>
        </div>
      )}

      {/* ─── Step 3: Qualification ─── */}
      {step === 3 && (
        <div className="space-y-6">
          <BackButton onClick={() => setStep(2)} />

          <div className="text-center mb-2">
            <h3 className="font-serif text-xl font-bold text-foreground mb-1">Erzähl uns von dir</h3>
            <p className="text-sm text-muted-foreground">Dauert nur 30–60 Sekunden</p>
          </div>

          {/* Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Vorname *</label>
              <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Max" required className="bg-background/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nachname *</label>
              <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Mustermann" required className="bg-background/50" />
            </div>
          </div>

          {/* Branche */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Firma / Branche *</label>
            <CustomSelect value={branche} onChange={setBranche} options={BRANCHEN} placeholder="Branche wählen…" />
          </div>

          {/* Website vorhanden */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Website vorhanden?</label>
            <div className="flex gap-3">
              {(["ja", "nein"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setWebsiteExists(v)}
                  className={`flex-1 rounded-xl py-3 text-sm font-medium border-2 transition-all ${
                    websiteExists === v ? "border-accent bg-accent/10 text-foreground" : "border-border/50 text-foreground hover:border-border"
                  }`}
                >
                  {v === "ja" ? "Ja" : "Nein"}
                </button>
              ))}
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Stadt / PLZ</label>
            <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="z.B. Nürnberg" className="bg-background/50" />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">E-Mail *</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="deine@email.de" required className="bg-background/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Telefon</label>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+49 123 456789" className="bg-background/50" />
            </div>
          </div>

          {/* Preferred contact */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Bevorzugter Kontaktweg *</label>
            <div className="flex gap-2">
              {CONTACT_METHODS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setContactMethod(m)}
                  className={`flex-1 rounded-xl py-3 text-sm font-medium border-2 transition-all ${
                    contactMethod === m ? "border-accent bg-accent/10 text-foreground" : "border-border/50 text-foreground hover:border-border"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Needs */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Was brauchst du? * (Mehrfachauswahl)</label>
            <div className="grid grid-cols-1 gap-2">
              {NEEDS_OPTIONS.map((need) => (
                <button
                  key={need}
                  type="button"
                  onClick={() => toggleNeed(need)}
                  className={`text-left rounded-xl px-4 py-3 text-sm font-medium border-2 transition-all ${
                    needs.includes(need) ? "border-accent bg-accent/10 text-foreground" : "border-border/50 text-foreground hover:border-border"
                  }`}
                >
                  {need}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Wie dringend? *</label>
            <CustomSelect value={urgency} onChange={setUrgency} options={URGENCY_OPTIONS} placeholder="Dringlichkeit wählen…" />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Budget / Modell *</label>
            <div className="grid gap-2">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setBudget(opt.value)}
                  className={`text-left rounded-xl px-4 py-3 text-sm font-medium border-2 transition-all ${
                    budget === opt.value ? "border-accent bg-accent/10 text-foreground" : "border-border/50 text-foreground hover:border-border"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <Button className="w-full" size="lg" disabled={!canProceedStep3} onClick={() => setStep(4)}>
            Weiter
          </Button>
        </div>
      )}

      {/* ─── Step 4: Preview-Boost + Submit ─── */}
      {step === 4 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <BackButton onClick={() => setStep(3)} />

          {/* Summary */}
          <div className="bg-secondary/50 rounded-xl p-4 space-y-1 text-sm">
            <p className="font-medium text-foreground">
              {currentPackage?.name} · {duration} Monate · {duration === "24" ? currentPackage?.price24 : currentPackage?.price12}/mtl.
            </p>
            <p className="text-muted-foreground">Farbe: {selectedColor || customColor}</p>
            <p className="text-muted-foreground">Seiten: {selectedSubpages.join(", ")}</p>
            <p className="text-muted-foreground">{firstName} {lastName} · {email}</p>
          </div>

          {/* Preview Boost */}
          <div className="bg-accent/5 rounded-2xl p-5 border border-accent/20">
            <h4 className="font-serif text-lg font-bold text-foreground mb-2">
              🚀 Kostenlose Vorschau?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Wir erstellen dir eine unverbindliche Vorschau deiner Website!
            </p>

            <div className="flex gap-3 mb-4">
              {(["ja", "nein"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setWantsPreview(v)}
                  className={`flex-1 rounded-xl py-3 text-sm font-medium border-2 transition-all ${
                    wantsPreview === v ? "border-accent bg-accent/10 text-foreground" : "border-border/50 text-foreground hover:border-border"
                  }`}
                >
                  {v === "ja" ? "Ja, bitte!" : "Nein, danke"}
                </button>
              ))}
            </div>

            {wantsPreview === "ja" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Instagram / Google-Link oder aktuelle Website-URL
                  </label>
                  <Input
                    value={existingUrl}
                    onChange={(e) => setExistingUrl(e.target.value)}
                    placeholder="https://..."
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Was soll unbedingt drauf? (max. 300 Zeichen)
                  </label>
                  <Textarea
                    value={previewNotes}
                    onChange={(e) => setPreviewNotes(e.target.value.slice(0, 300))}
                    placeholder="Erzähl uns kurz, was dir wichtig ist…"
                    rows={3}
                    maxLength={300}
                    className="bg-background/50 resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">{previewNotes.length}/300</p>
                </div>
              </div>
            )}
          </div>

          {/* DSGVO */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="dsgvo"
              checked={dsgvoAccepted}
              onCheckedChange={(v) => setDsgvoAccepted(v === true)}
              className="mt-0.5"
            />
            <label htmlFor="dsgvo" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
              <a href="/datenschutz" className="text-accent underline">Datenschutzerklärung</a> zu. *
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? (
              "Wird gesendet..."
            ) : (
              <>
                {wantsPreview === "ja" ? "Kostenlose Vorschau anfordern" : "Rückruf anfordern"}
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

// ─── Shared Components ───────────────────────────────────────

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    <ChevronLeft className="w-4 h-4" /> Zurück
  </button>
);

export default PackageConfigurator;
