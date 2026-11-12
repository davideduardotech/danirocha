import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface FloatingWhatsAppProps {
  onOpen?: () => void
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpen }) => {
  const [bubbleClosed, setBubbleClosed] = useState(false)
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5581991661171&text=Ol%C3%A1%20Dra.%20Dani%20Rocha!%20Encontrei%20sua%20cl%C3%ADnica%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20para%20avalia%C3%A7%C3%A3o."

  return (
    <>
      {/* Floating Desktop / Tablet Bubble */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 group">
        {!bubbleClosed && (
          <div className="bg-white rounded-2xl shadow-elevated border border-clinic-green/20 p-3.5 max-w-[240px] text-left relative animate-fade-slide">
            <button
              onClick={() => setBubbleClosed(true)}
              className="absolute -top-2 -left-2 w-5 h-5 bg-clinic-slate/20 hover:bg-clinic-slate/40 text-clinic-slate rounded-full flex items-center justify-center text-xs"
              aria-label="Fechar balão"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 text-clinic-green mb-1">
              <span className="w-2 h-2 rounded-full bg-clinic-green animate-ping" />
              <span className="font-sans-accent text-[10px] uppercase font-bold tracking-wider">
                Recepção Online
              </span>
            </div>
            <p className="font-body text-xs text-clinic-slate font-light leading-snug">
              Olá! Gostaria de tirar dúvidas ou verificar horários da Dra. Dani?
            </p>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a Dra. Dani Rocha no WhatsApp: (81) 99166-1171"
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-clinic-green text-white shadow-luxury hover:bg-clinic-green-hover transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-clinic-green/40"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse border-2 border-clinic-green" />
          </div>
          <span className="font-sans-accent text-xs uppercase tracking-wider font-semibold">
            Agendar no WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Always in thumb zone) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-clinic-cream/95 backdrop-blur-md border-t border-clinic-slate/10 p-3 shadow-luxury">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-bold shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Falar com a Dra. Dani no WhatsApp</span>
        </a>
      </div>
    </>
  )
}
