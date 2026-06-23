'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Depoimento() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const depoimentos = [
    {
      img: "depoimento-1.png",
      nome: "João da Silva",
      cargo: "Desenvolvedor Trainee",
      texto1: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`,
      texto2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry."`
    },
    {
      img: "depoimento-2.png",
      nome: "Maria da Silva",
      cargo: "Desenvolvedora Trainee",
      texto1: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`,
      texto2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry."`
    },
    {
      img: "depoimento-3.png",
      nome: "Mario Santos",
      cargo: "Desenvolvedor Trainee",
      texto1: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`,
      texto2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry."`
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === depoimentos.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1))
  }

  return (
    <section className="bg-white py-16 md:py-24 relative z-10">
      <div className="container-custom">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#0064f5] rounded-[40px] overflow-hidden relative max-w-6xl mx-auto min-h-[500px] lg:min-h-[600px]"
        >
          {/* Efeito Pixels */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
          </div>

          {/* ========================================================= */}
          {/* 🖥️ VERSÃO DESKTOP (BLINDADA E INTOCADA) */}
          {/* ========================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-0 items-stretch relative z-10 h-full">
            
            {/* LADO ESQUERDO: Foto */}
            <div className="col-span-5 relative flex justify-center items-end pt-12 lg:pt-0 min-h-[400px] lg:min-h-full">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  src={`/images/${depoimentos[currentIndex].img}`} 
                  alt={depoimentos[currentIndex].nome} 
                  className="absolute bottom-0 w-full h-full object-contain object-bottom drop-shadow-2xl"
                  onError={(e) => { e.target.src = `https://placehold.co/500x600/0033b0/ffffff?text=${depoimentos[currentIndex].nome.replace(/ /g, '+')}` }}
                />
              </AnimatePresence>
            </div>

            {/* LADO DIREITO: Depoimento */}
            <div className="col-span-7 p-16 flex flex-col justify-center min-h-[450px]">
              
              <h2 className="text-4xl font-bold text-white leading-normal mb-8">
                Quem abraçou as oportunidades <br className="hidden lg:block"/> <span className="text-[#77df40]">chegou muito longe</span> por aqui.
              </h2>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col flex-1"
                >
                  <div className="space-y-6">
                    <p className="text-white text-xl font-light leading-relaxed">
                      {depoimentos[currentIndex].texto1}
                    </p>
                    <p className="text-white text-xl font-light leading-relaxed">
                      {depoimentos[currentIndex].texto2}
                    </p>
                  </div>
                  
                  <div className="mt-10">
                    <p className="text-white font-bold text-xl">
                      {depoimentos[currentIndex].nome} - <span className="text-[#77df40]">{depoimentos[currentIndex].cargo}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controles */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-white transition-colors active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-white transition-colors active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* 📱 VERSÃO MOBILE (REORDENADA: TÍTULO -> FOTO -> TEXTO) */}
          {/* ========================================================= */}
          <div className="flex flex-col lg:hidden relative z-10 h-full">
            
            {/* 1. Título */}
            <div className="p-8 md:p-12 pb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-normal">
                Quem abraçou as oportunidades <span className="text-[#77df40]">chegou muito longe</span> por aqui.
              </h2>
            </div>

            {/* 2. Foto */}
            <div className="relative flex justify-center items-end pt-8 min-h-[350px] md:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  src={`/images/${depoimentos[currentIndex].img}`} 
                  alt={depoimentos[currentIndex].nome} 
                  className="absolute bottom-0 w-full h-full object-contain object-bottom drop-shadow-2xl"
                  onError={(e) => { e.target.src = `https://placehold.co/500x600/0033b0/ffffff?text=${depoimentos[currentIndex].nome.replace(/ /g, '+')}` }}
                />
              </AnimatePresence>
            </div>

            {/* 3. Textos e Controles */}
            <div className="p-8 md:p-12 pt-6 flex flex-col justify-center bg-[#0064f5]/90 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col flex-1"
                >
                  <div className="space-y-6">
                    <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                      {depoimentos[currentIndex].texto1}
                    </p>
                    <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                      {depoimentos[currentIndex].texto2}
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-white font-bold text-xl">
                      {depoimentos[currentIndex].nome} - <span className="text-[#77df40] block mt-1">{depoimentos[currentIndex].cargo}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controles */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-white transition-colors active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-white transition-colors active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
