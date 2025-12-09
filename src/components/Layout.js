import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { Footer } from './Footer';

const logoB4 = '/logo-b4-new.svg';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  const services = [
    { name: 'Home Equity', path: '/servicos/home-equity' },
    { name: 'Capital de Giro', path: '/servicos/capital-giro' },
    { name: 'FINEP', path: '/servicos/finep' },
    { name: 'BNDES', path: '/servicos/bndes' },
    { name: 'Consórcio', path: '/servicos/consorcio' },
    { name: 'Câmbio', path: '/servicos/cambio' },
    { name: 'Capital de Investimento', path: '/servicos/capital-investimento' },
  ];

  const isActivePath = (path) => location.pathname === path;
  const isActiveService = () => services.some(service => location.pathname === service.path);

  const linkBase = 'text-[#818181] hover:text-[var(--b4-saffron)]';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-[1328px] mx-auto h-[170px] px-10 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src={logoB4}
              alt="B4 Soluções Financeiras"
              className="h-[120px] w-auto object-contain"
            />
          </div>

          {/* MENU PRINCIPAL */}
          <nav className="flex items-center gap-8 text-[17px] font-semibold text-[#818181]">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[var(--b4-saffron)]' : 'hover:text-[var(--b4-saffron)]'}>Início</NavLink>
            <NavLink to="/quem-somos" className={({ isActive }) => isActive ? 'text-[var(--b4-saffron)]' : 'hover:text-[var(--b4-saffron)]'}>Quem Somos</NavLink>
            <div className="relative"
                 onMouseEnter={() => { clearTimeout(closeTimerRef.current); setIsServicesOpen(true); }}
                 onMouseLeave={() => { closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), 250); }}>
              <button onClick={() => setIsServicesOpen((v) => !v)} className={`flex items-center hover:text-[var(--b4-saffron)] text-[17px] font-semibold ${isActiveService() ? 'text-[var(--b4-saffron)]' : ''}`}>
                Serviços <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div onMouseEnter={() => { clearTimeout(closeTimerRef.current); setIsServicesOpen(true); }}
                     onMouseLeave={() => { closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), 250); }}
                     className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link key={service.path} to={service.path} onClick={() => setIsServicesOpen(false)} className={`block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[var(--b4-saffron)] ${isActivePath(service.path) ? 'bg-orange-50 text-[var(--b4-saffron)]' : ''}`}>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/insights" className={({ isActive }) => isActive ? 'text-[var(--b4-saffron)]' : 'hover:text-[var(--b4-saffron)]'}>Insights</NavLink>
            <NavLink to="/contato" className={({ isActive }) => isActive ? 'text-[var(--b4-saffron)]' : 'hover:text-[var(--b4-saffron)]'}>Contato</NavLink>
          </nav>

          {/* ÍCONES SOCIAIS - Quadrado 2x2 */}
          <div className="grid grid-cols-2 gap-3 text-[#f3ae3e]">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-all hover:scale-110">
              <Instagram size={28} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-all hover:scale-110">
              <Linkedin size={28} strokeWidth={1.5} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="transition-all hover:scale-110">
              <Youtube size={28} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-all hover:scale-110">
              <Facebook size={28} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
