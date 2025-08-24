import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import { mockProducts } from '@/data/mockProducts';
import ProductCard from '@/components/product/ProductCard';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find(p => p.id === id);
  const relatedProducts = mockProducts.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')} className="btn-neon">
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart",
        variant: "destructive"
      });
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate('/')} className="hover:text-neon-purple">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/products')} className="hover:text-neon-purple">Products</button>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg glass-card">
              <img
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-neon-pink text-background px-3 py-1 rounded-md font-bold">
                  -{product.discount}%
                </div>
              )}
              
              {/* Image Navigation */}
              <button
                onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : product.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedImage(prev => prev < product.images.length - 1 ? prev + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? 'border-neon-purple shadow-neon' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-orbitron font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-neon-purple text-neon-purple" />
                  ))}
                  <span className="ml-2 text-muted-foreground">(4.8 · 127 reviews)</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-neon-purple">৳{discountedPrice.toFixed(0)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">৳{product.originalPrice}</span>
              )}
              {product.discount > 0 && (
                <span className="text-sm bg-neon-pink/20 text-neon-pink px-2 py-1 rounded">Save {product.discount}%</span>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full border-neon-purple/20">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent className="bg-background/95 backdrop-blur-lg border-neon-purple/20">
                  {product.sizes.map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="btn-neon"
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="btn-neon"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 btn-neon-primary"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="btn-neon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-neon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neon-purple/20">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-neon-cyan" />
                <p className="text-sm">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">140 BDT</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-neon-cyan" />
                <p className="text-sm">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% Safe</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-8 w-8 mx-auto mb-2 text-neon-cyan" />
                <p className="text-sm">Easy Returns</p>
                <p className="text-xs text-muted-foreground">7 Days</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mt-12">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto bg-muted/20">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6 glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Premium quality materials</li>
              <li>• Smart fabric technology</li>
              <li>• Temperature regulation</li>
              <li>• Machine washable</li>
              <li>• Sustainable production</li>
            </ul>
          </TabsContent>
          <TabsContent value="specs" className="mt-6 glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Material</p>
                <p className="text-muted-foreground">80% Cotton, 20% Polyester</p>
              </div>
              <div>
                <p className="font-medium">Care Instructions</p>
                <p className="text-muted-foreground">Machine wash cold</p>
              </div>
              <div>
                <p className="font-medium">Origin</p>
                <p className="text-muted-foreground">Made in Bangladesh</p>
              </div>
              <div>
                <p className="font-medium">Technology</p>
                <p className="text-muted-foreground">Smart Fiber 2.0</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6 glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <p className="text-muted-foreground">Reviews coming soon...</p>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-orbitron font-bold mb-8">You May Also Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;