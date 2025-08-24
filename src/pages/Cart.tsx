import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const deliveryCharge = 140;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/checkout');
    } else {
      navigate('/checkout');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-3xl font-orbitron font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-muted-foreground mb-8">Start shopping to add items to your cart</p>
          <Link to="/products">
            <Button size="lg" className="btn-neon-primary">
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">You have {items.length} item(s) in your cart</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => {
              const discountedPrice = item.product.discount 
                ? item.product.price * (1 - item.product.discount / 100)
                : item.product.price;

              return (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 flex gap-4"
                >
                  <Link to={`/product/${item.product.id}`}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg hover:scale-105 transition-transform"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-lg hover:text-neon-purple transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">Size: {item.size}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 btn-neon"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 btn-neon"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-neon-purple">
                          ৳{(discountedPrice * item.quantity).toFixed(0)}
                        </p>
                        {item.product.discount > 0 && (
                          <p className="text-sm text-muted-foreground line-through">
                            ৳{(item.product.price * item.quantity).toFixed(0)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => removeFromCart(item.product.id, item.size)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              );
            })}

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="btn-neon"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Link to="/products">
                <Button variant="outline" className="btn-neon">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="glass-card p-6">
              <h2 className="text-xl font-orbitron font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>৳{getTotalPrice().toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>৳{deliveryCharge}</span>
                </div>
                <div className="border-t border-neon-purple/20 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-neon-purple">৳{(getTotalPrice() + deliveryCharge).toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full btn-neon-primary"
                onClick={handleCheckout}
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Free delivery on orders above ৳5000
              </p>
            </div>

            {/* Coupon */}
            <div className="glass-card p-6 mt-4">
              <h3 className="font-semibold mb-3">Have a coupon?</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 bg-background border border-neon-purple/20 rounded-md focus:outline-none focus:border-neon-purple"
                />
                <Button className="btn-neon">Apply</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;