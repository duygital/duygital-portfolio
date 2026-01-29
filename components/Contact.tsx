
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-center text-slate-900 tracking-tighter leading-tight">
            Bắt đầu dự án video <br className="md:hidden" /> triệu view của bạn
          </h2>
        </div>

        <div className="bg-slate-50 rounded-[3rem] md:rounded-[4rem] flex flex-col lg:flex-row border border-slate-200 overflow-hidden relative shadow-sm">
          <div className="flex-1 p-8 md:p-14 lg:p-20 space-y-12">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-3">
                  <label className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Họ và Tên</label>
                  <input type="text" placeholder="Duygital Guest" className="bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-600 font-medium w-full" />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Email</label>
                  <input type="email" placeholder="email cua ban@...com" className="bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-600 font-medium w-full" />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Lời nhắn</label>
                <textarea rows={3} placeholder="Mô tả ngắn gọn về ý tưởng dự án..." className="bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-600 font-medium resize-none w-full"></textarea>
              </div>

              <div className="pt-4">
                <button className="w-full md:w-auto group relative bg-slate-900 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-md hover:shadow-xl">
                  <span className="relative z-10">Gửi yêu cầu ngay</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </form>
          </div>

          <div className="hidden lg:block lg:w-[450px] relative">
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Video Editing Session" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-all duration-1000 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
