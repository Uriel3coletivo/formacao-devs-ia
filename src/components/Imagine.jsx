'use client'
import { motion } from 'framer-motion'

export default function Imagine() {
  return (
    // ATENÇÃO AQUI: Removi o "overflow-hidden" para permitir que as imagens vazem para cima e para baixo!
    <section className="bg-white py-24 md:py-32 relative z-30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: Textos e Botão */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#000f44] leading-[1.1] mb-6 tracking-tight">
              Imagine começar sua carreira tech em uma empresa listada na maior bolsa de valores do mundo.
            </h2>
            
            <p className="text-2xl md:text-3xl font-bold text-[#0064f5] mb-10">
              Aqui, isso é realidade!
            </p>
            
            <button className="bg-[#77df40] text-[#000f44] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(119,223,64,0.3)]">
              Quero fazer parte!
            </button>
          </motion.div>

          {/* LADO DIREITO: Composição de Imagens */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[500px] md:h-[650px] mt-16 lg:mt-0"
          >
            {/* Imagem Central Grande */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[80%] z-10 rounded-[32px] overflow-hidden shadow-2xl bg-gray-100">
              <img src="/images/Imagine-Central.png" alt="Equipe Agibank" className="w-full h-full object-cover" />
            </div>

            {/* Imagem Pequena 1 (Topo Esquerda) - VAZANDO PARA CIMA DO BLOCO ANTERIOR (-top-16) */}
            <motion.div 
              whileHover={{ scale: 1.08, y: -10, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-12 md:-top-16 left-0 w-[40%] aspect-square z-20 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl cursor-pointer border-4 border-white bg-gray-100"
            >
              <img src="/images/Imagine-Pequena-1.png" alt="Agibank Tech" className="w-full h-full object-cover" />
            </motion.div>

            {/* Imagem Pequena 2 (Base Esquerda) */}
            <motion.div 
              whileHover={{ scale: 1.08, y: -10, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-[10%] left-[5%] w-[35%] aspect-square z-20 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl cursor-pointer border-4 border-white bg-gray-100"
            >
              <img src="/images/Imagine-Pequena-2.png" alt="Agibank Tech" className="w-full h-full object-cover" />
            </motion.div>

            {/* Imagem Pequena 3 (Base Direita) - VAZANDO PARA BAIXO DO PRÓXIMO BLOCO (-bottom-16) */}
            <motion.div 
              whileHover={{ scale: 1.08, y: -10, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -bottom-12 md:-bottom-20 right-0 w-[45%] aspect-[4/3] z-20 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl cursor-pointer border-4 border-white bg-gray-100"
            >
              <img src="/images/Imagine-Pequena-3.png" alt="Agibank Tech" className="w-full h-full object-cover" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
