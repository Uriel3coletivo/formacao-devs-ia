'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25
      const y = (window.innerHeight / 2 - e.clientY) / 25
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative flex items-center bg-[#000f44] overflow-hidden pt-24 pb-0 lg:min-h-screen lg:pt-32 lg:pb-12">
      
      <div className="absolute inset-0 z-0">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#000f44]/40" />
      </div>

      <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-full z-10 pointer-events-none flex justify-end items-end opacity-80">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="object-contain max-h-full" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden font-mono text-xs md:text-base">
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="hidden lg:block absolute top-[15%] lg:top-[20%] left-[5%] text-[#0064f5]">&lt;FormacaoIA /&gt;</motion.div>
        <motion.div animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }} className="hidden lg:block absolute top-[25%] lg:top-[30%] right-[5%] lg:right-[10%] text-[#0064f5] text-lg lg:text-xl">import &#123; AI &#125; from 'agibank';</motion.div>
      </div>

      <div className="container-custom relative z-20 w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="col-span-1 lg:col-span-5 flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full z-30"
          >
            {/* A MÁGICA DO CACHE BUSTING: Adicionei ?v=2 no final do .svg */}
            <img 
              src="/images/Logo-Formacao-Devs.svg?v=2" 
              alt="Formação de Devs" 
              className="w-[90%] lg:w-full max-w-[400px] lg:max-w-[700px] xl:max-w-[850px] mb-8 object-contain object-center lg:object-left lg:-ml-8 xl:-ml-12"
            />
            
            <div className="pl-0 md:pl-8 lg:pl-10 xl:pl-12 w-full flex flex-col items-center lg:items-start">
              <button className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
                Fazer inscrição
              </button>

              <motion.div 
                animate={{ x: mousePosition.x * 0.3, y: mousePosition.y * 0.3 }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="mt-10 text-xs md:text-sm lg:text-base text-[#0064f5] font-mono opacity-90 leading-relaxed text-left"
              >
                <p>&lt;DevAgibank&gt; &lt;Carreira</p>
                <p className="pl-4">status="growing" /&gt;  &lt;Futuro</p>
                <p className="pl-4">bright=&#123;true&#125; /&gt;  &lt;/DevAgibank&gt; //</p>
                <p className="mt-2 text-[#77df40]">Props: você</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="col-span-1 lg:col-span-7 relative h-[380px] md:h-[600px] lg:h-[800px] xl:h-[950px] flex justify-center items-end pointer-events-none -mt-10 lg:mt-0 z-20">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#0064f5] rounded-full blur-[80px] lg:blur-[120px] opacity-30 z-0" />
            
            <motion.div
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              className="relative w-full h-full flex justify-center items-end z-10 scale-[1.1] lg:scale-[1.4] xl:scale-[1.8] origin-bottom lg:-translate-x-32"
            >
              <img
                src="/images/Dev-01.png"
                alt="Desenvolvedor Agibank"
                className="object-contain max-h-full drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden font-mono text-xs md:text-base">
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} className="absolute bottom-[30%] lg:bottom-[20%] left-[5%] lg:left-[45%] xl:left-[55%] text-[#77df40]">if (learning) &#123; grow(); &#125;</motion.div>
        <motion.div animate={{ y: [0, 25, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }} className="absolute top-[50%] lg:top-[65%] right-[5%] lg:right-[15%] text-white">const future = new Developer();</motion.div>
      </div>

    </section>
  )
}
