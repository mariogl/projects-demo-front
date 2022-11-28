import styled from "styled-components";
import { ButtonProps } from "./types";

const ButtonStyled = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  border-radius: 48px;
  border: 1px solid
    ${(props) =>
      props.variant === "outline"
        ? props.theme.colors.primary.base
        : "transparent"};
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary.base
      : "transparent"};
  color: ${(props) => (props.variant === "primary" ? "#fff" : "inherit")};
  padding: ${(props) =>
    `${props.theme.distances.buttons.padding.vertical} ${props.theme.distances.buttons.padding.horizontal}`};
  cursor: pointer;
  transition: all 0.3s;
  ${(props) => {
    if (props.block) {
      return `
        display: block;
        width: 100%;
      `;
    }
  }}

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
    color: #fff;
  }
`;

export default ButtonStyled;
