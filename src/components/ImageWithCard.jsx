import React from 'react';

const ImageWithCard = ({ image, title, text, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={image}
          alt={title || ''}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        {title && <h3 className="heading-md mb-4">{title}</h3>}
        <p className="body-lg text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default ImageWithCard;
