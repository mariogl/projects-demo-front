import Modal from "../Modal/Modal";

const ModalLoginError = (): JSX.Element => {
  return <Modal text="We couldn't log you in" subtext="Wrong credentials" />;
};

export default ModalLoginError;
