import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.primary.base};
  color: #fff;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: ${({ theme: { distances } }) =>
    `${distances.containers.padding.vertical} ${distances.containers.padding.horizontal}`};
`;

export default HeaderStyled;
