import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  MessageSquare,
  Clock,
  Users,
  Zap,
  Star,
  Shield,
  Rocket,
} from "lucide-react";

const Contact = () => {
  const [isMobileButton, setIsMobileButton] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileButton(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleWhatsAppContact = () => {
    const phoneNumber = "5521968929102";
    const message =
  "Olá! Gostaria de conhecer as soluções tecnológicas da " + "%cInovaX";
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const benefits = [
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Atendimento em até 2 horas",
      highlight: "2h",
    },
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "100% de satisfação dos clientes",
      highlight: "100%",
    },
    {
      icon: Shield,
      title: "Suporte Completo",
      description: "Acompanhamento 24/7",
      highlight: "24/7",
    },
    {
      icon: Rocket,
      title: "Tecnologia Avançada",
      description: "Soluções de ponta",
      highlight: "IA",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para <span className="gradient-text">Transformar</span> seu
            Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Junte-se a mais de 5 empresas que já revolucionaram seus processos
            com nossas soluções tecnológicas. Fale conosco agora e descubra como
            podemos acelerar seu crescimento!
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-12 rounded-2xl text-center animate-scale-in glow-primary">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-soft glow-accent">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Comece sua{" "}
              <span className="gradient-text">Transformação Digital</span>{" "}
              Agora!
            </h3>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Um clique é tudo que separa você da tecnologia que vai
              revolucionar sua empresa. Nossa equipe de especialistas está
              esperando para conversar com você!
            </p>

            <Button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5521968929102&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas%20da%20InovaX", "_blank")}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-6 glow-accent animate-pulse-soft group"
              style={{ width: "100%" }}
            >
              <MessageSquare className="mr-3 w-7 h-7 group-hover:scale-110 transition-transform" />
              {isMobileButton ? "Falar com Especialista" : "Falar com Especialista Agora"}
            </Button>

            <div className="flex items-center justify-center gap-2 mt-6 text-green-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                Disponível agora • Resposta imediata
              </span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">
                {benefit.highlight}
              </div>
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Não perca mais tempo!
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada dia sem automação é dinheiro perdido. Nossos clientes
              economizam em média
              <span className="text-primary font-bold">
                {" "}
                40 horas por semana
              </span>{" "}
              com nossas soluções.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Rio de Janeiro, RJ
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                5+ Projetos Concluídos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
