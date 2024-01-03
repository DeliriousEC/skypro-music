function Playlists({isLoading}) {
    return  (
          <S.SidebarBlock>
                <S.SidebarList>
                {Categories.map((category) => { 
              return (
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
                );
            })}
                </S.SidebarList>
              </S.SidebarBlock>
      )
  }
  export default Playlists;