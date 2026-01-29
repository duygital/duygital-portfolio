
import React from 'react';

const TESTIMONIALS = [
  {
    name: "John Smith",
    role: "Content Creator @ Global Studio",
    avatar: "https://i.pravatar.cc/150?u=john",
    content: "Chất lượng dựng phim vượt xa mong đợi. Duygital không chỉ cắt ghép, họ thực sự hiểu cách dẫn dắt câu chuyện để giữ chân khán giả qua từng mối cắt tinh tế.",
    featured: false
  },
  {
    name: "Maxxz",
    role: "Founder of E-com Agency",
    avatar: "https://i.pravatar.cc/150?u=maxxz",
    content: "Đội ngũ đã hiện thực hóa tầm nhìn của chúng tôi một cách hoàn hảo. Các video social đạt tỷ lệ tương tác cực cao từ khi có sự nhúng tay của Duy. Sự tỉ mỉ trong âm thanh là thứ làm nên khác biệt.",
    featured: true
  },
  {
    name: "Martin Guptil",
    role: "Tech YouTuber / Reviewer",
    avatar: "https://i.pravatar.cc/150?u=martin",
    content: "Dịch vụ tuyệt vời! Sự tỉ mỉ trong từng frame hình và nhịp dựng Rhythm & Flow là thứ tôi chưa từng thấy ở các editor khác. Rất đáng tin cậy cho dự án dài hạn.",
    featured: false
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="feedback" className="py-24 md:py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Phản hồi từ các nhà sáng tạo
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Được khách hàng hài lòng là niềm vui lớn nhất trong công việc của tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-[2.5rem] transition-all duration-700 flex flex-col shadow-sm ${
                t.featured 
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-[0_40px_80px_-15px_rgba(79,70,229,0.4)] md:scale-110 z-10' 
                : 'bg-white border border-slate-100 hover:shadow-2xl hover:border-blue-100'
              }`}
            >
              <div className="flex space-x-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${t.featured ? 'text-white' : 'text-blue-600'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className={`text-lg md:text-xl font-semibold leading-relaxed mb-10 flex-grow tracking-tight ${t.featured ? 'text-white' : 'text-slate-700'}`}>
                "{t.content}"
              </blockquote>

              <div className="flex items-center space-x-4 pt-8 border-t border-white/10">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className={`w-12 h-12 rounded-full object-cover border-2 ${t.featured ? 'border-white/20' : 'border-slate-50'}`} 
                />
                <div>
                  <h4 className={`font-black text-sm leading-tight ${t.featured ? 'text-white' : 'text-slate-900'}`}>
                    {t.name}
                  </h4>
                  <p className={`text-[11px] font-black uppercase tracking-[0.2em] mt-1 ${t.featured ? 'text-blue-100' : 'text-slate-400'}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
