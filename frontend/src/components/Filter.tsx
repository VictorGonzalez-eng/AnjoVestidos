import React from 'react';
import { FilterOptions } from '../types';

interface FilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  const handleChange = (key: keyof FilterOptions, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoria
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Todas</option>
            <option value="Casual">Casual</option>
            <option value="Festa">Festa</option>
            <option value="Noiva">Noiva</option>
            <option value="Gala">Gala</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cor
          </label>
          <select
            value={filters.color}
            onChange={(e) => handleChange('color', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Todas</option>
            <option value="Branco">Branco</option>
            <option value="Preto">Preto</option>
            <option value="Vermelho">Vermelho</option>
            <option value="Azul">Azul</option>
            <option value="Rosa">Rosa</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Faixa de Preço
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleChange('priceRange', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Todos</option>
            <option value="0-200">Até R$ 200</option>
            <option value="200-500">R$ 200 - R$ 500</option>
            <option value="500-1000">R$ 500 - R$ 1000</option>
            <option value="1000+">Acima de R$ 1000</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
