import styled from "styled-components";

interface ContainerStyledProps {
  centered: boolean;
}

const ContainerStyled = styled.div<ContainerStyledProps>`
  padding: ${(props) =>
    `${props.theme.distances.containers.padding.vertical} ${props.theme.distances.containers.padding.horizontal}`};

  ${(props) => {
    if (props.centered) {
      return `
      display: flex;
      flex-direction: column;
      align-items: center;
      `;
    }
  }}
`;

export default ContainerStyled;
