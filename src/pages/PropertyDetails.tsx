import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Bath, BedDouble, Square, Check, ArrowLeft, MessageCircle, Phone, Mail } from 'lucide-react';
import { PROPERTIES } from '../data/mockData';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-serif">Property Not Found</h2>
        <Link to="/properties" className="mt-4 text-gold-600 underline">Back to All Properties</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* Top Gallery Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <Link to="/properties" className="inline-flex items-center gap-2 mb-6 text-brand-800 hover:text-gold-600 transition-colors bg-white px-4 py-2 rounded-sm shadow-sm font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Listings
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] md:h-[600px]">
          <div className="md:col-span-2 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-full object-cover" 
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 hidden md:grid">
            {property.gallery.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/20 shadow-xl">
                <img 
                  src={img} 
                  alt={`${property.title} gallery ${i}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            ))}
            {!property.gallery[1] && (
               <div className="rounded-lg overflow-hidden border border-white/20 shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=75&w=800&fm=webp" 
                    alt="placeholder" 
                    className="w-full h-full object-cover blur-sm" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-900/40 flex items-center justify-center text-white font-serif text-xl italic">Premium View</div>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-2 block">{property.type} • {property.status}</span>
                <h1 className="text-4xl font-serif font-bold text-brand-900 tracking-tight italic">{property.title}</h1>
                <p className="text-gray-500 flex items-center gap-2 mt-2">
                  <MapPin size={18} className="text-gold-500" /> {property.location}
                </p>
              </div>
              <div className="text-3xl font-serif font-bold text-brand-800 bg-gold-500/10 px-6 py-4 rounded-sm border-l-4 border-gold-500">
                {property.price}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-50 mb-10">
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Bedrooms</p>
                <div className="flex justify-center items-center gap-2 text-brand-800 font-bold">
                  <BedDouble size={18} className="text-gold-500" /> {property.beds}
                </div>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Bathrooms</p>
                <div className="flex justify-center items-center gap-2 text-brand-800 font-bold">
                  <Bath size={18} className="text-gold-500" /> {property.baths}
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Square Feet</p>
                <div className="flex justify-center items-center gap-2 text-brand-800 font-bold">
                  <Square size={18} className="text-gold-500" /> {property.sqft}
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {property.description} This exquisite property offers unparalleled luxury and comfort in one of Kampala's most prestigious neighborhoods. Designed with sophistication in mind, every detail has been carefully curated to provide a world-class living experience.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-8 pb-4 border-b border-gray-50">Property Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="bg-gold-500/20 p-1 rounded-full">
                    <Check size={16} className="text-gold-600" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Form */}
        <div className="space-y-8">
          <div className="bg-brand-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-2xl font-serif font-bold mb-8 relative z-10 italic">Inquire About This Property</h3>
            
            <form className="space-y-5 relative z-10">
              <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-sm py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-sm py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-sm py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-sm py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors"></textarea>
              <button type="button" className="w-full py-4 bg-gold-500 text-brand-900 font-bold rounded-sm hover:bg-gold-400 transition-all uppercase tracking-widest text-sm shadow-lg active:scale-95">
                Send Inquiry
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-brand-900 px-2 text-gray-500">Or chat via</span>
                </div>
              </div>

              <a
                href={`https://wa.me/256772596660?text=${encodeURIComponent(`Hello Juha Properties, I am interested in the property: ${property.title}. Thank you for your professional services. Please provide more details about this property.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-white font-bold rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-xl active:scale-95"
              >
                <MessageCircle size={20} fill="white" /> WhatsApp Inquiry
              </a>
            </form>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex items-center gap-6">
            <img 
              src={property.agent.image} 
              alt={property.agent.name} 
              className="w-20 h-20 rounded-full object-cover border-4 border-gold-500/20" 
              loading="lazy"
            />
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Listing Agent</p>
              <h4 className="text-xl font-serif font-bold text-brand-900">{property.agent.name}</h4>
              <div className="flex gap-4 mt-3">
                <a href="#" className="text-gold-600 hover:text-gold-700"><Phone size={18} /></a>
                <a href="#" className="text-gold-600 hover:text-gold-700"><MessageCircle size={18} /></a>
                <a href="#" className="text-gold-600 hover:text-gold-700"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
