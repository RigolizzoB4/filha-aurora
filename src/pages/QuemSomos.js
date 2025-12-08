import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { Heart, Target, Award, Users, TrendingUp, BookOpen, Lightbulb, Shield, Handshake, Phone } from 'lucide-react';

const QuemSomos = () => {
  const valores = [
    {
      icon: <Handshake className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Companheirismo e colaboração',
      description: 'Em todas as relações, priorizamos o trabalho em equipe e o apoio mútuo.'
    },
    {
      icon: <Shield className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Ética nos negócios',
      description: 'Respeito às normas do sistema financeiro e total integridade em cada operação.'
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Democratização da informação',
      description: 'Linguagem clara e acessível para que todos compreendam suas decisões financeiras.'
    },
    {
      icon: <Award className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Excelência na prestação de serviços',
      description: 'Compromisso com a qualidade e a entrega de resultados excepcionais.'
    },
    {
      icon: <Heart className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Orgulho em pertencer ao Grupo B4',
      description: 'Valorizamos nossa história e nosso papel no mercado financeiro.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Busca constante por aprendizado',
      description: 'Inovação e melhoria contínua em tudo que fazemos.'
    },
    {
      icon: <Users className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Responsabilidade social',
      description: 'Compromisso com o impacto positivo no ambiente em que atuamos.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Quem Somos"
        highlightWord="Somos"
        text="A B4 Soluções Financeiras é uma empresa de assessoria e intermediação de crédito que integra o Grupo B4. Atuamos na estruturação de soluções financeiras para empresas e pessoas físicas, conectando nossos clientes às melhores oportunidades de crédito e investimento do mercado, com foco em ética, transparência, segurança e resultado."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600"
      />

      {/* Propósito */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-[var(--b4-saffron)]" />
            </div>
            <h2 className="heading-xl mb-6">
              Nosso <span className="text-accent">Propósito</span>
            </h2>
            <p className="body-lg text-gray-600 leading-relaxed">
              Impulsionar o sucesso de pequenas e médias empresas e de pessoas empreendedoras, por meio do acesso facilitado ao crédito justo, ético e responsável. Queremos contribuir para um futuro mais próspero para nossos clientes, para a economia e para a sociedade, apoiando negócios que geram emprego, renda e impacto positivo.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[var(--b4-saffron)]" />
              </div>
              <h3 className="heading-lg mb-4">Nossa Missão</h3>
              <p className="body-base text-gray-600 leading-relaxed">
                Oferecer soluções financeiras sob medida, com agilidade, transparência e excelência no atendimento, conectando empresas e pessoas às melhores oportunidades de crédito, fomento e investimento disponíveis no mercado.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-[var(--b4-saffron)]" />
              </div>
              <h3 className="heading-lg mb-4">Nossa Visão</h3>
              <p className="body-base text-gray-600 leading-relaxed">
                Ser uma das principais referências no Brasil em assessoria para captação de crédito e estruturação de soluções financeiras para pequenas e médias empresas, sendo lembrada pela qualidade técnica, pela postura ética e pela proximidade com o cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-xl mb-4">
              Nossos <span className="text-accent">Valores</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Os valores que nos guiam em cada decisão e ação do nosso dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {valor.icon}
                </div>
                <h3 className="heading-sm mb-3">{valor.title}</h3>
                <p className="body-base text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Essência */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-xl mb-6">
                Nossa <span className="text-accent">Essência</span>
              </h2>
              <p className="body-lg text-gray-600 leading-relaxed mb-6">
                A essência da B4 Soluções Financeiras é a combinação entre confiança, relacionamento e conhecimento técnico profundo. Buscamos ser, ao mesmo tempo, parceiros próximos e conselheiros independentes, capazes de orientar o cliente com objetividade, sinceridade e responsabilidade.
              </p>

              <h3 className="heading-md mb-4 mt-8">Nosso modo de comunicar</h3>
              <p className="body-base text-gray-600 leading-relaxed">
                Nos comunicamos de forma clara, objetiva e analítica, sem jargões desnecessários. Nosso tom é profissional, positivo e moderno. Nosso objetivo é acolher, apoiar, facilitar, solucionar e empoderar o cliente na tomada de decisões financeiras importantes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-lg border border-gray-200">
              <h3 className="heading-md mb-6">Nosso time de especialistas</h3>
              <p className="body-base text-gray-600 leading-relaxed mb-6">
                O time da B4 Soluções Financeiras é composto por profissionais com sólida trajetória em bancos de grande porte, instituições de fomento, empresas de consultoria e negócios em diferentes setores.
              </p>
              <p className="body-base text-gray-600 leading-relaxed">
                Essa vivência prática, somada a conhecimento técnico e visão estratégica, permite estruturar operações de crédito que equilibram prudência e ousadia, protegendo o cliente e, ao mesmo tempo, destravando oportunidades de crescimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Código de Ética e Governança */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="h-10 w-10 text-[var(--b4-saffron)]" />
              </div>
              <h2 className="heading-xl mb-6">
                Código de Ética e <span className="text-accent">Governança</span>
              </h2>
            </div>

            <div className="bg-gray-50 rounded-xl p-10 border border-gray-200">
              <p className="body-lg text-gray-600 leading-relaxed mb-6">
                O Grupo B4 possui um código de ética formal, que norteia a atuação de todas as suas empresas. Nossos princípios incluem transparência, integridade, responsabilidade, confidencialidade das informações e total alinhamento às normas do sistema financeiro.
              </p>
              <p className="body-lg text-gray-600 leading-relaxed">
                Adotamos práticas de governança que reforçam a independência da análise, a qualidade das recomendações e a sustentabilidade de longo prazo dos relacionamentos com clientes, colaboradores e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rede de Parceiros */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Handshake className="h-10 w-10 text-[var(--b4-saffron)]" />
              </div>
              <h2 className="heading-xl mb-6">
                Rede de <span className="text-accent">Parceiros</span>
              </h2>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <p className="body-lg text-gray-600 leading-relaxed mb-6">
                A B4 Soluções Financeiras construiu uma rede de relacionamentos que inclui bancos comerciais, bancos de desenvolvimento, cooperativas de crédito, empresas de tecnologia, escritórios de consultoria, fundos de investimento e associações de classe.
              </p>
              <p className="body-lg text-gray-600 leading-relaxed">
                Entendemos cada um desses agentes como parceiros estratégicos para gerar valor aos nossos clientes. Nosso papel é conectar interesses, estruturar operações e harmonizar expectativas, sempre com transparência e alinhamento de objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-[var(--b4-saffron)]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bem-vindo ao mundo das <span className="text-[var(--b4-gray)]">soluções financeiras</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Estamos prontos para conectar você às melhores oportunidades de crédito do mercado.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-[var(--b4-saffron)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            <Phone className="mr-2 h-5 w-5" />
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
