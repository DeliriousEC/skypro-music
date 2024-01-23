import * as S from "../../app-styles.js";
import { GlobalStyle } from "../../app-styles.js";
import AudioPlayer from "../../components/audio-player.jsx";
import Filters from "../../components/filters.jsx";
import NavMenu from "../../components/nav-menu.jsx";
import Search from "../../components/search.jsx";
import Playlists from "../../components/playlists.jsx";
import Sidebar from "../../components/sidebar.jsx";
import Tracklist from "../../components/tracklist.jsx";
import { useState, useEffect } from 'react';
import { getTracks } from "../../api.js";

export const Main = () => {
  const [showBar, setShowBar] = useState(null);
  const [tracks, setTracks] = useState(true);
  const [tracksError, setTracksError] = useState(true);

  const handleTrackPlay = (track) => {
    setShowBar(track)
  };
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true)
    getTracks()
      .then((tracks) => {
        setTracks(tracks);
        setIsLoading(false)
      }, 2000)
      .catch((error) => {
        setTracksError(error.message);
        setIsLoading(false)
      });
  }, []);

 

  return (
    <>
      <S.Main>
        <NavMenu />
        <div className="main__centerblock centerblock">
          <Search />
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filters />
          <Tracklist
           handleTrackPlay={handleTrackPlay}
           tracks={tracks}
              tracksError={tracksError}
           isLoading={isLoading} />
        </div>
        <Sidebar isLoading={isLoading} />
      </S.Main>
      <AudioPlayer 
      
      isLoading={isLoading} />
      {showBar ? (
          <AudioPlayer track={showBar} setShowBar={setShowBar} />
        ) : null}
      <footer className="footer"></footer>
    </>
  );
};