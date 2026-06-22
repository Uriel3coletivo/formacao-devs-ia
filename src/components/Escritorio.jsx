'use client'
import { motion } from 'framer-motion'
// Importando o Swiper e o efeito Coverflow
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'

// Importando os estilos necessários do Swiper
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function Escritorio() {
  
  const fotos = [
    "Escritorio-1.png",
    "Escritorio-2.png",
    "Escritorio-3.png",
    "Escritorio-4.png",
    "Escritorio-1.png" // Repetido para garantir o loop visual
  ]

  return (
    <section className="bg-white py-24 md:py-32 relative z-10 overflow-hidden">
      
      {/* Efeito Pixels no Fundo (Bem suave) */}
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

        {/* CARROSSEL COVERFLOW (Estilo Agibank) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative"
        >
          <Swiper
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
              rotate: 0, // 0 rotação para manter os cards retos
              stretch: 0,
              depth: 150, // O quanto as imagens laterais vão para trás (ficam menores)
              modifier: 1.5,
              slideShadows: false, // Desativado para não escurecer as imagens
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            // Uma classe extra para dar respiro ao pagination
            className="pb-16 w-full max-w-[1200px]"
          >
            {fotos.map((foto, index) => (
              // A largura do slide define o tamanho da imagem central
              <SwiperSlide key={index} className="!w-[300px] md:!w-[500px] lg:!w-[700px] aspect-video">
                <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,15,68,0.2)]">
                  <img 
                    src={`/images/${foto}`} 
                    alt="Escritório Agibank" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://placehold.co/800x500/0064f5/ffffff?text=Escritório+${index + 1}` }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>

      {/* Ajuste do CSS da paginação do Swiper para ficar com a cor do Agibank */}
      <style dangerouslySetContent={{__html: `
        .swiper-pagination-bullet { background: #000f44; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #0064f5; opacity: 1; }
      `}} />
    </section>
  )
}
