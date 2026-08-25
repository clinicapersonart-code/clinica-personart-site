import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Botão flutuante para voltar ao topo da página.
 *
 * Aparece depois que a pessoa rola um pouco e fica acima do botão do WhatsApp,
 * que é fixo no canto inferior direito pelo Layout.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-28 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
      <span className="hidden text-sm font-medium sm:inline">Voltar ao topo</span>
    </button>
  );
}
