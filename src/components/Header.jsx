// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Facebook, ChevronDown } from 'lucide-react';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid #ededea',
      position: 'sticky',
      top: 0,
      zIndex: 9999
    }}>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '180px',
        maxWidth: '1920px',
        margin: '0 auto',
        padding: '0 100px',
        gap: '0'
      }}>

        {/* ═══ LOGO 180px ═══ */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <img
            src="/logo-b4-new.svg"
            alt="B4 Soluções Financeiras"
            style={{ height: '180px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* ═══ ESPAÇADOR (ocupa espaço restante e centraliza menu) ═══ */}
        <div style={{ flex: 1 }} />

        {/* ═══ MENU - Centralizado com leve deslocamento direita ═══ */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          whiteSpace: 'nowrap',
          marginRight: '30px'
        }}>

          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#f3ae3e'}
            onMouseLeave={(e) => e.target.style.color = '#818181'}
          >
            Início
          </Link>

          <Link
            to="/quem-somos"
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#f3ae3e'}
            onMouseLeave={(e) => e.target.style.color = '#818181'}
          >
            Quem Somos
          </Link>

          {/* Dropdown Serviços */}
          <div
            style={{ position: 'relative', zIndex: 10000 }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button style={{
              ...buttonStyle,
              color: servicesOpen ? '#f3ae3e' : '#818181'
            }}>
              Serviços
              <ChevronDown
                size={16}
                style={{
                  marginTop: '2px',
                  transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </button>

            {servicesOpen && (
              <>
                {/* Setinha visual */}
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '10px',
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '10px solid #ffffff',
                  filter: 'drop-shadow(0 -2px 2px rgba(0,0,0,0.05))',
                  zIndex: 10002
                }} />

                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '20px',
                  background: '#ffffff',
                  border: '1px solid #ededea',
                  borderRadius: '12px',
                  padding: '12px 0',
                  minWidth: '220px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  zIndex: 10001,
                  animation: 'fadeInDown 0.3s ease'
                }}>
                  <DropdownLink href="/servicos/home-equity">Home Equity</DropdownLink>
                  <DropdownLink href="/servicos/capital-giro">Capital de Giro</DropdownLink>
                  <DropdownLink href="/servicos/finep">FINEP</DropdownLink>
                  <DropdownLink href="/servicos/bndes">BNDES</DropdownLink>
                  <DropdownLink href="/servicos/consorcio">Consórcio</DropdownLink>
                  <DropdownLink href="/servicos/cambio">Câmbio</DropdownLink>
                  <DropdownLink href="/servicos/capital-investimento">Capital de Investimento</DropdownLink>
                </div>
              </>
            )}
          </div>

          <Link
            to="/insights"
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#f3ae3e'}
            onMouseLeave={(e) => e.target.style.color = '#818181'}
          >
            Insights
          </Link>

          <Link
            to="/contato"
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#f3ae3e'}
            onMouseLeave={(e) => e.target.style.color = '#818181'}
          >
            Contato
          </Link>

        </nav>

        {/* ═══ ESPAÇADOR ═══ */}
        <div style={{ flex: 1 }} />

        {/* ═══ ÍCONES GRID 2×2 ═══ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40px 40px',
          gridTemplateRows: '40px 40px',
          gap: '1px',
          flexShrink: 0
        }}>

          <SocialIcon href="https://instagram.com/grupob4" Icon={Instagram} />
          <SocialIcon href="https://linkedin.com/company/grupob4" Icon={Linkedin} />
          <SocialIcon href="https://youtube.com/@grupob4" Icon={Youtube} />
          <SocialIcon href="https://facebook.com/grupob4" Icon={Facebook} />

        </div>

      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>

    </header>
  );
}

// ═══════════════════════════════════════════════════════════════
// ESTILOS E COMPONENTES
// ═══════════════════════════════════════════════════════════════

const linkStyle = {
  color: '#818181',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 600,
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  color: '#818181',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'color 0.2s ease',
  padding: 0
};

function DropdownLink({ href, children }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      to={href}
      style={{
        display: 'block',
        padding: '12px 28px',
        color: hovered ? '#f3ae3e' : '#818181',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        borderLeft: hovered ? '3px solid #f3ae3e' : '3px solid transparent',
        background: hovered ? '#fef9f0' : 'transparent'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        color: '#f3ae3e'
      }}
    >
      <Icon size={20} strokeWidth={1.5} />
    </a>
  );
}
