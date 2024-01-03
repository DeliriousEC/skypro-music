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