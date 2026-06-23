'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Midia() {
  const [swiperDesktop, setSwiperDesktop] = useState(null)
  const [swiperMobile, setSwiperMobile] = useState(null)

  const noticias = [
    {
      img: "Midia-1.png",
      title: '"Como o Agibank usou o Agentforce da Salesforce para transformar o seu atendimento"',
      link: "https://braziljournal.com/brands/como-o-agibank-usou-o-agentforce-da-salesforce-para-transformar-o-seu-atendimento/"
    },
    {
      img: "Midia-2.png",
      title: '"Agibank lança software de IA para prevenção à lavagem de dinheiro e combate a fraudes"',
      link: "https://epocanegocios.globo.com/inteligencia-artificial/noticia/2025/02/agibank-lanca-software-de-ia-para-prevencao-a-lavagem-de-dinheiro-e-combate-a-fraudes.ghtml"
    },
    {
      img: "Midia-3.png",
      title: '"Agibank projeta alcançar 10% do mercado de crédito consignado até 2030"',
      link: "https://www.cnnbrasil.com.br/economia/negocios/agibank-projeta-alcancar-10-do-mercado-de-credito-consignado-ate-2030/"
    }
  ]

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden z-10 w-full">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* ========================================================= */}
        {/* 🖥️ VERSÃO DESKTOP */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-0 items-center">
          
          <div className="col-span-4 flex flex-col items-start relative z-20 py-8 pr-8">
            {/* A PAREDE BRANCA: Agora com h-[200%] e -top-[50%] para garantir que cubra do teto ao chão absoluto da seção */}
            <div className="absolute -top-[50%] right-0 w-[100vw] h-[200%] bg-white z-0" style={{ transform: 'translateX(-100%)' }} />
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-[56px] font-bold text-[#0064f5] leading-tight mb-8 tracking-tight">
                Agibank na mídia
              </h2>
              
              <p className="text-xl text-[#000f44] font-light mb-10 leading-relaxed">
                Aqui, a inteligência artificial vem pra somar, <span className="font-bold">desde que exista uma pessoa por trás que saiba operar.</span>
              </p>
              
              <div className="flex gap-4">
                <button onClick={() => swiperDesktop?.slidePrev()} className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                </button>
                <button onClick={() => swiperDesktop?.slideNext()} className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="col-span-8 relative z-10">
            <Swiper
              onSwiper={setSwiperDesktop}
              slidesPerView="auto"
              spaceBetween={32}
              modules={[Navigation]}
              className="!overflow-visible py-12 -my-12 pl-8 -ml-8 -mr-[50vw] pr-[50vw]"
            >
              {noticias.map((noticia, index) => (
                <SwiperSlide key={index} className="!w-[420px]">
                  <a href={noticia.link} target="_blank" rel="noopener noreferrer" className="block h-full group bg-white border border-gray-100 rounded-[32px] shadow-[0_10px_30px_rgba(0,15,68,0.12)] hover:shadow-[0_20px_40px_rgba(0,15,68,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col overflow-hidden">
                    <div className="p-4 pb-0 h-[250px]">
                      <img src={`/images/${noticia.img}`} alt="Notícia" className="w-full h-full object-cover rounded-[24px] bg-gray-100" onError={(e) => { e.target.src = `https://placehold.co/400x300/0064f5/ffffff?text=Notícia+${index + 1}` }} />
                    </div>
                    <div className="p-8 flex-1 flex items-center">
                      <p className="text-[#0064f5] font-medium text-xl leading-snug group-hover:text-[#0033b0] transition-colors">{noticia.title}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 📱 VERSÃO MOBILE */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:hidden w-full gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-start px-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0064f5] leading-[1.1] mb-6 tracking-tight">
              Agibank na mídia
            </h2>
            
            <p className="text-lg md:text-xl text-[#000f44] font-light mb-8 leading-relaxed max-w-[90%] break-words">
              Aqui, a inteligência artificial vem pra somar, <span className="font-bold">desde que exista uma pessoa por trás que saiba operar.</span>
            </p>
            
            <div className="flex gap-4">
              <button onClick={() => swiperMobile?.slidePrev()} className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center shadow-md active:scale-95 z-40 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              </button>
              <button onClick={() => swiperMobile?.slideNext()} className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center shadow-md active:scale-95 z-40 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </button>
            </div>
          </motion.div>

          <div className="w-full relative">
            <Swiper
              onSwiper={setSwiperMobile}
              slidesPerView="auto"
              spaceBetween={24}
              modules={[Navigation]}
              // O padding protege as sombras no mobile
              className="!overflow-visible py-8"
            >
              {noticias.map((noticia, index) => (
                <SwiperSlide key={index} className="!w-[280px] md:!w-[340px]">
                  <a href={noticia.link} target="_blank" rel="noopener noreferrer" className="block h-full bg-white border border-gray-100 rounded-[32px] shadow-[0_10px_30px_rgba(0,15,68,0.15)] flex flex-col overflow-hidden">
                    <div className="p-4 pb-0 h-[200px]">
                      <img src={`/images/${noticia.img}`} alt="Notícia" className="w-full h-full object-cover rounded-[24px] bg-gray-100" onError={(e) => { e.target.src = `https://placehold.co/400x300/0064f5/ffffff?text=Notícia+${index + 1}` }} />
                    </div>
                    <div className="p-6 flex-1 flex items-center">
                      <p className="text-[#0064f5] font-medium text-base md:text-lg leading-snug">{noticia.title}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  )
}
