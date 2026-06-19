'use client'
import { motion } from 'framer-motion'

export default function Oportunidade() {
  return (
    <section id="programa" className="relative bg-[#000f44] py-24 md:py-32 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-[2%] text-[#0064f5] text-6xl md:text-8xl font-light select-none pointer-events-none"
      >
        &lt;
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-20 right-[5%] text-white text-5xl md:text-7xl font-light select-none pointer-events-none"
      >
        /&gt;
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#77df40] mb-10 leading-tight">
            A sua oportunidade de se tornar um DEV habilitado em IA
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12">
            <p>
              A Formação de Devs nativa em IA é para quem quer começar na área de tecnologia de forma agilizada, praticando o desenvolvimento de software aliado à inteligência artificial desde o dia um.
            </p>
            <p>
              Com uma verdadeira imersão na teoria e na prática, você passa por 4 meses de treinamento em Java + IA podendo seguir para a 2ª etapa e fazer parte de uma das nossas squads.
            </p>
            <p>
              Buscamos talentos que não têm medo de superar desafios para construir uma carreira com entregas que realmente impactam o crescimento do negócio.
            </p>
            <p className="font-medium text-white">
              Então, se você quer aprender muito e aplicar o seu conhecimento em uma empresa que cresce junto com você, o Agibank é o seu lugar!
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
