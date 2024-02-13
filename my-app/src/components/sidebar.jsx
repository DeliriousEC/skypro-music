import * as S from "../components/sidebar-styles.js"
import Playlists from './playlists.jsx';
import { useContext } from "react";
import { UserContext } from "../../src/authorization.js";


function Sidebar({handleLogout}) {
  const { userData } = useContext(UserContext);

    return (
<S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarPersonalName>{userData.username}</S.SidebarPersonalName>
              <S.SidebarIcon onClick={handleLogout}>
                <S.LogoutSvg>
                <use xlinkHref="./img/icon/sprite.svg#logout"></use>
                </S.LogoutSvg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
            <Playlists />
          </S.MainSidebar>

    );
}

export default Sidebar;