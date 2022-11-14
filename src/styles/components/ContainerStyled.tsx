import styled from "styled-components";

const ContainerStyled = styled.div`
  padding: ${(props) =>
    `${props.theme.distances.containers.padding.vertical} ${props.theme.distances.containers.padding.horizontal}`};
`;

export default ContainerStyled;
