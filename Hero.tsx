import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border-electric-blue/30 text-electric-blue text-sm font-mono mb-6">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>Live Market Analysis</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Rafi Adehanafi
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-grey font-medium mb-4">
              Crypto Market Analyst & Strategic Researcher.
            </h2>
            <p className="text-lg text-slate-grey/80 mb-8 max-w-xl leading-relaxed">
              Specializing in Advanced Technical Analysis and Market Structure Logic. Deconstructing high-volatility assets with precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#analysis"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-electric-blue text-white font-medium hover:bg-electric-blue/90 transition-colors"
              >
                View Analysis
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg glass-panel text-white font-medium hover:bg-white/5 transition-colors"
              >
                Trading Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl border border-white/10 glass-panel overflow-hidden flex items-center justify-center"
          >
            {/* Abstract Candlestick Visual */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="relative w-full h-full p-8 flex items-end justify-between gap-2 opacity-80">
              {[...Array(20)].map((_, i) => {
                const height = Math.random() * 60 + 20;
                const isUp = Math.random() > 0.5;
                return (
                  <motion.div
                    key={i}
                    className="relative w-full flex flex-col items-center justify-end"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  >
                    {/* Wick */}
                    <div className={`absolute w-[1px] h-[140%] ${isUp ? 'bg-green-500' : 'bg-red-500'}`} />
                    {/* Body */}
                    <div className={`relative w-full rounded-sm ${isUp ? 'bg-green-500' : 'bg-red-500'}`} style={{ height: '60%' }} />
                  </motion.div>
                );
              })}
            </div>
            
            {/* Overlay UI elements to make it look like a dashboard */}
            <div className="absolute top-4 left-4 font-mono text-xs text-slate-grey">
              BTC/USD • 1D • BINANCE
            </div>
            <div className="absolute top-4 right-4 font-mono text-xs text-green-500">
              +2.45%
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-slate-grey/50 border-t border-white/10 pt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
