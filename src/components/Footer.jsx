'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          
          {/* Lado Esquerdo: Textos e Redes */}
          <div>
            <h3 className="text-3xl font-bold text-[#000f44] mb-2">
              Fique sempre<br/>pertinho do Agibank
            </h3>
            <p className="text-gray-600 font-light mb-6">
              Não perca nossas novidades.<br/>Siga a gente nas redes! 😉
            </p>
            
            {/* Ícones Sociais */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Links */}
          <div className="flex md:justify-end">
            <div className="flex flex-col gap-3 text-right">
              <a href="#" className="text-[#000f44] hover:text-[#0064f5] font-medium transition-colors">Vagas abertas</a>
              <a href="#" className="text-[#000f44] hover:text-[#0064f5] font-medium transition-colors">Fraudes e Segurança</a>
              <a href="#" className="text-[#000f44] hover:text-[#0064f5] font-medium transition-colors">Ética do Agi</a>
            </div>
          </div>

        </div>

        {/* Base: Logo e Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <img src="/images/Logo-Agi.svg" alt="Agibank" className="h-6 mb-4 md:mb-0 opacity-50 grayscale" />
          <p className="text-sm text-gray-500 font-light">
            Agibank - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
