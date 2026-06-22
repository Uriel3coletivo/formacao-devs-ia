'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-white">
      
      {/* PARTE SUPERIOR (Fundo Branco) */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo: Textos e Redes */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl md:text-4xl font-bold text-[#000f44] mb-4 leading-tight">
              Fique sempre<br/>pertinho do Agibank
            </h3>
            
            <p className="text-gray-500 font-light text-lg mb-8">
              Não perca nossas novidades.<br/>Siga a gente nas redes! 😉
            </p>
            
            {/* Ícones Sociais */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/Agibank/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] hover:scale-105 transition-all"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@agibankcarreiras" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] hover:scale-105 transition-all"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/agibank/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] hover:scale-105 transition-all"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/agibank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0064f5] text-white flex items-center justify-center hover:bg-[#000f44] hover:scale-105 transition-all"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Links Sublinhados */}
          <div className="flex md:justify-end">
            <div className="flex flex-col gap-4 text-left md:text-right">
              <a 
                href="https://carreiras.agibank.com.br/vagas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#000f44] hover:text-[#0064f5] font-light text-lg underline decoration-1 underline-offset-4 transition-colors"
              >
                Vagas abertas
              </a>
              <a 
                href="https://carreiras.agibank.com.br/estagio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#000f44] hover:text-[#0064f5] font-light text-lg underline decoration-1 underline-offset-4 transition-colors"
              >
                Programa de estágio
              </a>
              <a 
                href="https://carreiras.agibank.com.br/programadedevs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#000f44] hover:text-[#0064f5] font-light text-lg underline decoration-1 underline-offset-4 transition-colors"
              >
                Devs do Agi
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* PARTE INFERIOR (Fundo Cinza Claro) */}
      <div className="bg-[#f8f9fa] py-8 border-t border-gray-100">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright e CNPJ */}
          <p className="text-sm text-gray-400 font-light text-center md:text-left">
            Agibank - Todos os direitos reservados | CNPJ: 9.246.647/0001-19 | Banco Agibank S.A.
          </p>

          {/* Termos e Políticas */}
          <div className="flex gap-6 text-sm text-gray-400 font-light">
            <a 
              href="https://agibank.com.br/termos-de-uso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#0064f5] transition-colors"
            >
              Termos de uso
            </a>
            <a 
              href="https://agibank.com.br/politica-de-privacidade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#0064f5] transition-colors"
            >
              Política de privacidade
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}
