import React from 'react'
import { MapPin, Clock, Phone, MessageCircle, CalendarCheck, ShieldCheck, ExternalLink } from 'lucide-react'
import { InstagramIcon } from './icons/InstagramIcon'

interface LocationContactProps {
  onBookClick: () => void
}

export const LocationContact: React.FC<LocationContactProps> = ({ onBookClick }) => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-clinic-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Contact details & Opening Hours (6 cols) */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="space-y-4">
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-clinic-green-dark tracking-tight leading-tight">
                Seu momento de autocuidado começa com um simples agendamento.
              </h2>
              <p className="font-body text-base sm:text-lg text-clinic-muted font-light leading-relaxed">
                Para garantir total privacidade, conforto e pontualidade, todos os atendimentos na clínica são realizados exclusivamente com agendamento prévio.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address card */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-clinic-slate/10 shadow-subtle hover:border-clinic-green/30 transition-colors">
                <div className="p-3 rounded-xl bg-clinic-green-soft text-clinic-green flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans-accent text-xs uppercase font-bold tracking-wider text-clinic-green-dark">
                    Endereço da Clínica
                  </h4>
                  <p className="font-body text-sm text-clinic-slate font-medium leading-snug">
                    Vila Dr. Fernando Dias de Abreu, N° 06 - São Pedro
                  </p>
                  <p className="font-body text-xs text-clinic-muted font-light">
                    Belo Jardim - PE • CEP: 55155-535
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Vila+Dr.+Fernando+Dias+de+Abreu+06+São+Pedro+Belo+Jardim+PE"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans-accent text-clinic-green font-semibold hover:text-clinic-green-hover pt-1"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-clinic-slate/10 shadow-subtle">
                <div className="p-3 rounded-xl bg-clinic-green-soft text-clinic-green flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-accent text-xs uppercase font-bold tracking-wider text-clinic-green-dark">
                    Horário de Funcionamento
                  </h4>
                  <p className="font-body text-sm text-clinic-slate mt-1 font-light">
                    Segunda a Sexta: <span className="font-semibold text-clinic-slate">08h às 19h</span>
                  </p>
                  <p className="font-body text-sm text-clinic-slate font-light">
                    Sábados: <span className="font-semibold text-clinic-slate">08h às 14h</span> (Com hora marcada)
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp phone card */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-clinic-slate/10 shadow-subtle">
                <div className="p-3 rounded-xl bg-clinic-green-soft text-clinic-green flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-accent text-xs uppercase font-bold tracking-wider text-clinic-green-dark">
                    WhatsApp & Telefone Direto
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=5581991661171"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans-accent text-base sm:text-lg font-bold text-clinic-green hover:text-clinic-green-hover transition-colors block mt-0.5"
                  >
                    (81) 99166-1171
                  </a>
                  <p className="font-body text-xs text-clinic-muted font-light mt-0.5">
                    Canal oficial para dúvidas, avaliações e agendamentos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold shadow-subtle hover:bg-clinic-green-hover transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Solicitar Horário no WhatsApp</span>
              </button>

              <a
                href="https://www.instagram.com/estetica.dani.rocha/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-clinic-slate/20 text-clinic-slate font-sans-accent text-xs uppercase tracking-wider font-semibold hover:border-clinic-green hover:text-clinic-green transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-clinic-green" />
                <span>@estetica.dani.rocha</span>
              </a>
            </div>
          </div>

          {/* Right Column: Physical Reception Card with PROMINENT LOGO (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-clinic-green-dark rounded-3xl p-7 sm:p-10 text-white shadow-luxury border border-emerald-500/20 text-left relative overflow-hidden">
              
              {/* Prominent Clinic Logo Display */}
              <div className="bg-white/95 rounded-2xl p-4 sm:p-6 mb-7 flex items-center justify-center shadow-md">
                <img 
                  src="/assets/logo.png" 
                  alt="Clínica Dra. Dani Rocha" 
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="font-serif-display text-2xl font-medium text-white">
                  Atendimento com a Dra. Dani Rocha
                </h3>
                <span className="font-sans-accent text-xs text-emerald-300 uppercase tracking-widest block font-medium">
                  Estética Avançada • Facial, Corporal & Spa
                </span>
                <p className="font-body text-xs text-emerald-100/80 font-light pt-1">
                  Vila Dr. Fernando Dias de Abreu, 06 • São Pedro • Belo Jardim - PE
                </p>
              </div>

              <p className="font-body text-sm text-emerald-100/90 font-light leading-relaxed mb-6">
                Tem dúvidas sobre qual tratamento é o mais indicado para a sua queixa? Mande uma mensagem agora no WhatsApp <span className="font-medium text-white">(81) 99166-1171</span> para verificar a disponibilidade de horários.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CalendarCheck className="w-5 h-5 text-clinic-green" />
                    <div>
                      <span className="font-sans-accent text-xs font-semibold text-white block">
                        Avaliações Presenciais
                      </span>
                      <span className="font-body text-[11px] text-emerald-200/80 font-light">
                        Horários dedicados de 30 minutos
                      </span>
                    </div>
                  </div>
                  <span className="font-sans-accent text-[10px] uppercase font-bold text-clinic-green bg-white/10 px-2.5 py-1 rounded-full">
                    Disponível
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-clinic-green" />
                    <div>
                      <span className="font-sans-accent text-xs font-semibold text-white block">
                        Canal Direto no WhatsApp
                      </span>
                      <span className="font-body text-[11px] text-emerald-200/80 font-light">
                        (81) 99166-1171
                      </span>
                    </div>
                  </div>
                  <span className="font-sans-accent text-[10px] uppercase font-bold text-emerald-300 bg-white/10 px-2.5 py-1 rounded-full">
                    Online
                  </span>
                </div>
              </div>

              <div className="pt-7">
                <button
                  onClick={onBookClick}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold hover:bg-clinic-green-hover transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-100" />
                  <span>Falar com a Dra. Dani no WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
