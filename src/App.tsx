import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { VideoReelSection } from './components/VideoReelSection'
import { AboutDani } from './components/AboutDani'
import { ServicesCatalog } from './components/ServicesCatalog'
import { ClinicExperience } from './components/ClinicExperience'
import { ProtocolAssessment } from './components/ProtocolAssessment'
import { TestimonialsExperience } from './components/TestimonialsExperience'
import { FAQSection } from './components/FAQSection'
import { LocationContact } from './components/LocationContact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { BookingModal } from './components/BookingModal'

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState('Avaliação Estética Facial e Corporal')
  const [customMessage, setCustomMessage] = useState<string | undefined>(undefined)

  const handleOpenGeneralBooking = () => {
    setSelectedTreatment('Avaliação Estética Facial e Corporal')
    setCustomMessage(undefined)
    setIsModalOpen(true)
  }

  const handleBookSpecificTreatment = (treatmentName: string) => {
    setSelectedTreatment(treatmentName)
    setCustomMessage(undefined)
    setIsModalOpen(true)
  }

  const handleDirectProtocolBooking = (message: string) => {
    setCustomMessage(message)
    setIsModalOpen(true)
  }

  const scrollToVideo = () => {
    const el = document.getElementById('video-procedimento')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-clinic-cream selection:bg-clinic-green selection:text-white">
      {/* Top Navbar */}
      <Navbar onBookClick={handleOpenGeneralBooking} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onBookClick={handleOpenGeneralBooking}
          onVideoClick={scrollToVideo}
        />

        {/* Real Procedure Video Reel */}
        <VideoReelSection onBookTreatment={handleBookSpecificTreatment} />

        {/* About Dra. Dani Rocha */}
        <AboutDani onBookClick={handleOpenGeneralBooking} />

        {/* Full Interactive Treatment Catalog */}
        <ServicesCatalog onBookTreatment={handleBookSpecificTreatment} />

        {/* Clinic Physical Experience & Spatial Tour */}
        <ClinicExperience />

        {/* Interactive Protocol Assessment Finder */}
        <ProtocolAssessment onDirectBooking={handleDirectProtocolBooking} />

        {/* Verified Patient Testimonials */}
        <TestimonialsExperience />

        {/* Technical FAQ */}
        <FAQSection onContactClick={handleOpenGeneralBooking} />

        {/* Hours & Direct Location */}
        <LocationContact onBookClick={handleOpenGeneralBooking} />
      </main>

      {/* Footer */}
      <Footer onBookClick={handleOpenGeneralBooking} />

      {/* Floating Concierge & Mobile Quick Action */}
      <FloatingWhatsApp onOpen={handleOpenGeneralBooking} />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTreatment={selectedTreatment}
        customMessage={customMessage}
      />
    </div>
  )
}

export default App
