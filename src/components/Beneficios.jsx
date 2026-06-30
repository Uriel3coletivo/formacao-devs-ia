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
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  const col1Images = ["Img-B-1.png", "Img-B-2.png", "Img-B-3.png", "Img-B-4.png"]
  const col2Images = ["Img-B-5.png", "Img-B-6.png", "Img-B-7.png", "Img-B-8.png"]

  return (
    <section id="beneficios" className="bg-[#000f44] pt-24 pb-24 relative z-20 overflow-hidden w-full">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#000f44]/80" />
      </div>

      {/* ========================================================= */}
      {/* 🖥️ VERSÃO DESKTOP (BLINDADA E INTOCADA) */}
      {/* ========================================================= */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center container-custom relative z-10">
        
        {/* Textos Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-6 relative z-20"
        >
          <h2 className="text-5xl font-bold text-[#0064f5] mb-10 tracking-tight">
            Pra impulsionar sua carreira:
          </h2>
          
          <motion.ul variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6 text-xl text-white font-light">
            <motion.li variants={itemVariants} className="flex gap-3"><span className="text-[#0064f5] font-bold">•</span> Bolsa-auxílio de R$ 2.400,00 nos primeiros 6 meses</motion.li>
            <motion.li variants={itemVariants} className="flex gap-3"><span className="text-[#0064f5] font-bold">•</span> Jornada de 40 horas semanais presencial</motion.li>
            <motion.li variants={itemVariants} className="flex gap-3"><span className="text-[#0064f5] font-bold">•</span> Professores especialistas e mentoria contínua com profissionais de referência do Agibank</motion.li>
            <motion.li variants={itemVariants} className="flex gap-3"><span className="text-[#0064f5] font-bold">•</span> Certificação em Back-end JAVA e IA após a 1ª etapa</motion.li>
            <motion.li variants={itemVariants} className="flex gap-3"><span className="text-[#0064f5] font-bold">•</span> Possibilidade de contratação CLT depois de 6 meses</motion.li>
          </motion.ul>
        </motion.div>

        {/* Carrossel Desktop */}
        <div 
          className="col-span-6 relative h-[600px] overflow-hidden flex justify-center"
          style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
        >
          <div className="grid grid-cols-2 gap-6 h-full w-full max-w-[450px]">
            <div className="flex flex-col gap-8 animate-scroll-up">
              {[...col1Images, ...col1Images].map((img, index) => (
                <div key={index} className="w-full max-w-[200px] mx-auto aspect-square rounded-[24px] overflow-hidden shadow-xl bg-[#0033b0]">
                  <img src={`/images/${img}`} alt="Rotina Agibank" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://placehold.co/200x200/0033b0/ffffff?text=Foto+${(index % 4) + 1}` }} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 animate-scroll-down">
              {[...col2Images, ...col2Images].map((img, index) => (
                <div key={index} className="w-full max-w-[200px] mx-auto aspect-square rounded-[24px] overflow-hidden shadow-xl bg-[#0064f5]">
                  <img src={`/images/${img}`} alt="Rotina Agibank" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://placehold.co/200x200/0064f5/ffffff?text=Foto+${(index % 4) + 5}` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Código Flutuante - DESKTOP */}
      <motion.div animate={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }} transition={{ type: "spring", stiffness: 50, damping: 20 }} className="hidden lg:block absolute top-[80%] left-[10%] z-40">
        <div className="font-mono text-sm whitespace-pre select-none pointer-events-none drop-shadow-2xl">
          <span className="text-[#0033b0] opacity-90 font-bold">{`const AgiDev = ({ passion, logic }) => {\n  const [career, setCareer] = useState("Loading...");\n\n  useEffect(() => {\n    if (passion && logic) {\n      setCareer("Unstoppable");\n    }\n  }, []);\n\n  return <Future aiPowered={true} status={career} />;\n};`}</span><br/>
          <span className="text-[#0033b0] opacity-100 font-bold">// Renderizando sua melhor versão</span>
        </div>
      </motion.div>


      {/* ========================================================= */}
      {/* 📱 VERSÃO MOBILE (REFEITA DO ZERO PARA CENTRALIZAR E NÃO CORTAR) */}
      {/* ========================================================= */}
      <div className="flex flex-col lg:hidden w-full px-6 relative z-10 gap-12">
        
        {/* Textos Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0064f5] mb-8 tracking-tight">
            Pra impulsionar sua carreira:
          </h2>
          
          <ul className="space-y-5 text-base md:text-lg text-white font-light">
            <li className="flex items-start gap-3">
              <span className="text-[#0064f5] font-bold mt-0.5 shrink-0">•</span>
              <span className="flex-1 pr-2">Bolsa-auxílio de R$ 2.400,00 nos primeiros 6 meses</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0064f5] font-bold mt-0.5 shrink-0">•</span>
              <span className="flex-1 pr-2">Jornada de 40 horas semanais presencial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0064f5] font-bold mt-0.5 shrink-0">•</span>
              <span className="flex-1 pr-2">Professores especialistas e mentoria contínua com profissionais de referência do Agibank</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0064f5] font-bold mt-0.5 shrink-0">•</span>
              <span className="flex-1 pr-2">Certificação em Back-end JAVA após a 1ª etapa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0064f5] font-bold mt-0.5 shrink-0">•</span>
              <span className="flex-1 pr-2">Possibilidade de contratação CLT depois de 6 meses</span>
            </li>
          </ul>
        </motion.div>

        {/* Carrossel Mobile (Forçado ao Centro) */}
        <div className="w-full flex justify-center items-center">
          <div 
            className="relative h-[400px] md:h-[500px] overflow-hidden flex justify-center w-full"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
          >
            {/* Largura máxima cravada em 260px para caber com folga em qualquer celular */}
            <div className="grid grid-cols-2 gap-3 h-full w-[260px] md:w-[320px]">
              
              <div className="flex flex-col gap-3 animate-scroll-up">
                {[...col1Images, ...col1Images].map((img, index) => (
                  <div key={index} className="w-full aspect-square rounded-[16px] overflow-hidden shadow-xl bg-[#0033b0]">
                    <img src={`/images/${img}`} alt="Rotina Agibank" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://placehold.co/200x200/0033b0/ffffff?text=Foto+${(index % 4) + 1}` }} />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 animate-scroll-down">
                {[...col2Images, ...col2Images].map((img, index) => (
                  <div key={index} className="w-full aspect-square rounded-[16px] overflow-hidden shadow-xl bg-[#0064f5]">
                    <img src={`/images/${img}`} alt="Rotina Agibank" className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://placehold.co/200x200/0064f5/ffffff?text=Foto+${(index % 4) + 5}` }} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Código Flutuante - MOBILE (Preso no canto inferior esquerdo, longe do carrossel) */}
      <div className="lg:hidden absolute bottom-4 left-4 z-40 max-w-[80vw]">
        <div className="font-mono text-[9px] sm:text-[10px] whitespace-pre select-none pointer-events-none drop-shadow-2xl">
          <span className="text-[#0033b0] opacity-90 font-bold">{`const AgiDev = ({ passion, logic }) => {\n  const [career, setCareer] = useState("Loading...");\n\n  useEffect(() => {\n    if (passion && logic) {\n      setCareer("Unstoppable");\n    }\n  }, []);\n\n  return <Future aiPowered={true} status={career} />;\n};`}</span><br/>
          <span className="text-[#0033b0] opacity-100 font-bold">// Renderizando sua melhor versão</span>
        </div>
      </div>

    </section>
  )
}
