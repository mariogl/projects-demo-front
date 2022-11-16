import Heading from "../Heading/Heading";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Heading level={2}>Projects app</Heading>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
