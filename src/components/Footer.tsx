const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-white">InovaX</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando negócios através de soluções tecnológicas
              inovadoras. Desenvolvimento, IA, automação e muito mais.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="text-white">InovaX</span>. Todos os direitos reservados.
            <span className="mx-2">|</span>
            Transformando ideias em realidade digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
