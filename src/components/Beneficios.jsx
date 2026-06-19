'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Beneficios() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Efeito Parallax para o código flutuante
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30
      const y = (window.innerHeight / 2 - e.clientY) / 30
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Variantes para animação em cascata (Stagger) da lista
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

  // Array de imagens temporárias (depois você troca pelos nomes reais)
  const col1Images = ["Img-B-1.png", "Img-B-2.png", "Img-B-3.png", "Img-B-4.png"]
  const col2Images = ["Img-B-5.png", "Img-B-6.png", "Img-B-7.png", "Img-B-8.png"]

  return (
    // ATENÇÃO: Sem overflow-hidden aqui para permitir que o código vaze para baixo
    <section id="beneficios" className="bg-[#000f44] pt-32 pb-32 relative z-20">
      
      {/* Background Hero reaproveitado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#000f44]/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO ESQUERDO: Textos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-6 relative z-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0064f5] mb-10 tracking-tight">
              Pra impulsionar sua carreira:
            </h2>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-lg md:text-xl text-white font-light"
            >
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                Bolsa-auxílio de R$ 2.400,00 nos primeiros 6 meses
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                Jornada de 40 horas semanais presencial
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                Professores especialistas e mentoria contínua com profissionais de referência do Agibank
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                Certificação em Back-end JAVA após a 1ª etapa
              </motion.li>
              <motion.li variants={itemVariants} className="flex gap-3">
                <span className="text-[#0064f5] font-bold">•</span>
                Possibilidade de contratação CLT depois de 6 meses
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* LADO DIREITO: Carrossel Infinito Duplo */}
          {/* A máscara cria um fade (degradê invisível) no topo e na base para as fotos sumirem suavemente */}
          <div 
            className="col-span-12 lg:col-span-6 relative h-[500px] md:h-[700px] overflow-hidden"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full transform rotate-2 scale-105">
              
              {/* Coluna 1 (Sobe) */}
              <div className="flex flex-col gap-4 md:gap-6 animate-scroll-up">
                {/* Duplicamos o array para criar o loop infinito invisível */}
                {[...col1Images, ...col1Images].map((img, index) => (
                  <div key={index} className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl bg-[#0033b0]">
                    {/* Placeholder. Depois você sobe as fotos reais e troca o src */}
                    <img src={`https://placehold.co/400x500/0033b0/ffffff?text=Foto+${(index % 4) + 1}`} alt="Rotina Agibank" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Coluna 2 (Desce) */}
              <div className="flex flex-col gap-4 md:gap-6 animate-scroll-down">
                {[...col2Images, ...col2Images].map((img, index) => (
                  <div key={index} className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl bg-[#0064f5]">
                    <img src={`https://placehold.co/400x500/0064f5/ffffff?text=Foto+${(index % 4) + 5}`} alt="Rotina Agibank" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CÓDIGO VAZANDO PARA O BLOCO DE BAIXO */}
      {/* Absolute, posicionado para baixo e com z-index alto para ficar sobre a próxima seção */}
      <motion.div 
        animate={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute -bottom-16 md:-bottom-24 left-[5%] md:left-[10%] z-40"
      >
        <div className="font-mono text-xs md:text-sm whitespace-pre select-none pointer-events-none drop-shadow-2xl">
          <span className="text-[#0064f5] opacity-60">
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
          <span className="text-white opacity-90 font-bold">
            // Renderizando sua melhor versão
          </span>
        </div>
      </motion.div>

    </section>
  )
}
