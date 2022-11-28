import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000c;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    &__inner {
      background-color: #fff;
      border-radius: 1rem;
      padding-top: ${(props) => props.theme.distances.modals.padding.vertical};
      padding-bottom: ${(props) =>
        props.theme.distances.modals.padding.vertical};
      padding-left: ${(props) =>
        props.theme.distances.modals.padding.horizontal};
      padding-right: ${(props) =>
        props.theme.distances.modals.padding.horizontal};
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
    }

    &__texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    &__text {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;

export default ModalStyled;
