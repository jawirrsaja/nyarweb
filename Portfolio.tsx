import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, ExternalLink } from 'lucide-react';

const charts = [
  {
    id: 1,
    pair: 'BTC/USDT',
    type: 'Swing Trade',
    result: '+12.5%',
    image: 'https://picsum.photos/seed/btcsetup/800/600?blur=1',
    description: 'Wyckoff Accumulation Phase C Spring entry. Captured the markup phase to the next liquidity pool.',
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    type: 'Day Trade',
    result: '+4.2%',
    image: 'https://picsum.photos/seed/ethsetup/800/600?blur=1',
    description: 'London session liquidity sweep into a 15m order block. Quick scalp to the Asian high.',
  },
  {
    id: 3,
    pair: 'SOL/USDT',
    type: 'Position',
    result: '+45.0%',
    image: 'https://picsum.photos/seed/solsetup/800/600?blur=1',
    description: 'Macro breakout retest. Identified strong volume divergence on the daily timeframe.',
  },
  {
    id: 4,
    pair: 'LINK/USDT',
    type: 'Swing Trade',
    result: '+18.3%',
    image: 'https://picsum.photos/seed/linksetup/800/600?blur=1',
    description: 'Range bound trading. Bought the deviation below the range low with bullish divergence.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-grid border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Trading Portfolio
          </motion.h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            A gallery of successful setups with clear annotations on Market Structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {charts.map((chart, index) => (
            <motion.div
              key={chart.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 glass-panel"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={chart.image}
                  alt={`${chart.pair} Setup`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="p-3 bg-electric-blue text-white rounded-full hover:bg-electric-blue/80 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Top Labels */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur text-white text-xs font-mono rounded border border-white/10">
                    {chart.pair}
                  </span>
                  <span className="px-3 py-1 bg-electric-blue/20 backdrop-blur text-electric-blue text-xs font-mono rounded border border-electric-blue/30">
                    {chart.type}
                  </span>
                </div>
                
                {/* Result Label */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500/20 backdrop-blur text-green-400 text-xs font-mono font-bold rounded border border-green-500/30">
                    {chart.result}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-slate-grey leading-relaxed">
                  {chart.description}
                </p>
                <div className="mt-4 flex items-center text-electric-blue text-sm font-medium hover:text-white transition-colors cursor-pointer w-max">
                  View Full Chart <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
