
import playlist01 from "./img/playlist01.png"
import playlist02 from "./img/playlist02.png"
import playlist03 from "./img/playlist03.png"
import * as S from "../components/PlaylistsStyles"


function Playlists({ isLoading }) {


  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {
          isLoading ? ([1, 2, 3].map((item) => (
            <S.SidebarItem key={item}>
              <S.SkeletonPlaylist ></S.SkeletonPlaylist>
            </S.SidebarItem>
          ))
          ) : (
            <>
              <S.SidebarItem>
                <S.SidebarLink href="#">
                  <S.SidebarImg
                    src={playlist01}
                    alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink href="#">
                  <S.SidebarImg
                    src={playlist02}
                    alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
              <S.SidebarItem>
                <S.SidebarLink href="#">
                  <S.SidebarImg
                    src={playlist03}
                    alt="day's playlist" />
                </S.SidebarLink>
              </S.SidebarItem>
            </>
          )
        }

      </S.SidebarList>
    </S.SidebarBlock>
  )
}
export default Playlists;