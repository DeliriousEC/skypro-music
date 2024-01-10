import * as S from "../components/TracklistStyles"


function Tracklist({ isLoading }) {
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
          ) : (
            <>
              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Guilt <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Nero</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Welcome Reality</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>4:44</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Elektro <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Elektro</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like">Elektro</use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>2:22</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Ali Bakgor</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >I’m Fire</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>2:22</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Non Stop <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Стоункат, Psychopatho</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Non Stop</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>4:12</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Run Run <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Jaded, Will Clarke, AR/COo</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Run Run</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>2:54</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Eyes on Fire <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Blue Foundation, Zeds Dead</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Eyes on Fire</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>5:20</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Mucho Bien <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Mucho Bien</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>3:41</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Knives n Cherries <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">minthaze</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Captivating</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>1:48</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >How Deep Is Your Love <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Calvin Harris, Disciples</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >How Deep Is Your Love</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>3:32</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Morena <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Tom Boxer</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Soundz Made in Romania</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>3:36</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>
              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Guilt <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Nero</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Welcome Reality</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>4:44</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Elektro <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Elektro</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like">Elektro</use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>2:22</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Ali Bakgor</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >I’m Fire</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>2:22</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Non Stop <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Стоункат, Psychopatho</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Non Stop</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>4:12</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Run Run <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Jaded, Will Clarke, AR/COo</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Run Run</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>2:54</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Eyes on Fire <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Blue Foundation, Zeds Dead</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Eyes on Fire</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>5:20</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Mucho Bien <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Mucho Bien</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>3:41</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Knives n Cherries <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">minthaze</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Captivating</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>1:48</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >How Deep Is Your Love <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Calvin Harris, Disciples</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >How Deep Is Your Love</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>3:32</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>

              <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
                      </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitle>
                      <S.TrackTitleLink href="#"
                      >Morena <S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
                    </S.TrackTitle>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">Tom Boxer</S.TrackAuthorLink>
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.TrackAlbumLink href="#"
                    >Soundz Made in Romania</S.TrackAlbumLink>
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="././img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>3:36</S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>


            </>
          )
        }

      </S.ContentPlaylist>
    </S.CenterblockContent>

  );
}
export default Tracklist;