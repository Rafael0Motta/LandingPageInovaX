import { Code, Globe, Bot, Zap, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const handleWhatsAppContact = (service: string) => {
    const phoneNumber = "5521968929102";
    const message = `Olá! Tenho interesse no serviço de ${service}. Gostaria de saber mais!`;
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento de Sites",
      description:
        "Sites responsivos, modernos e otimizados para conversão. Landing pages, e-commerce e portais corporativos.",
      features: ["Design Responsivo", "SEO Otimizado", "Alta Performance"],
    },
    {
      icon: Database,
      title: "Sistemas Personalizados",
      description:
        "Sistemas web robustos para gestão empresarial, ERPs, CRMs e plataformas específicas para seu negócio.",
      features: [
        "Arquitetura Escalável",
        "Integração de APIs",
        "Dashboard Analytics",
      ],
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description:
        "Chatbots com IA para atendimento automatizado, vendas e suporte ao cliente 24/7.",
      features: ["IA Avançada", "Multi-plataforma", "Integração CRM"],
    },
    {
      icon: Zap,
      title: "Agentes de IA",
      description:
        "Agentes inteligentes personalizados para automação de processos complexos e tomada de decisões.",
      features: [
        "Processamento de Linguagem",
        "Automação Inteligente",
        "Aprendizado Contínuo",
      ],
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description:
        "Apps nativos e híbridos para Android com foco na experiência do usuário, alta performance e publicação nas lojas.",
      features: ["Cross-platform", "Offline Mode", "App Store Deploy"],
    },
    {
      icon: Code,
      title: "Automação de Processos",
      description:
        "Automações que conectam sistemas, reduzem trabalho manual e aumentam a eficiência operacional.",
      features: [
        "Integração de Sistemas",
        "Workflows Personalizados",
        "Monitoramento Real-time",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para transformar e
            acelerar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-12 h-12" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsAppContact(service.title)}
                variant="outline"
                className="w-full border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                Solicitar Orçamento
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
