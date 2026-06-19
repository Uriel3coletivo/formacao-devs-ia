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
        
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#000f44] text-center mb-16 tracking-tight"
        >
          &lt;/Pré-requisitos para embarcar <br className="hidden md:block"/> nessa jornada de crescimento&gt;
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          
          {/* CARD 1: Quem pode se candidatar (AZUL MÉDIO) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 bg-[#0033b0] rounded-[32px] p-8 md:p-12 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Quem pode se candidatar:</h3>
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

          {/* CARD 2: Disponibilidade e Localização (AZUL OFICIAL) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 bg-[#0064f5] rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col justify-center"
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

        {/* CARD 3: Diferenciais + Imagem (AZUL MARINHO + PIXELS) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#000f44] rounded-[32px] overflow-hidden shadow-xl flex flex-col lg:flex-row relative"
        >
          {/* Textura de Pixels restrita a este card (Opacidade 20% para não atrapalhar leitura) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <img src="/images/Pixels.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Isso pode te diferenciar no processo:</h3>
            <ul className="space-y-4">
              {diferenciais.map((item, i) => (
                <li key={i} className="text-white font-light text-base md:text-lg flex gap-3">
                  <span className="text-[#77df40] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-2/5 h-[300px] lg:h-auto relative z-10">
            <img 
              src="/images/Moca-Requisitos.png" 
              alt="Colaboradora Agibank" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://placehold.co/600x800/000f44/ffffff?text=Moça+com+Laptop" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
