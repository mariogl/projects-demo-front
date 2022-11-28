import styled from "styled-components";
import { TextFieldStyledProps } from "./types";

const TextFieldStyled = styled.div<TextFieldStyledProps>`
  display: flex;
  flex-direction: ${(props) => (props.inline ? "row" : "column")};
  align-items: ${(props) => (props.inline ? "center" : "start")};
  gap: 1rem;
  margin: 1rem 0;

  input {
    font-size: inherit;
    font-family: inherit;
    border: 5px solid ${(props) => props.theme.colors.sky.light};
    border-radius: 8px;
    padding: ${(props) =>
      `${props.theme.distances.inputs.padding.vertical} ${props.theme.distances.inputs.padding.horizontal}`};

    &:not(:disabled):hover,
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.colors.primary.base};
      outline: none;
    }

    ${(props) =>
      props.error &&
      `
      border: 2px solid ${props.theme.colors.red.base};
    `}
  }

  ${(props) =>
    props.error &&
    `
      small {
        color: ${props.theme.colors.red.base};
      }     
      `}
`;

export default TextFieldStyled;
