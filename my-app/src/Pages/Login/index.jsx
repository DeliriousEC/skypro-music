import * as S from "../../App.Styles.js"
import { GlobalStyle } from "../../App.Styles.js";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem("user", JSON.stringify({ login: "Maxim" }));
    setUser({ login: "Maxim" });
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerLogin>
          <S.Text>Login Page</S.Text>
          <S.Button onClick={onSubmit}>Войти</S.Button>
          <S.NavLinkReg to="/Registration" >Регистрация</S.NavLinkReg>
        </S.ContainerLogin>
      </S.Wrapper>
    </>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};