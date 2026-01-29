
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about py-24 md:py-48 px-6 relative overflow-hidden">
      {/* Grid Pattern Overlay - Duy trì tính nhất quán của thiết kế */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
      
      <div className="about-inner max-w-7xl mx-auto relative z-10 text-center">
        {/* Tăng khoảng cách giữa nhãn và headline để tạo sự cao cấp */}
        <div className="flex flex-col items-center space-y-12 md:space-y-16">
          
          {/* Label "Về tôi" - Nhẹ nhàng, thoáng đãng */}
          <h3 className="about-label text-base md:text-lg font-semibold tracking-[0.15em] uppercase text-slate-400">
            Về tôi
          </h3>
          
          {/* Heading chính:
              - max-w-[1200px]: Mở rộng chiều ngang tối đa để chữ dàn trải đều thành khối chữ nhật.
              - whitespace-nowrap (cho nhóm từ khóa): Đảm bảo "Nhanh chóng, tin cậy và tận tâm" luôn nằm trên 1 dòng.
              - tracking-[-0.01em]: Giảm độ chặt để chữ "thở" được tốt hơn.
              - leading-[1.2]: Khoảng cách dòng hoàn hảo cho typography hiện đại.
          */}
          <h2 className="about-heading text-4xl md:text-[62px] font-black text-slate-900 leading-[1.25] md:leading-[1.2] tracking-[-0.01em] max-w-[1200px] mx-auto">
            <span className="block md:inline">
              Đối tác dựng video đứng sau những creator tạo ra tăng trưởng thực sự.
            </span>
            <span className="block mt-6 md:mt-2 whitespace-normal md:whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Nhanh chóng</span>,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">tin cậy</span> và{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">tận tâm</span>.
            </span>
          </h2>
          
        </div>
      </div>
    </section>
  );
};
