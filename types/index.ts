export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  name: string;
  tagline: string;
  deliveryTime: string;
  minOrder: number;
  isOpen: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}