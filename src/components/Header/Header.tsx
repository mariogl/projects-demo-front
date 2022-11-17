import { useAppSelector } from "../../store/hooks";
import Heading from "../Heading/Heading";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { username, isLoggedIn } = useAppSelector((store) => store.userState);

  return (
    <HeaderStyled>
      <Heading level={2}>Projects app</Heading>
      <Navigation />
      {isLoggedIn && <span>{username}</span>}
    </HeaderStyled>
  );
};

export default Header;
