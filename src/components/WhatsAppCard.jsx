import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const WhatsAppCard = ({ onClose, phoneNumber }) => {
  const message = encodeURIComponent('Olá, gostaria de falar sobre soluções financeiras');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white rounded-lg shadow-2xl border-2 border-[#f3ae3e] p-4 w-80">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="text-[#f3ae3e]" size={24} />
            <h3 className="font-semibold text-[#1a1a1a]">Fale Conosco</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Inicie uma conversa no WhatsApp e tire suas dúvidas sobre nossas soluções financeiras.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
        >
          Abrir WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsAppCard;
