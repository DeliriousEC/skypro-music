
import logo from "../components/logo.png"
import { useState } from 'react';
import * as S from "../components/NavMenuStyles"

function NavMenu() {
  const [visible, setVisible] = useState(false);
  const burgerClick = () => setVisible(!visible);



  return (<S.MainNav>
    <S.NavLogo>
      
    <S.LogoImage src={logo} alt="logo" />
    </S.NavLogo>
    <S.NavBurger onClick={burgerClick}>
      <S.BurgerLine ></S.BurgerLine>
      <S.BurgerLine ></S.BurgerLine>
      <span></span>
    </S.NavBurger>
    {visible && (<S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink href="#">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.NavLink href="#">Мой плейлист</S.NavLink>
        </S.MenuItem>
        <S.MenuItem>
        <S.Button>Выйти</S.Button>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
    )}
  </S.MainNav>

  );
}

export default NavMenu;