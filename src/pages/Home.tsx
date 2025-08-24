import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/data/mockProducts';
import heroBanner from '@/assets/hero-banner.jpg';

const Home = () => {
  const featuredProducts = mockProducts.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 animate-pulse" />
        <img src={heroBanner} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
              <span className="text-neon bg-gradient-neon bg-clip-text text-transparent">
                FUTURE OF FASHION
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-rajdhani">
              Discover clothing that adapts to your lifestyle with smart technology
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="btn-neon-primary group">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="btn-neon">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4 text-neon-purple">
              Why Choose FutureWear?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the perfect blend of style and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Smart Fabrics",
                description: "Temperature-regulating materials that adapt to your environment"
              },
              {
                icon: Zap,
                title: "LED Integration",
                description: "Customizable LED patterns for unique self-expression"
              },
              {
                icon: Shield,
                title: "Durability",
                description: "Built to last with reinforced stitching and premium materials"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center group hover:border-neon-purple/50 transition-colors"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-neon-cyan group-hover:animate-glow-pulse" />
                <h3 className="text-xl font-orbitron font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-cyber">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular futuristic designs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="btn-neon-primary">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 border-t border-neon-purple/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <Truck className="h-8 w-8 text-neon-cyan" />
            <div>
              <p className="text-lg font-semibold">Fast Delivery Across Bangladesh</p>
              <p className="text-muted-foreground">Fixed rate: 140 BDT to any city</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;