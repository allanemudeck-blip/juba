import { motion } from 'motion/react';
import { Search, ArrowRight, Home as HomeIcon, Users, Clock, Building, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROPERTIES, SERVICES, TESTIMONIALS } from '../data/mockData';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80"
            alt="Kampala Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 italic tracking-tight"
          >
            Find Your Perfect Property <br />
            <span className="text-gold-500 not-italic">With JUBA Properties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          >
            We help clients buy, sell, rent, and manage premium residential and commercial properties in Uganda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/properties"
              className="w-full md:w-auto px-10 py-4 bg-gold-500 text-brand-900 font-bold rounded-sm hover:bg-gold-400 transition-all shadow-xl group flex items-center justify-center gap-2"
            >
              View Properties
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full md:w-auto px-10 py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-brand-900 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Search Bar - Aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto glass-morphism p-2 rounded-lg shadow-2xl flex flex-col md:flex-row"
          >
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <SearchField placeholder="Location" icon={Search} />
              <SearchField placeholder="Property Type" icon={HomeIcon} />
              <SearchField placeholder="Price Range" icon={Building} />
            </div>
            <button className="bg-brand-800 text-gold-500 px-8 py-4 rounded-md font-bold hover:bg-brand-700 transition-colors m-1">
              Search
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-1 h-12 border border-white/20 rounded-full flex justify-center p-1">
            <motion.div className="w-full h-3 bg-gold-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div className="max-w-2xl">
              <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900">Featured Luxury Listings</h2>
              <div className="h-1 w-20 bg-gold-500 mt-6"></div>
            </div>
            <Link to="/properties" className="text-gold-600 font-bold hover:text-gold-700 flex items-center gap-2 group underline-offset-8 hover:underline">
              View All Properties <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 bg-brand-800 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
              alt="Professional Real Estate Team"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 bg-gold-500 p-8 rounded-lg shadow-xl z-20 hidden md:block">
              <p className="text-brand-900 font-serif text-2xl font-bold italic">"Trusted Excellence in <br /> Ugandan Real Estate"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">About JUBA Properties</span>
            <h2 className="text-4xl font-serif font-bold">Committed To Delivering Trusted Real Estate Solutions</h2>
            <p className="text-gray-300 leading-relaxed font-light">
              JUBA Properties is a leader in the Ugandan property market, specializing in premium residential and commercial brokerage. Our team brings years of expertise, professionalism, and transparency to every transaction.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <Stat label="Properties Sold" value="500+" />
              <Stat label="Happy Clients" value="1.2k" />
              <Stat label="Years Experience" value="10+" />
              <Stat label="Active Listings" value="120+" />
            </div>

            <Link
              to="/about"
              className="inline-block px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-sm hover:bg-gold-500 hover:text-brand-900 transition-all"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Tailored Solutions</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-800">Our Premium Services</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={service.id} service={service} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Looking For Your Next Property?</h2>
          <p className="text-xl text-gray-300 mb-10 font-light italic">
            "Let our professional team help you find the perfect investment, rental, or dream home."
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-gold-500 text-brand-900 font-black rounded-sm hover:bg-gold-400 transition-all shadow-2xl uppercase tracking-widest text-sm"
          >
            Talk To Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}

function SearchField({ placeholder, icon: Icon }: { placeholder: string; icon: any }) {
  return (
    <div className="flex items-center space-x-3 px-6 py-4 opacity-75 hover:opacity-100 transition-opacity">
      <Icon size={20} className="text-gold-600" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none focus:ring-0 text-brand-900 placeholder:text-gray-400 w-full font-medium"
      />
    </div>
  );
}

export function PropertyCard({ property, delay = 0 }: { property: any, delay?: number }) {
  const whatsappNumber = '+256772596660';
  const whatsappMessage = `Hello Juha Properties, I am interested in the property: ${property.title}. Thank you for your professional services. Please provide more details about this property.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      <Link to={`/properties/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-gold-500 text-brand-900 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
          {property.status}
        </div>
        <div className="absolute bottom-4 left-4 bg-brand-900/80 backdrop-blur-md text-white px-4 py-2 rounded-sm text-lg font-serif shadow-lg border-l-4 border-gold-500">
          {property.price}
        </div>
        
        {/* Quick WhatsApp Link on Image */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 bg-[#25D366] text-white p-2.5 rounded-full shadow-lg transform translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500 hover:scale-110 z-20"
          title="Inquire on WhatsApp"
        >
          <MessageCircle size={20} fill="white" />
        </a>
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block">{property.type}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-1.5 text-[#25D366] font-bold text-xs uppercase tracking-wider"
          >
            <MessageCircle size={14} fill="#25D366" /> Inquiry
          </a>
        </div>
        <h3 className="text-xl font-serif font-bold text-brand-900 mb-2 truncate group-hover:text-gold-600 transition-colors italic">
          {property.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex items-center gap-1">
          <Search size={14} /> {property.location}
        </p>
        
        <div className="flex justify-between items-center py-4 border-t border-gray-50 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <HomeIcon size={16} className="text-gold-500" /> <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Building size={16} className="text-gold-500" /> <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-gold-500" /> <span>{property.sqft} sqft</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Link
            to={`/properties/${property.id}`}
            className="py-3 bg-brand-900 text-white text-center rounded-sm text-[10px] font-bold hover:bg-brand-800 transition-all block uppercase tracking-widest border border-brand-900 hover:border-gold-500"
          >
            Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 bg-[#25D366] text-white text-center rounded-sm text-[10px] font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-md"
          >
            <MessageCircle size={14} fill="white" /> WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, delay }: { service: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-10 bg-white border border-gray-100 hover:border-gold-500/30 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-brand-800 text-gold-500 flex items-center justify-center rounded-sm mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gold-500 group-hover:text-brand-900">
        <HomeIcon size={32} />
      </div>
      <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">{service.title}</h3>
      <p className="text-gray-500 leading-relaxed font-light mb-6">
        {service.description}
      </p>
      <Link to="/services" className="text-gold-600 font-bold text-sm tracking-widest uppercase hover:text-gold-700">
        Explore 
      </Link>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h4 className="text-4xl font-serif font-bold text-gold-500 mb-1">{value}</h4>
      <p className="text-xs text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
  );
}

