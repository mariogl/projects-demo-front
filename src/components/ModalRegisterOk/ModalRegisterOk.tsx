import { useNavigate } from "react-router-dom";
import { paths } from "../../paths/paths";
import Modal from "../Modal/Modal";

const ModalRegisterOk = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Modal
      text="Register sucessful"
      subtext="Welcome!"
      onClose={() => navigate(paths.login)}
    />
  );
};

export default ModalRegisterOk;
