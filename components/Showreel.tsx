
import React from 'react';

export const Showreel: React.FC = () => {
  return (
    <section className="showreel w-full px-6 md:px-12 py-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-video w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-950 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/20 group">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
             <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-700 cursor-pointer shadow-2xl">
               <svg className="w-8 h-8 md:w-10 md:h-10 text-white fill-current translate-x-1" viewBox="0 0 24 24">
                 <path d="M8 5v14l11-7z" />
               </svg>
             </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2000" 
            alt="Showreel Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
          />
        </div>
      </div>
    </section>
  );
};
