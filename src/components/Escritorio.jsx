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
  
  // Gerando dinamicamente o array com as 10 fotos (Escritorio-1.png até Escritorio-10.png)
  const fotos = Array.from({ length: 10 }, (_, i) => `Escritorio-${i + 1}.png`)

  return (
    <section className="bg-white pt-16 pb-24 relative z-10 overflow-hidden -mt-24">
      
      {/* Efeito Pixels no Fundo (Bem suave) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Título Centralizado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#000f44] leading-tight tracking-tight max-w-2xl mx-auto">
            Conheça o escritório mais agilizado de Campinas e Região!
          </h2>
        </motion.div>
      </div>

      {/* CARROSSEL COVERFLOW (Empilhamento EXATO igual ao Print) */}
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,       // Mantém as imagens perfeitamente retas
            stretch: 100,    // MÁGICA 1: Puxa as imagens laterais para DENTRO (cria a sobreposição)
            depth: 200,      // MÁGICA 2: Empurra as imagens para o fundo (cria a escadinha de tamanho)
            modifier: 2,     // MÁGICA 3: Intensifica o efeito para ficar igual ao seu layout
            slideShadows: false, // Desliga a sombra padrão preta do Swiper
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="w-full py-10 swiper-escritorio"
        >
          {fotos.map((foto, index) => (
            // A largura do slide dita o tamanho da imagem central
            <SwiperSlide key={index} className="!w-[300px] md:!w-[500px] lg:!w-[650px] xl:!w-[750px] aspect-[16/10] transition-all duration-500">
              <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,15,68,0.3)] relative">
                
                <img 
                  src={`/images/${foto}`} 
                  alt={`Escritório Agibank ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = `https://placehold.co/800x500/0064f5/ffffff?text=Escritório+${index + 1}` }}
                />

                {/* OVERLAY AZUL MARINHO: Fica em 60% por padrão. O CSS abaixo zera ele na imagem central */}
                <div className="absolute inset-0 bg-[#000f44] opacity-60 transition-opacity duration-500 swiper-overlay pointer-events-none" />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLES (Setinhas Verdes) */}
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

      {/* ESTILOS GLOBAIS DO SWIPER */}
      <style dangerouslySetContent={{__html: `
        /* Remove o overlay azul da imagem que está no centro para dar o destaque total */
        .swiper-escritorio .swiper-slide-active .swiper-overlay {
          opacity: 0 !important;
        }
        /* Garante que a imagem do centro fique sempre na frente de todas as outras */
        .swiper-escritorio .swiper-slide-active {
          z-index: 50 !important;
        }
      `}} />
    </section>
  )
}
