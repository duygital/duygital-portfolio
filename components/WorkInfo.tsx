
import React from 'react';

export const WorkInfo: React.FC = () => {
  const points = [
    { title: "Edit like an Artist", desc: "Dựng phim chuyên nghiệp lấy cảm hứng từ Hayden Hillier Smith, đặt cảm xúc và câu chuyện lên hàng đầu." },
    { title: "Rhythm & Flow", desc: "Làm chủ nhịp điệu (Rhythm) và dòng chảy của video để tạo ra trải nghiệm xem lôi cuốn, không thể rời mắt." },
    { title: "Cinematic Language", desc: "Sử dụng ngôn ngữ điện ảnh để truyền tải thông điệp một cách tinh tế và nghệ thuật nhất." },
    { title: "Focus & Dedication", desc: "Giao tiếp bất đồng bộ để tối ưu thời gian cho việc sáng tạo những thước phim chất lượng cao." }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight tracking-tighter">
            Triết lý thiết kế <br /> & Dựng phim
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
            Một video thành công không chỉ nằm ở kỹ xảo, mà là cách chúng ta điều khiển cảm xúc của khán giả thông qua từng mối cắt (cut) và âm thanh. Mình coi mỗi dự án là một tác phẩm nghệ thuật cần sự tỉ mỉ về nhịp dựng.
          </p>
        </div>
        <div className="space-y-10">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-6 group">
              <div className="mt-1 w-8 h-8 flex-shrink-0 bg-slate-50 rounded-full flex items-center justify-center transition-all group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full transition-colors group-hover:bg-white"></div>
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-2xl md:text-3xl tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">{point.title}</h3>
                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
