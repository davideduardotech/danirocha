import React, { useState } from 'react'
import { Sparkles, MessageCircle, Clock, Zap, ArrowRight, ShieldCheck, Flame, Wind, Droplets } from 'lucide-react'

interface Service {
  id: string
  name: string
  category: 'facial' | 'corporal' | 'massagem' | 'depilacao'
  tag: string
  shortDesc: string
  fullDesc: string
  indications: string[]
  duration: string
  highlight?: boolean
}

const servicesData: Service[] = [
  {
    id: 'fotodepilacao',
    name: 'Fotodepilação (Luz Pulsada Lyra)',
    category: 'depilacao',
    tag: 'Tecnologia Avançada',
    shortDesc: 'Eliminação progressiva e duradoura dos pelos com a consagrada tecnologia Lyra.',
    fullDesc: 'Tratamento com ponteira de resfriamento que atua diretamente na raiz do folículo piloso, enfraquecendo e cessando o crescimento do pelo. Muito mais confortável e suave para a pele sensível do que métodos convencionais.',
    indications: ['Foliculite recorrente', 'Pelos encravados', 'Pele sensibilizada por lâmina', 'Redução definitiva'],
    duration: '20 a 50 min',
    highlight: true,
  },
  {
    id: 'criolipolise',
    name: 'Criolipólise Avançada',
    category: 'corporal',
    tag: 'Alta Performance',
    shortDesc: 'Congelamento controlado dos adipócitos para redução expressiva de gordura localizada.',
    fullDesc: 'Tecnologia não invasiva que resfria seletivamente as células adiposas a temperaturas negativas, induzindo a apoptose (morte celular programada) da gordura, eliminada naturalmente pelo organismo ao longo das semanas.',
    indications: ['Abdômen e flancos', 'Culotes e parte interna da coxa', 'Gordurinha do sutiã', 'Remodelagem corporal'],
    duration: '60 min por área',
    highlight: true,
  },
  {
    id: 'limpeza-pele',
    name: 'Limpeza de Pele Profunda',
    category: 'facial',
    tag: 'Cuidados Essenciais',
    shortDesc: 'Higienização profunda, emoliência, extração com lupa e argiloterapia calmante.',
    fullDesc: 'Protocolo completo para desobstrução dos poros, remoção delicada de cravos, miliuns e controle da oleosidade. Finalizada com alta frequência bactericida e máscara nutritiva calmante para zero marcas.',
    indications: ['Cravos e miliuns', 'Oleosidade excessiva', 'Poros dilatados', 'Pele opaca sem viço'],
    duration: '1h20 a 1h40',
  },
  {
    id: 'ventosaterapia',
    name: 'Ventosaterapia Terapêutica',
    category: 'massagem',
    tag: 'Saúde & Alívio',
    shortDesc: 'Descompressão fascial, estímulo circulatório vigoroso e alívio de nós musculares.',
    fullDesc: 'Aplicação de campânulas a vácuo que provocam sucção controlada na pele e fáscia muscular. Oxigena os tecidos, drena metabólitos inflamatórios e proporciona um profundo relaxamento de dores crônicas nas costas e pescoço.',
    indications: ['Tensões nas costas e ombros', 'Dores musculares e contraturas', 'Má circulação', 'Estresse físico acumulado'],
    duration: '45 a 60 min',
  },
  {
    id: 'massagem-relaxante',
    name: 'Massagem Relaxante Terapêutica',
    category: 'massagem',
    tag: 'Sensorial & Bem-estar',
    shortDesc: 'Manobras suaves, óleos essenciais selecionados e ambiente imersivo para desacelerar.',
    fullDesc: 'Técnica com movimentos fluidos e contínuos que atuam no sistema nervoso parassimpático, reduzindo cortisol, aliviando a fadiga mental e soltando tensões articulares em todo o corpo.',
    indications: ['Ansiedade e insônia', 'Cansaço muscular crônico', 'Sobrecarga de rotina', 'Necessidade de autocuidado'],
    duration: '60 min',
  },
  {
    id: 'massagem-detox-manta',
    name: 'Massagem Detox com Manta Térmica',
    category: 'massagem',
    tag: 'Termoterapia Ativa',
    shortDesc: 'Associação de manobras desintoxicantes, ativos lipolíticos e calor terapêutico.',
    fullDesc: 'Combinação potente de drenagem modeladora com ativos fitoterápicos seguida de envelopamento em manta térmica com infravermelho longo. Estimula sudorese intensa, desintoxicação celular e aceleração metabólica.',
    indications: ['Retenção severa de líquidos', 'Sensação de inchaço e peso', 'Estímulo metabólico pré-evento', 'Eliminação de toxinas'],
    duration: '1h15',
  },
  {
    id: 'massagem-modeladora',
    name: 'Massagem Modeladora Manual',
    category: 'corporal',
    tag: 'Contorno Corporal',
    shortDesc: 'Movimentos rítmicos e vigorosos para redistribuição do tecido adiposo e contorno.',
    fullDesc: 'Manobras manuais precisas que aumentam a circulação local e o aporte de nutrientes, melhorando a textura da pele e combatendo o aspecto irregular da celulite em coxas, glúteos e abdômen.',
    indications: ['Celulite graus I a III', 'Gordura localizada superficial', 'Flacidez tissular leve', 'Definição de curvas'],
    duration: '50 min',
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática Especializada',
    category: 'massagem',
    tag: 'Fisiológica',
    shortDesc: 'Estímulo suave dos gânglios linfáticos para reabsorção de edemas e pós-operatório.',
    fullDesc: 'Método com pressão estritamente dosada que acompanha a anatomia dos vasos linfáticos. Indispensável para quem sofre com pernas pesadas, gestantes autorizadas e recuperação pós-cirúrgica.',
    indications: ['Edemas e retenção de líquidos', 'Pernas cansadas', 'Pós-operatório cirúrgico', 'Desconforto gestacional seguro'],
    duration: '50 a 60 min',
  },
  {
    id: 'gordura-localizada',
    name: 'Tratamentos para Gordura Localizada',
    category: 'corporal',
    tag: 'Protocolos Combinados',
    shortDesc: 'Estratégias multitecnológicas sob medida para queima de adipócitos resistentes.',
    fullDesc: 'Plano personalizado que pode associar termoterapia, vacuoterapia, manobras lipolíticas e dermocosméticos concentrados para atingir aquela gordura resistente a dieta e exercícios físicos.',
    indications: ['Gordura no abdômen inferior', 'Flancos e costas', 'Culotes e bananinha', 'Melhora da firmeza dérmica'],
    duration: 'Conforme plano',
  },
  {
    id: 'pump-up',
    name: 'Pump Up (Lifting de Bumbum)',
    category: 'corporal',
    tag: 'Vacuoterapia Glútea',
    shortDesc: 'Ventosas anatômicas a vácuo com sucção pulsada para tonificação e remodelagem glútea.',
    fullDesc: 'Procedimento que utiliza campânulas especiais acopladas aos glúteos com sistema de vácuo contínuo e pulsado. Estimula hipervascularização, remodelagem tecidual e elevação dos glúteos combinada a massagem modeladora.',
    indications: ['Perda de tônus no bumbum', 'Contorno e projeção glútea', 'Circulação local deficiente', 'Melhora da celulite nos glúteos'],
    duration: '40 a 50 min',
  },
  {
    id: 'depilacao-cera',
    name: 'Depilação na Cera Hipoalergênica',
    category: 'depilacao',
    tag: 'Conforto Dérmico',
    shortDesc: 'Cera morna formulada com ativos calmantes para remoção suave desde a raiz.',
    fullDesc: 'Aplicação de cera descartável com controle térmico rigoroso e técnica que minimiza a dor. Ideal para quem busca pele lisa e sedosa por semanas com máxima assepsia.',
    indications: ['Pernas inteiras e meia perna', 'Virilha e axilas', 'Face e buço', 'Remoção prática e rápida'],
    duration: '20 a 45 min',
  },
]

