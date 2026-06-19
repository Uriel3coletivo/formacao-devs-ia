'use client'
import { motion } from 'framer-motion'

export default function PreRequisitos() {
  
  const cursos = [
    "Ciência da Computação",
    "Sistemas de Informação",
    "Engenharia de Software",
    "Engenharia da Computação"
  ]

  const diferenciais = [
    "Experiência com projetos acadêmicos ou pessoais de programação",
    "Conhecimento básico em Spring Boot ou frameworks similares",
    "Familiaridade com as ferramentas Docker, GitHub ou GitLab",
    "Participação em hackathons ou comunidades de tecnologia",
    "Uso de ferramentas de IA generativa no processo de desenvolvimento",
    "Portfólio ou repositórios públicos de código"
  ]

  return (
    <section id="requisitos" className="bg-white py-24 relative z-10">
      <div className="container-custom">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#000f44] text-center mb-16 tracking-tight"
        >
          &lt;/Pré-requisitos para embarcar <br className="hidden md:block"/> nessa jornada de crescimento&gt;
        </motion.h2>

        {/* Linha de Cima (2 Cards) */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          
          {/* CARD 1: Quem pode se candidatar (AZUL MÉDIO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 bg-[#0033b0] rounded-[32px] p-8 md:p-12 shadow-xl relative z-10"
          >
            {/* Título Corrigido para Verde */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#77df40] mb-6">Quem pode se candidatar:</h3>
            <ul className="space-y-6">
              <li className="text-white font-light text-lg flex gap-3">
                <span className="text-[#77df40] mt-1">•</span>
                <div>
                  Maiores de 18 anos com Ensino Médio completo que estejam cursando graduação ou tecnólogo em:
                  <div className="flex flex-wrap gap-3 mt-4">
                    {cursos.map((curso, i) => (
                      <span key={i} className="border border-[#77df40] text-[#77df40] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#77df40] hover:text-[#000f44] transition-colors cursor-default">
                        {curso}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
              <li className="text-white font-light text-lg flex gap-3">
                <span className="text-[#77df40] mt-1">•</span>
                Pessoas em transição de carreira
              </li>
            </ul>
          </motion.div>

          {/* CARD 2: Disponibilidade (AZUL OFICIAL) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 bg-[#0064f5] rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col justify-center relative z-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Disponibilidade</h3>
              <p className="text-white font-light text-lg">Atuação <span className="font-bold">100% presencial</span> no Agi Campus e Instituto Eldorado.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Localização</h3>
              <p className="text-white font-light text-lg">É preciso residir em Campinas e Região ou em endereço que fique até 1h de distância da nossa sede ou do Eldorado (Unicamp).</p>
            </div>
          </motion.div>

        </div>

        {/* CARD 3: Diferenciais + Imagem Vazando (AZUL MARINHO) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          // Removi o overflow-hidden para a moça poder vazar!
          className="bg-[#000f44] rounded-[32px] shadow-xl flex flex-col lg:flex-row relative z-20"
        >
          {/* Efeito Pixels (Opacidade 60%) - Apenas no fundo do card, não sobrepõe o texto */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-60 rounded-[32px] overflow-hidden">
            <img src="/images/Pixels.png" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Lado Esquerdo: Textos (Reduzi o padding para o card ficar mais baixo) */}
          <div className="p-8 md:px-12 md:py-10 lg:w-[65%] flex flex-col justify-center relative z-10">
            {/* Título Corrigido para Azul Médio */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#0033b0] mb-8">Isso pode te diferenciar no processo:</h3>
            <ul className="space-y-4">
              {diferenciais.map((item, i) => (
                <li key={i} className="text-white font-light text-base md:text-lg flex gap-3">
                  <span className="text-[#77df40] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Lado Direito: A Moça Vazando para Cima */}
          <div className="lg:w-[35%] relative flex justify-center items-end">
            {/* A Mágica do Vazamento: -mt-24 puxa a imagem para rasgar o teto do card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
              className="relative w-full h-[350px] lg:h-auto lg:absolute lg:bottom-0 lg:-mt-24 lg:right-4 z-30"
            >
              <img 
                src="/images/Moca-Requisitos.png" 
                alt="Colaboradora Agibank" 
                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
