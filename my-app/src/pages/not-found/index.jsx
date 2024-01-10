import styled from "styled-components";
import { GlobalStyle } from "../../app-styles";
import * as S from "../../app-styles"

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