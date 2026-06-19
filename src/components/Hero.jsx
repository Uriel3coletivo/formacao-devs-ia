'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Efeito Parallax reagindo ao mouse
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
    <section className="relative min-h-screen flex items-center bg-[#000f44] overflow-hidden pt-24 pb-12">
      
      {/* CAMADA 1: Imagem de Background Real */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Hero-Banner-1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay sutil para garantir a leitura dos textos */}
        <div className="absolute inset-0 bg-[#000f44]/40" />
      </div>

      {/* CAMADA 2: Códigos Flutuantes Animados (Mantidos!) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden font-mono text-sm md:text-base">
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[20%] left-[5%] text-[#0064f5]">&lt;FormacaoIA /&gt;</motion.div>
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} className="absolute bottom-[30%] left-[45%] text-[#77df40]">if (learning) &#123; grow(); &#125;</motion.div>
        <motion.div animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }} className="absolute top-[30%] right-[10%] text-[#0064f5] text-xl">import &#123; AI &#125; from 'agibank';</motion.div>
        <motion.div animate={{ y: [0, 25, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }} className="absolute top-[60%] right-[30%] text-white">const future = new Developer();</motion.div>
      </div>

      {/* Elementos Decorativos do Figma < / > */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[25%] left-[5%] text-[#0064f5] text-5xl md:text-7xl font-light opacity-60 select-none">&lt;</motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-[20%] right-[45%] text-[#0064f5] text-5xl md:text-7xl font-light opacity-60 select-none">/&gt;</motion.div>

      {/* CAMADA 3: Conteúdo Principal */}
      <div className="container-custom relative z-10 w-full mt-10 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Esquerda - Título SVG, Botão e Subtexto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="flex flex-col items-start max-w-xl"
          >
            {/* Título e Subtítulo em SVG */}
            <img 
              src="/images/Logo-Formacao-Devs.svg" 
              alt="Formação de Devs nativos em IA - Seja o agente de mudança da sua carreira" 
              className="w-full max-w-[500px] mb-8"
            />
            
            <button className="bg-[#77df40] text-[#000f44] px-10 py-3.5 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
              Fazer inscrição
            </button>

            {/* Subtexto estilo código */}
            <div className="mt-10 text-sm md:text-base text-[#0064f5] font-mono opacity-90 space-y-1.5">
              <p>&lt;Data/Início&gt; = "Em breve"</p>
              <p>&lt;Modalidade&gt; = "Híbrido"</p>
              <p>&lt;Local&gt; = "Campinas - SP"</p>
            </div>
          </motion.div>

          {/* Direita - Imagem do Dev com Parallax */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-end pointer-events-none">
            <motion.div
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              className="relative w-full h-full flex justify-center items-end z-10"
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
