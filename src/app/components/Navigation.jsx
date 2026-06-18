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

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className={`text-2xl font-bold transition-colors ${
            scrolled ? 'text-agi-blue' : 'text-white'
          }`}>
            <img 
              src="https://placehold.co/120x40/0064f5/ffffff?text=Agibank" 
              alt="Agibank"
              className="h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: 'Início', id: 'hero' },
              { label: 'O Programa', id: 'programa' },
              { label: 'Diferenciais', id: 'diferenciais' },
              { label: 'Inscreva-se', id: 'inscricao' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-medium transition-colors ${
                  scrolled 
                    ? 'text-agi-navy hover:text-agi-blue' 
                    : 'text-white hover:text-agi-green'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 ${
              scrolled ? 'text-agi-navy' : 'text-white'
            }`}
          >
            <span className={`w-6 h-0.5 bg-current transition-transform ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-current transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-current transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6 flex flex-col gap-4"
          >
            {[
              { label: 'Início', id: 'hero' },
              { label: 'O Programa', id: 'programa' },
              { label: 'Diferenciais', id: 'diferenciais' },
              { label: 'Inscreva-se', id: 'inscricao' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-agi-navy hover:text-agi-blue font-medium"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
