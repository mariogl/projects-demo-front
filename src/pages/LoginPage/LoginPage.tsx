import Heading from "../../components/Heading/Heading";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Heading level={1}>Login page</Heading>
      <LoginForm />
    </>
  );
};

export default LoginPage;
