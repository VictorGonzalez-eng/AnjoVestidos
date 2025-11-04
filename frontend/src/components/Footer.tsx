import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anjo Vestidos</h3>
            <p className="text-gray-400">
              Sua loja de vestidos dos sonhos. Encontre o vestido perfeito para cada ocasião.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-gray-400">Email: contato@anjovestidos.com</p>
            <p className="text-gray-400">Telefone: (11) 1234-5678</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário</h4>
            <p className="text-gray-400">Segunda a Sexta: 9h - 18h</p>
            <p className="text-gray-400">Sábado: 9h - 14h</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Anjo Vestidos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
