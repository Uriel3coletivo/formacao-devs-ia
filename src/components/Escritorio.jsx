'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Escritorio() {
  
  // As 5 imagens reais que você subiu
  const baseFotos = [
    "Escritorio-1.png",
    "Escritorio-2.png",
    "Escritorio-3.png",
    "Escritorio-4.png",
    "Escritorio-5.png"
  ]

  // Duplicamos o array para garantir que o Swiper tenha slides suficientes para um Loop perfeito
  const fotos = [...baseFotos, ...baseFotos]

  return (
    // -mt-16 puxa a seção para cima, colando no bloco do depoimento
    <section className="bg-white pt-12 pb-32 relative z-10 overflow-hidden -mt-16">
      
      {/* Efeito Pixels no Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#000f44] leading-tight tracking-tight max-w-2xl mx-auto">
            Conheça o escritório mais agilizado de Campinas e Região!
          </h2>
        </motion.div>

        {/* CARROSSEL COVERFLOW PREMIUM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // w-[100vw] e margens negativas fazem o carrossel não ter cortes secos nas laterais
          className="w-[100vw] -ml-[50vw] left-1/2 relative"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            // 'auto' permite que o Swiper calcule quantas imagens cabem na tela
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            coverflowEffect={{
              rotate: 0, 
              stretch: 80, // Aproxima as imagens laterais para caberem 5 na tela
              depth: 300,  // Empurra as imagens laterais muito mais para trás (ficam menores)
              modifier: 1,
              slideShadows: false, // Desativamos a sombra padrão do Swiper para usarmos a nossa
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="pb-20 pt-10"
          >
            {fotos.map((foto, index) => (
              // A largura do slide dita o tamanho da imagem central
              <SwiperSlide key={index} className="!w-[300px] md:!w-[500px] lg:!w-[700px] aspect-video group">
                <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,15,68,0.2)] relative transition-all duration-500">
                  
                  <img 
                    src={`/images/${foto}`} 
                    alt="Escritório Agibank" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://placehold.co/800x500/0064f5/ffffff?text=Escritório+${(index % 5) + 1}` }}
                  />

                  {/* OVERLAY AZUL MARINHO: Fica ativo nas imagens laterais. A classe global do CSS abaixo apaga ele na imagem central */}
                  <div className="absolute inset-0 bg-[#000f44]/60 transition-opacity duration-500 swiper-overlay" />
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CONTROLES CUSTOMIZADOS (Setas e Bolinhas) */}
          <div className="flex items-center justify-center gap-8 mt-4 relative z-20">
            {/* Seta Esquerda */}
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Bolinhas */}
            <div className="swiper-pagination-custom flex items-center gap-2"></div>

            {/* Seta Direita */}
            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </motion.div>

      </div>

      {/* ESTILOS GLOBAIS DO SWIPER */}
      <style dangerouslySetContent={{__html: `
        /* A imagem do centro (.swiper-slide-active) perde o overlay azul marinho */
        .swiper-slide-active .swiper-overlay {
          opacity: 0 !important;
        }
        
        /* Estilização das bolinhas */
        .swiper-pagination-custom {
          width: auto !important;
          position: relative !important;
        }
        .swiper-pagination-bullet { 
          background: #000f44 !important; 
          opacity: 0.3 !important; 
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active { 
          background: #0064f5 !important; 
          opacity: 1 !important; 
          transform: scale(1.3) !important;
        }
      `}} />
    </section>
  )
}
