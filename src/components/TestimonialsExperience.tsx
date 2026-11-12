import React from 'react'
import { Star, Quote, CheckCircle } from 'lucide-react'

export const TestimonialsExperience: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana Silveira',
      treatment: 'Limpeza de Pele Profunda',
      quote: 'Eu sempre tive receio de fazer limpeza de pele porque minha pele é extremamente sensível e ficava toda marcada. Na clínica da Dra. Dani foi a primeira vez que saí com a pele calma, limpa de verdade e sem nenhuma vermelhidão agressiva. O toque dela é super suave!',
      date: 'Há 2 semanas',
    },
    {
      name: 'Camila Fernandes',
      treatment: 'Ventosaterapia & Massagem Detox',
      quote: 'Cheguei com as costas travadas por causa de tensão de trabalho e estresse. A sessão com ventosas combinada com a manta térmica foi um divisor de águas. Saí flutuando da clínica, com as dores completamente aliviadas.',
      date: 'Há 1 mês',
    },
    {
      name: 'Juliana Castro',
      treatment: 'Fotodepilação Lyra & Criolipólise',
      quote: 'A fotodepilação resolveu a foliculite que me incomodava há anos nas pernas e axilas. A ponteira geladinha não dói nada! Também fiz criolipólise no abdômen e a diferença nas minhas calças foi nítida após 40 dias.',
      date: 'Há 3 semanas',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-clinic-cream border-t border-clinic-slate/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="font-sans-accent text-xs font-semibold text-clinic-green-dark ml-2">
              5.0 de Avaliação dos Pacientes
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark tracking-tight">
            A satisfação de se olhar no espelho com leveza e confiança.
          </h2>
          <p className="font-body text-base text-clinic-muted font-light leading-relaxed">
            Depoimentos espontâneos de clientes que confiam seus cuidados estéticos e momentos de relaxamento à Dra. Dani Rocha.
          </p>
        </div>

        {/* Freeform Asymmetric Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-subtle border border-clinic-slate/10 flex flex-col justify-between hover:shadow-elevated transition-shadow duration-300 text-left relative"
            >
              <div>
                <div className="flex items-center justify-between text-amber-500 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-sans-accent text-[10px] text-clinic-muted font-light">
                    {item.date}
                  </span>
                </div>

                <p className="font-body text-sm text-clinic-slate font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-clinic-slate/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans-accent text-xs font-bold text-clinic-green-dark">
                    {item.name}
                  </h4>
                  <span className="font-body text-[11px] text-clinic-green font-medium block mt-0.5">
                    {item.treatment}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-sans-accent text-clinic-muted font-light">
                  <CheckCircle className="w-3.5 h-3.5 text-clinic-green" />
                  <span>Verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
