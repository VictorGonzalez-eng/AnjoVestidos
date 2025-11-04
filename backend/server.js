const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample dress data
const dresses = [
  {
    id: 1,
    name: 'Vestido Longo Elegante',
    description: 'Vestido longo perfeito para festas e eventos formais',
    price: 459.90,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    color: 'Preto',
    size: ['P', 'M', 'G']
  },
  {
    id: 2,
    name: 'Vestido Casual Floral',
    description: 'Vestido leve e confortável para o dia a dia',
    price: 189.90,
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    color: 'Rosa',
    size: ['P', 'M', 'G', 'GG']
  },
  {
    id: 3,
    name: 'Vestido de Noiva Clássico',
    description: 'Vestido de noiva tradicional com detalhes em renda',
    price: 2499.90,
    category: 'Noiva',
    image: 'https://images.unsplash.com/photo-1519657337289-077653f724ed?w=500',
    color: 'Branco',
    size: ['P', 'M', 'G']
  },
  {
    id: 4,
    name: 'Vestido de Gala Vermelho',
    description: 'Vestido sofisticado para eventos especiais',
    price: 899.90,
    category: 'Gala',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
    color: 'Vermelho',
    size: ['P', 'M', 'G']
  },
  {
    id: 5,
    name: 'Vestido Midi Azul',
    description: 'Vestido midi elegante e versátil',
    price: 329.90,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500',
    color: 'Azul',
    size: ['P', 'M', 'G', 'GG']
  },
  {
    id: 6,
    name: 'Vestido Casual Listrado',
    description: 'Vestido casual com estampa listrada moderna',
    price: 149.90,
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
    color: 'Branco',
    size: ['P', 'M', 'G']
  },
  {
    id: 7,
    name: 'Vestido Longo Rosa',
    description: 'Vestido longo romântico para ocasiões especiais',
    price: 549.90,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1612336307429-8280ab0f45d5?w=500',
    color: 'Rosa',
    size: ['P', 'M', 'G']
  },
  {
    id: 8,
    name: 'Vestido de Gala Preto',
    description: 'Vestido de gala sofisticado e atemporal',
    price: 799.90,
    category: 'Gala',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
    color: 'Preto',
    size: ['P', 'M', 'G', 'GG']
  },
  {
    id: 9,
    name: 'Vestido Casual Azul',
    description: 'Vestido casual confortável para uso diário',
    price: 179.90,
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500',
    color: 'Azul',
    size: ['P', 'M', 'G']
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API Anjo Vestidos' });
});

app.get('/api/dresses', (req, res) => {
  res.json(dresses);
});

app.get('/api/dresses/:id', (req, res) => {
  const dress = dresses.find(d => d.id === parseInt(req.params.id));
  if (dress) {
    res.json(dress);
  } else {
    res.status(404).json({ message: 'Vestido não encontrado' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
