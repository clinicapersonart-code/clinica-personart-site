import * as React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { CLINIC_INFO } from "@shared/const";
import { Menu, Phone, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Equipe", href: "/equipe" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              {CLINIC_INFO.phone}
            </a>
            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`mailto:${CLINIC_INFO.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              {CLINIC_INFO.email}
            </a>
          </div>
          <div className="flex gap-4">
            <a href={CLINIC_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo-personart.png" alt="Logo Personart" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}>
                  {item.label}
                </div>
              </Link>
            ))}
            <Link href="/agendar">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Agendar Consulta
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu using Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <img src="/logo-personart.png" alt="Logo" className="h-8 w-auto" />
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div 
                      className={`text-lg font-medium p-2 rounded-md transition-colors cursor-pointer ${
                        location === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t">
                  <Link href="/agendar">
                    <Button className="w-full" size="lg" onClick={() => setIsMenuOpen(false)}>
                      Agendar Consulta
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#dcbc9b] text-[#1c2d34] pt-16 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-personart-dark.png" alt="Logo Personart" className="h-12 w-auto" />
              </div>
              <p className="text-[#1c2d34]/80 text-sm leading-relaxed">
                {CLINIC_INFO.tagline}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-[#1c2d34]">Links Rápidos</h3>
              <ul className="space-y-3 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div className="text-[#1c2d34]/80 hover:text-[#1c2d34] transition-colors cursor-pointer">
                        {item.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-[#1c2d34]">Contato</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-[#1c2d34]/80">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-[#1c2d34]" />
                  <span>
                    {CLINIC_INFO.address.street}<br />
                    {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}<br />
                    CEP: {CLINIC_INFO.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[#1c2d34]/80">
                  <Phone className="h-5 w-5 shrink-0 text-[#1c2d34]" />
                  <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#1c2d34] transition-colors">
                    {CLINIC_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#1c2d34]/80">
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#1c2d34]" />
                  <a 
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#1c2d34] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#1c2d34]/80">
                  <Mail className="h-5 w-5 shrink-0 text-[#1c2d34]" />
                  <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#1c2d34] transition-colors">
                    {CLINIC_INFO.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-[#1c2d34]">Horário</h3>
              <ul className="space-y-2 text-sm text-[#1c2d34]/80">
                <li className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span>08:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span>08:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1c2d34]/20 pt-8 text-center text-sm text-[#1c2d34]/60">
            <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}