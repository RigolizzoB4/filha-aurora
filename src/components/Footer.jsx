import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* COLUNA 1 - Institucional + Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            B4 Soluções Financeiras
          </h3>
          <p className="mb-6 text-white/80 leading-relaxed text-sm">
            A B4 Soluções Financeiras conecta empresas e pessoas às melhores
            oportunidades de captação de recursos, com ética e excelência em
            todas as etapas.
          </p>

          {/* Redes Sociais em linha */}
          <div className="flex gap-[0.5px] mb-6">
            <a
              href="https://instagram.com/grupob4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#f3ae3e] rounded-full flex items-center justify-center hover:bg-[#e89b2a] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/grupob4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#f3ae3e] rounded-full flex items-center justify-center hover:bg-[#e89b2a] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://youtube.com/@grupob4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#f3ae3e] rounded-full flex items-center justify-center hover:bg-[#e89b2a] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://facebook.com/grupob4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#f3ae3e] rounded-full flex items-center justify-center hover:bg-[#e89b2a] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Links rápidos */}
          <div className="space-y-2">
            <Link to="/contato" className="block text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
              Contato
            </Link>
            <Link to="/quem-somos" className="block text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
              Quem Somos
            </Link>
          </div>
        </div>

        {/* COLUNA 2 - Serviços */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Serviços</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/servicos/home-equity" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                Home Equity
              </Link>
            </li>
            <li>
              <Link to="/servicos/capital-giro" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                Capital de Giro
              </Link>
            </li>
            <li>
              <Link to="/servicos/finep" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                FINEP
              </Link>
            </li>
            <li>
              <Link to="/servicos/bndes" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                BNDES
              </Link>
            </li>
            <li>
              <Link to="/servicos/consorcio" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                Consórcio
              </Link>
            </li>
            <li>
              <Link to="/servicos/cambio" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                Câmbio
              </Link>
            </li>
            <li>
              <Link to="/servicos/capital-investimento" className="text-sm text-white/80 hover:text-[#f3ae3e] transition-colors">
                Capital de Investimento
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 3 - Contato e Mapa */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>

          {/* Endereço */}
          <div className="mb-4 text-sm text-white/80">
            <p className="flex items-start gap-2 mb-2">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-[#f3ae3e]" />
              <span>
                Av. Coronel Silva Teles, 1002 - 7º andar<br />
                Cambuí Corporate<br />
                Campinas/SP - CEP 13024-001
              </span>
            </p>
          </div>

          {/* Telefone */}
          <a
            href="tel:+5519997943929"
            className="flex items-center gap-2 mb-2 text-sm text-white/80 hover:text-[#f3ae3e] transition-colors"
          >
            <Phone size={16} className="text-[#f3ae3e]" />
            (19) 99794-3929
          </a>

          {/* Email */}
          <a
            href="mailto:solucoes.financeiras@b4.com.br"
            className="flex items-center gap-2 mb-6 text-sm text-white/80 hover:text-[#f3ae3e] transition-colors"
          >
            <Mail size={16} className="text-[#f3ae3e]" />
            solucoes.financeiras@b4.com.br
          </a>

          {/* Mapa Google */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <iframe
              title="Localização B4 Soluções Financeiras"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2179644397246!2d-47.06165492375916!3d-22.902584037619304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f0564b7af9%3A0x7e6a3e3e3e3e3e3e!2sAv.%20Cel.%20Silva%20Telles%2C%201002%20-%20Cambui%2C%20Campinas%20-%20SP%2C%2013024-001!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} B4 Soluções Financeiras. Todos os direitos reservados.
      </div>
    </footer>
  );
}
