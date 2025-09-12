import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Bot, Zap } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5521968929102";
    const message =
      "Olá! Gostaria de conhecer as soluções tecnológicas da InovaX";
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/30 rounded-full animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme seu negócio com{" "}
            <span className="text-primary font-extrabold">
              tecnologia avançada
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A InovaX desenvolve soluções tecnológicas completas: sites modernos,
            sistemas robustos, chatbots inteligentes, agentes de IA e automações
            que revolucionam sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-primary group"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg px-8 py-6 border-primary/50 hover:border-primary"
            >
              Ver Serviços
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card p-6 rounded-xl animate-slide-in-left">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Desenvolvimento Web
              </h3>
              <p className="text-muted-foreground">
                Sites e sistemas modernos com as melhores tecnologias
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA & Chatbots</h3>
              <p className="text-muted-foreground">
                Agentes inteligentes que otimizam seu atendimento
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl animate-slide-in-right">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automação</h3>
              <p className="text-muted-foreground">
                Processos automatizados que aumentam sua produtividade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
