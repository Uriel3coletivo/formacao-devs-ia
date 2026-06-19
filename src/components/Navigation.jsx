'use client'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold">
            <img src="https://placehold.co/120x40/0064f5/ffffff?text=Agibank" alt="Agibank" className="h-10" />
          </div>
          <div className="hidden md:flex gap-8">
            <button className={`font-medium transition-colors ${scrolled ? 'text-[#000f44] hover:text-[#0064f5]' : 'text-white hover:text-[#77df40]'}`}>Início</button>
            <button className={`font-medium transition-colors ${scrolled ? 'text-[#000f44] hover:text-[#0064f5]' : 'text-white hover:text-[#77df40]'}`}>O Programa</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
