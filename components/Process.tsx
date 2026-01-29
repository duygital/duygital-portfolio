
import React from 'react';

const STEPS = [
  { 
    number: "01", 
    title: "Gửi yêu cầu", 
    desc: "Chia sẻ ý tưởng, mục tiêu video và gửi footage thô để mình nắm bắt tinh thần dự án một cách nhanh chóng nhất."
  },
  { 
    number: "02", 
    title: "Dựng phim", 
    desc: "Mình tiến hành cắt ghép, chỉnh màu và làm âm thanh. Bạn có thể yêu cầu chỉnh sửa để đạt độ hoàn hảo tối đa."
  },
  { 
    number: "03", 
    title: "Bàn giao", 
    desc: "Sau khi bạn hài lòng 100%, mình sẽ xuất file chất lượng cao nhất (4K/ProRes) sẵn sàng để bạn đăng tải."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          <div className="relative w-full">
            <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1637249772031-df4717fc3f2d?q=80&w=1287?auto=format&fit=crop&q=80&w=1200" 
                alt="Quy trình làm việc chuyên nghiệp" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.85] pt-1">
                Quy trình làm việc
              </h2>
            </div>

            <div className="space-y-0">
              {STEPS.map((step, idx) => (
                <div 
                  key={idx} 
                  className="group relative border-t border-slate-100 py-12 md:py-16 flex flex-col md:flex-row md:items-start transition-all duration-500"
                >
                  <span className="absolute -left-4 -top-2 md:-top-4 text-[7rem] md:text-[9rem] font-black italic text-slate-100/80 pointer-events-none select-none tracking-tighter transition-all duration-500 group-hover:text-blue-600/5 group-hover:-translate-y-2">
                    {step.number}
                  </span>

                  <div className="relative z-10 flex flex-col md:flex-row w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0">
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {step.title}
                      </h3>
                    </div>

                    <div className="md:w-7/12">
                      <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-slate-100"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
