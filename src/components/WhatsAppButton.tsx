import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5521968929102";
  const message =
    "Olá! Gostaria de conhecer as soluções tecnológicas da InovaX";

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-soft group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="hidden sm:block font-medium">Fale Conosco</span>
    </button>
  );
};

export default WhatsAppButton;
