# AnjoVestidos
Um site simples de exposição de produtos. De maneira como se fosse um blog.

## 📋 Descrição
Site de exposição de vestidos com funcionalidades de filtros e informações sobre a loja. O projeto segue uma arquitetura com frontend em React e backend em Node.js.

## 🏗️ Estrutura do Projeto
```
webpage-vestidos/
│
├── frontend/          # React com TypeScript
│   ├── public/
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   └── App.tsx
│   ├── Dockerfile
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/           # Node.js com Express
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
└── docker-compose.yml  # Orquestração dos containers
```

## 🚀 Como Executar

### Usando Docker Compose (Recomendado)
```bash
docker-compose up --build
```

Acesse:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Desenvolvimento Local

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

## 🎨 Funcionalidades

- **Catálogo de Vestidos**: Visualização de todos os vestidos disponíveis
- **Filtros**: Filtrar por categoria, cor e faixa de preço
- **Sobre Nós**: Informações sobre a loja
- **Design Responsivo**: Interface adaptável para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Create React App

### Backend
- Node.js
- Express
- CORS

### DevOps
- Docker
- Docker Compose

## 📝 API Endpoints

- `GET /api/dresses` - Lista todos os vestidos
- `GET /api/dresses/:id` - Busca um vestido específico

## 👥 Contribuindo
Faça um fork do projeto e envie suas contribuições via pull request.

## 📄 Licença
Este projeto é de uso livre para fins educacionais.
