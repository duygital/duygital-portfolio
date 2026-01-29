
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F8FAFC] px-6 pb-12 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Rounded Footer Container */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[32px] md:rounded-[64px] overflow-hidden text-white relative flex flex-col items-center pt-24 md:pt-32">
          
          {/* Content Wrapper - Aligned with the Branding width */}
          <div className="relative z-10 w-full px-12 md:px-0 md:max-w-[80%] mx-auto mb-20 md:mb-28 md:translate-x-[4vw]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
              
              {/* Column 1: Quick Links */}
              <div className="space-y-8">
                <h4 className="text-lg md:text-xl font-black tracking-tight uppercase">Quick Links</h4>
                <ul className="space-y-4">
                  <li><a href="#home" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">About me</a></li>
                  <li><a href="#portfolio" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Work</a></li>
                  <li><a href="#pricing" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Pricing</a></li>
                  <li><a href="#philosophy" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Philosophy</a></li>
                  <li><a href="#process" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">How it works</a></li>
                  <li><a href="#feedback" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Feedback</a></li>
                </ul>
              </div>

              {/* Column 2: Contact */}
              <div className="space-y-8">
                <h4 className="text-lg md:text-xl font-black tracking-tight uppercase">Contact</h4>
                <ul className="space-y-4">
                  <li><a href="mailto:duygital99@gmail.com" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block break-all">duygital99@gmail.com</a></li>
                  <li><span className="text-base md:text-lg font-medium block">+84 85 356 9918</span></li>
                  <li><span className="text-base md:text-lg font-medium block">Dong Thap, Vietnam</span></li>
                </ul>
              </div>

              {/* Column 3: Follow Us */}
              <div className="space-y-8">
                <h4 className="text-lg md:text-xl font-black tracking-tight uppercase">Follow us</h4>
                <ul className="space-y-4">
                  <li><a href="https://www.facebook.com/duyoday/" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Facebook</a></li>
                  <li><a href="https://zalo.me/0853569918" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Zalo</a></li>
                  <li><a href="https://www.instagram.com/duygital/" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@duygital" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">TikTok</a></li>
                  <li><a href="https://www.youtube.com/@duygital" className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity block">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Large Branding Word - "Duygital" cropped at bottom via container height */}
          <div className="relative w-full pointer-events-none select-none overflow-hidden h-[10vw]">
                <h1 className="
                  absolute left-1/2 bottom-0
                  -translate-x-1/2 translate-y-[18%]
                  text-[12vw] font-black tracking-[-0.05em] leading-[0.8]
                  text-white whitespace-nowrap
                    ">
                  Duygital
                </h1>
              </div>

        </div>
      </div>
    </footer>
  );
};
