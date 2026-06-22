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
    <section className="relative flex items-center bg-[#000f44] overflow-hidden pt-32 pb-12 min-h-screen">
      
      <div className="absolute inset-0 z-0">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#000f44]/40" />
      </div>

      <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-full z-10 pointer-events-none flex justify-end items-end opacity-80">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="object-contain max-h-full" />
      </div>

      <div className="container-custom relative z-20 w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* LADO ESQUERDO: FORÇADO À ESQUERDA EM TODAS AS TELAS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="col-span-1 lg:col-span-5 flex flex-col items-start text-left w-full z-30"
          >
            {/* LOGO: Forçado na esquerda (object-left) */}
            <img 
              src="/images/Logo-Formacao-Devs.svg" 
              alt="Formação de Devs nativos em IA" 
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[850px] mb-8 object-contain object-left"
              style={{ objectPosition: 'left center' }}
            />
            
            {/* WRAPPER DO BOTÃO E CÓDIGO: Com recuo para alinhar na letra F */}
            <div className="w-full flex flex-col items-start pl-[10%] sm:pl-[40px] md:pl-[60px] lg:pl-[75px] xl:pl-[90px]">
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

          {/* LADO DIREITO: IMAGEM DO DEV */}
          <div className="col-span-1 lg:col-span-7 relative h-[450px] md:h-[600px] lg:h-[800px] xl:h-[950px] flex justify-center items-end pointer-events-none mt-10 lg:mt-0 z-20">
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
    </section>
  )
}
