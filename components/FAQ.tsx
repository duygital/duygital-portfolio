
import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "Bạn chỉnh sửa những loại video nào?",
    answer: "Tôi chuyên chỉnh sửa video cho YouTube, social media và podcast — bao gồm talking head, short-form, long-form và motion đơn giản. Nếu là video cần giữ nhịp, giữ người xem, tôi làm được."
  },
  {
    question: "Thời gian giao hàng như thế nào?",
    answer: "Thông thường từ 24–72 giờ tùy độ dài và độ phức tạp. Có thể hỗ trợ gấp nếu đã chốt scope rõ ràng."
  },
  {
    question: "Có được yêu cầu chỉnh sửa không?",
    answer: "Có. Mỗi dự án bao gồm tối đa 2 vòng chỉnh sửa để đảm bảo video đúng mục tiêu ban đầu."
  },
  {
    question: "Tôi cần chuẩn bị những gì?",
    answer: "Chỉ cần footage gốc, guideline (nếu có) và reference mong muốn. Tôi sẽ xử lý phần dựng và nhịp hoàn chỉnh."
  },
  {
    question: "Nếu tôi không hài lòng thì sao?",
    answer: "Tôi sẽ chỉnh lại dựa trên feedback đã thống nhất. Chỉ nhận dự án nghiêm túc và làm đến khi đạt chất lượng cam kết."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq py-24 md:py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Cột trái: Title & CTA */}
          <div className="space-y-10 lg:sticky lg:top-32">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                Các câu hỏi <br /> thường gặp
              </h2>
            </div>

            {/* CTA Box - Horizontal Layout */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-base md:text-lg font-medium leading-relaxed opacity-90">
                  Bạn có câu hỏi nào không? <br />
                  Hãy cùng thảo luận ngay!
                </p>
                <a 
                  href="#contact" 
                  className="whitespace-nowrap inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  Đặt lịch hẹn
                </a>
              </div>
            </div>
          </div>

          {/* Cột phải: FAQ List */}
          <div className="faq-list space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className={`group overflow-hidden rounded-[2.5rem] border transition-all duration-500 ${
                  openIndex === idx 
                  ? 'border-blue-200 bg-white shadow-xl shadow-blue-500/5' 
                  : 'border-slate-100 bg-white/50 hover:bg-white hover:border-slate-200 hover:shadow-lg'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-8 md:p-10 flex justify-between items-center gap-6 focus:outline-none"
                >
                  <h3 className={`text-xl md:text-2xl font-black tracking-tight leading-tight transition-colors duration-300 ${
                    openIndex === idx ? 'text-blue-600' : 'text-slate-900'
                  }`}>
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    openIndex === idx 
                    ? 'bg-blue-600 border-blue-600 text-white rotate-45' 
                    : 'bg-slate-50 border-slate-100 text-slate-400'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 md:px-10 pb-8 md:pb-10">
                      <div className="h-[2px] w-12 bg-blue-100 mb-6"></div>
                      <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
