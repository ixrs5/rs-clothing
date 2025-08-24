export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  images: string[];
  category: string;
  sizes: string[];
  inStock: boolean;
  featured: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  area?: string;
  orders?: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  deliveryCharge: number;
  couponCode?: string;
  discount?: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerInfo: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    area: string;
  };
  createdAt: Date;
}

export interface Coupon {
  code: string;
  discount: number;
  maxUses: number;
  usedBy: string[];
  expiresAt?: Date;
}