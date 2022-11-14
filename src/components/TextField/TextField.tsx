import TextFieldStyled from "./TextFieldStyled";
import { TextFieldProps } from "./types";

const TextField = ({
  id,
  label,
  caption,
  inline,
  error,
  ...props
}: TextFieldProps): JSX.Element => {
  return (
    <TextFieldStyled inline={inline} error={error} {...props}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {caption && <small>{caption}</small>}
    </TextFieldStyled>
  );
};

export default TextField;
