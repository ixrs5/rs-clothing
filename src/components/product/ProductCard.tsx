import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className={cn("glass-card group overflow-hidden rounded-lg transition-all duration-300 hover:scale-105", className)}>
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-neon-pink text-background px-2 py-1 rounded-md text-sm font-bold">
              -{product.discount}%
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-neon-cyan/90 text-background px-2 py-1 rounded-md text-sm font-bold">
              Featured
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-orbitron font-semibold text-lg mb-1 hover:text-neon-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-neon-purple text-neon-purple" />
          ))}
          <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-neon-purple">
              ৳{discountedPrice.toFixed(0)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                ৳{product.originalPrice}
              </span>
            )}
          </div>
          
          <Link to={`/product/${product.id}`}>
            <Button size="icon" className="btn-neon hover:scale-110 transition-transform">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;