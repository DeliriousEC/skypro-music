
import * as S from "./audio-player-styles"
import {PropTypes} from "prop-types"



export function AudioPlayer({ track, isLoading}) {

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="./img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="./img/icon/sprite.svg#icon-play"></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="./img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="./img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
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
                  name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}

export default AudioPlayer;