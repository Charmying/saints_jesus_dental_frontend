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
      {/* 佔位標籤 */}
      <div className="h-[60px]" />

      <header className={`bg-gray-900 w-full fixed top-0 left-0 z-50 shadow-md transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <nav className="px-8 flex justify-between items-center h-[60px] relative">
          {/* logo */}
          <div className={`md:static absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0`}>
            <img src="/public/images/logo_white.png" alt="header logo" className="h-[40px] md:h-[50px]" />
          </div>

          {/* 漢堡按鈕 */}
          <div className="md:hidden absolute right-4 flex items-center z-10">
            <button onClick={toggleMenu} className="relative w-[24px] h-[24px] z-10">
              <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-white transform transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-white transform transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </button>
          </div>

          {/* 桌機版選單 */}
          <ul className="hidden md:flex gap-4 text-sm text-white">
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/about">關於我們</Link></li>
          </ul>
        </nav>

        {/* 手機版選單 */}
        <div className={`md:hidden bg-gray-900 transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col text-white text-center py-4 gap-2">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>首頁</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>關於我們</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
