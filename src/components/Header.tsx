import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      { /* 佔位標籤 */ }
      <div className="h-[60px]" />

      <header className={`w-full bg-gray-900 fixed top-0 left-0 z-50 shadow-md transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <nav className="h-[60px] px-8 flex justify-between items-center relative">
          { /* logo */ }
          <div className={`absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0`}>
            <img src="/public/images/logo_white.png" alt="header logo" className="h-[40px] md:h-[50px]" />
          </div>

          { /* 漢堡按鈕 */ }
          <div className="flex items-center absolute right-4 z-10 md:hidden">
            <button onClick={toggleMenu} className="relative w-[24px] h-[24px] z-10">
              <span className={`w-full h-[2px] bg-white absolute top-1/2 left-0 transform transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`w-full h-[2px] bg-white absolute top-1/2 left-0 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[2px] bg-white absolute top-1/2 left-0 transform transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </button>
          </div>

          { /* 桌機版選單 */ }
          <ul className="hidden text-white md:flex gap-4">
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/about">關於我們</Link></li>
          </ul>
        </nav>

        { /* 手機版選單 */ }
        <div className={`bg-gray-900 transition-all duration-500 overflow-hidden md:hidden ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="py-4 flex flex-col gap-2 text-white text-center">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>首頁</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>關於我們</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