interface ServicesCatalogProps {
  onBookTreatment: (treatmentName: string) => void
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ onBookTreatment }) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'facial' | 'corporal' | 'massagem' | 'depilacao'>('todos')

  const filteredServices = activeCategory === 'todos' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory)

  return (
    <section id="tratamentos" className="py-20 lg:py-28 bg-clinic-cream-dark/30 border-y border-clinic-slate/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark tracking-tight">
            Protocolos de excelência em estética facial e corporal.
          </h2>
          <p className="font-body text-base sm:text-lg text-clinic-muted font-light leading-relaxed">
            Selecione uma categoria para explorar os tratamentos realizados na clínica da Dra. Dani Rocha, com equipamentos de ponta e metodologia individualizada.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 pb-12">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-5 py-2.5 rounded-full font-sans-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'todos'
                ? 'bg-clinic-green-dark text-white shadow-sm'
                : 'bg-white text-clinic-slate hover:bg-clinic-green-soft border border-clinic-slate/10'
            }`}
          >
            Todos ({servicesData.length})
          </button>
          
          <button
            onClick={() => setActiveCategory('facial')}
            className={`px-5 py-2.5 rounded-full font-sans-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'facial'
                ? 'bg-clinic-green-dark text-white shadow-sm'
                : 'bg-white text-clinic-slate hover:bg-clinic-green-soft border border-clinic-slate/10'
            }`}
          >
            Facial & Pele
          </button>

          <button
            onClick={() => setActiveCategory('corporal')}
            className={`px-5 py-2.5 rounded-full font-sans-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'corporal'
                ? 'bg-clinic-green-dark text-white shadow-sm'
                : 'bg-white text-clinic-slate hover:bg-clinic-green-soft border border-clinic-slate/10'
            }`}
          >
            Contorno & Gordura
          </button>

          <button
            onClick={() => setActiveCategory('massagem')}
            className={`px-5 py-2.5 rounded-full font-sans-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'massagem'
                ? 'bg-clinic-green-dark text-white shadow-sm'
                : 'bg-white text-clinic-slate hover:bg-clinic-green-soft border border-clinic-slate/10'
            }`}
          >
            Massagens & Terapias
          </button>

          <button
            onClick={() => setActiveCategory('depilacao')}
            className={`px-5 py-2.5 rounded-full font-sans-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'depilacao'
                ? 'bg-clinic-green-dark text-white shadow-sm'
                : 'bg-white text-clinic-slate hover:bg-clinic-green-soft border border-clinic-slate/10'
            }`}
          >
            Depilação & Laser
          </button>
        </div>

        {/* Freeform Services Grid with Varied Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredServices.map((service) => {
            const isHighlight = service.highlight
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 relative border ${
                  isHighlight
                    ? 'bg-clinic-green-surface border-clinic-green/30 shadow-elevated ring-1 ring-clinic-green/20'
                    : 'bg-white border-clinic-slate/10 shadow-subtle hover:border-clinic-green/40 hover:shadow-elevated'
                }`}
              >
                <div>
                  {/* Service Card Top: Tag + Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`font-sans-accent text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                      isHighlight
                        ? 'bg-clinic-green text-white'
                        : 'bg-clinic-green-soft text-clinic-green-dark'
                    }`}>
                      {service.tag}
                    </span>

                    <span className="inline-flex items-center gap-1 font-sans-accent text-[11px] text-clinic-muted font-medium">
                      <Clock className="w-3.5 h-3.5 text-clinic-green" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title in Noto Serif Display */}
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-clinic-green-dark leading-snug">
                    {service.name}
                  </h3>

                  {/* Descriptions in Raleway */}
                  <p className="font-body text-sm text-clinic-slate mt-3 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  <p className="font-body text-xs text-clinic-muted mt-2 leading-relaxed font-light">
                    {service.fullDesc}
                  </p>

                  {/* Indications list */}
                  <div className="mt-5 pt-4 border-t border-clinic-slate/10 space-y-2">
                    <span className="font-sans-accent text-[10px] uppercase font-semibold text-clinic-muted tracking-wider block">
                      Indicado para:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {service.indications.map((ind, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-body text-clinic-slate">
                          <span className="w-1.5 h-1.5 rounded-full bg-clinic-green flex-shrink-0" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA for Treatment */}
                <div className="pt-6 mt-6 border-t border-clinic-slate/10">
                  <button
                    onClick={() => onBookTreatment(service.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-sans-accent text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                      isHighlight
                        ? 'bg-clinic-green text-white hover:bg-clinic-green-hover shadow-sm'
                        : 'bg-clinic-cream hover:bg-clinic-green-soft text-clinic-green-dark border border-clinic-green-dark/20 hover:border-clinic-green'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar {service.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Custom Consultation Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-clinic-green-dark text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury text-left border border-emerald-500/20">
          <div className="space-y-1">
            <h4 className="font-serif-display text-xl sm:text-2xl font-normal text-white">
              Em dúvida sobre qual procedimento é ideal para o seu caso?
            </h4>
            <p className="font-body text-sm text-emerald-100/90 font-light">
              Agende uma avaliação inicial presencial para a Dra. Dani examinar sua pele e indicar o plano mais eficaz.
            </p>
          </div>

          <button
            onClick={() => onBookTreatment('Avaliação Diagnóstica Inicial')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold hover:bg-clinic-green-hover transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-100" />
            <span>Fazer Avaliação Inicial</span>
          </button>
        </div>

      </div>
    </section>
  )
}
