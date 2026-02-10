import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Upload, X, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PACKAGES = [
  { id: "bronze", name: "Bronze", maxPages: 2, price: "49€/mtl." },
  { id: "silver", name: "Silber", maxPages: 4, price: "79€/mtl." },
  { id: "gold", name: "Gold", maxPages: 8, price: "99€/mtl." },
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
  "Team",
  "Referenzen",
  "Partner",
  "Über uns",
  "Galerie",
  "Blog",
  "Karriere",
  "FAQ",
  "Leistungen",
  "Standorte",
];

type PackageId = typeof PACKAGES[number]["id"];

interface SubpageData {
  name: string;
  images: File[];
}

const PackageConfigurator = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 1: Package
  const [selectedPackage, setSelectedPackage] = useState<PackageId | null>(null);

  // Step 2: Color + Subpages
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [customColor, setCustomColor] = useState("");
  const [selectedSubpages, setSelectedSubpages] = useState<string[]>([]);
  const [subpageImages, setSubpageImages] = useState<Record<string, File[]>>({});

  // Step 3: Contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const currentPackage = PACKAGES.find((p) => p.id === selectedPackage);
  const maxPages = currentPackage?.maxPages ?? 0;

  const handleSubpageToggle = (page: string) => {
    setSelectedSubpages((prev) => {
      if (prev.includes(page)) {
        const updated = prev.filter((p) => p !== page);
        // Remove images for deselected page
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
    const newFiles = Array.from(files);
    setSubpageImages((prev) => ({
      ...prev,
      [page]: [...(prev[page] || []), ...newFiles],
    }));
  };

  const removeImage = (page: string, index: number) => {
    setSubpageImages((prev) => ({
      ...prev,
      [page]: prev[page].filter((_, i) => i !== index),
    }));
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canProceedStep1 = selectedPackage !== null;
  const canProceedStep2 = (selectedColor || customColor.trim()) && selectedSubpages.length > 0;

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
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setSelectedPackage(null);
            setSelectedColor(null);
            setCustomColor("");
            setSelectedSubpages([]);
            setSubpageImages({});
            setFormData({ name: "", email: "", phone: "", message: "" });
          }}
        >
          Neue Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step >= s
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-0.5 transition-colors ${
                  step > s ? "bg-accent" : "bg-secondary"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Package Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl font-bold text-foreground mb-1">Paket wählen</h3>
            <p className="text-sm text-muted-foreground">Welches Paket passt zu dir?</p>
          </div>

          <div className="grid gap-3">
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  // Reset subpages if switching to a smaller package
                  const newMax = pkg.maxPages;
                  if (selectedSubpages.length > newMax) {
                    const trimmed = selectedSubpages.slice(0, newMax);
                    setSelectedSubpages(trimmed);
                    const newImages: Record<string, File[]> = {};
                    trimmed.forEach((p) => {
                      if (subpageImages[p]) newImages[p] = subpageImages[p];
                    });
                    setSubpageImages(newImages);
                  }
                }}
                className={`w-full text-left rounded-2xl p-5 border-2 transition-all ${
                  selectedPackage === pkg.id
                    ? "border-accent bg-accent/5 shadow-sm"
                    : "border-border/50 bg-background/50 hover:border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-serif text-lg font-bold text-foreground">
                      {pkg.name}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      bis zu {pkg.maxPages} Unterseiten
                    </p>
                  </div>
                  <span className="text-sm font-medium text-foreground/80">ab {pkg.price}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            className="w-full"
            size="lg"
            disabled={!canProceedStep1}
            onClick={() => setStep(2)}
          >
            Weiter
          </Button>
        </div>
      )}

      {/* Step 2: Color Theme + Subpages */}
      {step === 2 && (
        <div className="space-y-8">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Zurück
          </button>

          {/* Color Theme */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-1">Farbtheme</h3>
            <p className="text-sm text-muted-foreground mb-4">Wähle dein bevorzugtes Farbschema</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {COLOR_THEMES.map((theme) => (
                <button
                  key={theme.name}
                  type="button"
                  onClick={() => {
                    setSelectedColor(theme.name);
                    setCustomColor("");
                  }}
                  className={`rounded-xl p-3 border-2 transition-all text-left ${
                    selectedColor === theme.name
                      ? "border-accent bg-accent/5"
                      : "border-border/50 hover:border-border"
                  }`}
                >
                  <div className="flex gap-1.5 mb-2">
                    {theme.colors.map((c) => (
                      <div
                        key={c}
                        className="w-6 h-6 rounded-full border border-border/30"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-foreground">{theme.name}</span>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Oder eigene Farbe / Farbcode eingeben
              </label>
              <Input
                placeholder="z.B. #FF5733 oder 'Dunkelrot'"
                value={customColor}
                onChange={(e) => {
                  setCustomColor(e.target.value);
                  if (e.target.value.trim()) setSelectedColor(null);
                }}
                className="bg-background/50"
              />
            </div>
          </div>

          {/* Subpages */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-1">
              Unterseiten wählen
            </h3>
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
                      isSelected
                        ? "border-accent bg-accent/10 text-foreground"
                        : isDisabled
                        ? "border-border/30 text-muted-foreground/50 cursor-not-allowed"
                        : "border-border/50 text-foreground hover:border-border"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Selected subpages with image upload */}
            {selectedSubpages.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Bilder hochladen (optional)
                </p>
                {selectedSubpages.map((page) => (
                  <div key={page} className="rounded-xl border border-border/50 p-4">
                    <p className="text-sm font-medium text-foreground mb-3">{page}</p>

                    {/* Uploaded images preview */}
                    {subpageImages[page]?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {subpageImages[page].map((file, idx) => (
                          <div key={idx} className="relative group">
                            <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-full h-full object-cover"
                              />
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
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleImageUpload(page, e.target.files)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            className="w-full"
            size="lg"
            disabled={!canProceedStep2}
            onClick={() => setStep(3)}
          >
            Weiter
          </Button>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Zurück
          </button>

          {/* Summary */}
          <div className="bg-secondary/50 rounded-xl p-4 space-y-1">
            <p className="text-sm font-medium text-foreground">
              Paket: <span className="font-bold">{currentPackage?.name}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Farbe: {selectedColor || customColor}
            </p>
            <p className="text-sm text-muted-foreground">
              Seiten: {selectedSubpages.join(", ")}
            </p>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Dein vollständiger Name"
              required
              className="bg-background/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              E-Mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="deine@email.de"
              required
              className="bg-background/50"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Telefon (optional)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+49 123 456789"
              className="bg-background/50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Nachricht (optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Weitere Wünsche oder Infos..."
              rows={3}
              className="bg-background/50 resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Wird gesendet..."
            ) : (
              <>
                Anfrage senden
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
  );
};

export default PackageConfigurator;
