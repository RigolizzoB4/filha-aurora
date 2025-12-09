import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, ChevronLeft, ChevronRight, Phone, TrendingUp, Search, Eye, Building2, Shield, MonitorSmartphone } from 'lucide-react';

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

      {/* Conheça o Grupo B4 */}
      <section className="section-padding section-orange">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* IMAGEM – FICA À ESQUERDA A PARTIR DO MD */}
            <div className="w-full md:w-7/12">
              <div className="relative w-full md:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/cfpnf5sv_frente%20vista%20de%20lado.png"
                  alt="Grupo B4"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXTO – FICA À DIREITA A PARTIR DO MD */}
            <div className="w-full md:w-5/12 text-white">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">Conheça o Grupo</span>{" "}
                <span className="px-2 rounded-md bg-white/15 text-white">B4</span>
              </h2>

              <p className="text-white/90 mb-4 text-base leading-relaxed">
                O Grupo B4 nasce da união de sócios com décadas de experiência em crédito,
                fomento mercantil e gestão de investimentos. A partir de Campinas, no estado
                de São Paulo, o grupo atua em todo o território nacional, combinando tradição,
                tecnologia e governança sólida para potencializar o sucesso financeiro de seus clientes.
              </p>

              <p className="text-white/90 mb-6 text-base leading-relaxed">
                A B4 Soluções Financeiras é a empresa do grupo focada em assessoria e
                intermediação de crédito, aproximando empresas e pessoas físicas das melhores
                alternativas de financiamento no sistema financeiro e no mercado de capitais.
              </p>

              <ul className="text-white/90 space-y-2 text-base">
                <li>• Mais de 25 anos de atuação em operações de crédito, fomento mercantil e fundos de investimento.</li>
                <li>• História consolidada, iniciada em 1995 e continuamente lapidada com foco no mercado financeiro.</li>
                <li>• Presença nacional, com sede em Campinas/SP – Av. Coronel Silva Teles, 1002.</li>
                <li>• Time especializado, com dezenas de profissionais dedicados à saúde financeira de milhares de empresas.</li>
                <li>• Compromisso com crescimento sustentável, unindo tradição, inovação e ética em todas as etapas das operações.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
