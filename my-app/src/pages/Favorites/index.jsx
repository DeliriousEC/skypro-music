import { NavLink } from "react-router-dom";
import * as S from "../../App.Styles"
import { GlobalStyle } from "../../App.Styles"

export const Favorites = () => {

return(
    <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Text>Ваши подборки:</S.Text>
        <NavLink to="/Main">
          Назад
        </NavLink>
      </S.Container>
    </S.Wrapper>
  </>
);
};