import { useAppSelector } from "../../store/hooks";
import ModalLoginError from "../ModalLoginError/ModalLoginError";
import ModalNoAuth from "../ModalNoAuth/ModalNoAuth";
import ModalProjectsError from "../ModalProjectsError/ModalProjectsError";
import ModalRegisterOk from "../ModalRegisterOk/ModalRegisterOk";

const modals = {
  registerOk: ModalRegisterOk,
  loginError: ModalLoginError,
  noAuth: ModalNoAuth,
  projectsError: ModalProjectsError,
};

export type ModalType =
  | "registerOk"
  | "loginError"
  | "noAuth"
  | "projectsError";

const ModalComposer = (): JSX.Element => {
  const { modal } = useAppSelector((state) => state.uiState);

  const Modal = modals[modal.type!];

  return <>{modal.isOpen && !!modal.type && <Modal />}</>;
};

export default ModalComposer;
