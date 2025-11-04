import React, { useState, useEffect } from 'react';
import DressCard from '../components/DressCard';
import Filter from '../components/Filter';
import { Dress, FilterOptions } from '../types';

const Home: React.FC = () => {
  const [dresses, setDresses] = useState<Dress[]>([]);
  const [filteredDresses, setFilteredDresses] = useState<Dress[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    color: '',
    priceRange: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dresses from backend API
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    fetch(`${apiUrl}/api/dresses`)
      .then((response) => response.json())
      .then((data) => {
        setDresses(data);
        setFilteredDresses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dresses:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = dresses;

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((dress) => dress.category === filters.category);
    }

    // Apply color filter
    if (filters.color) {
      filtered = filtered.filter((dress) => dress.color === filters.color);
    }

    // Apply price range filter
    if (filters.priceRange) {
      if (filters.priceRange.includes('+')) {
        const min = parseInt(filters.priceRange.replace('+', ''));
        filtered = filtered.filter((dress) => dress.price >= min);
      } else {
        const [min, max] = filters.priceRange.split('-').map((v) => parseInt(v));
        filtered = filtered.filter((dress) => dress.price >= min && dress.price <= max);
      }
    }

    setFilteredDresses(filtered);
  }, [filters, dresses]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-xl text-gray-600">Carregando vestidos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nossos Vestidos
        </h1>
        <p className="text-lg text-gray-600">
          Descubra a coleção perfeita para você
        </p>
      </div>

      <Filter filters={filters} onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDresses.map((dress) => (
          <DressCard key={dress.id} dress={dress} />
        ))}
      </div>

      {filteredDresses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            Nenhum vestido encontrado com os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
