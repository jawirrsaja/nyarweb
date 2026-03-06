import React from 'react';
import { Mail, Send, Twitter, Activity, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              RAFI<span className="text-electric-blue">.</span>
            </a>
            <p className="text-slate-grey text-sm leading-relaxed max-w-sm mb-8">
              Crypto Market Analyst & Strategic Researcher. Deconstructing high-volatility assets with precision and logic.
            </p>
            
            {/* Live Market Status Aesthetic */}
            <div className="flex items-center space-x-4 p-4 rounded-xl glass-panel border border-white/5 w-max">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-grey font-mono uppercase tracking-wider">System Status</span>
                <span className="text-sm text-white font-medium">All Systems Operational</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4 text-slate-grey text-sm">
              <li><a href="#home" className="hover:text-electric-blue transition-colors">Home</a></li>
              <li><a href="#analysis" className="hover:text-electric-blue transition-colors">Market Analysis</a></li>
              <li><a href="#skills" className="hover:text-electric-blue transition-colors">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-electric-blue transition-colors">Portfolio</a></li>
              <li><a href="#community" className="hover:text-electric-blue transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@rafiadehanafi.com" className="flex items-center text-slate-grey hover:text-white transition-colors text-sm group">
                  <Mail className="w-4 h-4 mr-3 text-electric-blue group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-grey hover:text-white transition-colors text-sm group">
                  <Send className="w-4 h-4 mr-3 text-electric-blue group-hover:scale-110 transition-transform" />
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-grey hover:text-white transition-colors text-sm group">
                  <Twitter className="w-4 h-4 mr-3 text-electric-blue group-hover:scale-110 transition-transform" />
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-grey hover:text-white transition-colors text-sm group">
                  <Globe className="w-4 h-4 mr-3 text-electric-blue group-hover:scale-110 transition-transform" />
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-grey font-mono">
          <p>&copy; {currentYear} Rafi Adehanafi. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="flex items-center"><Activity className="w-3 h-3 mr-1 text-electric-blue" /> v2.4.1</span>
            <span>Latency: 24ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
