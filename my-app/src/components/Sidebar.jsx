import * as S from "../components/SidebarStyles.js"
import Playlists from './Playlists.jsx';

function Sidebar({isLoading}) {
    return (
<S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarPersonalName>Maxim.Trankov</S.SidebarPersonalName>
              <S.SidebarIcon>
                <S.LogoutSvg>
                <use xlinkHref="./img/icon/sprite.svg#logout"></use>
                </S.LogoutSvg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
            <Playlists isLoading={isLoading} />
          </S.MainSidebar>

    );
}

export default Sidebar;