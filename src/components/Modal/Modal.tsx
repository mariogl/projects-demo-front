import { useCallback, useEffect } from "react";
import { closeModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

let timer: number;

interface ModalProps {
  text: string;
  subtext: string;
  onClose?: () => void;
}

const Modal = ({ text, subtext, onClose }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
    if (onClose) {
      onClose();
    }
    clearTimeout(timer);
  }, [dispatch, onClose]);

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
