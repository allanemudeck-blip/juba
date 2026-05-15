import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577412647305-991150c7d163')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white italic"
          >
            Connect <span className="text-gold-500 not-italic">With Us</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            Our team of luxury property experts is ready to assist you. Whether you're looking to buy, rent, or invest, we are just a message away.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Contact info column */}
        <div className="space-y-12 lg:col-span-1">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-8 border-b-2 border-gold-500 pb-4 inline-block">Contact Information</h2>
            <div className="space-y-8 mt-8">
              <ContactItem 
                icon={MapPin} 
                title="Our Location" 
                detail="Forest Mall / Lugogo By-Pass, Kampala, Uganda" 
              />
              <ContactItem 
                icon={Phone} 
                title="Phone Number" 
                detail="+256 772 596660" 
              />
              <ContactItem 
                icon={Mail} 
                title="Email Address" 
                detail="info@jubaproperties.com" 
              />
              <ContactItem 
                icon={Clock} 
                title="Business Hours" 
                detail="Mon – Sat: 8:00 AM – 6:00 PM" 
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm space-y-6">
            <h3 className="text-xl font-serif font-bold text-brand-900">Direct Support</h3>
            <p className="text-gray-500 text-sm font-light">Need a quick response? Message our senior agents directly on WhatsApp for immediate property details and virtual tours.</p>
            <a 
              href="https://wa.me/256772596660" 
              target="_blank"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-sm shadow-lg hover:brightness-110 transition-all"
            >
              <MessageCircle size={24} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Message form column */}
        <div className="lg:col-span-2">
          <div className="bg-white p-12 shadow-2xl rounded-sm border border-gray-100">
             <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4 italic">Send A Message</h2>
             <p className="text-gray-500 font-light mb-10 leading-relaxed">Fill out the form below and one of our dedicated property specialists will reach out to you within 24 hours.</p>
             
             <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-800">Full Name</label>
                 <input type="text" placeholder="e.g. John Doe" className="w-full bg-gray-50 border-none px-6 py-4 rounded-sm focus:ring-2 focus:ring-gold-500/20" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-800">Email Address</label>
                 <input type="email" placeholder="e.g. john@example.com" className="w-full bg-gray-50 border-none px-6 py-4 rounded-sm focus:ring-2 focus:ring-gold-500/20" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-800">Phone Number</label>
                 <input type="tel" placeholder="+256..." className="w-full bg-gray-50 border-none px-6 py-4 rounded-sm focus:ring-2 focus:ring-gold-500/20" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-800">Subject</label>
                 <select className="w-full bg-gray-50 border-none px-6 py-4 rounded-sm focus:ring-2 focus:ring-gold-500/20 text-gray-500">
                   <option>Property Inquiry</option>
                   <option>Investment Advice</option>
                   <option>Management Request</option>
                   <option>Other</option>
                 </select>
               </div>
               <div className="md:col-span-2 space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-brand-800">Your Message</label>
                 <textarea rows={6} placeholder="How can we help you find your dream property?" className="w-full bg-gray-50 border-none px-6 py-4 rounded-sm focus:ring-2 focus:ring-gold-500/20"></textarea>
               </div>
               <div className="md:col-span-2 pt-4">
                 <button className="flex items-center justify-center gap-3 px-12 py-5 bg-brand-900 text-white font-bold rounded-sm uppercase tracking-[0.2em] text-xs hover:bg-gold-500 hover:text-brand-900 transition-all shadow-xl">
                   Send Message <Send size={16} />
                 </button>
               </div>
             </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 mt-24 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s]">
         {/* Placeholder for Interactive Map */}
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.049346618174!2d32.5978184!3d0.3283296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8637777777%3A0x177dbb8637777777!2sForest%20Mall%20Kampala!5e0!3m2!1sen!2sug!4v1715682000000!5m2!1sen!2sug" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
    </div>
  );
}

function ContactItem({ icon: Icon, title, detail }: { icon: any; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-gold-500/10 text-gold-600 flex items-center justify-center rounded-sm shrink-0 border border-gold-500/20">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-serif font-bold text-brand-900 text-lg mb-1">{title}</h4>
        <p className="text-gray-500 font-light text-sm leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}
