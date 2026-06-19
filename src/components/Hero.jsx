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
    <section className="relative min-h-screen flex items-center bg-[#000f44] overflow-hidden pt-32 pb-12">
      
      {/* CAMADA 1: Background Real */}
      <div className="absolute inset-0 z-0">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#000f44]/40" />
      </div>

      {/* CAMADA 2: Efeito Pixels (Atrás do Dev) */}
      <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-full z-10 pointer-events-none flex justify-end items-end opacity-80">
        <img src="/images/Pixels.png" alt="" className="object-contain max-h-full" />
      </div>

      {/* CAMADA 3: Códigos Flutuantes (ATRÁS do Dev) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden font-mono text-sm md:text-base">
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[20%] left-[5%] text-[#0064f5]">&lt;FormacaoIA /&gt;</motion.div>
        {/* Este fica perto da cabeça, por trás */}
        <motion.div animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }} className="absolute top-[30%] right-[10%] text-[#0064f5] text-xl">import &#123; AI &#125; from 'agibank';</motion.div>
      </div>

      {/* CAMADA 4: Conteúdo Principal */}
      <div className="container-custom relative z-20 w-full mt-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Esquerda - Título SVG, Botão e Subtexto (Alinhados perfeitamente à esquerda) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="flex flex-col items-start text-left w-full"
          >
            {/* Título SVG (Tamanho Aumentado e alinhado à esquerda) */}
            <img 
              src="/images/Logo-Formacao-Devs.svg" 
              alt="Formação de Devs nativos em IA" 
              className="w-full max-w-[750px] xl:max-w-[850px] mb-10 object-left object-contain"
            />
            
            <button className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
              Fazer inscrição
            </button>

            {/* Código Novo Formatado (Com Parallax Suave) */}
            <motion.div 
              animate={{ x: mousePosition.x * 0.3, y: mousePosition.y * 0.3 }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              className="mt-12 text-sm md:text-base text-[#0064f5] font-mono opacity-90 leading-relaxed"
            >
              <p>&lt;DevAgibank&gt; &lt;Carreira</p>
              <p className="pl-4">status="growing" /&gt;  &lt;Futuro</p>
              <p className="pl-4">bright=&#123;true&#125; /&gt;  &lt;/DevAgibank&gt; //</p>
              <p className="mt-2 text-[#77df40]">Props: você</p>
            </motion.div>
          </motion.div>

          {/* Direita - Imagem do Dev (Tamanho Aumentado) */}
          <div className="relative h-[600px] md:h-[700px] lg:h-[850px] flex justify-center items-end pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0064f5] rounded-full blur-[120px] opacity-30 z-0" />
            
            <motion.div
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              className="relative w-full h-full flex justify-center items-end z-10 scale-125 origin-bottom"
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

      {/* CAMADA 5: Códigos Flutuantes (NA FRENTE do Dev) */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden font-mono text-sm md:text-base">
        {/* Este fica perto do laptop, na frente */}
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[45%] lg:left-[55%] text-[#77df40]">if (learning) &#123; grow(); &#125;</motion.div>
        {/* Este fica na direita, na frente do braço */}
        <motion.div animate={{ y: [0, 25, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }} className="absolute top-[65%] right-[20%] text-white">const future = new Developer();</motion.div>
      </div>

    </section>
  )
}
