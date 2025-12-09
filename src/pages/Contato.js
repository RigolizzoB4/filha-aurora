import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

const Contato = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Seção de Contato Unificada */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Título Centralizado */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--b4-gray)' }}>
              Contato
            </h1>
            <p className="text-base" style={{ color: '#818181' }}>
              Estamos à disposição para atender você.
            </p>
          </div>

          {/* Grid 3 Colunas */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Coluna 1: Mapa */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--b4-gray)' }}>
                Onde estamos
              </h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Coronel+Silva+Teles,+1002+-+Cambuí,+Campinas+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div style={{ width: '100%', height: '500px', position: 'relative' }}>
                  <iframe
                    title="Mapa B4"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Av.%20Coronel%20Silva%20Teles,%201002,%20Cambu%C3%AD,%20Campinas,%20SP+(B4%20Solu%C3%A7%C3%B5es%20Financeiras)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  />
                </div>
              </a>
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--b4-saffron)] mt-1 flex-shrink-0" />
                <p className="text-base" style={{ color: '#818181' }}>
                  Av. Coronel Silva Teles, 1002<br />
                  Cambuí, Campinas/SP
                </p>
              </div>
            </div>

            {/* Coluna 2: Informações */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--b4-gray)' }}>
                Fale conosco
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[var(--b4-saffron)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-base font-semibold mb-1" style={{ color: 'var(--b4-gray)' }}>
                      Email
                    </p>
                    <a
                      href="mailto:solucoes.financeiras@b4.com.br"
                      className="text-base hover:text-[var(--b4-saffron)] transition-colors"
                      style={{ color: '#818181' }}
                    >
                      solucoes.financeiras@b4.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[var(--b4-saffron)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-base font-semibold mb-1" style={{ color: 'var(--b4-gray)' }}>
                      Telefone
                    </p>
                    <a
                      href="tel:+551937514300"
                      className="text-base hover:text-[var(--b4-saffron)] transition-colors"
                      style={{ color: '#818181' }}
                    >
                      (19) 3751-4300
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 3: Redes Sociais + Telefone/Email Adicional */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--b4-gray)' }}>
                Siga-nos
              </h2>

              {/* Grid 2x2 de Ícones */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-[180px]">
                <SocialIcon href="https://instagram.com/grupob4" Icon={Instagram} />
                <SocialIcon href="https://linkedin.com/company/grupob4" Icon={Linkedin} />
                <SocialIcon href="https://youtube.com/@grupob4" Icon={Youtube} />
                <SocialIcon href="https://facebook.com/grupob4" Icon={Facebook} />
              </div>

              {/* Telefone e Email adicionais abaixo dos ícones */}
              <div className="space-y-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--b4-gray)' }}>
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5519997943929"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-[var(--b4-saffron)] transition-colors"
                    style={{ color: '#818181' }}
                  >
                    (19) 99794-3929
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--b4-gray)' }}>
                    Email alternativo
                  </p>
                  <a
                    href="mailto:solucoes.financeiras@b4.com.br"
                    className="text-base hover:text-[var(--b4-saffron)] transition-colors"
                    style={{ color: '#818181' }}
                  >
                    solucoes.financeiras@b4.com.br
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

function SocialIcon({ href, Icon }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px',
        height: '80px',
        border: '2px solid #f3ae3e',
        borderRadius: '12px',
        color: '#f3ae3e',
        transition: 'all 0.3s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        backgroundColor: hovered ? '#fef9f0' : 'transparent'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={32} strokeWidth={1.5} />
    </a>
  );
}

export default Contato;
