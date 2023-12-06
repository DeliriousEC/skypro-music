import './NavMenu.css'
import logo from "../components/logo.png"
import { useState } from 'react';

function NavMenu() {
  const [visible, setVisible] = useState(false);
  const burgerClick = () => setVisible(!visible);
  return (<nav className="main__nav nav">
    <div className="nav__logo logo">
      
      <a href="#"><img src={logo} alt="" /></a>
    </div>
    <div className="nav__burger burger" onClick={burgerClick}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
    {visible && (<div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link">Главное</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Мой плейлист</a>
        </li>
        <li className="menu__item">
          <a href="../signin.html" className="menu__link">Войти</a>
        </li>
      </ul>
    </div>
    )}
  </nav>

  );
}

export default NavMenu;