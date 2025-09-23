import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppContact = () => {
    window.open("https://api.whatsapp.com/send/?phone=5521968929102&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas%20da%20InovaX", "_blank");
  };

  return (
    <header className="fixed top-0 w-full z-40 glass-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300">
            <span className="text-white">InovaX</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button
            onClick={handleWhatsAppContact}
            className="bg-primary hover:bg-primary/90 glow-primary"
          >
            Falar Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
