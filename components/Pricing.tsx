
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden group border border-blue-400/20">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-[80px] group-hover:bg-white/20 transition-all duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Bạn muốn biết về chi phí?</h2>
            <p className="text-blue-100 mb-12 max-w-xl mx-auto text-lg md:text-xl opacity-90 font-medium leading-relaxed">
              Mỗi dự án đều có độ phức tạp riêng. Xem bảng giá tham khảo để có cái nhìn tổng quan nhất cho kế hoạch của bạn.
            </p>
            <a 
              href="https://duygital-pricing.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-50 hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Xem bảng giá chi tiết
            </a>
            <p className="mt-8 text-[11px] text-blue-200/60 font-black tracking-[0.2em] uppercase italic">
              * Luôn có hợp đồng rõ ràng • Lọc khách hàng phù hợp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
