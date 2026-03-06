import React from 'react';
import { motion } from 'motion/react';
import { LineChart, BarChart2, Brain, Book, Code } from 'lucide-react';

const skills = [
  {
    title: 'Technical Analysis',
    icon: <LineChart className="w-6 h-6" />,
    description: 'Advanced charting, trend identification, and momentum oscillators.',
    level: 95,
  },
  {
    title: 'Market Structure (SMC/PA)',
    icon: <BarChart2 className="w-6 h-6" />,
    description: 'Smart Money Concepts, Price Action, Liquidity Sweeps, and Order Blocks.',
    level: 90,
  },
  {
    title: 'Trading Psychology',
    icon: <Brain className="w-6 h-6" />,
    description: 'Emotional discipline, risk management, and probabilistic thinking.',
    level: 85,
  },
  {
    title: 'Crypto Education',
    icon: <Book className="w-6 h-6" />,
    description: 'Simplifying complex market mechanics for retail traders.',
    level: 80,
  },
  {
    title: 'Web3 Beta Testing',
    icon: <Code className="w-6 h-6" />,
    description: 'Evaluating new DeFi protocols, DEXs, and blockchain infrastructure.',
    level: 75,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-grid border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Core Competencies
          </motion.h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            Dashboard overview of my analytical toolkit and market expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-electric-blue/10 rounded-xl text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <span className="font-mono text-sm text-slate-grey">{skill.level}%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-grey mb-6 h-12">
                {skill.description}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-electric-blue h-1.5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
