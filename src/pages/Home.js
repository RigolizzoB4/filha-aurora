import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, ChevronLeft, ChevronRight, Phone, TrendingUp, Search, Eye, Building2, Shield, MonitorSmartphone, MapPin } from 'lucide-react';

const HeroCarousel = () => {
  const slides = useMemo(() => ([
    { img: '/aperto.jpg', alt: 'Equipe em reunião de negócios', phrase: { pre: 'Conectando você ao melhor ', highlight: 'crédito', post: '' }, pos: 'center' },
    { img: '/assinatura.png', alt: 'Assinatura de contrato', phrase: { pre: 'Estruturação financeira que impulsiona ', highlight: 'decisões', post: '' }, pos: 'center' },
    { img: '/amarelo_.png', alt: 'Edifício corporativo', phrase: { pre: 'Especialistas em viabilizar o seu ', highlight: 'próximo', post: ' passo' }, pos: 'center' },
  ]), []);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (hover) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, hover, slides.length]);

  return (
    <section className="relative overflow-hidden h-[calc(100vh-100px)]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`} aria-hidden={i !== index}>
            <div className="w-full h-full relative">
              <img src={s.img} alt={s.alt} className={`w-full h-full object-cover`} style={{ objectPosition: s.pos }} />
              <div className="absolute inset-0 hero-orange-overlay" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 h-full">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="hero-readable-shadow text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-white">{slides[index].phrase.pre}</span>
              <span className="text-[var(--b4-saffron)]">{slides[index].phrase.highlight}</span>
              <span className="text-white">{slides[index].phrase.post}</span>
            </h1>
            {/* CTA WhatsApp - Fale conosco */}
            <div className="flex gap-4">
              <a href="https://wa.me/5519997943929?text=Olá! Gostaria de falar sobre soluções financeiras." target="_blank" rel="noopener noreferrer" className="cta-split">
                <span className="cta-left">Fale</span>
                <span className="cta-box">
                  <span className="cta-square" />
                  <span className="cta-mais">conosco</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Removidos botões laterais do hero e também os dots */}
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Por que escolher a B4 Soluções Financeiras */}
      <section className="section-padding section-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[var(--b4-gray)]">B4</span> <span className="text-[var(--b4-saffron)]">Soluções Financeiras</span>
              </h2>
              <p className="text-[var(--b4-gray)] leading-relaxed mb-8 text-base">
                A B4 Soluções Financeiras conecta empresas e pessoas às melhores oportunidades de captação de recursos, de forma ágil e estratégica. Atuamos ao lado do cliente antes, durante e depois da operação para que cada decisão financeira seja segura, sustentável e alinhada às necessidades do negócio.
              </p>
              <div className="space-y-6 text-[var(--b4-gray)] leading-relaxed">
                <div className="flex items-start"><CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-4 flex-shrink-0" /><p className="text-base"><strong>Experiência comprovada</strong> – Mais de 15 anos conectando clientes às melhores oportunidades de crédito.</p></div>
                <div className="flex items-start"><Users className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-4 flex-shrink-0" /><p className="text-base"><strong>Atendimento personalizado</strong> – Soluções sob medida e acompanhamento próximo.</p></div>
                <div className="flex items-start"><Target className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-4 flex-shrink-0" /><p className="text-base"><strong>Foco em resultados</strong> – Agilidade e eficiência para garantir a aprovação do crédito.</p></div>
              </div>
            </div>
            <div className="relative h-full">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/t3on1tap_freepik__expand__12081-1536x512.png.webp" alt="Equipe B4" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção: Por que escolher a B4 */}
      <section className="section-padding" style={{ background: '#f8f8f8' }}>
        <div className="container-custom">

          <h2 className="text-3xl font-bold text-center mb-3" style={{ color: 'var(--b4-gray)' }}>
            Por que escolher a <span style={{ color: '#f3ae3e' }}>B4</span>
          </h2>

          <p className="text-center text-base mb-12" style={{ color: '#818181', maxWidth: '700px', margin: '0 auto 48px' }}>
            Assessoria especializada que vai além da captação de crédito
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6">
              <div className="mb-4">
                <Search size={28} style={{ color: '#f3ae3e' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Atendimento consultivo especializado
              </h3>
              <p className="text-sm" style={{ color: '#818181', lineHeight: '1.5' }}>
                Diagnóstico técnico e financeiro completo antes de sugerir qualquer linha de crédito.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6">
              <div className="mb-4">
                <Eye size={28} style={{ color: '#f3ae3e' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Visão externa do cenário
              </h3>
              <p className="text-sm" style={{ color: '#818181', lineHeight: '1.5' }}>
                Leitura clara e estruturada da situação financeira e alternativas disponíveis.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6">
              <div className="mb-4">
                <Target size={28} style={{ color: '#f3ae3e' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Melhor recomendação
              </h3>
              <p className="text-sm" style={{ color: '#818181', lineHeight: '1.5' }}>
                Comparamos propostas de múltiplas instituições para indicar a melhor solução.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6">
              <div className="mb-4">
                <Building2 size={28} style={{ color: '#f3ae3e' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Acesso multibanco
              </h3>
              <p className="text-sm" style={{ color: '#818181', lineHeight: '1.5' }}>
                Relacionamento com bancos, cooperativas, fundos e investidores.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6">
              <div className="mb-4">
                <Shield size={28} style={{ color: '#f3ae3e' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Ética e governança
              </h3>
              <p className="text-sm" style={{ color: '#818181', lineHeight: '1.5' }}>
                Código de ética formal e práticas de governança em todas as decisões.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6">
              <div className="mb-4">
                <MonitorSmartphone size={28} style={{ color: '#f3ae3e' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                Atuação híbrida
              </h3>
              <p className="text-sm" style={{ color: '#818181', lineHeight: '1.5' }}>
                Atendimento presencial em Campinas, Belo Horizonte, Fortaleza e digital para todo o Brasil.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Conheça o Grupo B4 - REFORMULADO */}
      <section className="section-padding" style={{ background: '#f3ae3e' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* FOTO - ESQUERDA */}
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/cfpnf5sv_frente%20vista%20de%20lado.png"
                alt="Grupo B4 - Escritório Campinas"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* TEXTO - DIREITA */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Conheça o Grupo <span className="bg-white/20 px-3 py-1 rounded">B4</span>
              </h2>

              <p className="text-white text-lg leading-relaxed mb-8 opacity-95">
                O Grupo B4 nasce da união de sócios com décadas de experiência em crédito,
                fomento mercantil e gestão de investimentos. A partir de Campinas/SP, atua
                em todo território nacional, combinando tradição, tecnologia e governança
                sólida para potencializar o sucesso financeiro de seus clientes.
              </p>

              <p className="text-white text-base leading-relaxed mb-10 opacity-90">
                A B4 Soluções Financeiras é a empresa do grupo focada em assessoria e
                intermediação de crédito, conectando empresas e pessoas físicas às melhores
                oportunidades no sistema financeiro e mercado de capitais.
              </p>

              <div className="space-y-6">

                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      25+ anos de atuação
                    </h3>
                    <p className="text-white/90 text-sm">
                      Operações de crédito, fomento e fundos desde 1995.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Presença nacional
                    </h3>
                    <p className="text-white/90 text-sm">
                      Sede em Campinas/SP (Av. Coronel Silva Teles, 1002).
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Time especializado
                    </h3>
                    <p className="text-white/90 text-sm">
                      Dezenas de profissionais dedicados à saúde financeira de empresas.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Compromisso sustentável
                    </h3>
                    <p className="text-white/90 text-sm">
                      Tradição, inovação e ética em todas as operações.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
