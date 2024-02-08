
import * as S from "./audio-player-styles"
import { useEffect, useState } from "react";


export const convertSecToMinAndSec = (time) => {
  const roundedTime = Math.round(time);
  const minutes = Math.floor(roundedTime / 60);
  let seconds = roundedTime % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
};



export function AudioPlayer({ track, isLoading, handleStop, handleStart, isPlaying, setIsPlaying, audioRef}) {

const navigateTrack = () => {
  alert("Эта функция будет доступна в будущем");
    };

  const [currentTime, setCurrentTime] = useState(0); 

  const duration = audioRef?.current?.duration || 0; 
  const progressPercent = (currentTime / duration) * 100 || 0;

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);

    const clampedVolume = Math.max(0, Math.min(1, newVolume));

    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  // useEffect(() => {
  //   audioRef.current.load();
  // }, [track]);

  useEffect(() => { if (audioRef?.current) { audioRef.current.load(); } }, [track]);

  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef?.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    if (audioRef?.current) {
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
    }

    return () => {

      if (audioRef?.current) {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, 
    [audioRef]);

  // useEffect(() => {
  //   if (audioRef?.current) {
  //     setCurrentTime(audioRef?.current.currentTime);

  //     if (audioRef?.current.currentTime === audioRef?.current.duration) {
  //       setCurrentTime(0);
  //       setIsPlaying(false);
  //     }
  //   }
  // }, [audioRef?.current, audioRef?.current.currentTime]);

  useEffect(() => { if (audioRef?.current) { setCurrentTime(audioRef?.current?.currentTime);
     if (audioRef?.current.currentTime === audioRef.current?.duration) { setCurrentTime(0);
      setIsPlaying(false);
    }}},
      
[audioRef?.current, audioRef?.current?.currentTime]);

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentClicked = (clickPosition / progressBar.offsetWidth) * 100;
    const newTime = (percentClicked / 100) * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const [isLooped, setIsLooped] = useState(false);
  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsLooped(true);
  };

  const handleUnloop = () => {
    audioRef.current.loop = false;
    setIsLooped(false);
  };
  const toggleLoop = isLooped ? handleUnloop : handleLoop;

  if (!track) {
    return <div></div>;
  }

  return (
    <>
    <S.StandartAudioPlayer controls ref={audioRef} onLoadedMetadata={handleStart}>
        <source src={track.track_file} type="audio/mpeg" />
      </S.StandartAudioPlayer>
    <S.Bar>
      <S.BarContent>
      <S.TrackTime>
            {convertSecToMinAndSec(currentTime) +
              " " +
              "/" +
              " " +
              convertSecToMinAndSec(duration)}
          </S.TrackTime>
        <S.BarPlayerProgress  onClick={handleProgressBarClick}>
        <S.BarPlayerProgressLoad
              style={{ width: `${progressPercent}%` }}
            ></S.BarPlayerProgressLoad>
        </S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg lt="prev" 
                onClick={navigateTrack}>
                  <use xlinkHref="./img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg  alt="play" onClick={togglePlay}>
                    {isPlaying ? (
                      <use xlinkHref="./img/icon/sprite-2.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="./img/icon/sprite.svg#icon-play"></use>
                    )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next" 
                onClick={navigateTrack}>
                  <use xlinkHref="./img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg   alt="repeat"
                  onClick={toggleLoop}
                    $isLooped={isLooped}>
                  <use xlinkHref="./img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle" onClick={navigateTrack}>
                  <use xlinkHref="./img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>
            {
              isLoading ? ([1].map((item) => (
                <S.PlayerTrackPlay key={item}>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.SkeletonAudioPlayer></S.SkeletonAudioPlayer>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      <S.SkeletonAudioPlayer></S.SkeletonAudioPlayer>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.SkeletonAudioPlayer></S.SkeletonAudioPlayer>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.SkeletonAudioPlayer></S.SkeletonAudioPlayer>
                    </S.TrackPlayLike>
                    <S.TrackPlayDis>
                      <S.SkeletonAudioPlayer></S.SkeletonAudioPlayer>
                    </S.TrackPlayDis>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              ))
              ) : (
                <>
                  <S.PlayerTrackPlay >
                    <S.TrackPlayContain>
                      <S.TrackPlayImage >
                        <S.TrackPlaySvg alt="music">
                          <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                        </S.TrackPlaySvg>
                      </S.TrackPlayImage>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://"
                        >{track.name}</S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink href="http://">{track.author}</S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                    </S.TrackPlayContain>

                    <S.TrackPlayLikeDis>
                      <S.TrackPlayLike>
                        <S.TrackPlayLikeSvg alt="like">
                          <use xlinkHref="./img/icon/sprite.svg#icon-like"></use>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDis>
                        <S.TrackPlayDisSvg>
                          <use
                            xlinkHref="./img/icon/sprite.svg#icon-dislike"
                          ></use>
                        </S.TrackPlayDisSvg>
                      </S.TrackPlayDis>
                    </S.TrackPlayLikeDis>
                  </S.PlayerTrackPlay>
                </>
              )
            }

          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="./img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                   type="range"
                   name="range"
                   min="0"
                   max="1"
                   step="0.01"
                   onChange={(e) => handleVolumeChange(e)} />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
    </>
  );
}

export default AudioPlayer;