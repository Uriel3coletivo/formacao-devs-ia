'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Efeito Parallax reagindo ao mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Movimento invertido (afastando do mouse)
      const x = (window.innerWidth / 2 - e.clientX) / 25
      const y = (window.innerHeight / 2 - e.clientY) / 25
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#000f44] overflow-hidden pt-24 pb-12">
      
      {/* CAMADA 1 e 2: Gradiente Base e Imagem de Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0033b0] via-[#000f44] to-[#000f44] opacity-90 z-10" />
        {/* Aqui entra a sua imagem de background tech. Usando um placeholder por enquanto */}
        <img 
          src="https://placehold.co/1920x1080/000f44/0033b0?text=Imagem+de+Background+Tech" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* CAMADA 3: Códigos Flutuantes Animados */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden font-mono text-sm md:text-base">
        {/* Código 1 */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-[20%] left-[5%] text-[#0064f5]"
        >
          &lt;FormacaoIA /&gt;
        </motion.div>

        {/* Código 2 */}
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.5, 0.1] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[45%] text-[#77df40]"
        >
          if (learning) &#123; grow(); &#125;
        </motion.div>

        {/* Código 3 */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[10%] text-[#0064f5] text-xl"
        >
          import &#123; AI &#125; from 'agibank';
        </motion.div>

        {/* Código 4 */}
        <motion.div 
          animate={{ y: [0, 25, 0], opacity: [0.1, 0.4, 0.1] }} 
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[60%] right-[30%] text-white"
        >
          const future = new Developer();
        </motion.div>
      </div>

      {/* CAMADA 4 e 5: Conteúdo Principal e Imagem do Dev */}
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Textos - Esquerda */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-white max-w-xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
              Formação de Devs
              <span className="block mt-2 text-[#77df40]">
                nativos em IA
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 text-gray-300 font-light">
              Seja o agente de mudança da sua carreira
            </p>
            
            <button className="bg-[#77df40] text-[#000f44] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
              Fazer inscrição
            </button>

            {/* Subtexto estilo código */}
            <div className="mt-12 text-sm text-[#0064f5] font-mono opacity-80 space-y-1">
              <p>&lt;Data/Início&gt; = "Em breve"</p>
              <p>&lt;Modalidade&gt; = "Híbrido"</p>
              <p>&lt;Local&gt; = "Campinas - SP"</p>
            </div>
          </motion.div>

          {/* Imagem Direita (Com Parallax do Mouse) */}
          <div className="relative h-[600px] hidden lg:block pointer-events-none">
            {/* Círculo de brilho atrás do personagem */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0064f5] rounded-full blur-[100px] opacity-30 z-0" />
            
            <motion.div
              animate={{ x: mousePosition.x, y: mousePosition.y }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              className="absolute inset-0 flex justify-center items-end z-10"
            >
              {/* Placeholder da foto recortada do Dev */}
              <img
                src="https://placehold.co/500x700/transparent/ffffff?text=Foto+Dev+Recortada"
                alt="Desenvolvedor Agibank"
                className="object-contain h-full drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
