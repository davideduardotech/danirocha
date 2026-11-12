import React from 'react'
import { MessageCircle, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react'
import { InstagramIcon } from './icons/InstagramIcon'

interface FooterProps {
  onBookClick: () => void
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer className="bg-clinic-green-deep text-white border-t border-emerald-900/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-emerald-900/30 text-left">
          
          {/* Brand info with PROMINENT LOGO (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block bg-white/95 rounded-2xl p-3 sm:p-4 shadow-sm">
              <img 
                src="/assets/logo.png" 
                alt="Clínica Dra. Dani Rocha - Estética Corporal e Facial" 
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="font-body text-xs text-emerald-100/70 font-light leading-relaxed max-w-sm">
              Clínica de estética avançada e terapias integrativas. Cuidado ético, protocolos personalizados e tecnologias consagradas para valorizar sua beleza natural com biossegurança rigorosa.
            </p>

            <div className="space-y-2 text-xs font-body text-emerald-100/80 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-clinic-green flex-shrink-0 mt-0.5" />
                <span>Vila Dr. Fernando Dias de Abreu, 06 - São Pedro, Belo Jardim - PE</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-clinic-green flex-shrink-0" />
                <span>WhatsApp: (81) 99166-1171</span>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clinic-green text-white font-sans-accent text-xs font-semibold uppercase hover:bg-clinic-green-hover transition-colors"
                aria-label="WhatsApp da clínica"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </button>

              <a
                href="https://www.instagram.com/estetica.dani.rocha/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-clinic-green text-white transition-colors"
                aria-label="Instagram da Dra. Dani Rocha"
                title="@estetica.dani.rocha"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-sans-accent text-xs uppercase font-bold tracking-widest text-emerald-300">
              Tratamentos Oferecidos
            </h4>
            <ul className="space-y-2 font-body text-xs text-emerald-100/80 font-light">
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Fotodepilação (Laser / Luz Pulsada Lyra)</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Criolipólise Avançada</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Limpeza de Pele Profunda com Extração</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Ventosaterapia Terapêutica</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Massagem Relaxante Terapêutica</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Massagem Detox com Manta Térmica</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Massagem Modeladora & Drenagem</a></li>
              <li><a href="#tratamentos" className="hover:text-clinic-green transition-colors">Pump Up (Lifting de Bumbum) & Cera</a></li>
            </ul>
          </div>

          {/* Opening & Safety (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans-accent text-xs uppercase font-bold tracking-widest text-emerald-300">
              Horários & Localização
            </h4>
            <div className="space-y-2 font-body text-xs text-emerald-100/80 font-light">
              <p>Segunda a Sexta: <span className="text-white font-medium">08h às 19h</span></p>
              <p>Sábados: <span className="text-white font-medium">08h às 14h</span></p>
              <p className="text-emerald-400 font-medium">Atendimento somente com hora marcada</p>
            </div>

            <div className="pt-2 border-t border-emerald-900/30 space-y-2">
              <div className="flex items-center gap-2 text-[11px] text-emerald-200/90 font-sans-accent">
                <ShieldCheck className="w-4 h-4 text-clinic-green flex-shrink-0" />
                <span>Normas Sanitárias Rigorosas</span>
              </div>
              <div className="font-sans-accent text-[11px] text-emerald-300/80 font-medium">
                Instagram: @estetica.dani.rocha
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-emerald-200/60 font-light text-center sm:text-left">
          <p>© {new Date().getFullYear()} Clínica Dra. Dani Rocha • Belo Jardim - PE. Todos os direitos reservados.</p>
          <p>
            Estética Avançada Facial e Corporal
          </p>
        </div>

      </div>
    </footer>
  )
}
