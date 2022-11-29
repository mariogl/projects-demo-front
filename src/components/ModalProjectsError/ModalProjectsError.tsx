import Modal from "../Modal/Modal";

const ModalProjectsError = (): JSX.Element => {
  return (
    <Modal
      text="Error on retrieving the projects list"
      subtext="Please try again in a few minutes"
    />
  );
};

export default ModalProjectsError;
