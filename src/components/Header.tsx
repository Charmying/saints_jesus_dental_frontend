import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/about">關於我們</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
