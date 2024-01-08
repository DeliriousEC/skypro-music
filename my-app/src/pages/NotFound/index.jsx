import styled from "styled-components";
import { GlobalStyle } from "../../App.Styles";
import * as S from "../../App.Styles"

export const NotFound = () => {

return(
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Text>Page was not found</S.Text>
        </S.Container>
      </S.Wrapper>
    </>
);
};