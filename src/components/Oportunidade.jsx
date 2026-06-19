'use client'
import { motion } from 'framer-motion'

export default function Oportunidade() {
  return (
    // Adicionado -mt-12 e z-20 para puxar a seção para cima e colar no Hero
    <section id="programa" className="relative bg-[#000f44] pt-0 pb-32 overflow-hidden -mt-12 z-20">
      
      {/* CAMADA 1: Efeito Pixels (Opacidade aumentada para 70%) */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none flex justify-end items-start opacity-70 transform rotate-180">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="object-contain max-h-full" />
      </div>

      {/* CAMADA 2: Código Flutuante (Movido para cima e para a direita) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -20, 0] }}
        transition={{ 
          opacity: { duration: 1 },
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
        }}
        className="absolute top-[5%] right-[2%] lg:right-[4%] text-white font-mono text-xs md:text-sm whitespace-pre select-none pointer-events-none z-10"
      >
{`import future from agibank
import ai_models as ai

def start_journey(dev):
    dev.upgrade(skills=["Code", "AI", "Impact"])
    return "Limitless"

# system.init(career_mode="ON")`}
      </motion.div>

      {/* Símbolo < (Branco) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -15, 0] }}
        transition={{ 
          x: { duration: 0.8 }, 
          opacity: { duration: 0.8 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
        }}
        className="absolute top-10 left-[2%] text-white text-6xl md:text-8xl font-light select-none pointer-events-none z-10"
      >
        &lt;
      </motion.div>

      {/* Símbolo /> (Branco) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, 20, 0] }}
        transition={{ 
          x: { duration: 0.8 }, 
          opacity: { duration: 0.8 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" } 
        }}
        className="absolute bottom-20 right-[2%] text-white text-5xl md:text-7xl font-light select-none pointer-events-none z-10"
      >
        /&gt;
      </motion.div>

      <div className="container-custom relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          // Largura máxima levemente reduzida para não bater no código da direita
          className="max-w-[950px]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#77df40] mb-10 leading-tight">
            A sua oportunidade de se tornar um DEV habilitado em IA
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-white/90 font-normal leading-relaxed mb-12">
            <p>
              A Formação de Devs nativa em IA é para quem quer começar na área de tecnologia de forma <span className="font-bold text-[#77df40]">agilizada, praticando o desenvolvimento de software aliado à inteligência artificial desde o dia um.</span>
            </p>
            <p>
              Com uma verdadeira imersão na teoria e na prática, você passa por <span className="font-bold text-[#77df40]">6 meses de treinamento em Java + IA</span> podendo seguir para a 2ª etapa e fazer parte de uma das nossas squads.
            </p>
            <p>
              Buscamos talentos que não têm medo de superar desafios para construir uma carreira com entregas que realmente impactam o crescimento do negócio.
            </p>
            <p>
              Então, se você quer aprender muito e aplicar o seu conhecimento em uma empresa que cresce junto com você, <span className="font-bold text-[#77df40]">o Agibank é o seu lugar!</span>
            </p>
          </div>

          <button className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.2)]">
            Quero me tornar Dev do Agi
          </button>
        </motion.div>
      </div>
    </section>
  )
}
