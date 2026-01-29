import React from 'react';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { WorkInfo } from './components/WorkInfo';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="gradient-mesh relative">
        <Hero />
        <Showreel />
        <About />
      </div>
      <main className="flex-grow">
        <Portfolio />
        <WorkInfo />
        <Pricing />
        <Process />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
