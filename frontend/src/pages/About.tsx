import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre a Anjo Vestidos</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Nossa História</h2>
          <p className="text-gray-700 mb-4">
            A Anjo Vestidos nasceu do sonho de tornar toda mulher ainda mais especial através de vestidos únicos e sofisticados. 
            Com mais de 10 anos de experiência no mercado de moda feminina, nos especializamos em oferecer peças que combinam 
            elegância, conforto e qualidade.
          </p>
          <p className="text-gray-700">
            Cada vestido em nossa coleção é cuidadosamente selecionado para garantir que você encontre a peça perfeita 
            para qualquer ocasião, desde eventos casuais até as celebrações mais importantes da sua vida.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Nossa Missão</h2>
          <p className="text-gray-700">
            Nossa missão é fazer com que cada cliente se sinta única e especial. Acreditamos que um vestido não é apenas 
            uma peça de roupa, mas uma forma de expressar personalidade, confiança e beleza. Por isso, trabalhamos 
            incansavelmente para oferecer produtos de alta qualidade e um atendimento excepcional.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualidade</h3>
              <p className="text-gray-700">
                Selecionamos apenas os melhores tecidos e materiais para garantir durabilidade e conforto.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Elegância</h3>
              <p className="text-gray-700">
                Cada peça é escolhida pensando no estilo e sofisticação que toda mulher merece.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Atendimento</h3>
              <p className="text-gray-700">
                Nossa equipe está sempre pronta para ajudar você a encontrar o vestido perfeito.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Diversidade</h3>
              <p className="text-gray-700">
                Oferecemos opções para todos os estilos, ocasiões e tamanhos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Visite Nossa Loja</h2>
          <p className="text-gray-700 mb-4">
            Endereço: Rua das Flores, 123 - Centro, São Paulo - SP
          </p>
          <p className="text-gray-700">
            Horário de Funcionamento: Segunda a Sexta, 9h às 18h | Sábado, 9h às 14h
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
