import React, { useState } from 'react'
import { Sparkles, ArrowRight, MessageCircle, RefreshCw, CheckCircle2 } from 'lucide-react'

interface ProtocolAssessmentProps {
  onDirectBooking: (customMessage: string) => void
}

export const ProtocolAssessment: React.FC<ProtocolAssessmentProps> = ({ onDirectBooking }) => {
  const [goal, setGoal] = useState<string>('facial')
  const [priority, setPriority] = useState<string>('rapido')

  const getRecommendation = () => {
    if (goal === 'facial') {
      return {
        title: 'Protocolo Face Renovada & Poros Livres',
        treatments: ['Limpeza de Pele Profunda com Extração', 'Argiloterapia Detox', 'Finalização Nutritiva'],
        why: 'Remove comedões e células mortas sem agredir a barreira lipídica, devolvendo viço imediato e prevenindo a inflamação de poros.',
        duration: '1 sessão de 1h30 (manutenção mensal recomendada)',
      }
    }
    if (goal === 'corporal') {
      return {
        title: 'Protocolo Redução de Medidas & Contorno Ativo',
        treatments: ['Criolipólise Avançada', 'Drenagem Linfática Modeladora', 'Massagem Modeladora Manual'],
        why: 'Combina a eliminação de adipócitos por congelamento controlado com manobras que desincham e aceleram a circulação periférica.',
        duration: 'Ciclo de 1 a 3 sessões com acompanhamento',
      }
    }
    if (goal === 'relax') {
      return {
        title: 'Protocolo Descompressão & Detox Completo',
        treatments: ['Ventosaterapia Terapêutica', 'Massagem Detox com Manta Térmica', 'Massagem Relaxante com Óleos'],
        why: 'Alivia nós de tensão nas costas, drena toxinas acumuladas pelo estresse e ativa o sistema parassimpático para restauração do sono.',
        duration: 'Sessão de 1h30 de puro relaxamento',
      }
    }
    // depilacao
    return {
      title: 'Protocolo Pele Lisa & Livre de Foliculite',
      treatments: ['Fotodepilação com Ponteira Lyra Resfriada', 'Depilação na Cera Hipoalergênica'],
      why: 'Enfraquece os bulbos capilares progressivamente até cessar o crescimento, eliminando manchas e bolinhas de irritação por lâmina.',
      duration: 'Sessões rápidas a cada 25-30 dias',
    }
  }

  const recommendation = getRecommendation()

  const handleBooking = () => {
    const text = `Olá Dra. Dani! Fiz o teste no seu site e meu objetivo é ${
      goal === 'facial' ? 'Cuidado Facial/Limpeza de Pele' :
      goal === 'corporal' ? 'Gordura Localizada e Contorno Corporal' :
      goal === 'relax' ? 'Alívio de Dores, Ventosa e Relaxamento' : 'Fotodepilação e Remoção de Pelos'
    }. Gostaria de agendar uma avaliação para o ${recommendation.title}!`
    onDirectBooking(text)
  }

  return (
    <section id="avaliacao" className="py-20 lg:py-28 bg-clinic-cream-dark/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark tracking-tight">
            Descubra o protocolo mais indicado para você.
          </h2>
          <p className="font-body text-base text-clinic-muted font-light leading-relaxed">
            Selecione seu objetivo e necessidade atual para receber uma indicação prévia de tratamentos antes da sua avaliação presencial.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-clinic-slate/10 space-y-8">
          
          {/* Step 1: Goal */}
          <div className="space-y-3 text-left">
            <span className="font-sans-accent text-xs uppercase font-bold tracking-wider text-clinic-green-dark block">
              Passo 1: Qual é o seu foco principal?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { id: 'facial', label: 'Rosto, Cravos & Poros', desc: 'Limpeza e renovação dérmica' },
                { id: 'corporal', label: 'Gordura & Contorno', desc: 'Abdômen, culotes e celulite' },
                { id: 'relax', label: 'Dores, Costas & Detox', desc: 'Tensões, ventosa e relaxamento' },
                { id: 'depilacao', label: 'Pelos & Foliculite', desc: 'Laser Lyra e pele lisa' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setGoal(item.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                    goal === item.id
                      ? 'bg-clinic-green-surface border-clinic-green ring-2 ring-clinic-green/30'
                      : 'bg-white border-clinic-slate/15 hover:border-clinic-green/40'
                  }`}
                >
                  <p className="font-sans-accent text-xs font-semibold text-clinic-slate">
                    {item.label}
                  </p>
                  <p className="font-body text-[11px] text-clinic-muted mt-0.5 font-light">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Recommendation Box */}
          <div className="pt-6 border-t border-clinic-slate/10">
            <div className="p-6 sm:p-8 rounded-2xl bg-clinic-green-dark text-white text-left space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="font-sans-accent text-[11px] uppercase tracking-widest text-emerald-300 font-semibold block">
                    Protocolo Recomendado Pela Dra. Dani
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-white mt-1">
                    {recommendation.title}
                  </h3>
                </div>
                <div className="font-sans-accent text-xs text-emerald-200/90 font-light">
                  {recommendation.duration}
                </div>
              </div>

              {/* Treatments included */}
              <div className="space-y-2">
                <span className="font-sans-accent text-xs uppercase tracking-wider text-emerald-200 font-semibold block">
                  Procedimentos combinados:
                </span>
                <div className="flex flex-wrap gap-2">
                  {recommendation.treatments.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-body text-white"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-green" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical rationale */}
              <p className="font-body text-sm text-emerald-100/90 font-light leading-relaxed">
                {recommendation.why}
              </p>

              {/* Action Trigger */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={handleBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold hover:bg-clinic-green-hover transition-colors shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Agendar Este Protocolo no WhatsApp</span>
                </button>

                <p className="font-body text-xs text-emerald-200/70 font-light text-center sm:text-right">
                  Avaliação detalhada inclusa na primeira visita.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
