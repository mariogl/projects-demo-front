import ButtonStyled from "./ButtonStyled";
import { ButtonProps } from "./types";

const Button = ({
  variant,
  block = false,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled variant={variant} block={block} {...props}></ButtonStyled>
  );
};

export default Button;
