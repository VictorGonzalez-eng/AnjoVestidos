export interface Dress {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  color: string;
  size: string[];
}

export interface FilterOptions {
  category: string;
  color: string;
  priceRange: string;
}
