import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, Grid, List as ListIcon } from 'lucide-react';
import { PROPERTIES } from '../data/mockData';
import { PropertyCard } from './Home';

export default function Properties() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesFilter = filter === 'All' || p.type === filter || p.status === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Apartment', 'Villa', 'Commercial', 'Land', 'For Sale', 'For Rent'];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white italic"
          >
            Exclusive <span className="text-gold-500 not-italic">Property Listings</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-light"
          >
            Explore our curated selection of premium real estate properties across the most sought-after locations in Uganda.
          </motion.p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center w-full lg:w-auto relative group">
              <Search className="absolute left-4 text-gray-400 group-focus-within:text-gold-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search by title or location..."
                className="w-full lg:w-[400px] pl-12 pr-4 py-3 bg-gray-50 border-none rounded-sm focus:ring-2 focus:ring-gold-500/20 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
              <Filter size={18} className="text-gold-600 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                    filter === cat 
                    ? 'bg-gold-500 text-brand-900 shadow-lg' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gold-500 hover:text-gold-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-12 min-h-[400px]">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} delay={idx * 0.05} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="text-gray-300 flex justify-center"><Search size={64} /></div>
            <h3 className="text-2xl font-serif text-brand-800">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters or search keywords.</p>
            <button 
              onClick={() => {setFilter('All'); setSearch('');}}
              className="px-6 py-2 bg-gold-500 text-brand-900 rounded-sm font-bold"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
