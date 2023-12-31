import styled from 'styled-components';
import { GlobalStyle } from './App.Styles';
import * as S from "./App.Styles.js"
import { AppRoutes } from './routes.jsx';

function App() {

  return (
    <>
    <GlobalStyle/>
     <S.Wrapper>
      <S.Container>
        <AppRoutes/>
        
      </S.Container>
    </S.Wrapper>
    </>

  );
}

export default App;