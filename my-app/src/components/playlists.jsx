import * as S from "../components/playlists-styles"
import { Categories } from "../Pages/category/categories"

const SidebarItemsList = Categories.map( category => 

<S.SidebarItem key={category.id}>
  <S.SidebarLink
    id={category.id}
    to={`/Category/${category.id}`}
  >
    <S.SidebarImg src={category.img} alt={category.alt} />
  </S.SidebarLink>
</S.SidebarItem> );

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
            SidebarItemsList
          )
        }

      </S.SidebarList>
    </S.SidebarBlock>
  )
}
export default Playlists;