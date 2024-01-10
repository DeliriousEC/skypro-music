import { NavLink } from "react-router-dom";
import * as S from "../../app-styles"
import { GlobalStyle } from "../../app-styles"

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