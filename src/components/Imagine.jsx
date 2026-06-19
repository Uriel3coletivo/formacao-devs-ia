'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Imagine() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40
      const y = (window.innerHeight / 2 - e.clientY) / 40
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="bg-white pt-16 pb-16 relative z-30">
      
      {/* Efeito Pixels no fundo branco (95% de opacidade) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-95">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center my-10">
          
          {/* LADO ESQUERDO: Textos e Botão */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5 max-w-xl relative z-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0033b0] leading-[1.1] mb-6 tracking-tight">
              Imagine começar sua carreira tech em uma empresa listada na maior bolsa de valores do mundo.
            </h2>
            
            <p className="text-2xl md:text-3xl font-bold text-[#0064f5] mb-10">
              Aqui, isso é realidade!
            </p>
            
            <button className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
              Vamos crescer juntos?
            </button>
          </motion.div>

          {/* LADO DIREITO: Composição de Imagens */}
          <div className="col-span-12 lg:col-span-7 relative flex justify-center items-center mt-20 lg:mt-0">
            
            {/* ÂNCORA: IMAGEM CENTRAL (QUADRADA - aspect-square) */}
            <div className="relative w-[75%] max-w-[500px] aspect-square z-10">
              
              {/* Foto Central */}
              <img src="/images/Imagine-Central.png" alt="Equipe Agibank" className="w-full h-full object-cover rounded-[32px] shadow-2xl" />

              {/* IMAGEM PEQUENA 1 (Topo - Logo AGBK) */}
              <motion.div 
                whileHover={{ scale: 1.08, zIndex: 40 }}
                animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="absolute -top-16 -left-8 w-[35%] aspect-square z-20 rounded-[24px] shadow-xl cursor-pointer"
              >
                <img src="/images/Imagine-Pequena-1.png" alt="NYSE" className="w-full h-full object-cover rounded-[24px]" />
              </motion.div>

              {/* IMAGEM PEQUENA 2 (Base Esquerda - Palestrante) */}
              <motion.div 
                whileHover={{ scale: 1.08, zIndex: 40 }}
                animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="absolute -bottom-16 -left-4 w-[38%] aspect-square z-20 rounded-[24px] shadow-xl cursor-pointer"
              >
                <img src="/images/Imagine-Pequena-2.png" alt="Palestrante" className="w-full h-full object-cover rounded-[24px]" />
              </motion.div>

              {/* IMAGEM PEQUENA 3 (Direita - Jaqueta) */}
              <motion.div 
                whileHover={{ scale: 1.08, zIndex: 40 }}
                animate={{ x: mousePosition.x * 1.2, y: mousePosition.y * 1.2 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="absolute top-[35%] -right-16 w-[38%] aspect-square z-20 rounded-[24px] shadow-xl cursor-pointer"
              >
                <img src="/images/Imagine-Pequena-3.png" alt="Jaqueta AGBK" className="w-full h-full object-cover rounded-[24px]" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
