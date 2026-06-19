'use client'
import { motion } from 'framer-motion'

export default function Diferenciais() {
  
  const cards = [
    {
      paths: ["M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"],
      text: "Temos parceria com o Instituto Eldorado, referência em pesquisa, desenvolvimento e inovação no Brasil. O Instituto é anexo à Unicamp."
    },
    {
      paths: ["M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"],
      text: "A formação acontece em duas etapas e durante toda a jornada os bolsistas contam com apoio de especialistas e desafios reais para aplicar o aprendizado."
    },
    {
      paths: ["M15 10.5a3 3 0 11-6 0 3 3 0 016 0z", "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"],
      text: "O curso é 100% presencial, com infraestrutura dividida entre nossa sede, o Agi Campus e o Instituto, em Campinas."
    },
    {
      paths: ["M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"],
      text: "Após os 6 primeiros meses de formação, você pode ser contratado para uma das nossas squads e ainda participar de uma mentoria com duração de 2 meses, enquanto segue para a segunda etapa de capacitação."
    }
  ]

  const iconVariants = {
    rest: { pathLength: 1, stroke: "#ffffff" },
    hover: { 
      pathLength: [0, 1], 
      stroke: "#77df40",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  }

  return (
    // Z-INDEX alterado para 10. Assim a seção branca (z-30) e suas fotos ficam por cima.
    <section id="diferenciais" className="pt-32 pb-24 relative z-10 -mt-20 overflow-hidden bg-[#000f44]">
      
      <div className="absolute inset-0 z-0">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        {/* Opacidade reduzida para 60% para revelar mais a imagem */}
        <div className="absolute inset-0 bg-[#000f44]/60" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="container-custom relative z-10"
      >
        
        <div className="relative flex justify-center items-center mb-16 mt-10">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-0 md:left-[10%] text-[#0064f5] text-5xl md:text-6xl font-light select-none pointer-events-none opacity-60"
          >
            &lt;
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white text-center max-w-3xl leading-tight z-10">
            O que torna a Formação de Devs nativos em IA diferente
          </h2>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute right-0 md:right-[10%] text-[#0064f5] text-5xl md:text-6xl font-light select-none pointer-events-none opacity-60"
          >
            /&gt;
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="bg-[#0064f5] hover:bg-[#0033b0] p-8 md:p-10 rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-default transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                className="w-10 h-10 mb-6"
              >
                {card.paths.map((path, i) => (
                  <motion.path key={i} strokeLinecap="round" strokeLinejoin="round" d={path} variants={iconVariants} />
                ))}
              </motion.svg>
              
              <p className="text-white text-base md:text-lg font-light leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="mt-6 lg:mt-8 bg-[#0064f5] hover:bg-[#0033b0] p-8 md:p-10 rounded-[24px] shadow-lg hover:shadow-2xl flex flex-col md:flex-row items-center gap-6 transition-all duration-300 cursor-default transform hover:-translate-y-2 hover:scale-[1.02]"
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            className="w-10 h-10 shrink-0"
          >
            <motion.path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" variants={iconVariants} />
          </motion.svg>
          
          <p className="text-white text-base md:text-lg font-light leading-relaxed text-center md:text-left">
            Além de Java, você também conclui a formação dominando os principais conceitos de IA aplicada ao desenvolvimento de software.
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}
