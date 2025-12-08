import React from 'react';

const HeroSection = ({ title, highlightWord, subtitle, text, backgroundImage, children }) => {
  const renderTitle = () => {
    if (!highlightWord) {
      return <h1 className="display-hero">{title}</h1>;
    }

    const parts = title.split(highlightWord);
    return (
      <h1 className="display-hero">
        {parts[0]}
        <span className="highlight-word">{highlightWord}</span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 z-0 hero-orange-overlay" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          {renderTitle()}
          {subtitle && (
            <p className="text-2xl text-white font-semibold mt-6 mb-4 leading-relaxed">
              {subtitle}
            </p>
          )}
          {text && (
            <p className="text-lg text-white mt-6 leading-relaxed opacity-95">
              {text}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
