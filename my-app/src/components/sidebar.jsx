import * as S from "../components/sidebar-styles.js"
import Playlists from './playlists.jsx';
import { useContext } from "react";
import { UserContext } from "../../src/authorization.js";
import PropTypes from "prop-types";


function Sidebar({handleLogout}) {
  const { userData } = useContext(UserContext);

    return (
<S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarPersonalName>{userData.username}</S.SidebarPersonalName>
              <S.SidebarIcon onClick={handleLogout}>
          <svg alt="logout">
            <use xlinkHref="./img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
            </S.SidebarPersonal>
            <Playlists />
          </S.MainSidebar>

    );
}

export default Sidebar;