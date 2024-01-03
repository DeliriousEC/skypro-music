import { GlobalStyle } from "../../App.Styles";
import { Categories } from "./Categories";
import * as S from "../../App.Styles"
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