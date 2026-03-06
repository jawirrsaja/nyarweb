import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, BookOpen, Search, ArrowRight } from 'lucide-react';

const updates = [
  {
    title: 'Weekly BTC Outlook',
    category: 'High-Level Analysis',
    icon: <TrendingUp className="w-5 h-5 text-electric-blue" />,
    date: 'Oct 24, 2023',
    description: 'Analyzing the current macro structure of Bitcoin. Key liquidity zones and potential invalidation levels for the upcoming week.',
    image: 'https://picsum.photos/seed/btcchart/800/400?blur=2',
  },
  {
    title: 'Technical Deep Dive',
    category: 'Education',
    icon: <BookOpen className="w-5 h-5 text-electric-blue" />,
    date: 'Oct 20, 2023',
    description: 'Understanding Fair Value Gaps (FVG) and how they act as magnets for price. A comprehensive guide to trading imbalances.',
    image: 'https://picsum.photos/seed/fvgchart/800/400?blur=2',
  },
  {
    title: 'Altcoin Spotlight',
    category: 'Mid-Cap Analysis',
    icon: <Search className="w-5 h-5 text-electric-blue" />,
    date: 'Oct 18, 2023',
    description: 'Deep dive into $SOL market structure. Identifying accumulation phases and potential breakout targets based on volume profiles.',
    image: 'https://picsum.photos/seed/altcoinchart/800/400?blur=2',
  },
];

export default function MarketAnalysis() {
  return (
    <section id="analysis" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
            >
              The Media Hub
            </motion.h2>
            <p className="text-slate-grey text-lg max-w-2xl">
              Weekly insights, educational content, and deep dives into market structure.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-electric-blue hover:text-white transition-colors font-medium">
            View All Reports <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-electric-blue/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs font-mono rounded backdrop-blur-md">
                    {update.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-slate-grey text-sm font-mono">
                    {update.icon}
                    <span>{update.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {update.title}
                </h3>
                <p className="text-sm text-slate-grey leading-relaxed mb-6">
                  {update.description}
                </p>
                <div className="flex items-center text-electric-blue font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Read Analysis <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-electric-blue hover:text-white transition-colors font-medium">
            View All Reports <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
