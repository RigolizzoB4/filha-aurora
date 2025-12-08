import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ImageWithCard from '../components/ImageWithCard';
import { CheckCircle, Target, Award, Users, TrendingUp, Shield, Briefcase, Home as HomeIcon, DollarSign, Globe, Zap, Phone } from 'lucide-react';

const Home = () => {
  const diferenciais = [
    {
      icon: <Target className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Atendimento consultivo especializado',
      description: 'Realizamos diagnóstico técnico e financeiro completo, entendendo o momento do cliente, o fluxo de caixa, as garantias e os objetivos.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Parecer de viabilidade e visão externa',
      description: 'Entregamos leitura clara e estruturada da situação financeira e das alternativas disponíveis, com prós e contras de cada caminho.'
    },
    {
      icon: <Award className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Melhor recomendação de linha de crédito',
      description: 'Comparamos propostas de diferentes instituições, avaliando taxas, prazos, indexadores e garantias.'
    },
    {
      icon: <Users className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Acesso a múltiplas instituições',
      description: 'Trabalhamos com bancos comerciais, cooperativas, empresas de tecnologia, fundos e investidores.'
    },
    {
      icon: <Shield className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Ética, transparência e governança',
      description: 'Código de ética formal e práticas de governança orientam todas as decisões com foco no longo prazo.'
    },
    {
      icon: <Zap className="h-10 w-10 text-[var(--b4-saffron)]" />,
      title: 'Atuação híbrida, presencial e digital',
      description: 'Atendemos presencialmente a partir de Campinas e digitalmente em todo o Brasil.'
    }
  ];

  const solucoes = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Capital de giro e antecipação de recebíveis',
      link: '/servicos/capital-giro'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Financiamento BNDES',
      description: 'Máquinas, equipamentos e linhas com fundos garantidores',
      link: '/servicos/bndes'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Operações de câmbio e comércio exterior',
      link: '/servicos/cambio'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Financiamento à inovação (FINEP)',
      description: 'Pesquisa, desenvolvimento e linhas de fomento',
      link: '/servicos/finep'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Capital de investimento',
      description: 'Expansão e modernização',
      link: '/servicos/capital-investimento'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Consórcios',
      link: '/servicos/consorcio'
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: 'Home equity',
      link: '/servicos/home-equity'
    }
  ];

  const passos = [
    {
      numero: '01',
      title: 'Primeiro contato',
      description: 'O cliente chega até a B4 por indicação, relacionamento de mercado, associações de classe ou canais digitais.'
    },
    {
      numero: '02',
      title: 'Diagnóstico técnico e financeiro',
      description: 'Coletamos informações sobre faturamento, fluxo de caixa, endividamento, garantias e objetivos da operação.'
    },
    {
      numero: '03',
      title: 'Parecer de viabilidade',
      description: 'Apresentamos análise técnica com os possíveis caminhos financeiros, riscos e oportunidades.'
    },
    {
      numero: '04',
      title: 'Recomendação da solução financeira',
      description: 'Comparamos produtos, instituições, taxas e prazos, indicando a melhor estrutura de crédito.'
    },
    {
      numero: '05',
      title: 'Intermediação com instituições',
      description: 'Conduzimos o relacionamento com bancos, cooperativas e fundos, organizando documentação.'
    },
    {
      numero: '06',
      title: 'Formalização e liberação',
      description: 'Auxiliamos na análise dos contratos e acompanhamos a liberação efetiva do crédito.'
    },
    {
      numero: '07',
      title: 'Acompanhamento pós-contratação',
      description: 'Mantemos o relacionamento para avaliar desempenho e identificar novas oportunidades.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Conectando você ao melhor crédito."
        highlightWord="crédito"
        subtitle="Tradição, tecnologia e soluções financeiras inteligentes para negócios."
        text="A B4 Soluções Financeiras conecta empresas e pessoas às melhores oportunidades de captação de recursos, de forma ágil e estratégica, com ética e excelência em todas as etapas. Atuamos ao lado do cliente antes, durante e depois da operação, para que cada decisão financeira seja segura, sustentável e alinhada ao que o negócio realmente precisa."
        backgroundImage="/aperto.jpg"
      >
        <div className="mt-8 flex gap-4">
          <Link to="/contato" className="inline-flex items-center bg-[var(--b4-saffron)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e09d2d] transition-all">
            Fale com um especialista
          </Link>
          <Link to="/servicos/capital-giro" className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white hover:bg-white/20 transition-all">
            Conheça nossas soluções
          </Link>
        </div>
      </HeroSection>

      {/* Sobre o Grupo B4 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-xl mb-6">
              Grupo <span className="text-accent">B4</span>
            </h2>
            <p className="body-lg text-gray-600 leading-relaxed mb-6">
              O Grupo B4 nasce da união de sócios com décadas de experiência no mercado financeiro, em fomento e gestão de investimentos. A partir de Campinas, no estado de São Paulo, o grupo atua em todo o território nacional, combinando tradição, tecnologia e governança sólida para potencializar o sucesso financeiro de seus clientes.
            </p>
            <p className="body-lg text-gray-600 leading-relaxed">
              A B4 Soluções Financeiras é a empresa do grupo dedicada à assessoria e à intermediação de crédito, conectando empresas e pessoas físicas às melhores oportunidades de captação de recursos no sistema financeiro e no mercado de capitais.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a B4 Soluções Financeiras */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ImageWithCard
            image="/assinatura.png"
            title="Quem é a B4 Soluções Financeiras"
            text="A B4 Soluções Financeiras é uma assessoria independente especializada em captação de crédito e estruturação de soluções financeiras sob medida. Nosso papel é entender em profundidade a realidade de cada cliente, mapear as principais alternativas disponíveis no mercado e estruturar operações com a melhor combinação de produto, prazo, taxa de juros e garantias. Atuamos junto a bancos, cooperativas de crédito, financeiras, empresas de tecnologia e fundos de investimento, sempre com total compromisso com a ética, a transparência e o resultado para o cliente."
          />
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-xl mb-4">
              Por que escolher a <span className="text-accent">B4</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="body-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Atendemos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-xl mb-4">
              Quem <span className="text-accent">atendemos</span>
            </h2>
            <p className="body-lg text-gray-600">Empresas e pessoas que levam seus projetos a sério.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-lg mb-6">Para empresas</h3>
              <p className="body-base text-gray-600 mb-6">
                Atendemos empresas com faturamento anual a partir de um milhão de reais, em segmentos como indústria, construção civil, comércio, agronegócio, importadoras, exportadoras e tecnologia.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Capital de giro para o dia a dia</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Antecipação de recebíveis</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Crédito para máquinas e equipamentos</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Financiamento de projetos de expansão</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Operações de câmbio e comércio exterior</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-lg mb-6">Para pessoas físicas</h3>
              <p className="body-base text-gray-600 mb-6">
                Atendemos pessoas físicas de perfil patrimonial intermediário e elevado, muitas vezes sócias de empresas, que buscam:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Crédito com garantia de imóvel já quitado</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Operações de home equity para reorganização de dívidas</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[var(--b4-saffron)] mt-1 mr-3 flex-shrink-0" />
                  <p className="body-base text-gray-600">Consórcios para aquisição planejada de imóveis e veículos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-xl mb-4">
              Nossas principais <span className="text-accent">soluções financeiras</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solucoes.map((solucao, index) => (
              <Link
                key={index}
                to={solucao.link}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--b4-saffron)] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-[var(--b4-saffron)] group-hover:bg-[var(--b4-saffron)] group-hover:text-white transition-colors">
                  {solucao.icon}
                </div>
                <h3 className="heading-sm mb-2 group-hover:text-[var(--b4-saffron)] transition-colors">
                  {solucao.title}
                </h3>
                {solucao.description && (
                  <p className="body-sm text-gray-600">{solucao.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-xl mb-4">
              Como funciona a nossa <span className="text-accent">assessoria</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {passos.map((passo, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--b4-saffron)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm mb-2">{passo.title}</h3>
                    <p className="body-base text-gray-600">{passo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-[var(--b4-saffron)]">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para conversar sobre <span className="text-[var(--b4-gray)]">crédito?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Se você deseja estruturar uma operação de crédito com segurança, estratégia e apoio especializado, fale com a B4 Soluções Financeiras.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-[var(--b4-saffron)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            <Phone className="mr-2 h-5 w-5" />
            Fale com um especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
