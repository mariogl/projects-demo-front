import TextFieldStyled from "./TextFieldStyled";
import { TextFieldProps } from "./types";

const TextField = ({
  id,
  label,
  caption,
  inline,
  error,
  type = "text",
  ...props
}: TextFieldProps): JSX.Element => {
  return (
    <TextFieldStyled inline={inline} error={error} {...props}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...props} />
      {caption && <small>{caption}</small>}
    </TextFieldStyled>
  );
};

export default TextField;
