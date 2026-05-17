import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="https://i.postimg.cc/Y24gtKBs/130392.jpg" 
                alt="JUBA Properties Logo" 
                className="h-16 w-auto brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the luxury real estate market in Uganda with professionalism, transparency, and excellence. Your trusted partner in property management and investment.
            </p>
            <div className="flex space-x-4">
              <socialLink href="#" icon={Facebook} />
              <socialLink href="#" icon={Instagram} />
              <socialLink href="#" icon={Twitter} />
              <socialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/properties" className="hover:text-gold-500 transition-colors">Featured Properties</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact Form</Link></li>
              <li><Link to="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Core Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Estate Agent Services</li>
              <li>Property Management</li>
              <li>Real Estate Investment</li>
              <li>Valuation & Consulting</li>
              <li>Virtual Tours</li>
              <li>Land Sales</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-gold-400">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold-500 shrink-0" />
                <span>Forest Mall / Lugogo By-Pass, Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gold-500 shrink-0" />
                <span>+256 772 596660</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gold-500 shrink-0" />
                <span>info@jubaproperties.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} JUBA Properties. All rights reserved. Designed with Excellence.</p>
        </div>
      </div>
    </footer>
  );
}

function socialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all text-white hover:text-brand-900"
    >
      <Icon size={18} />
    </a>
  );
}
