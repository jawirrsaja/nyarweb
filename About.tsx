import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            The Analyst
          </motion.h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-grey text-lg leading-relaxed"
          >
            <p>
              I am a 6th-semester Management student dedicated to deconstructing market complexities. My journey began with a fascination for financial systems and evolved into a deep dive into the high-volatility world of crypto assets.
            </p>
            <p>
              My unique selling proposition lies in bridging the gap between academic management principles and the raw, unfiltered price action of the cryptocurrency markets. I don't just look at charts; I analyze the underlying market structure and the psychology driving it.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center text-white font-medium">
                <BookOpen className="w-5 h-5 text-electric-blue mr-2" />
                Academic Rigor
              </div>
              <div className="flex items-center text-white font-medium">
                <Target className="w-5 h-5 text-electric-blue mr-2" />
                Precision Analysis
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-colors">
              <Zap className="w-8 h-8 text-electric-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">High Volatility</h3>
              <p className="text-sm text-slate-grey">Navigating extreme market conditions with calculated risk management.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-colors mt-8">
              <Target className="w-8 h-8 text-electric-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Structure Logic</h3>
              <p className="text-sm text-slate-grey">Identifying institutional footprints and liquidity zones.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
