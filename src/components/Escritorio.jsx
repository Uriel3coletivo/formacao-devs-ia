'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

export default function Escritorio() {
  const [swiperInstance, setSwiperInstance] = useState(null)
  
  const baseFotos = [
    "Escritorio-1.png",
    "Escritorio-2.png",
    "Escritorio-3.png",
    "Escritorio-4.png",
    "Escritorio-5.png"
  ]

  const fotos = [...baseFotos, ...baseFotos]

  return (
    <section className="bg-white pt-12 pb-24 relative z-10 overflow-hidden -mt-16">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-20"
        >
          {/* A MÁGICA AQUI: style={{ lineHeight: '1.6' }} força o navegador a obedecer o espaçamento, ignorando qualquer bug da fonte */}
          <h2 
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#000f44] tracking-tight max-w-2xl mx-auto"
            style={{ lineHeight: '1.6' }}
          >
            Conheça o escritório mais agilizado <br className="hidden md:block" /> de Campinas e Região!
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative z-20"
      >
        <Swiper
          onSwiper={setSwiperInstance}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,       
            stretch: 100,    
            depth: 200,      
            modifier: 2,     
            slideShadows: false, 
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="w-full py-10"
        >
          {fotos.map((foto, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[500px] lg:!w-[650px] xl:!w-[750px] aspect-[16/10]">
              {({ isActive }) => (
                <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                  
                  <img 
                    src={`/images/${foto}`} 
                    alt={`Escritório Agibank ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://placehold.co/800x500/0064f5/ffffff?text=Escritório+${index + 1}` }}
                  />

                  <div className={`absolute inset-0 bg-[#000f44] transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-60'}`} />
                  
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-6 mt-8 relative z-30">
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </motion.div>
    </section>
  )
}
