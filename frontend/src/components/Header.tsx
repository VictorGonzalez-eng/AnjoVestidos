import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-pink-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Anjo Vestidos</h1>
          <nav className="space-x-6">
            <a href="#/" className="hover:text-pink-200 transition">Home</a>
            <a href="#/about" className="hover:text-pink-200 transition">Sobre Nós</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
