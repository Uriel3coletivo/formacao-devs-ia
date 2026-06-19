'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Timeline() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Anima a altura da linha verde de 0 a 100%
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = [
    { num: 1, text: "Processo de seleção" },
    { num: 2, text: "4 meses de capacitação em Java e IA" },
    { num: 3, text: "2 meses de projetos supervisionados por mentores" },
    { num: 4, text: "Hackathon de seleção para a 2ª etapa + 3 meses de atuação dentro das squads e mentoria com profissionais especializados" }
  ]

  // Componente das setinhas (Tamanho e alinhamento corrigidos)
  const Arrows = () => (
    <div className="flex flex-col items-center justify-center gap-1.5 py-4 w-12 md:w-16">
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
      
      {/* Pixels 95% */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-95">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LADO ESQUERDO: Foto (AUMENTADA) + Código Overlay */}
          <div className="relative w-full flex justify-start lg:justify-end mt-20 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // Aumentei o max-w para 700px e forcei a altura para bater com a timeline
              className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl w-full max-w-[700px] h-[600px] lg:h-[800px]"
            >
              <img src="/images/Rapaz-Timeline.png" alt="Estudante Agibank" className="w-full h-full object-cover" />
              <div className="absolute top-0 right-0 w-full h-[30%] bg-gradient-to-b from-[#000f44]/60 to-transparent" />
            </motion.div>

            {/* Código Flutuante (Movido para cima e para a direita, fora do rosto) */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-4 right-4 lg:-right-4 text-white/90 font-mono text-[10px] sm:text-xs md:text-sm whitespace-pre select-none pointer-events-none z-20 drop-shadow-lg"
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

          {/* LADO DIREITO: Timeline e Título Alinhados */}
          <div className="relative py-4 flex flex-col">
            
            {/* Título perfeitamente alinhado com o eixo da Timeline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-16 text-left"
            >
              Etapas do Programa
            </motion.h2>

            <div className="relative">
              {/* Eixo Vertical Central (Linha de fundo com gradiente nas pontas) */}
              <div className="absolute top-0 bottom-0 left-[22px] md:left-[30px] w-1 bg-gradient-to-b from-transparent via-[#0064f5] to-transparent opacity-40 rounded-full z-0" />
              
              {/* Linha Animada do Scroll */}
              <motion.div 
                style={{ height: lineHeight }}
                className="absolute top-0 left-[22px] md:left-[30px] w-1 bg-[#77df40] rounded-full origin-top z-10 shadow-[0_0_10px_rgba(119,223,64,0.8)]"
              />

              <div className="flex flex-col relative z-20">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col">
                    
                    <div className="flex items-center gap-6 md:gap-10">
                      
                      {/* Bolinha Premium */}
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center"
                      >
                        <div className="absolute inset-0 rounded-full border-[3px] border-[#77df40] shadow-[0_0_15px_rgba(119,223,64,0.3)]"></div>
                        <div className="absolute inset-[6px] rounded-full bg-[#77df40]"></div>
                        <span className="relative z-10 text-[#000f44] text-xl md:text-2xl font-black">
                          {step.num}
                        </span>
                      </motion.div>
                      
                      {/* Texto */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1"
                      >
                        <p className="text-white text-lg md:text-xl font-medium leading-snug">
                          {step.text}
                        </p>
                      </motion.div>
                    </div>

                    {/* Setas Alinhadas */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        // A Margem aqui alinha o bloco de setas com o centro do círculo
                        className="ml-[0px] md:ml-[0px]"
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
      </div>
    </section>
  )
}
