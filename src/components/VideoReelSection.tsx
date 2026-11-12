import React, { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, RotateCcw, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react'

interface VideoReelProps {
  onBookTreatment: (treatmentName: string) => void
}

export const VideoReelSection: React.FC<VideoReelProps> = ({ onBookTreatment }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleRestart = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.play()
    setIsPlaying(true)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const current = videoRef.current.currentTime
    const duration = videoRef.current.duration || 1
    setProgress((current / duration) * 100)
  }

  useEffect(() => {
    // Autoplay muted when entering viewport if supported
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
          } else {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="video-procedimento" className="py-20 lg:py-28 bg-clinic-green-dark text-white relative overflow-hidden">
      {/* Delicate background ambiance */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#2D9C36_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Reels Player (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-luxury border-4 border-emerald-900/60 bg-black group">
              
              <video
                ref={videoRef}
                src="/assets/limpeza-pele-video.mp4"
                playsInline
                preload="metadata"
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
                title="Procedimento de Limpeza de Pele Profunda na Clínica Dra. Dani Rocha"
              />

              {/* Progress Bar at top like Instagram Reels */}
              <div className="absolute top-3 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden z-20">
                <div 
                  className="h-full bg-clinic-green transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Top Reel Header Overlay */}
              <div className="absolute top-6 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-auto px-2 py-0.5 rounded-lg bg-white/95 shadow-sm border border-white/80 flex items-center justify-center">
                    <img src="/assets/logo.png" alt="Dani Rocha" className="h-6 w-auto object-contain" />
                  </div>
                  <div>
                    <a 
                      href="https://www.instagram.com/estetica.dani.rocha/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="block text-xs font-sans-accent font-semibold text-white leading-tight hover:text-emerald-300 pointer-events-auto transition-colors"
                    >
                      @estetica.dani.rocha
                    </a>
                    <span className="block text-[10px] text-emerald-200/90 font-body">
                      Limpeza de Pele Profunda
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-auto border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-clinic-green animate-pulse" />
                  <span className="text-[10px] font-sans-accent uppercase text-white font-semibold tracking-wider">Procedimento Real</span>
                </div>
              </div>

              {/* Center Play/Pause Indicator if paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label="Reproduzir vídeo"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-clinic-green/90 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-20"
                >
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </button>
              )}

              {/* Bottom Reel Controls & Action Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    aria-label="Reiniciar vídeo"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <span className="font-sans-accent text-[11px] text-white/80 font-medium">
                  {isMuted ? "Toque no alto-falante para áudio" : "Áudio ativado"}
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Explanation & Clinical Depth (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Veja a precisão de um protocolo real em consultório.
            </h2>

            <p className="font-body text-base sm:text-lg text-emerald-100/90 font-light leading-relaxed">
              Sem filtros e sem ilusões: o vídeo ao lado registra a execução técnica da nossa <strong className="font-semibold text-white">Limpeza de Pele Profunda com Extração Minuciosa</strong>. Cada etapa é realizada com assepsia estrita, instrumentos anatômicos e produtos dermocosméticos de grau médico.
            </p>

            {/* Protocol Steps */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-clinic-green/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans-accent text-sm font-semibold text-white">
                    1. Higienização & Emoliência Química Suave
                  </h4>
                  <p className="font-body text-xs text-emerald-100/80 font-light mt-0.5">
                    Prepara a barreira cutânea e amolece os comedões sem traumatizar ou romper capilares da derme.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-clinic-green/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans-accent text-sm font-semibold text-white">
                    2. Extração Manual com Lupa e Luz Focal
                  </h4>
                  <p className="font-body text-xs text-emerald-100/80 font-light mt-0.5">
                    Remoção precisa de cravos, miliuns e impurezas com proteção dérmica e toque suave especializado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-clinic-green/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans-accent text-sm font-semibold text-white">
                    3. Alta Frequência, Argiloterapia & Máscara Calmante
                  </h4>
                  <p className="font-body text-xs text-emerald-100/80 font-light mt-0.5">
                    Ação bactericida instantânea, fechamento fisiológico dos poros e regeneração celular imediata.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Booking Trigger */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBookTreatment('Limpeza de Pele Profunda')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-clinic-green text-white font-sans-accent text-xs uppercase tracking-wider font-semibold hover:bg-clinic-green-hover transition-all duration-200 shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Quero Agendar Minha Limpeza de Pele</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-emerald-200/80 font-sans-accent">
                <Sparkles className="w-4 h-4 text-clinic-green" />
                <span>Duração média: 1h30 de puro cuidado</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
