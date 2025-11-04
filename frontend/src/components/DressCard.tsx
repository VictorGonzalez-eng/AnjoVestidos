import React from 'react';
import { Dress } from '../types';

interface DressCardProps {
  dress: Dress;
}

const DressCard: React.FC<DressCardProps> = ({ dress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-200">
        <img
          src={dress.image}
          alt={dress.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{dress.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{dress.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-600">
            R$ {dress.price.toFixed(2)}
          </span>
          <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
            {dress.category}
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="text-xs text-gray-500">Cor: {dress.color}</span>
          <span className="text-xs text-gray-500">|</span>
          <span className="text-xs text-gray-500">Tamanhos: {dress.size.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default DressCard;
