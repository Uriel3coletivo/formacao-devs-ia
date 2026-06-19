'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Imagine() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Efeito Parallax reagindo ao mouse para as imagens menores
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
    // Sem overflow-hidden para permitir que as imagens vazem
    <section className="bg-white py-24 md:py-32 relative z-30">
      
      {/* Efeito Pixels no fundo branco (40% de opacidade) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LADO ESQUERDO: Textos e Botão */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5 max-w-xl relative z-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#000f44] leading-[1.1] mb-6 tracking-tight">
              Imagine começar sua carreira tech em uma empresa listada na maior bolsa de valores do mundo.
            </h2>
            
            <p className="text-2xl md:text-3xl font-bold text-[#0064f5] mb-10">
              Aqui, isso é realidade!
            </p>
            
            <button className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
              Quero fazer parte!
            </button>
          </motion.div>

          {/* LADO DIREITO: Composição de Imagens idêntica ao Figma */}
          <div className="col-span-12 lg:col-span-7 relative h-[600px] md:h-[750px] mt-16 lg:mt-0">
            
            {/* IMAGEM CENTRAL (Atrás de todas, retangular vertical) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[85%] z-10 rounded-[32px] shadow-2xl">
              <img src="/images/Imagine-Central.png" alt="Equipe Agibank" className="w-full h-full object-cover rounded-[32px]" />
            </div>

            {/* IMAGEM PEQUENA 1 (Topo - Logo AGBK) - Vaza para CIMA */}
            <motion.div 
              animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute -top-12 md:-top-16 left-[20%] md:left-[25%] w-[25%] aspect-square z-20 rounded-[24px] shadow-xl"
            >
              <img src="/images/Imagine-Pequena-1.png" alt="NYSE" className="w-full h-full object-cover rounded-[24px]" />
            </motion.div>

            {/* IMAGEM PEQUENA 2 (Base Esquerda - Palestrante) - Vaza para BAIXO */}
            <motion.div 
              animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute -bottom-10 md:-bottom-12 left-[5%] md:left-[10%] w-[32%] aspect-[4/5] z-20 rounded-[24px] shadow-xl"
            >
              <img src="/images/Imagine-Pequena-2.png" alt="Palestrante" className="w-full h-full object-cover rounded-[24px]" />
            </motion.div>

            {/* IMAGEM PEQUENA 3 (Direita - Jaqueta) - Acima do centro */}
            <motion.div 
              animate={{ x: mousePosition.x * 1.2, y: mousePosition.y * 1.2 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute top-[30%] md:top-[35%] -right-[5%] md:-right-[2%] w-[35%] aspect-square z-20 rounded-[24px] shadow-xl"
            >
              <img src="/images/Imagine-Pequena-3.png" alt="Jaqueta AGBK" className="w-full h-full object-cover rounded-[24px]" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
