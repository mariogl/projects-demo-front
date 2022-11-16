import { NavLink } from "react-router-dom";
import { paths } from "../../paths/paths";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <ul>
        <li>
          <NavLink to={paths.home}>Homepage</NavLink>
        </li>
        <li>
          <NavLink to={paths.projectsList}>Projects list</NavLink>
        </li>
        <li>
          <NavLink to={paths.login}>Login</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
