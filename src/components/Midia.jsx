'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Midia() {
  const carouselRef = useRef(null)

  // Cálculo exato para rolar perfeitamente 1 card e esconder o anterior 100%
  const scroll = (direction) => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width
      const gap = 24 // gap-6 = 24px
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const noticias = [
    {
      img: "Midia-1.png",
      title: '"Como o Agibank usou o Agentforce da Salesforce para transformar o seu atendimento"',
      link: "https://braziljournal.com/brands/como-o-agibank-usou-o-agentforce-da-salesforce-para-transformar-o-seu-atendimento/"
    },
    {
      img: "Midia-2.png",
      title: '"Agibank lança software de IA para prevenção à lavagem de dinheiro e combate a fraudes"',
      link: "https://epocanegocios.globo.com/inteligencia-artificial/noticia/2025/02/agibank-lanca-software-de-ia-para-prevencao-a-lavagem-de-dinheiro-e-combate-a-fraudes.ghtml"
    },
    {
      img: "Midia-3.png",
      title: '"Agibank projeta alcançar 10% do mercado de crédito consignado até 2030"',
      link: "https://www.cnnbrasil.com.br/economia/negocios/agibank-projeta-alcancar-10-do-mercado-de-credito-consignado-ate-2030/"
    }
  ]

  return (
    // REMOVIDO o overflow-hidden daqui para a sombra não ser mais cortada!
    <section className="bg-white py-24 md:py-32 relative z-10">
      
      {/* Efeito Pixels no Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
        <img src="/images/Pixels.png" alt="Pixels Decorativos" className="w-full h-full object-cover" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 items-center">
          
          {/* LADO ESQUERDO: Textos e Controles */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-4 flex flex-col items-start relative z-20 bg-white py-8 lg:pr-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0064f5] leading-[1.1] mb-6 tracking-tight">
              Agibank na mídia
            </h2>
            
            <p className="text-lg md:text-xl text-[#000f44] font-light mb-10 leading-relaxed">
              Aqui, a inteligência artificial vem pra somar, <span className="font-bold">desde que exista uma pessoa por trás que saiba operar.</span>
            </p>
            
            {/* Botões do Carrossel */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-[#77df40] text-[#000f44] flex items-center justify-center hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* LADO DIREITO: Carrossel com Fades Bilaterais (RESTAURADO) */}
          <div className="col-span-12 lg:col-span-8 relative z-10">
            
            {/* Fade Branco na Esquerda */}
            <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-30 pointer-events-none hidden lg:block" />

            {/* Fade Branco na Direita (Vazando a tela) */}
            <div className="absolute top-0 -right-[50vw] w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

            {/* Container do Carrossel (Com folga py-12 para a sombra não cortar) */}
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-12 -my-12 pl-4 lg:pl-0 -mr-[50vw] pr-[50vw]"
            >
              {noticias.map((noticia, index) => (
                <motion.a
                  key={index}
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  // Sombra corrigida para Azul Marinho (#000f44 = rgba(0,15,68))
                  className="snap-start shrink-0 w-[280px] md:w-[340px] xl:w-[380px] bg-white border border-gray-100 rounded-[32px] shadow-[0_10px_30px_rgba(0,15,68,0.15)] hover:shadow-[0_20px_40px_rgba(0,15,68,0.25)] transition-all duration-300 flex flex-col overflow-hidden group block"
                >
                  <div className="p-4 pb-0 h-[220px] md:h-[250px]">
                    <img 
                      src={`/images/${noticia.img}`} 
                      alt="Notícia Agibank" 
                      className="w-full h-full object-cover rounded-[24px]"
                      onError={(e) => { e.target.src = `https://placehold.co/400x300/0064f5/ffffff?text=Notícia+${index + 1}` }}
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex items-center">
                    <p className="text-[#0064f5] font-medium text-base md:text-lg xl:text-xl leading-snug group-hover:text-[#0033b0] transition-colors">
                      {noticia.title}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
