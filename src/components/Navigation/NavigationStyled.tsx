import styled from "styled-components";

const NavigationStyled = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 0.5rem;
  }

  .active {
    font-weight: bold;
  }

  button {
    border: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }
`;

export default NavigationStyled;
