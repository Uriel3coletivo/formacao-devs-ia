'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Beneficios() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30
      const y = (window.innerHeight / 2 - e.clientY) / 30
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  const col1Images = ["Img-B-1.png", "Img-B-2.png", "Img-B-3.png", "Img-B-4.png"]
  const col2Images = ["Img-B-5.png", "Img-B-6.png", "Img-B-7.png", "Img-B-8.png"]

  return (
    // ATENÇÃO: overflow-x-hidden garante zero scroll horizontal em qualquer tela
    <section id="beneficios" className="bg-[#000f44] pt-20 lg:pt-24 pb-20 lg:pb-24 relative z-20 overflow-hidden w-full">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#000f44]/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO ESQUERDO: Textos adaptados para Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-6 relative z-20"
          >
            {/* Título menor no mobile (text-3xl) e maior no desktop (lg:text-5xl) */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0064f5] mb-8 lg:mb-10 tracking-tight">
              Pra impulsionar sua carreira:
            </h2>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              // Textos menores no mobile (text-base) e maiores no desktop (lg:text-xl)
              className="space-y-4 lg:space-y-6 text-base md:text-lg lg:text-xl text-white font-light"
            >
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                <span>Bolsa-auxílio de R$ 2.400,00 nos primeiros 6 meses</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                <span>Jornada de 40 horas semanais presencial</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                <span>Professores especialistas e mentoria contínua com profissionais de referência do Agibank</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                <span>Certificação em Back-end JAVA após a 1ª etapa</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                <span>Possibilidade de contratação CLT depois de 6 meses</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* LADO DIREITO: Carrossel Infinito Duplo */}
          <div 
            className="col-span-12 lg:col-span-6 relative h-[450px] md:h-[600px] overflow-hidden flex justify-center w-full"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
          >
            {/* Grid restrito a 280px no mobile para nunca vazar a tela (iPhone menor tem 320px) */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 md:gap-6 h-full w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[450px] mx-auto">
              
              <div className="flex flex-col gap-3 lg:gap-4 md:gap-8 animate-scroll-up">
                {/* Código limpo sem comentários no JSX para evitar erro de build */}
                {[...col1Images, ...col1Images].map((img, index) => (
                  <div key={index} className="w-full aspect-square rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-xl bg-[#0033b0]">
                    <img src={`/images/${img}`} alt="Rotina Agibank" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://placehold.co/200x200/0033b0/ffffff?text=Foto+${(index % 4) + 1}` }} />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 lg:gap-4 md:gap-8 animate-scroll-down">
                {[...col2Images, ...col2Images].map((img, index) => (
                  <div key={index} className="w-full aspect-square rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-xl bg-[#0064f5]">
                    <img src={`/images/${img}`} alt="Rotina Agibank" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://placehold.co/200x200/0064f5/ffffff?text=Foto+${(index % 4) + 5}` }} />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CÓDIGO FLUTUANTE */}
      <motion.div 
        animate={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-[80%] left-[5%] md:left-[10%] z-40 max-w-[90vw]"
      >
        <div className="font-mono text-[10px] md:text-sm whitespace-pre select-none pointer-events-none drop-shadow-2xl">
          <span className="text-[#0033b0] opacity-90 font-bold">
{`const AgiDev = ({ passion, logic }) => {
  const [career, setCareer] = useState("Loading...");

  useEffect(() => {
    if (passion && logic) {
      setCareer("Unstoppable");
    }
  }, []);

  return <Future aiPowered={true} status={career} />;
};`}
          </span>
          <br/>
          <span className="text-[#0033b0] opacity-100 font-bold">
            // Renderizando sua melhor versão
          </span>
        </div>
      </motion.div>

    </section>
  )
}
