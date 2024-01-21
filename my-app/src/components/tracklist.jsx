import * as S from "../components/tracklist-styles"
import PropTypes from "prop-types";

function Tracklist({ handleTrackPlay, isLoading, tracks, tracksError }) {

  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.PlaylistTitleColCol01>Трек</S.PlaylistTitleColCol01>
        <S.PlaylistTitleColCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleColCol02>
        <S.PlaylistTitleColCol03>АЛЬБОМ</S.PlaylistTitleColCol03>
        <S.PlaylistTitleColCol04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="./img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistTitleColCol04>
      </S.ContentTitle>
      <p>{tracksError}</p>
      <S.ContentPlaylist>
        {
          isLoading ? ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <S.PlaylistItem key={item}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  </S.TrackTitleImage>
                  <S.TrackTitle>
                    <S.Skeleton></S.Skeleton>
                  </S.TrackTitle>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.Skeleton></S.Skeleton>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.Skeleton></S.Skeleton>
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSvg>
                  <S.Skeleton ></S.Skeleton>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
          ))
          ) : tracks.length > 0 && tracks.map((track) =>  (
            <>
              <S.PlaylistItem key={track.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      {track.logo}
                    </S.TrackTitleSvg>
                  </S.TrackTitleImage>
                  <div>
                    <S.TrackTitleLink 
                    // href={track.track_file} 
                    href="#"
                     onClick={() => handleTrackPlay(track)} 
                     >
                      {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="#">
                    {track.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="#">
                    {track.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
                <div>
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>
                    4:44
                  </S.TrackTimeText>
                </div>
              </S.PlaylistTrack>
            </S.PlaylistItem>
            </>
          ))}

      </S.ContentPlaylist>
    </S.CenterblockContent>

  );
}

export default Tracklist;