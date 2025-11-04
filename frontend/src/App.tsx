import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  // Simple routing based on URL hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === '/about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {currentPage === 'home' ? <Home /> : <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
