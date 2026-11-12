import React, { useState, useEffect } from 'react'
import { MessageCircle, Menu, X, Clock, MapPin, Phone } from 'lucide-react'

interface NavbarProps {
  onBookClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Clinical Announcement Bar */}
      <div className="bg-clinic-green-dark text-white text-xs py-2 px-4 border-b border-clinic-green/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-emerald-100/90 font-sans-accent tracking-wide text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-clinic-green flex-shrink-0" />
              Segunda a Sábado com horário marcado
            </span>
            <span className="hidden md:inline-block text-emerald-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-clinic-green flex-shrink-0" />
              Belo Jardim - PE
            </span>
            <span className="hidden lg:inline-block text-emerald-700">•</span>
            <a 
              href="https://api.whatsapp.com/send?phone=5581991661171" 
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-clinic-green flex-shrink-0" />
              (81) 99166-1171
            </a>
          </div>
          <div className="font-sans-accent font-medium tracking-wider text-[11px] text-emerald-200">
            Consultório Privativo & Atendimento Individualizado
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-clinic-cream/95 backdrop-blur-md shadow-subtle border-b border-clinic-slate/10 py-2.5 sm:py-3'
            : 'bg-clinic-cream py-3 sm:py-4 border-b border-clinic-slate/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo - Generously Sized, Crisp, and Prominent */}
            <a 
              href="#" 
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-green rounded-lg py-1 pr-2 transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Clínica Dra. Dani Rocha - Página Inicial"
            >
              <img
                src="/assets/logo.png"
                alt="Clínica Dra. Dani Rocha - Estética Corporal e Facial"
                className="h-11 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
              />
            </a>

            {/* Desktop Navigation & Actions */}
            <div className="hidden lg:flex items-center">
              
              {/* Menu Links with Generous Spacing */}
              <nav className="flex items-center gap-6 xl:gap-8 text-sm font-sans-accent font-medium text-clinic-slate">
                <a
                  href="#tratamentos"
                  className="text-clinic-slate hover:text-clinic-green transition-colors duration-200 py-1"
                >
                  Tratamentos
                </a>
                <a
                  href="#sobre"
                  className="text-clinic-slate hover:text-clinic-green transition-colors duration-200 py-1"
                >
                  A Especialista
                </a>
                <a
                  href="#video-procedimento"
                  className="text-clinic-slate hover:text-clinic-green transition-colors duration-200 flex items-center gap-1.5 py-1"
                >
                  <span className="w-2 h-2 rounded-full bg-clinic-green animate-pulse" />
                  Vídeo Real
                </a>
                <a
                  href="#espaco"
                  className="text-clinic-slate hover:text-clinic-green transition-colors duration-200 py-1"
                >
                  O Espaço
                </a>
                <a
                  href="#avaliacao"
                  className="text-clinic-slate hover:text-clinic-green transition-colors duration-200 py-1"
                >
                  Avaliação
                </a>
                <a
                  href="#duvidas"
                  className="text-clinic-slate hover:text-clinic-green transition-colors duration-200 py-1"
                >
                  Dúvidas
                </a>
              </nav>

              {/* Dedicated Vertical Hairline Divider + Generous Margin (Eliminates crowding) */}
              <div className="ml-6 xl:ml-8 pl-6 xl:pl-8 border-l border-clinic-slate/20 flex items-center">
                <button
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold shadow-subtle hover:bg-clinic-green-hover transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-green focus-visible:ring-offset-2 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Agendar Avaliação</span>
                </button>
              </div>

            </div>

            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <button
                onClick={onBookClick}
                aria-label="Agendar no WhatsApp"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase font-semibold hover:bg-clinic-green-hover transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xs:inline text-[11px]">Agendar</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-clinic-slate hover:bg-clinic-green-soft/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-green"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-clinic-green-dark" /> : <Menu className="w-6 h-6 text-clinic-green-dark" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-clinic-slate/10 bg-clinic-cream px-4 pt-3 pb-6 space-y-3 mt-2 animate-fade-slide shadow-elevated">
            <div className="flex flex-col space-y-2 font-sans-accent text-sm">
              <a
                href="#tratamentos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-clinic-green-soft text-clinic-slate font-medium flex items-center justify-between"
              >
                <span>Tratamentos Faciais e Corporais</span>
                <span className="text-xs text-clinic-muted font-light">11 opções</span>
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-clinic-green-soft text-clinic-slate font-medium"
              >
                Sobre a Dra. Dani Rocha
              </a>
              <a
                href="#video-procedimento"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-clinic-green-soft text-clinic-slate font-medium flex items-center justify-between"
              >
                <span>Procedimento em Vídeo Real</span>
                <span className="text-[10px] bg-clinic-green text-white px-2 py-0.5 rounded-full uppercase font-bold">Vídeo</span>
              </a>
              <a
                href="#espaco"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-clinic-green-soft text-clinic-slate font-medium"
              >
                Conheça a Clínica Física
              </a>
              <a
                href="#avaliacao"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-clinic-green-soft text-clinic-slate font-medium"
              >
                Descubra seu Protocolo Ideal
              </a>
              <a
                href="#duvidas"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-clinic-green-soft text-clinic-slate font-medium"
              >
                Dúvidas Frequentes
              </a>
            </div>

            <div className="pt-3 border-t border-clinic-slate/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onBookClick()
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-clinic-green text-white font-sans-accent font-semibold text-xs uppercase tracking-wider shadow-sm hover:bg-clinic-green-hover transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp: (81) 99166-1171</span>
              </button>
              <div className="text-center font-body text-[11px] text-clinic-muted">
                Vila Dr. Fernando Dias de Abreu, 06 • Belo Jardim - PE
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
