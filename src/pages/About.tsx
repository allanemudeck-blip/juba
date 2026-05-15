import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Trophy, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" alt="Office Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-500 font-bold tracking-[0.5em] uppercase text-sm mb-6 block"
           >
             Since 2014
           </motion.span>
           <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold italic tracking-tighter"
           >
             The Story of <span className="text-gold-500 not-italic">JUBA</span>
           </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6">Redefining Ugandan <br /> Real Estate Excellence</h2>
            <div className="h-1 w-20 bg-gold-500"></div>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              JUBA Properties was founded with a single vision: to bring international standards of professionalism and transparency to the Ugandan real estate market. 
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Based in the prestigious Forest Mall in Kampala, we have grown from a boutique agency into a leading multi-disciplinary property firm. We specialize in luxury residential sales, premium rentals, and commercial portfolio management.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-6">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold-500/10 text-gold-600 flex items-center justify-center rounded-sm">
                     <Shield size={24} />
                  </div>
                  <h4 className="font-serif font-bold text-xl">Integrity First</h4>
                  <p className="text-gray-500 text-sm font-light">Every transaction is handled with absolute honesty and legal clarity.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold-500/10 text-gold-600 flex items-center justify-center rounded-sm">
                     <Users size={24} />
                  </div>
                  <h4 className="font-serif font-bold text-xl">Client Centric</h4>
                  <p className="text-gray-500 text-sm font-light">Your goals dictate our strategies. We don't just sell, we advise.</p>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 mt-12">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Project 1" className="rounded-sm shadow-xl" />
               <img src="https://images.unsplash.com/photo-1628744276229-c83402778643" alt="Project 2" className="rounded-sm shadow-xl" />
            </div>
            <div className="space-y-4">
               <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" alt="Project 3" className="rounded-sm shadow-xl" />
               <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" alt="Project 4" className="rounded-sm shadow-xl" />
            </div>
            <div className="absolute -z-10 bg-gold-500/5 inset-0 rounded-full blur-3xl scale-125"></div>
         </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
               <Target size={48} className="text-gold-500 mb-8" />
               <h3 className="text-3xl font-serif font-bold text-brand-900 mb-6">Our Mission</h3>
               <p className="text-gray-500 font-light text-lg italic leading-relaxed">
                 "To provide trusted, transparent, and high-quality real estate solutions that empower individuals and businesses to achieve their property goals across Uganda and East Africa."
               </p>
            </motion.div>
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-brand-800 p-12 shadow-sm hover:shadow-2xl transition-all duration-500 text-white"
            >
               <Eye size={48} className="text-gold-400 mb-8" />
               <h3 className="text-3xl font-serif font-bold mb-6">Our Vision</h3>
               <p className="text-gray-300 font-light text-lg italic leading-relaxed">
                 "To become the most recognizable and trusted luxury real estate brand in East Africa, known for premium aesthetics and unmatched service reliability."
               </p>
            </motion.div>
         </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
         <h2 className="text-4xl font-serif font-bold text-brand-900 mb-16">The Values We Live By</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {['Integrity', 'Professionalism', 'Excellence', 'Transparency', 'Satisfaction'].map((val, i) => (
              <motion.div 
               key={val}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-white border border-gray-100 rounded-sm hover:border-gold-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-500/10 text-gold-600 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Award size={24} />
                </div>
                <h4 className="font-serif font-bold text-lg text-brand-900">{val}</h4>
              </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}
