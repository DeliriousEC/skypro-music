import * as S from "../../App.Styles.js";
import { GlobalStyle } from "../../App.Styles.js";
import AudioPlayer from "../../components/AudioPlayer.jsx";
import Filters from "../../components/Filters.jsx";
import NavMenu from "../../components/NavMenu.jsx";
import Search from "../../components/Search.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import Tracklist from "../../components/Tracklist.jsx";
import { useState, useEffect } from 'react';
import styled from "styled-components";


export const Main = ({}) => {
    
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

 return(
    <>
<S.Main>
          <NavMenu />
          <div className="main__centerblock centerblock">
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filters />
            <Tracklist isLoading={isLoading} />
          </div>
          <Sidebar isLoading={isLoading} />
        </S.Main>
        <AudioPlayer isLoading={isLoading} />
        <footer className="footer"></footer>
</>
 );
};