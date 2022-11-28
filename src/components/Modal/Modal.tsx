import { useCallback, useEffect } from "react";
import { closeModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

let timer: number;

const Modal = (): JSX.Element => {
  const {
    modal: { text, subtext },
  } = useAppSelector((state) => state.uiState);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
    clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    timer = window.setTimeout(() => {
      closeModal();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, closeModal]);

  return (
    <ModalStyled className="modal">
      <div className="modal__inner">
        <div className="modal__texts">
          <span className="modal__text">{text}</span>
          <span className="modal__subtext">{subtext}</span>
        </div>
        <Button variant="primary" onClick={closeModal}>
          Okay
        </Button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
