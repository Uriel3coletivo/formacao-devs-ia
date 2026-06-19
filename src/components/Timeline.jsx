'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Timeline() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = [
    { num: 1, text: "Processo de seleção" },
    { num: 2, text: "4 meses de capacitação em Java e IA" },
    { num: 3, text: "2 meses de projetos supervisionados por mentores" },
    { num: 4, text: "Hackathon de seleção para a 2ª etapa + 3 meses de atuação dentro das squads e mentoria com profissionais especializados" }
  ]

  // Componente das setinhas
  const Arrows = () => (
    <div className="flex flex-col items-center justify-center gap-1 my-2">
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L12 10L22 2" stroke="#77df40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L12 10L22 2" stroke="#77df40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L12 10L22 2" stroke="#77df40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )

  return (
    <section id="etapas" className="bg-[#0033b0] py-32 relative overflow-hidden" ref={containerRef}>
      
      {/* Efeito Pixels no Fundo (95% de opacidade) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-95">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-20 text-left lg:ml-[50%]"
        >
          Etapas do Programa
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO ESQUERDO: Foto do Rapaz + Código Overlay (Sem caixa) */}
          <div className="relative flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl w-full max-w-[500px]"
            >
              <img src="/images/Rapaz-Timeline.png" alt="Estudante Agibank" className="w-full h-full object-cover aspect-[4/5]" />
              
              {/* Overlay sutil para garantir leitura do código */}
              <div className="absolute top-0 right-0 w-full h-[40%] bg-gradient-to-b from-[#000f44]/80 to-transparent" />
            </motion.div>

            {/* Código Flutuante sobrepondo a foto (Canto superior direito) - Sem caixa, só texto */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-6 right-6 lg:-right-10 text-white/90 font-mono text-[10px] sm:text-xs md:text-sm whitespace-pre select-none pointer-events-none z-20 drop-shadow-md"
            >
{`model = Agibank.NeuralNetwork()

model.train(
    dataset="seu_talento",
    focus="Artificial_Intelligence",
    duration="9_months"
)
# Accuracy: 100%
# Status: Ready to build the future`}
            </motion.div>
          </div>

          {/* LADO DIREITO: Timeline Animada */}
          <div className="relative pl-6 md:pl-12 py-4">
            
            {/* Linha de Fundo (Apagada) */}
            <div className="absolute top-0 bottom-0 left-[43px] md:left-[67px] w-1.5 bg-[#0064f5] rounded-full" />
            
            {/* Linha Animada (Acende com o Scroll) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-[43px] md:left-[67px] w-1.5 bg-[#77df40] rounded-full origin-top z-10"
            />

            <div className="flex flex-col relative z-20">
              {steps.map((step, index) => (
                <div key={index}>
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-6 md:gap-10 group"
                  >
                    {/* Bolinha do Número */}
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border-[3px] border-[#77df40] bg-transparent flex items-center justify-center text-[#77df40] text-lg md:text-xl font-bold transition-colors duration-300 group-hover:bg-[#77df40] group-hover:text-[#000f44]">
                      {step.num}
                    </div>
                    
                    {/* Texto do Step */}
                    <p className="text-white text-lg md:text-xl font-medium leading-snug">
                      {step.text}
                    </p>
                  </motion.div>

                  {/* Renderiza as setinhas apenas entre os itens (não no último) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="ml-[10px] md:ml-[18px]"
                    >
                      <Arrows />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
