'use client'
import { motion } from 'framer-motion'
// Importando os ícones do FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChalkboardUser, faBuildingColumns, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Diferenciais() {
  
  const cards = [
    {
      icon: faBuildingColumns,
      text: "Temos parceria com o Instituto Eldorado, referência em pesquisa, desenvolvimento e inovação no Brasil. O Instituto é anexo à Unicamp."
    },
    {
      icon: faGraduationCap,
      text: "A formação acontece em duas etapas e durante toda a jornada os bolsistas contam com apoio de especialistas e desafios reais para aplicar o aprendizado."
    },
    {
      icon: faChalkboardUser,
      text: "O curso é 100% presencial, com infraestrutura dividida entre nossa sede, o Agi Campus e o Instituto, em Campinas."
    },
    {
      icon: faCode,
      text: "Após os 4 primeiros meses de formação, você pode ser contratado para uma das nossas squads e ainda participar de uma mentoria com duração de 2 meses, enquanto segue para a segunda etapa de capacitação."
    }
  ]

  return (
    // -mt-20 puxa o bloco para cima para engolir a foto do palestrante
    <section id="diferenciais" className="pt-32 pb-24 relative z-20 -mt-20 overflow-hidden bg-[#000f44]">
      
      {/* BACKGROUND DO HERO REAPROVEITADO */}
      <div className="absolute inset-0 z-0">
        <img src="/images/Hero-Banner-1.jpg" alt="Background" className="w-full h-full object-cover" />
        {/* Overlay escuro para garantir leitura dos cards */}
        <div className="absolute inset-0 bg-[#000f44]/85" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Título Centralizado com Símbolos Flutuantes */}
        <div className="relative flex justify-center items-center mb-16">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-0 md:left-[10%] text-[#0064f5] text-5xl md:text-6xl font-light select-none pointer-events-none opacity-60"
          >
            &lt;
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white text-center max-w-3xl leading-tight z-10"
          >
            O que torna a Formação de Devs nativos em IA diferente
          </motion.h2>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute right-0 md:right-[10%] text-[#0064f5] text-5xl md:text-6xl font-light select-none pointer-events-none opacity-60"
          >
            /&gt;
          </motion.div>
        </div>

        {/* Grid de 4 Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Efeito de Elevação (Cresce e escurece o fundo)
              whileHover={{ scale: 1.03, backgroundColor: "#00288c", y: -5 }}
              className="bg-[#0033b0] p-8 md:p-10 rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-default"
            >
              {/* Ícone FontAwesome com Animação no Hover */}
              <motion.div 
                className="text-white mb-6 text-3xl opacity-90"
                whileHover={{ scale: 1.2, rotate: 10, color: "#77df40" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={card.icon} />
              </motion.div>
              
              <p className="text-white text-base md:text-lg font-light leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Card Destaque Extra (O longo da base) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          // Efeito de Elevação
          whileHover={{ scale: 1.02, backgroundColor: "#0052cc", y: -5 }}
          className="mt-6 lg:mt-8 bg-[#0064f5] p-8 md:p-10 rounded-[24px] shadow-lg hover:shadow-2xl flex flex-col md:flex-row items-center gap-6 transition-all duration-300 cursor-default"
        >
          <motion.div 
            className="text-white shrink-0 text-4xl opacity-90"
            whileHover={{ scale: 1.2, rotate: -10, color: "#77df40" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faGlobe} />
          </motion.div>
          
          <p className="text-white text-base md:text-lg font-light leading-relaxed text-center md:text-left">
            Além de Java, você também conclui a formação dominando os principais conceitos de IA aplicada ao desenvolvimento de software.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
