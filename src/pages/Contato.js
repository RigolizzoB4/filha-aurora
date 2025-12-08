import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    solucao: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      solucao: '',
      mensagem: ''
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Fale com a B4 Soluções Financeiras"
        highlightWord="B4"
        text="Se você deseja entender quais soluções financeiras fazem mais sentido para o seu momento, para sua empresa ou para o seu patrimônio, fale com a nossa equipe. Teremos prazer em analisar o seu caso com cuidado e apresentar caminhos que sejam realmente viáveis."
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600"
      />

      {/* Formulário de Contato */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-xl mb-4">
                Envie sua <span className="text-accent">mensagem</span>
              </h2>
              <p className="body-lg text-gray-600">
                Quanto mais detalhes você puder compartilhar sobre a sua necessidade, melhor será a qualidade da nossa primeira análise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block body-base font-semibold text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--b4-saffron)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block body-base font-semibold text-gray-700 mb-2">
                    Nome da empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--b4-saffron)] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block body-base font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--b4-saffron)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block body-base font-semibold text-gray-700 mb-2">
                    Telefone ou WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--b4-saffron)] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="solucao" className="block body-base font-semibold text-gray-700 mb-2">
                  Tipo de solução de interesse
                </label>
                <select
                  id="solucao"
                  name="solucao"
                  value={formData.solucao}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--b4-saffron)] focus:border-transparent transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="capital-giro">Capital de giro e antecipação de recebíveis</option>
                  <option value="bndes">Financiamento BNDES</option>
                  <option value="cambio">Operações de câmbio e comércio exterior</option>
                  <option value="finep">Financiamento à inovação (FINEP)</option>
                  <option value="capital-investimento">Capital de investimento</option>
                  <option value="consorcio">Consórcios</option>
                  <option value="home-equity">Home equity</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="mensagem" className="block body-base font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--b4-saffron)] focus:border-transparent transition-all resize-none"
                  placeholder="Descreva sua necessidade com o máximo de detalhes possível..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--b4-saffron)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e09d2d] transition-all"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Canais Diretos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-xl mb-4">
              Outros canais de <span className="text-accent">contato</span>
            </h2>
            <p className="body-lg text-gray-600">
              Além do formulário, você pode falar diretamente com a nossa equipe pelos seguintes canais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[var(--b4-saffron)]" />
              </div>
              <h3 className="heading-sm mb-4">Endereço</h3>
              <p className="body-base text-gray-600 leading-relaxed">
                Avenida Coronel Silva Telles, 1002<br />
                7º andar - Cambuí<br />
                Campinas - SP
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-[var(--b4-saffron)]" />
              </div>
              <h3 className="heading-sm mb-4">Telefone / WhatsApp</h3>
              <p className="body-base text-gray-600 leading-relaxed">
                <a href="tel:+551937514300" className="hover:text-[var(--b4-saffron)] transition-colors">
                  (19) 3751-4300
                </a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-[var(--b4-saffron)]" />
              </div>
              <h3 className="heading-sm mb-4">E-mail</h3>
              <p className="body-base text-gray-600 leading-relaxed">
                <a href="mailto:solucoes.financeiras@b4.com.br" className="hover:text-[var(--b4-saffron)] transition-colors">
                  solucoes.financeiras@b4.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-gray-100">
        <div className="container-custom py-0">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Localização B4 Soluções Financeiras"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av.%20Coronel%20Silva%20Teles%2C%201002%20-%20Cambu%C3%AD%2C%20Campinas%20-%20SP&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
