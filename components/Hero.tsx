
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full pt-32 pb-16 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Floating Blurred Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-400 rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[11px] font-black tracking-[0.2em] uppercase shadow-2xl mb-4 transform hover:scale-105 transition-transform cursor-default">
          <span className="w-2.5 h-2.5 bg-white rounded-full mr-2 animate-ping"></span>
          Freelance Video Editor
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[1.1] md:leading-[1.15]">
          Kể chuyện qua <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">từng khung hình</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed md:leading-loose">
          Dựng phim chuyên nghiệp tập trung vào <br className="hidden md:block" /> cảm xúc, nhịp điệu và ngôn ngữ điện ảnh để giữ chân người xem trung thành tuyệt đối.
        </p>

        <div className="pt-4">
           <a href="#portfolio" className="group relative bg-white border border-slate-200 px-10 py-5 rounded-full font-bold text-slate-900 shadow-lg shadow-slate-200 overflow-hidden transition-all active:scale-95 inline-block">
             <span className="relative z-10 transition-colors group-hover:text-white text-sm uppercase tracking-widest">Xem dự án của mình</span>
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
           </a>
        </div>
      </div>
    </section>
  );
};
