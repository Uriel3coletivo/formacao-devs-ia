'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

// Sub-componente para o Contador Animado (0 a 55)
function AnimatedCounter({ from, to }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [hasAnimated, count, to])

  return (
    <motion.span 
      whileInView={() => setHasAnimated(true)}
      viewport={{ once: true }}
    >
      {rounded}
    </motion.span>
  )
}

export default function RotinaVideo() {
  
  const cards = [
    "Torne-se um desenvolvedor nativo em IA",
    "Viva desafios reais e práticos para se destacar e crescer",
    "Continue na capacitação mesmo depois de contratado"
  ]

  return (
    <section className="bg-[#000f44] py-24 relative z-10 overflow-hidden">
      
      {/* Efeito Pixels no Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white text-center mb-12 tracking-tight max-w-3xl mx-auto"
        >
          Conheça a rotina de um <span className="text-[#77df40]">engenheiro de software</span> no Agi!
        </motion.h2>

        {/* Player de Vídeo do YouTube */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[900px] mx-auto aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#0064f5] bg-black mb-16 relative group"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/ksumOit-jZY?rel=0&modestbranding=1" 
            title="Rotina Agibank" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </motion.div>

        {/* Estatística com Contador Animado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-center md:text-left"
        >
          <div className="text-6xl md:text-[80px] font-bold text-[#77df40] leading-none">
            <AnimatedCounter from={0} to={55} />%
          </div>
          <p className="text-white text-xl md:text-2xl font-light max-w-md">
            dos bolsistas de 2025 foram contratados após o Programa
          </p>
        </motion.div>

        {/* Grid de Cards (Hover Azul Oficial) */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#0064f5", y: -5 }}
              className="bg-[#0033b0] p-6 md:p-8 rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-center cursor-default"
            >
              <p className="text-white text-base md:text-lg font-medium leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
