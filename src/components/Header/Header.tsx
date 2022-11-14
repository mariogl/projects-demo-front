import Heading from "../Heading/Heading";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Heading level={2}>Projects app</Heading>
    </HeaderStyled>
  );
};

export default Header;
