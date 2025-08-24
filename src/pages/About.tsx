import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-neon-purple">
            About FutureWear
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by a passionate fashion innovator, FutureWear represents the cutting edge of fashion technology. 
            Our founder's vision combines traditional craftsmanship with futuristic design, creating clothing that 
            adapts to your lifestyle while making a bold statement about the future of fashion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We believe fashion should be more than just clothing - it should be an experience. 
              Our smart fabrics and LED-integrated designs represent a new era where technology 
              enhances personal expression.
            </p>
            <p className="text-muted-foreground">
              Every piece in our collection is carefully crafted with attention to detail, 
              ensuring both cutting-edge style and lasting quality. We're committed to pushing 
              boundaries while maintaining the highest standards of craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-2 text-neon-cyan" />
                <h3 className="font-semibold">Innovation</h3>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-2 text-neon-purple" />
                <h3 className="font-semibold">Quality</h3>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-2 text-neon-pink" />
                <h3 className="font-semibold">Technology</h3>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-2 text-neon-cyan" />
                <h3 className="font-semibold">Global</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;