import * as S from "../components/PlaylistsStyles"
import { Categories } from "../Pages/Category/Categories"

function Playlists({ isLoading }) {
  return  (
        <S.SidebarBlock>
              <S.SidebarList>
              {
               isLoading ? (Categories.map((category) => (
              <S.SidebarItem key={category.id}>
                <S.SkeletonPlaylist ></S.SkeletonPlaylist>
              </S.SidebarItem>
              ))
            ) : (
              <>
              <S.SidebarItem key={category.id}>
                <S.SidebarLink
                  id={category.id}
                  to={`/Category/${category.id}`}
                >
                  <S.SidebarImg src={category.image} alt={category.alt} />
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