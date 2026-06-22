'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Escritorio() {
  const [swiperInstance, setSwiperInstance] = useState(null)
  
  const baseFotos = [
    "Escritorio-1.png",
    "Escritorio-2.png",
    "Escritorio-3.png",
    "Escritorio-4.png",
    "Escritorio-5.png"
  ]

  // Duplicamos para garantir o loop contínuo e ter imagens suficientes para as bordas
  const fotos = [...baseFotos, ...baseFotos]

  return (
    // -mt-24 puxa a seção para cima, colando no bloco do depoimento
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

      {/* CARROSSEL COVERFLOW (SOBREPOSTO) */}
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
            rotate: 0,       // Sem rotação 3D, cards ficam retos
            stretch: 120,    // Valor alto puxa os cards para o centro (cria a sobreposição)
            depth: 300,      // Empurra para o fundo (deixa as laterais menores)
            modifier: 1,
            slideShadows: false, // Desligado para usarmos nosso overlay azul
          }}
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          className="w-full py-10 swiper-escritorio"
        >
          {fotos.map((foto, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[500px] lg:!w-[750px] aspect-[16/10] group">
              <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative">
                
                <img 
                  src={`/images/${foto}`} 
                  alt="Escritório Agibank" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = `https://placehold.co/800x500/0064f5/ffffff?text=Escritório+${(index % 5) + 1}` }}
                />

                {/* OVERLAY AZUL MARINHO: Escurece as imagens de trás. O CSS global apaga ele na imagem do centro */}
                <div className="absolute inset-0 bg-[#000f44] opacity-60 transition-opacity duration-500 swiper-overlay pointer-events-none" />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLES (Setinhas centralizadas embaixo) */}
        <div className="flex items-center justify-center gap-6 mt-4 relative z-30">
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          
          {/* Opcional: Se quiser as bolinhas também, descomente a linha abaixo */}
          {/* <div className="swiper-pagination-custom flex items-center gap-2 px-4"></div> */}

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
        /* Remove o overlay azul apenas do slide que está no centro */
        .swiper-slide-active .swiper-overlay {
          opacity: 0 !important;
        }
        /* Garante que o slide central fique por cima de todos */
        .swiper-slide-active {
          z-index: 50 !important;
        }
      `}} />
    </section>
  )
}
