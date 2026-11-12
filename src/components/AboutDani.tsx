import React from 'react'
import { Sparkles, HeartHandshake, Stethoscope, CheckCircle, MessageCircle } from 'lucide-react'

interface AboutDaniProps {
  onBookClick: () => void
}

export const AboutDani: React.FC<AboutDaniProps> = ({ onBookClick }) => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-clinic-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Mosaic with Real Action Photos (6 cols) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Photo 1: Dani working on extraction under lamp */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elevated border-2 border-white bg-white group">
                  <img
                    src="/assets/dani-trabalhando-extracao.jpg"
                    alt="Dra. Dani Rocha aplicando procedimento estético facial em paciente"
                    className="w-full h-64 sm:h-80 object-cover object-top"
                  />
                  <div className="p-3 bg-clinic-cream-dark/50 text-left">
                    <span className="font-sans-accent text-[10px] uppercase font-bold tracking-wider text-clinic-green-dark block">
                      Atenção Individual
                    </span>
                    <span className="font-body text-xs text-clinic-muted font-light">
                      Foco em conforto dérmico
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-subtle border-2 border-white bg-white">
                  <img
                    src="/assets/dani-trabalhando-ventosa.jpg"
                    alt="Sessão de Ventosaterapia e relaxamento muscular"
                    className="w-full h-44 sm:h-52 object-cover object-center"
                  />
                  <div className="p-2.5 bg-clinic-cream-dark/50 text-left">
                    <span className="font-sans-accent text-[10px] uppercase font-bold tracking-wider text-clinic-green block">
                      Ventosaterapia & Spa
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo 2: Story collage of procedures + Experience badge */}
              <div className="space-y-4 pt-6 sm:pt-10">
                <div className="rounded-2xl overflow-hidden shadow-elevated border-2 border-white bg-white group">
                  <img
                    src="/assets/dani-story-procedimentos.webp"
                    alt="Procedimentos realizados na clínica por Dani Rocha"
                    className="w-full h-72 sm:h-88 object-cover object-center"
                  />
                  <div className="p-3 bg-clinic-cream-dark/50 text-left">
                    <span className="font-sans-accent text-[10px] uppercase font-bold tracking-wider text-clinic-green-dark block">
                      Variedade de Terapias
                    </span>
                    <span className="font-body text-xs text-clinic-muted font-light">
                      Facial, corporal e relaxante
                    </span>
                  </div>
                </div>

                {/* Experience Floating Callout */}
                <div className="p-4 rounded-xl bg-clinic-green-dark text-white text-left shadow-elevated border border-emerald-600/20">
                  <span className="font-serif-display text-2xl font-bold text-clinic-green block leading-none">
                    100%
                  </span>
                  <span className="font-sans-accent text-xs uppercase tracking-wider text-emerald-100 font-semibold mt-1 block">
                    Dedicação Exclusiva
                  </span>
                  <p className="font-body text-[11px] text-emerald-200/80 font-light mt-0.5">
                    Você sempre atendida diretamente pela especialista.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark leading-tight">
              Mais que estética: um reencontro com seu bem-estar e autoestima.
            </h2>

            <div className="space-y-4 font-body text-clinic-muted text-base sm:text-lg font-light leading-relaxed">
              <p>
                Olá, eu sou a <strong className="font-medium text-clinic-slate">Dra. Dani Rocha</strong>. Criei esta clínica a partir de uma convicção simples: tratamentos estéticos devem ser uma experiência acolhedora, segura e focada em resultados reais, longe de padrões artificiais e promessas vazias.
              </p>
              <p>
                Aqui, cada pessoa é única. Não existem receitas prontas nem pacotes empurrados sem critério. Antes de qualquer agulha, ponteira a laser ou manobra de massagem, realizo uma <strong className="font-medium text-clinic-slate">avaliação clínica individual</strong> para entender a fisiologia da sua pele, seu estilo de vida e o que realmente você deseja transformar.
              </p>
              <p>
                Trabalho com as melhores tecnologias do mercado e um ambiente desenhado para você desacelerar a mente enquanto cuidamos do seu corpo.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-clinic-green-surface border border-clinic-green/15 flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans-accent text-xs uppercase font-bold text-clinic-green-dark tracking-wider">
                    Avaliação Técnica
                  </h4>
                  <p className="font-body text-xs text-clinic-muted mt-1 font-light">
                    Análise dérmica antes de indicar qualquer procedimento.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-clinic-green-surface border border-clinic-green/15 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans-accent text-xs uppercase font-bold text-clinic-green-dark tracking-wider">
                    Atendimento Humano
                  </h4>
                  <p className="font-body text-xs text-clinic-muted mt-1 font-light">
                    Tempo dedicado exclusivamente a você durante a sessão.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold shadow-subtle hover:bg-clinic-green-hover transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Conversar Diretamente com a Dra. Dani</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
