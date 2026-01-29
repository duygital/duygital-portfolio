
import React from 'react';
import { Hero } from './components/Hero.tsx';
import { Showreel } from './components/Showreel.tsx';
import { About } from './components/About.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { WorkInfo } from './components/WorkInfo.tsx';
import { Process } from './components/Process.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { Chatbot } from './components/Chatbot.tsx';

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
