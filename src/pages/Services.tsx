import { motion } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { Home, Key, Settings, TrendingUp, Video, ClipboardCheck, Building2, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Home, Key, Settings, TrendingUp, Video, ClipboardCheck
};

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white italic tracking-tight"
          >
            Professional <span className="text-gold-500 not-italic">Real Estate Services</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Comprehensive solutions for buying, selling, and managing properties with excellence and integrity across Uganda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white p-12 border border-gray-100 hover:border-gold-500 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 group-hover:bg-gold-500/10 -translate-y-1/2 translate-x-1/2 rounded-full transition-colors duration-500"></div>
                
                <div className="w-20 h-20 bg-brand-800 text-gold-500 flex items-center justify-center rounded-sm mb-10 group-hover:bg-gold-500 group-hover:text-brand-900 transition-all duration-500 shadow-lg">
                  <Icon size={40} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6 group-hover:text-gold-600 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-light mb-8">
                  {service.description} We leverage our deep market knowledge and extensive network to ensure you receive the highest level of service in {service.title.toLowerCase()}.
                </p>
                
                <ul className="space-y-3 mb-10">
                  {['Expert Guidance', 'Market Analysis', 'Tailored Strategy'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs font-bold text-brand-800 tracking-wider uppercase">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="inline-block py-3 px-8 bg-brand-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-gold-500 hover:text-brand-900 transition-all border border-brand-900 hover:border-gold-500">
                  Get Started
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-gold-600 font-bold tracking-widest uppercase text-sm block mb-4">Why JUBA?</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-8 italic">The Gold Standard of <br /> Service Integrity</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
                Our approach combines traditional values with modern technology, ensuring that every client receives a personalized experience that exceeds expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <FeatureItem title="Verified Listings" desc="All properties are strictly vetted for authenticity." />
                 <FeatureItem title="Expert Advisors" desc="Our team handles multi-million dollar local deals." />
                 <FeatureItem title="Virtual Tours" desc="Explore premium homes from your smart device." />
                 <FeatureItem title="Investment Focus" desc="Strategic advice for long-term capital growth." />
              </div>
           </div>
           <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=75&w=1200&fm=webp" 
                alt="Corporate Architecture" 
                className="rounded-sm shadow-2xl relative z-10" 
                loading="lazy"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-gold-500/20 z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gold-500/5 rounded-full z-0"></div>
           </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2">
       <h4 className="font-serif font-bold text-brand-900 text-xl">{title}</h4>
       <p className="text-gray-500 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  );
}

