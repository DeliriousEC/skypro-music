import * as S from "../../app-styles.js";
import { GlobalStyle } from "../../app-styles.js";
import AudioPlayer from "../../components/audio-player.jsx";
import Filters from "../../components/filters.jsx";
import NavMenu from "../../components/nav-menu.jsx";
import Search from "../../components/search.jsx";
import Playlists from "../../components/playlists.jsx";
import Sidebar from "../../components/sidebar.jsx";
import Tracklist from "../../components/tracklist.jsx";
import { useState, useEffect, useRef } from 'react';
import { getTracks } from "../../api.js";
import {handleStart, handleStop, } from "../../components/audio-player.jsx"

export const Main = () => {
  const [showBar, setShowBar] = useState(null);
  const [tracks, setTracks] = useState(true);
  const [tracksError, setTracksError] = useState(true);
  const [isLoading, setIsLoading] = useState(false); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioRef = useRef(null);

  const handleTrackPlay = (track) => {
    setShowBar(track)
  };

  const handleStart = () => {
    console.log("handleStart");
    audioRef.current.play();
    setIsPlaying(true);
  };
  
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  

  useEffect(() => {
    setIsLoading(true)
    getTracks()
      .then((tracks) => {
        setTracks(tracks);
        setIsLoading(false)
      }, 2000)
      .catch((error) => {
        setTracksError(`Не удалось загрузить плейлист, попробуйте позже (${error.message})`);
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
          <AudioPlayer
          track={showBar}
          handleTrackPlay={handleTrackPlay}
          setShowBar={setShowBar}
          setIsPlaying={setIsPlaying}
          handleStart={handleStart}
          handleStop={handleStop}
          isPlaying={isPlaying}
          audioRef={audioRef} />
        ) : null}
      <footer className="footer"></footer>
    </>
  );
};