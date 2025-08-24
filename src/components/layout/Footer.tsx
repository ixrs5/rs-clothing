import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-neon-purple/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-4">
              FUTUREWEAR
            </h3>
            <p className="text-muted-foreground mb-4">
              Embrace the future of fashion with our cutting-edge designs and smart clothing technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-orbitron font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-neon-purple transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-neon-cyan" />
                <a href="mailto:callmers5.5@gmail.com" className="hover:text-neon-purple transition-colors">
                  callmers5.5@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-neon-cyan" />
                <a href="tel:01610785314" className="hover:text-neon-purple transition-colors">
                  01610785314
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-neon-cyan mt-1" />
                <span>Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neon-purple/20 text-center text-muted-foreground">
          <p>&copy; 2024 FutureWear. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Delivery charge: 140 BDT across all cities in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;