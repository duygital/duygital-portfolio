
import React, { useState, useEffect, useRef } from 'react';
import { VideoType, VideoWork } from '../types';

interface ExtendedVideoWork extends VideoWork {
  category: string;
  description: string;
  youtubeId?: string;
  thumbnail?: string;
}

const PORTFOLIO_DATA: ExtendedVideoWork[] = [
  { 
    id: 's1', 
    type: VideoType.SHORT, 
    category: 'Vlog',
    title: 'Lifestyle Reel', 
    description: 'Hook mạnh trong 3 giây đầu, nhịp dựng nhanh giúp tăng tỷ lệ giữ chân (Retention rate) cho các thương hiệu cá nhân.', 
    tiktokId: '7489803675607567621' 
  },
  { 
    id: 's2', 
    type: VideoType.SHORT, 
    category: 'Motion Graphic',
    title: 'Visual Effects Showcase', 
    description: 'Sử dụng 3D Tracking và Motion Graphics để giải thích các khái niệm phức tạp một cách trực quan và bắt mắt.', 
    tiktokId: '7545412473956961543' 
  },
  { 
    id: 's3', 
    type: VideoType.SHORT, 
    category: 'Podcast',
    title: 'Insightful Clips', 
    description: 'Cắt gọt những đoạn hội thoại đắt giá nhất, thêm subtitle động dẫn dắt mắt người xem, tối ưu cho xem không cần âm thanh.', 
    tiktokId: '7513380013337578759' 
  },
  { 
    id: 's4', 
    type: VideoType.SHORT, 
    category: 'Talking head',
    title: 'Expert Interview', 
    description: 'Tối ưu hóa khung hình và ánh sáng để làm nổi bật chuyên gia, kết hợp với các hiệu ứng b-roll minh họa chuyên nghiệp.', 
    tiktokId: '7489803675607567621' 
  },
  { 
    id: 'l1', 
    type: VideoType.LONG, 
    category: 'Vlog',
    title: 'Kẻ Trộm Ánh Sáng', 
    youtubeId: 'KYwbWVE-9Fs', 
    description: 'Phim ngắn tập trung vào nghệ thuật ánh sáng và Color Grading chuyên sâu. Phù hợp cho các dự án thương hiệu cao cấp.' 
  },
  { 
    id: 'l2', 
    type: VideoType.LONG, 
    category: 'Talking head',
    title: 'The Hidden Soul', 
    youtubeId: 'F_ZK0ZFh6po', 
    description: 'Dựng phim tài liệu với nhịp điệu chậm rãi, tập trung vào âm thanh môi trường và kể chuyện bằng hình ảnh (Visual Storytelling).' 
  },
  { 
    id: 'l3', 
    type: VideoType.LONG, 
    category: 'Podcast',
    title: 'Deep Talk Series', 
    youtubeId: 'KYwbWVE-9Fs', 
    description: 'Dựng podcast dài tập, cân bằng giữa nhiều góc máy và xử lý âm thanh hậu kỳ chuyên nghiệp.' 
  }
];

const CATEGORIES = ['All', 'Podcast', 'Talking head', 'Vlog', 'Motion Graphic'];

const YouTubeEmbedPlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const handleLoad = () => {
    if (imgRef.current && imgRef.current.naturalWidth === 120) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  return (
    <div className="relative w-full youtube-ratio rounded-[2.5rem] overflow-hidden bg-slate-950 group shadow-2xl border border-slate-800 transition-all duration-500 hover:border-blue-500/30">
      {!isStarted ? (
        <div onClick={() => setIsStarted(true)} className="absolute inset-0 z-30 cursor-pointer overflow-hidden bg-slate-900">
          <img 
            ref={imgRef}
            src={imgSrc} 
            alt="Thumbnail" 
            onLoad={handleLoad}
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 shadow-2xl relative z-10">
                <svg className="w-8 h-8 text-white fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full bg-black">
           <button 
             onClick={(e) => { e.stopPropagation(); setIsStarted(false); }} 
             className="absolute top-6 right-6 z-[60] w-12 h-12 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all shadow-xl"
           >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
           </button>
           <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1&modestbranding=1`}
            className="absolute inset-0 w-full h-full z-10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

const TikTokEmbedPlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [realThumbnail, setRealThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/video/${videoId}`);
        const data = await response.json();
        if (data.thumbnail_url) setRealThumbnail(data.thumbnail_url);
      } catch (err) {}
    };
    fetchThumbnail();
  }, [videoId]);

  return (
    <div className="relative w-full tiktok-ratio rounded-[2rem] overflow-hidden bg-slate-950 group shadow-2xl border border-slate-800 transition-all duration-500 hover:border-blue-500/30">
      {!isStarted ? (
        <div onClick={() => setIsStarted(true)} className="absolute inset-0 z-30 cursor-pointer overflow-hidden bg-slate-900">
          {realThumbnail ? (
            <img src={realThumbnail} alt="Thumbnail" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70" />
          ) : (
            <div className="w-full h-full bg-slate-900 animate-pulse flex items-center justify-center">
               <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 shadow-2xl relative z-10">
                <svg className="w-6 h-6 text-white fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full bg-black">
           <button 
             onClick={(e) => { e.stopPropagation(); setIsStarted(false); }} 
             className="absolute top-4 right-4 z-[60] w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all shadow-xl"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
           </button>
           <iframe
            src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=1&loop=1`}
            className="absolute inset-0 w-full h-full z-10"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </div>
      )}
    </div>
  );
};

const VideoCard: React.FC<{ item: ExtendedVideoWork; visibleCount: number }> = ({ item, visibleCount }) => {
  const widthClass = visibleCount === 3 
    ? 'w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]' 
    : 'w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-2rem)/2)]';

  return (
    <div className={`group flex-none ${widthClass} bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col transition-all duration-500 hover:border-blue-200 hover:shadow-2xl`}>
      <div className="mb-6 flex-grow">
         <div className="flex items-center space-x-2 mb-3">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600`}></div>
            <span className={`text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors`}>
              {item.category}
            </span>
         </div>
         <h3 className={`text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 mb-4`}>
           {item.title}
         </h3>
         <div className="text-base font-medium text-slate-500 leading-relaxed">
            {item.description}
         </div>
      </div>
      <div className="w-full mt-auto">
        {item.type === VideoType.SHORT && item.tiktokId ? (
          <TikTokEmbedPlayer videoId={item.tiktokId} />
        ) : (
          item.youtubeId && (
            <YouTubeEmbedPlayer videoId={item.youtubeId} />
          )
        )}
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VideoType>(VideoType.SHORT);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredData = PORTFOLIO_DATA.filter(item => 
    item.type === activeTab && (activeCategory === 'All' || item.category === activeCategory)
  );

  const [itemsVisible, setItemsVisible] = useState(3);
  
  useEffect(() => {
    const updateItemsVisible = () => {
      if (window.innerWidth >= 1024) {
        setItemsVisible(activeTab === VideoType.SHORT ? 3 : 2);
      } else if (window.innerWidth >= 768) {
        setItemsVisible(2);
      } else {
        setItemsVisible(1);
      }
    };
    updateItemsVisible();
    window.addEventListener('resize', updateItemsVisible);
    return () => window.removeEventListener('resize', updateItemsVisible);
  }, [activeTab]);

  const maxIndex = Math.max(0, filteredData.length - itemsVisible);

  // Reset category and index when switching tabs
  const handleTabChange = (tab: VideoType) => {
    setActiveTab(tab);
    setActiveCategory('All');
    setCurrentIndex(0);
  };

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900">Dự án chọn lọc</h2>
        
        {/* Main Tab Switcher */}
        <div className="bg-slate-100 p-2 rounded-[2rem] flex items-center border border-slate-200 w-full max-w-[360px] z-20 shadow-inner">
          <button 
            onClick={() => handleTabChange(VideoType.SHORT)} 
            className={`flex-1 py-4 rounded-[1.5rem] text-[11px] font-black transition-all duration-500 uppercase tracking-widest ${activeTab === VideoType.SHORT ? 'bg-white text-blue-600 shadow-xl' : 'text-slate-500'}`}
          >
            Short-form
          </button>
          <button 
            onClick={() => handleTabChange(VideoType.LONG)} 
            className={`flex-1 py-4 rounded-[1.5rem] text-[11px] font-black transition-all duration-500 uppercase tracking-widest ${activeTab === VideoType.LONG ? 'bg-white text-purple-600 shadow-xl' : 'text-slate-500'}`}
          >
            Long-form
          </button>
        </div>

        {/* Category Filters (The Red Box Area) */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 w-full max-w-4xl">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentIndex(0); }}
              className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative group/container">
        <div className="overflow-hidden py-8 px-4 min-h-[400px]">
          {filteredData.length > 0 ? (
            <div 
              className="carousel-track transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) flex gap-8 items-stretch" 
              style={{ 
                transform: `translateX(calc(-${currentIndex * (100 / itemsVisible)}% - ${currentIndex * (itemsVisible > 1 ? (32 / itemsVisible) : 0)}px))` 
              }}
            >
              {filteredData.map((item) => (
                <VideoCard key={item.id} item={item} visibleCount={itemsVisible} />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 text-slate-400">
              <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <p className="text-sm font-black uppercase tracking-widest">Đang cập nhật video...</p>
            </div>
          )}
        </div>

        {filteredData.length > itemsVisible && (
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)} 
                className={`h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'w-14 bg-gradient-to-r from-blue-600 to-purple-600' : 'w-2 bg-slate-200'}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
