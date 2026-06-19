'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Timeline() {
  // Referência para calcular o scroll dentro desta seção
  const containerRef = useRef(null)
  
  // Hook do Framer Motion que rastreia o scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Transforma o scroll numa porcentagem de altura para "pintar" a linha
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const steps = [
    { num: 1, text: "Processo de seleção" },
    { num: 2, text: "4 Meses de capacitação em Java e IA" },
    { num: 3, text: "2 Meses de projetos supervisionados por mentores" },
    { num: 4, text: "Hackathon de ideação de soluções dentro das squads e mentoria com profissionais especialistas" }
  ]

  return (
    // Fundo Azul Médio
    <section id="etapas" className="bg-[#0033b0] py-32 relative overflow-hidden" ref={containerRef}>
      
      {/* Efeito Pixels no Fundo (Opcional, mas mantém a consistência) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-20 text-center lg:text-left lg:ml-[50%]"
        >
          Etapas do Programa
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO ESQUERDO: Foto do Rapaz + Código Overlay */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <img src="/images/Rapaz-Timeline.png" alt="Estudante Agibank" className="w-full h-auto object-cover" />
            </motion.div>

            {/* Código Flutuante sobrepondo a foto (Canto superior direito) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 lg:-right-20 bg-[#000f44]/80 backdrop-blur-md p-6 rounded-2xl border border-[#0064f5]/30 text-white font-mono text-xs md:text-sm whitespace-pre select-none pointer-events-none z-20 shadow-2xl"
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

          {/* LADO DIREITO: Timeline Animada pelo Scroll */}
          <div className="relative pl-4 md:pl-10 py-10">
            
            {/* Linha de Fundo (Apagada) */}
            <div className="absolute top-0 bottom-0 left-[27px] md:left-[51px] w-1 bg-[#0064f5] opacity-30 rounded-full" />
            
            {/* Linha Animada (Acende com o Scroll) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-[27px] md:left-[51px] w-1 bg-[#77df40] rounded-full origin-top"
            />

            <div className="flex flex-col gap-16 relative z-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  // Cada step aparece quando entra na tela
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-8 group"
                >
                  {/* Bolinha do Número */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full border-4 border-[#77df40] bg-[#0033b0] flex items-center justify-center text-[#77df40] text-xl md:text-2xl font-bold shadow-[0_0_15px_rgba(119,223,64,0.4)] transition-colors duration-300 group-hover:bg-[#77df40] group-hover:text-[#000f44]"
                  >
                    {step.num}
                  </motion.div>
                  
                  {/* Texto do Step */}
                  <p className="text-white text-lg md:text-xl font-medium leading-relaxed group-hover:text-[#77df40] transition-colors duration-300">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
