'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold">
            <img 
              src="https://placehold.co/120x40/0064f5/ffffff?text=Agibank" 
              alt="Agibank"
              className="h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button className={`font-medium transition-colors ${scrolled ? 'text-[#000f44] hover:text-[#0064f5]' : 'text-white hover:text-[#77df40]'}`}>Início</button>
            <button className={`font-medium transition-colors ${scrolled ? 'text-[#000f44] hover:text-[#0064f5]' : 'text-white hover:text-[#77df40]'}`}>O Programa</button>
            <button className={`font-medium transition-colors ${scrolled ? 'text-[#000f44] hover:text-[#0064f5]' : 'text-white hover:text-[#77df40]'}`}>Diferenciais</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden flex flex-col gap-1.5 ${scrolled ? 'text-[#000f44]' : 'text-white'}`}>
            <span className={`w-6 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
