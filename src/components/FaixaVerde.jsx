'use client'
import { motion } from 'framer-motion'

export default function FaixaVerde() {
  return (
    // Removi o "items-center" global. Agora o alinhamento vertical é manual.
    <section className="bg-white relative z-10 overflow-hidden flex flex-col min-h-[400px] lg:min-h-[600px] lg:justify-center lg:items-center">
      
      {/* Faixa Verde Diagonal (Compartilhada) */}
      <div className="absolute top-[5%] lg:top-[12%] left-1/2 transform -translate-x-1/2 -rotate-6 w-[120vw] bg-[#77df40] py-4 shadow-xl z-0 overflow-hidden flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap text-[#000f44] font-bold text-xl uppercase tracking-wider"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4">
              • Inscrições até 20/agosto • Inscrições até 20/agosto
            </span>
          ))}
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* 🖥️ VERSÃO DESKTOP (BLINDADA - EXATAMENTE COMO ESTAVA) */}
      {/* ========================================================= */}
      <div className="hidden lg:block container-custom relative z-10 text-center max-w-4xl mx-auto mt-48">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[56px] font-bold text-[#000f44] leading-tight mb-10"
        >
          <span className="text-[#0064f5] block mb-4 text-3xl font-medium">Java + inteligência artificial + Agibank =</span>
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

      {/* ========================================================= */}
      {/* 📱 VERSÃO MOBILE (ESPAÇAMENTO FORÇADO DE CIMA PARA BAIXO) */}
      {/* ========================================================= */}
      <div className="lg:hidden container-custom relative z-10 text-center w-full pt-32 pb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#000f44] leading-tight mb-10 mt-12"
        >
          <span className="text-[#0064f5] block mb-4 text-xl md:text-2xl font-medium">Java + inteligência artificial + Agibank =</span>
          sua carreira tech na era da inovação
        </motion.h2>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]"
        >
          Me inscrever
        </motion.button>
      </div>

    </section>
  )
}
