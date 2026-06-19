'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000f44] to-[#0033b0] overflow-hidden pt-20">
      <div className="container-custom relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Formação de Devs
              <span className="block text-[#77df40]">nativos em IA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              A sua oportunidade de se tornar um DEV habilitado em IA
            </p>
            <button className="btn-primary">
              Quero me inscrever
            </button>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/600x700/0064f5/ffffff?text=Dev+Agibank"
              alt="Desenvolvedor Agibank"
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
