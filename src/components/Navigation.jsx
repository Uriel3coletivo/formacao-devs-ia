'use client'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detecta o scroll para mudar a cor da barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para deslizar suavemente até a seção
  const scrollTo = (id) => {
    setMenuOpen(false) // Fecha o menu mobile se estiver aberto
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Lista de links exata do seu layout
  const menuItems = [
    { label: 'O Programa', id: 'programa' },
    { label: 'O que torna diferente', id: 'diferenciais' },
    { label: 'Etapas do Programa', id: 'etapas' },
    { label: 'Benefícios', id: 'beneficios' },
    { label: 'Requisitos', id: 'requisitos' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom relative">
        <div className="flex justify-between items-center">
          
          {/* Logo Inteligente (Volta pro topo ao clicar) */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={scrolled ? "/images/Logo-Agi.svg" : "/images/Logo-Agi-Branco.svg"} 
              alt="Agibank" 
              className="h-8 md:h-10 transition-all duration-300" 
            />
          </div>

          {/* Links Centralizados (Desktop) */}
          <div className="hidden xl:flex gap-6 text-sm font-medium">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors ${scrolled ? 'text-[#000f44] hover:text-[#0064f5]' : 'text-white hover:text-[#77df40]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botão CTA Menu (Desktop) */}
          <div className="hidden xl:block">
            <button className="bg-[#77df40] text-[#000f44] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#0064f5] hover:text-white transition-all transform hover:scale-105 active:scale-95">
              Inscreva-se
            </button>
          </div>

          {/* Botão Menu Mobile Hamburguer */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`xl:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-[#000f44]' : 'text-white'}`}>
            <span className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>

        {/* Dropdown Menu Mobile */}
        <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center ${menuOpen ? 'max-h-[400px] py-6' : 'max-h-0 py-0'}`}>
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#000f44] hover:text-[#0064f5] font-medium w-full text-center py-3"
            >
              {item.label}
            </button>
          ))}
          <button className="bg-[#77df40] text-[#000f44] px-8 py-3 rounded-full font-bold text-sm mt-4 hover:bg-[#0064f5] hover:text-white transition-colors">
            Inscreva-se
          </button>
        </div>

      </div>
    </nav>
  )
}
