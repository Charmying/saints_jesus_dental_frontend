import { useState, useEffect } from 'react';

/** banner 輪播資料格式 */
interface SlideItem {
  bgImage: string;
  titleDesktop: string;
  titleMobile: string;
}

/** banner 輪播參數設定 */
interface CarouselBannerProps {
  slides: SlideItem[];
  interval?: number;
  minHeight?: string;
}

/** banner 輪播項目元件 */
const Slide = ({ slide, isActive, minHeight }: { slide: SlideItem; isActive: boolean; minHeight: string; }) => {
  return (
    <div
      className={ `w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${ isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none' }` }
      style={{ backgroundImage: `url(${slide.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight, }}
    >
      { /* 半透明遮罩效果 */ }
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, 0%, transparent 100%)' }} />

      <div className="w-full h-full flex items-end px-7 relative md:px-10">
        <div className="w-full mb-10 md:w-2/5">
          <p className="text-white text-center md:hidden" dangerouslySetInnerHTML={{ __html: slide.titleMobile }} />
          <p className="hidden text-white md:block">{slide.titleDesktop}</p>
        </div>

        { /* 中間 scroll 圖示，只在電腦版顯示 */ }
        <div className="w-1/5 mb-10 hidden cursor-pointer md:block"
          onClick={() => {
            const main = document.querySelector('main');
            main?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src="https://hsin-ho.tw/wp-content/uploads/2023/08/SCROLL.svg" alt="Scroll" className="m-auto" />
        </div>

        { /* 右側空白佔位（電腦版） */ }
        { /* <div className="w-2/5 hidden md:block" /> */ }
      </div>
    </div>
  );
};

export const CarouselBanner = ({slides, interval = 2500, minHeight = '70vh'}: CarouselBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className="w-full mb-24 overflow-hidden md:mb-40">
      <div className="w-full relative" style={{ minHeight }}>
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} isActive={index === currentSlide} minHeight={minHeight} />
        ))}
      </div>
    </section>
  );
};
