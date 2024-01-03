import { useState } from 'react';
import { GlobalStyle } from './App.Styles';
import * as S from "./App.Styles.js"
import { AppRoutes } from './routes.jsx';

function App() {
  const getDataFromLS = () => {
    const data = localStorage. getItem("user");
    if (data) {
    return JSON.parse (data);
    }
    return null;
    };
    const [user, setUser] = useState (getDataFromLS ()) ;
  return (
    <>
    <GlobalStyle/>
     <S.Wrapper>
      <S.Container>
        <AppRoutes user={user} setUser={setUser} />
      </S.Container>
    </S.Wrapper>
    </>

  );
}

export default App;