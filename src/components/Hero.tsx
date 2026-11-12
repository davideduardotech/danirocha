import React from 'react'
import { MessageCircle, Play, ShieldCheck, Sparkles, Award, MapPin } from 'lucide-react'

interface HeroProps {
  onBookClick: () => void
  onVideoClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onVideoClick }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-16 lg:pb-24 bg-clinic-cream">
      {/* Subtle organic background aura */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-clinic-green-soft/50 blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-1/4 -mb-28 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* DESKTOP + TABLET LAYOUT (lg:grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Content Column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Main Headline */}
            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-clinic-green-dark font-medium leading-[1.14] tracking-tight">
              O cuidado que sua pele merece para você se amar em cada detalhe.
            </h1>

            {/* ============================================================== */}
            {/* MOBILE ONLY VISUAL CARD (Shows doctor & clinic immediately) */}
            {/* ============================================================== */}
            <div className="block lg:hidden my-6">
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border-2 border-white bg-white">
                {/* Main Clinic Reception View */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src="/assets/clinica-recepcao.webp"
                    alt="Recepção da Clínica Dra. Dani Rocha com logo 3D e ambiente clean"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-green-deep/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="font-sans-accent text-[10px] uppercase tracking-widest text-emerald-300 font-bold block">
                        Espaço Dra. Dani Rocha
                      </span>
                      <p className="font-serif-display text-sm font-normal text-white">
                        Consultório privativo e recepção acolhedora
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlapping Doctor Photo with SAFE insets (no screen bleeding!) */}
                <div className="absolute top-3 right-3 w-32 sm:w-36 rounded-xl overflow-hidden shadow-elevated border-2 border-white bg-white">
                  <img
                    src="/assets/dani-trabalhando-facial.jpg"
                    alt="Dra. Dani Rocha realizando atendimento facial em paciente"
                    className="w-full h-32 sm:h-36 object-cover object-top"
                  />
                  <div className="p-1.5 bg-clinic-cream text-center border-t border-clinic-slate/10">
                    <span className="font-sans-accent text-[9px] font-bold text-clinic-green-dark uppercase tracking-wider block">
                      Dra. Dani Rocha
                    </span>
                    <span className="font-body text-[9px] text-clinic-muted font-light block leading-none mt-0.5">
                      Em Atendimento
                    </span>
                  </div>
                </div>

                {/* Floating Open Agenda Pill on Mobile */}
                <div className="absolute top-3 left-3 bg-clinic-green-dark/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-clinic-green animate-ping" />
                  <span className="font-sans-accent text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                    Agenda Aberta
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Body */}
            <p className="font-body text-base sm:text-lg text-clinic-muted content-measure leading-relaxed font-light">
              Sinta a confiança de se olhar no espelho e ver sua pele radiante, renovada e no seu melhor momento. Na clínica da <strong className="font-semibold text-clinic-slate">Dra. Dani Rocha</strong>, você recebe atendimento exclusivo em consultório privativo — com protocolos sob medida, tecnologias consagradas e um toque delicado que transforma sua autoestima por inteiro.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold shadow-subtle hover:bg-clinic-green-hover transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-green focus-visible:ring-offset-2 hover:shadow-elevated active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Agendar Minha Consulta</span>
              </button>

              <button
                onClick={onVideoClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-clinic-green-dark/20 text-clinic-green-dark font-sans-accent text-xs font-semibold uppercase tracking-wider hover:bg-clinic-green-soft hover:border-clinic-green transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-green"
              >
                <div className="w-6 h-6 rounded-full bg-clinic-green text-white flex items-center justify-center flex-shrink-0">
                  <Play className="w-3 h-3 ml-0.5 fill-current" />
                </div>
                <span>Assistir Procedimento Real</span>
              </button>
            </div>

            {/* Authentic Trust Strip */}
            <div className="pt-6 border-t border-clinic-slate/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-clinic-green-soft text-clinic-green flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-accent text-xs uppercase tracking-wider font-semibold text-clinic-green-dark">
                    Biossegurança Total
                  </h4>
                  <p className="font-body text-xs text-clinic-muted mt-0.5 font-light">
                    Materiais descartáveis e esterilização rigorosa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-clinic-green-soft text-clinic-green flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-accent text-xs uppercase tracking-wider font-semibold text-clinic-green-dark">
                    Equipamentos Anvisa
                  </h4>
                  <p className="font-body text-xs text-clinic-muted mt-0.5 font-light">
                    Laser Lyra e vacuoterapia de precisão
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-clinic-green-soft text-clinic-green flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-accent text-xs uppercase tracking-wider font-semibold text-clinic-green-dark">
                    Plano Personalizado
                  </h4>
                  <p className="font-body text-xs text-clinic-muted mt-0.5 font-light">
                    Diagnóstico prévio antes do procedimento
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* DESKTOP ONLY VISUAL COMPOSITION (5 cols on desktop, hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Physical Clinic Reception Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border-4 border-white bg-white">
                <img
                  src="/assets/clinica-recepcao.webp"
                  alt="Recepção da Clínica Dra. Dani Rocha com logo 3D e ambiente clean"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-green-deep/75 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-left">
                    <span className="font-sans-accent text-[11px] uppercase tracking-widest text-emerald-300 font-semibold block">
                      Espaço Dani Rocha
                    </span>
                    <p className="font-serif-display text-base font-normal text-white/95 mt-0.5">
                      Consultório privativo e recepção acolhedora
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping Candid Doctor Photo (Safe Desktop insets) */}
              <div className="absolute -bottom-6 -left-6 w-48 sm:w-52 rounded-xl overflow-hidden shadow-elevated border-4 border-white bg-white">
                <img
                  src="/assets/dani-trabalhando-facial.jpg"
                  alt="Dra. Dani Rocha realizando atendimento estético facial"
                  className="w-full h-52 sm:h-56 object-cover object-top"
                />
                <div className="p-2.5 bg-clinic-cream text-left border-t border-clinic-slate/5">
                  <p className="font-sans-accent text-[10px] uppercase font-semibold text-clinic-green-dark tracking-wide">
                    Atendimento Especializado
                  </p>
                  <p className="font-body text-[11px] text-clinic-muted font-light">
                    Dra. Dani em sessão
                  </p>
                </div>
              </div>

              {/* Certified Consultation Float Badge */}
              <div className="absolute -top-4 -right-4 bg-clinic-green-dark text-white p-3.5 rounded-xl shadow-elevated border border-emerald-500/20 text-left max-w-[170px]">
                <div className="flex items-center gap-1.5 text-clinic-green mb-1">
                  <span className="w-2 h-2 rounded-full bg-clinic-green animate-ping" />
                  <span className="font-sans-accent text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                    Agenda Aberta
                  </span>
                </div>
                <p className="font-serif-display text-xs font-medium text-white/95 leading-tight">
                  Horários exclusivos desta semana
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
