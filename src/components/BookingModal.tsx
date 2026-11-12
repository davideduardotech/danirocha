import React, { useState, useEffect } from 'react'
import { X, MessageCircle, Calendar, Sparkles, CheckCircle2 } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  selectedTreatment?: string
  customMessage?: string
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedTreatment = 'Avaliação Estética Facial e Corporal',
  customMessage,
}) => {
  const [name, setName] = useState('')
  const [treatment, setTreatment] = useState(selectedTreatment)
  const [preferredPeriod, setPreferredPeriod] = useState('manha')

  useEffect(() => {
    if (selectedTreatment) {
      setTreatment(selectedTreatment)
    }
  }, [selectedTreatment])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const periodLabel = preferredPeriod === 'manha' ? 'Período da Manhã' : preferredPeriod === 'tarde' ? 'Período da Tarde' : 'Sábado'
    
    let message = ''
    if (customMessage) {
      message = customMessage + (name ? ` Meu nome é ${name}.` : '')
    } else {
      message = `Olá Dra. Dani Rocha! Gostaria de agendar uma consulta na clínica em Belo Jardim.\n\n` +
        `• Meu nome: ${name || 'Não informado'}\n` +
        `• Tratamento de interesse: ${treatment}\n` +
        `• Preferência de horário: ${periodLabel}\n\n` +
        `Aguardo disponibilidade para confirmarmos o horário. Obrigado(a)!`
    }

    const encoded = encodeURIComponent(message)
    // Clinic WhatsApp URL with actual number: (81) 99166-1171
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5581991661171&text=${encoded}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-slide">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-clinic-cream border border-clinic-green/20 shadow-luxury overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Logo */}
        <div className="bg-clinic-green-dark p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/95 rounded-xl px-2.5 py-1.5 inline-block">
              <img 
                src="/assets/logo.png" 
                alt="Dra. Dani Rocha" 
                className="h-8 sm:h-10 w-auto object-contain" 
              />
            </div>
            <span className="font-sans-accent text-[10px] uppercase font-bold tracking-widest text-emerald-300">
              Agendamento Exclusivo
            </span>
          </div>

          <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-white">
            Agendar com a Dra. Dani Rocha
          </h3>
          <p className="font-body text-xs text-emerald-100/80 font-light mt-0.5">
            Preencha para direcionar seu agendamento direto no WhatsApp oficial: (81) 99166-1171
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-5">
          {/* Patient Name */}
          <div className="space-y-1.5">
            <label className="font-sans-accent text-xs uppercase font-semibold text-clinic-slate tracking-wider block">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Ana Paula Ribeiro"
              className="w-full px-4 py-3 rounded-xl bg-white border border-clinic-slate/20 text-clinic-slate text-sm font-body focus:outline-none focus:border-clinic-green focus:ring-1 focus:ring-clinic-green"
            />
          </div>

          {/* Treatment selection */}
          <div className="space-y-1.5">
            <label className="font-sans-accent text-xs uppercase font-semibold text-clinic-slate tracking-wider block">
              Procedimento de Interesse
            </label>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-clinic-slate/20 text-clinic-slate text-sm font-body focus:outline-none focus:border-clinic-green focus:ring-1 focus:ring-clinic-green"
            >
              <option value="Avaliação Estética Geral">Avaliação Estética Geral</option>
              <option value="Fotodepilação (Laser / Luz Pulsada Lyra)">Fotodepilação (Laser / Luz Pulsada Lyra)</option>
              <option value="Criolipólise Avançada">Criolipólise Avançada</option>
              <option value="Limpeza de Pele Profunda com Extração">Limpeza de Pele Profunda com Extração</option>
              <option value="Ventosaterapia Terapêutica">Ventosaterapia Terapêutica</option>
              <option value="Massagem Relaxante Terapêutica">Massagem Relaxante Terapêutica</option>
              <option value="Massagem Detox com Manta Térmica">Massagem Detox com Manta Térmica</option>
              <option value="Massagem Modeladora Manual">Massagem Modeladora Manual</option>
              <option value="Drenagem Linfática Especializada">Drenagem Linfática Especializada</option>
              <option value="Tratamentos para Gordura Localizada">Tratamentos para Gordura Localizada</option>
              <option value="Pump Up (Lifting de Bumbum)">Pump Up (Lifting de Bumbum)</option>
              <option value="Depilação na Cera Hipoalergênica">Depilação na Cera Hipoalergênica</option>
            </select>
          </div>

          {/* Period preference */}
          <div className="space-y-1.5">
            <label className="font-sans-accent text-xs uppercase font-semibold text-clinic-slate tracking-wider block">
              Melhor Período para Atendimento
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'manha', label: 'Manhã' },
                { id: 'tarde', label: 'Tarde' },
                { id: 'sabado', label: 'Sábado' },
              ].map((p) => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setPreferredPeriod(p.id)}
                  className={`py-2.5 px-3 rounded-xl font-sans-accent text-xs font-semibold transition-all text-center border ${
                    preferredPeriod === p.id
                      ? 'bg-clinic-green text-white border-clinic-green shadow-sm'
                      : 'bg-white text-clinic-slate border-clinic-slate/20 hover:bg-clinic-green-soft'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold hover:bg-clinic-green-hover transition-colors shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-emerald-100" />
              <span>Confirmar e Conversar no WhatsApp</span>
            </button>
            <p className="font-body text-[11px] text-clinic-muted font-light text-center mt-2.5">
              Atendimento em consultório privativo • Belo Jardim - PE
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
