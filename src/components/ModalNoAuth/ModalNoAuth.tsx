import useUser from "../../hooks/useUser";
import Modal from "../Modal/Modal";

const ModalNoAuth = (): JSX.Element => {
  const { logoutUser } = useUser();

  return (
    <Modal
      text="You're not authorized"
      subtext="Please login"
      onClose={logoutUser}
    />
  );
};

export default ModalNoAuth;
