import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const mockData = [
  { symbol: 'BTC/USDT', price: '64,230.50', change: '+2.4%', up: true },
  { symbol: 'ETH/USDT', price: '3,450.20', change: '+1.8%', up: true },
  { symbol: 'SOL/USDT', price: '145.60', change: '-0.5%', up: false },
  { symbol: 'BNB/USDT', price: '580.10', change: '+0.2%', up: true },
  { symbol: 'XRP/USDT', price: '0.58', change: '-1.2%', up: false },
  { symbol: 'ADA/USDT', price: '0.45', change: '+3.1%', up: true },
  { symbol: 'AVAX/USDT', price: '35.20', change: '-2.4%', up: false },
  { symbol: 'LINK/USDT', price: '18.40', change: '+5.6%', up: true },
];

export default function LiveTicker() {
  return (
    <div className="w-full bg-black border-y border-white/10 overflow-hidden py-2 z-40 relative mt-16">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex space-x-8 px-4"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {/* Double the array for seamless looping */}
          {[...mockData, ...mockData].map((coin, index) => (
            <div key={index} className="flex items-center space-x-2 font-mono text-sm">
              <span className="text-slate-grey font-bold">{coin.symbol}</span>
              <span className="text-white">${coin.price}</span>
              <span className={`flex items-center ${coin.up ? 'text-green-500' : 'text-red-500'}`}>
                {coin.up ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {coin.change}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
