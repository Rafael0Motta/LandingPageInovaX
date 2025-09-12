import { Award, Users, Rocket, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10+", label: "Projetos Entregues", icon: Rocket },
    { number: "5+", label: "Clientes Satisfeitos", icon: Heart },
    { number: "2+", label: "Anos de Experiência", icon: Award },
    { number: "24/7", label: "Suporte Técnico", icon: Users },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="gradient-text">InovaX</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Somos uma empresa de tecnologia especializada em transformação
              digital. Nossa missão é acelerar o crescimento dos nossos clientes
              através de soluções tecnológicas inovadoras e personalizadas.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Com uma equipe de especialistas em desenvolvimento, IA e
              automação, criamos soluções que não apenas atendem às necessidades
              atuais, mas preparam sua empresa para o futuro digital.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-accent mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Resposta</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Nossa Metodologia</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-primary rounded-full text-xs flex items-center justify-center mr-3">
                    1
                  </span>
                  <span>Análise e Planejamento</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-primary rounded-full text-xs flex items-center justify-center mr-3">
                    2
                  </span>
                  <span>Desenvolvimento Ágil</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-primary rounded-full text-xs flex items-center justify-center mr-3">
                    3
                  </span>
                  <span>Testes e Otimização</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-primary rounded-full text-xs flex items-center justify-center mr-3">
                    4
                  </span>
                  <span>Entrega e Suporte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
