import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

interface FAQSectionProps {
  onContactClick: () => void
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'A limpeza de pele profunda dói ou deixa meu rosto marcado?',
      a: 'Não. Utilizamos dermocosméticos emolientes de alta eficácia que amolecem a queratina e os comedões antes da extração, permitindo que os cravos saiam facilmente sem pressão excessiva. Ao final, a aplicação de alta frequência bactericida e máscara de argila calmante elimina qualquer vermelhidão, garantindo que você volte à sua rotina sem manchas ou lesões.',
    },
    {
      q: 'Quantas sessões de Criolipólise são necessárias para notar resultados?',
      a: 'Com apenas uma aplicação bem planejada por área é possível reduzir entre 20% e 30% da camada de gordura local. As células adiposas cristalizadas são eliminadas fisiologicamente pelo sistema linfático ao longo de 30 a 90 dias. Na consulta de avaliação, a Dra. Dani analisa a espessura da prega e traça o cronograma exato.',
    },
    {
      q: 'Qual a vantagem da Fotodepilação com tecnologia Lyra?',
      a: 'A tecnologia Lyra possui ponteira ultra-resfriada criogênica que entra em contato com a derme a temperaturas frias, amortecendo a sensibilidade térmica. O feixe de luz seletivo atinge a melanina do folículo sem queimar a pele ao redor, sendo um método muito mais confortável, seguro e eficaz inclusive no tratamento da foliculite.',
    },
    {
      q: 'As marcas da Ventosaterapia somem em quanto tempo?',
      a: 'As manchas circulares características são estase sanguínea superficial que evidencia a liberação de toxinas e contraturas profundas. Elas são indolores e desaparecem completamente entre 3 a 7 dias, dependendo do metabolismo e hidratação de cada paciente.',
    },
    {
      q: 'Quais são as formas de pagamento aceitas na clínica?',
      a: 'Aceitamos PIX, cartões de débito e cartões de crédito com opções de parcelamento facilitado para planos e pacotes de tratamento. Todos os valores e opções são apresentados com transparência na sua avaliação.',
    },
    {
      q: 'Como é realizada a primeira consulta de avaliação?',
      a: 'A avaliação presencial é um momento exclusivo em que a Dra. Dani Rocha examina seu tipo dérmico, histórico de tratamentos prévios e objetivos estéticos. Juntos, vocês definem o plano mais seguro e eficiente para sua rotina, com orientações claras de pré e pós-procedimento.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="duvidas" className="py-20 lg:py-28 bg-clinic-cream-dark/30 border-t border-clinic-slate/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark tracking-tight">
            Tire suas dúvidas antes de agendar.
          </h2>
          <p className="font-body text-base text-clinic-muted font-light leading-relaxed">
            Transparência e segurança científica são pilares fundamentais de todos os atendimentos da clínica.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-clinic-slate/10 overflow-hidden shadow-subtle transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-green"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans-accent text-sm sm:text-base font-semibold text-clinic-slate pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-clinic-green text-white rotate-180' : 'bg-clinic-green-soft text-clinic-green'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-clinic-slate/5 animate-fade-slide">
                    <p className="font-body text-sm text-clinic-muted font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center pt-8 border-t border-clinic-slate/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="font-body text-sm text-clinic-muted font-light">
            Tem alguma dúvida específica sobre o seu tipo de pele ou procedimento?
          </span>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-xs font-sans-accent font-semibold uppercase tracking-wider text-clinic-green hover:text-clinic-green-hover transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Perguntar para a Dra. Dani no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  )
}
