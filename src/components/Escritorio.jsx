'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Escritorio() {
  const [swiperInstance, setSwiperInstance] = useState(null)
  
  const fotos = [
    "Escritorio-1.png",
    "Escritorio-2.png",
    "Escritorio-3.png",
    "Escritorio-4.png",
    "Escritorio-5.png"
  ]

  return (
    <section className="bg-white pt-12 pb-24 relative z-10 overflow-hidden -mt-24">
      
      {/* Efeito Pixels no Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 mt-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#000f44] leading-tight tracking-tight max-w-2xl mx-auto">
            Conheça o escritório mais agilizado de Campinas e Região!
          </h2>
        </motion.div>
      </div>

      {/* CARROSSEL CUSTOMIZADO (Sem o efeito sanfona) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative z-20"
      >
        <Swiper
          onSwiper={setSwiperInstance}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          // O segredo: Espaçamento negativo para elas se sobreporem LEVEMENTE (como no seu Figma), mas sem espremer
          spaceBetween={-40} 
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          // A classe "swiper-escritorio" vai ser usada no CSS global abaixo para controlar a escala
          className="w-full py-10 swiper-escritorio"
        >
          {fotos.map((foto, index) => (
            // A largura base do slide é de 600px. O CSS abaixo vai encolher os que não são o central.
            <SwiperSlide key={index} className="!w-[300px] md:!w-[450px] lg:!w-[600px] aspect-[16/10] transition-all duration-500 ease-out">
              <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative">
                
                <img 
                  src={`/images/${foto}`} 
                  alt="Escritório Agibank" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = `https://placehold.co/800x500/0064f5/ffffff?text=Escritório+${index + 1}` }}
                />

                {/* OVERLAY AZUL MARINHO: Fica ativo por padrão. A classe global do CSS abaixo apaga ele na imagem central */}
                <div className="absolute inset-0 bg-[#000f44] opacity-70 transition-opacity duration-500 swiper-overlay pointer-events-none" />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLES */}
        <div className="flex items-center justify-center gap-6 mt-4 relative z-30">
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

      {/* ESTILOS GLOBAIS DA MATEMÁTICA DO CARROSSEL */}
      <style dangerouslySetContent={{__html: `
        /* 1. Slide Central (O Foco) */
        .swiper-escritorio .swiper-slide-active {
          transform: scale(1) !important;
          z-index: 50 !important;
        }
        /* Remove o overlay azul do slide central */
        .swiper-escritorio .swiper-slide-active .swiper-overlay {
          opacity: 0 !important;
        }

        /* 2. Slides Secundários (Os vizinhos imediatos) */
        .swiper-escritorio .swiper-slide-prev,
        .swiper-escritorio .swiper-slide-next {
          transform: scale(0.8) !important;
          z-index: 40 !important;
        }

        /* 3. Slides Terciários (As pontas extremas) */
        /* Todos os outros slides que não são o ativo nem os vizinhos imediatos vão ficar bem pequenos no fundo */
        .swiper-escritorio .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
          transform: scale(0.6) !important;
          z-index: 30 !important;
        }
      `}} />
    </section>
  )
}
