'use client'
import { motion } from 'framer-motion'

export default function FaixaVerde() {
  return (
    <section className="bg-white py-32 relative z-10 overflow-hidden flex flex-col justify-center items-center min-h-[600px]">
      
      {/* Faixa Verde Diagonal com Letreiro (Marquee) */}
      {/* Subi a faixa para top-[10%] para não encavalar no texto */}
      <div className="absolute top-[10%] md:top-[12%] left-1/2 transform -translate-x-1/2 -rotate-6 w-[120vw] bg-[#77df40] py-4 shadow-xl z-0 overflow-hidden flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap text-[#000f44] font-bold text-xl uppercase tracking-wider"
        >
          {/* Repetindo o texto para criar o efeito infinito */}
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4">
              • Inscrições até 20/agosto • Inscrições até 20/agosto
            </span>
          ))}
        </motion.div>
      </div>

      {/* Conteúdo Central */}
      {/* Aumentei drasticamente a margem (mt-40) para dar bastante respiro */}
      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto mt-40 md:mt-48">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#000f44] leading-tight mb-10"
        >
          <span className="text-[#0064f5] block mb-4 text-2xl md:text-3xl font-medium">Java + inteligência artificial + Agibank =</span>
          sua carreira tech na era da inovação
        </motion.h2>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#77df40] text-[#000f44] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]"
        >
          Me inscrever
        </motion.button>

      </div>
    </section>
  )
}
