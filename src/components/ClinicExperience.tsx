import React from 'react'
import { Check, Shield, MapPin, Sparkles, Coffee } from 'lucide-react'

export const ClinicExperience: React.FC = () => {
  return (
    <section id="espaco" className="py-20 lg:py-28 bg-clinic-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-4 mb-12 lg:mb-16">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark tracking-tight leading-tight">
            Um refúgio de tranquilidade e privacidade pensado para você.
          </h2>
          <p className="font-body text-base sm:text-lg text-clinic-muted font-light leading-relaxed">
            Conheça o espaço físico da clínica da Dra. Dani Rocha: projetado nos mínimos detalhes para garantir higiene impecável, conforto absoluto e um atendimento estritamente reservado.
          </p>
        </div>

        {/* Asymmetric Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Reception Photo (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-white bg-white group">
              <img
                src="/assets/clinica-recepcao.webp"
                alt="Balcão de recepção da Clínica Dra. Dani Rocha com logo 3D verde na parede e iluminação focada"
                className="w-full h-80 sm:h-[420px] object-cover object-center"
              />
              <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-clinic-slate/5">
                <div>
                  <h4 className="font-serif-display text-base font-semibold text-clinic-green-dark">
                    Recepção & Balcão de Boas-Vindas
                  </h4>
                  <p className="font-body text-xs text-clinic-muted font-light mt-0.5">
                    Ambiente clean, iluminação relaxante e acolhimento imediato
                  </p>
                </div>
                <span className="font-sans-accent text-[11px] font-semibold text-clinic-green bg-clinic-green-soft px-3 py-1 rounded-full uppercase">
                  Consultório Privativo
                </span>
              </div>
            </div>
          </div>

          {/* Lounge Entrance Photo & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-white bg-white group">
              <img
                src="/assets/clinica-lounge.webp"
                alt="Sala de espera da clínica com poltronas confortáveis, plantas e entrada envidraçada"
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
              <div className="p-4 bg-white border-t border-clinic-slate/5 text-left">
                <h4 className="font-serif-display text-base font-semibold text-clinic-green-dark">
                  Sala de Espera & Lounge
                </h4>
                <p className="font-body text-xs text-clinic-muted font-light mt-0.5">
                  Poltronas confortáveis, climatização agradável e água/café especial
                </p>
              </div>
            </div>

            {/* Checklist of Spatial Excellence */}
            <div className="p-6 rounded-2xl bg-clinic-green-surface border border-clinic-green/20 space-y-3.5 text-left">
              <h4 className="font-sans-accent text-xs uppercase font-bold tracking-wider text-clinic-green-dark">
                Padrões de Biossegurança e Conforto
              </h4>

              <div className="space-y-2.5 font-body text-xs text-clinic-slate">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-clinic-green text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Uso exclusivo de lençóis, luvas e ponteiras descartáveis</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-clinic-green text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Equipamentos calibrados e registrados na Anvisa</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-clinic-green text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Consultório individualizado sem interrupções durante sua sessão</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-clinic-green text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Ambiente aromatizado com óleos essenciais terapêuticos</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
