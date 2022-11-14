import styled from "styled-components";
import { TextFieldProps } from "./types";

const TextFieldStyled = styled.div<Partial<TextFieldProps>>`
  display: flex;
  flex-direction: ${(props) => (props.inline ? "row" : "column")};
  align-items: ${(props) => (props.inline ? "center" : "start")};
  gap: 1rem;

  input {
    font-size: inherit;
    font-family: inherit;
    border: 1px solid ${(props) => props.theme.colors.sky.light};
    border-radius: 8px;
    padding: ${(props) =>
      `${props.theme.distances.inputs.padding.vertical} ${props.theme.distances.inputs.padding.horizontal}`};

    &:not(:disabled):hover,
    &:focus {
      border: 2px solid ${(props) => props.theme.colors.primary.base};
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
