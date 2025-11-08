import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511987654321";
    const message = encodeURIComponent("Olá! Gostaria de mais informações.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] text-white p-0"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
