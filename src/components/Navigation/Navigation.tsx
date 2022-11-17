import { NavLink, useNavigate } from "react-router-dom";
import { paths } from "../../paths/paths";
import { useAppSelector } from "../../store/hooks";
import NavigationStyled from "./NavigationStyled";

import useUser from "../../hooks/useUser";

const Navigation = (): JSX.Element => {
  const { isLoggedIn } = useAppSelector((state) => state.userState);
  const { logoutUser } = useUser();

  return (
    <NavigationStyled>
      <ul>
        <li>
          <NavLink to={paths.home}>Homepage</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to={paths.projectsList}>Projects list</NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to={paths.login}>Login</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutUser}>Logout</button>
          </li>
        )}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
