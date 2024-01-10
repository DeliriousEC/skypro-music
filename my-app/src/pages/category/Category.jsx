import { GlobalStyle } from "../../app-styles.js";
import { Categories } from "./categories.js";
import * as S from "../../app-styles.js"
import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();

  const category = Categories.find(
    (category) => category.id === Number(params.id)
  );
  const title = `${category.title}`;

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Text>{title}</S.Text>
        </S.Container>
      </S.Wrapper>
    </>
  );
};