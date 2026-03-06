/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import LiveTicker from './components/LiveTicker';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MarketAnalysis from './components/MarketAnalysis';
import Portfolio from './components/Portfolio';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
      <Navbar />
      <LiveTicker />
      <main>
        <Hero />
        <About />
        <Skills />
        <MarketAnalysis />
        <Portfolio />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
