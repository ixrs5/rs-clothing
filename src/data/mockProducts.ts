import { Product } from '@/types';
import product1 from '@/assets/product1.jpg';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Cyber Punk Hoodie',
    price: 4999,
    originalPrice: 6999,
    description: 'Premium cotton hoodie with holographic accents and LED trim. Perfect for the modern tech enthusiast.',
    image: product1,
    images: [product1, product1, product1],
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    discount: 30
  },
  {
    id: '2',
    name: 'Neon Runner Jacket',
    price: 7999,
    originalPrice: 9999,
    description: 'Water-resistant jacket with reflective neon piping. Includes smart fabric technology.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'Jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    discount: 20
  },
  {
    id: '3',
    name: 'Holographic Tee',
    price: 2499,
    description: 'Color-shifting t-shirt with moisture-wicking technology.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: false,
    discount: 0
  },
  {
    id: '4',
    name: 'Tech Cargo Pants',
    price: 5999,
    description: 'Multi-pocket cargo pants with RFID-blocking technology.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'Pants',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    discount: 0
  },
  {
    id: '5',
    name: 'Aurora Dress',
    price: 8999,
    originalPrice: 11999,
    description: 'Elegant dress with color-changing fabric and integrated LED patterns.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'Dresses',
    sizes: ['S', 'M', 'L'],
    inStock: true,
    featured: true,
    discount: 25
  },
  {
    id: '6',
    name: 'Digital Wave Sneakers',
    price: 12999,
    description: 'Limited edition sneakers with programmable LED display.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'Footwear',
    sizes: ['7', '8', '9', '10', '11'],
    inStock: true,
    featured: true,
    discount: 0
  },
  {
    id: '7',
    name: 'Quantum Shirt',
    price: 3499,
    originalPrice: 4499,
    description: 'Smart casual shirt with temperature regulation.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: false,
    discount: 22
  },
  {
    id: '8',
    name: 'Neon Mesh Top',
    price: 2999,
    description: 'Breathable mesh top with UV-reactive patterns.',
    image: '/api/placeholder/400/500',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    category: 'Tops',
    sizes: ['S', 'M', 'L'],
    inStock: true,
    featured: false,
    discount: 0
  }
];