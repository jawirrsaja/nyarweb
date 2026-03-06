import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Users, Zap } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-32 relative bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-3xl border border-electric-blue/30 relative overflow-hidden"
        >
          {/* Decorative Grid inside the panel */}
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-electric-blue/20 rounded-2xl mb-8 border border-electric-blue/50">
              <Users className="w-8 h-8 text-electric-blue" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Don't Trade Alone.
            </h2>
            
            <p className="text-xl text-slate-grey mb-10 max-w-2xl mx-auto leading-relaxed">
              Join a community of dedicated traders. Get real-time market updates, discuss setups, and refine your edge in a collaborative environment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-electric-blue text-white font-bold text-lg hover:bg-electric-blue/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,102,255,0.4)]"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Join Telegram
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl glass-panel text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/20"
              >
                <Zap className="mr-2 w-5 h-5 text-electric-blue" />
                Discord Server
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-slate-grey font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>245 Traders Online Now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
