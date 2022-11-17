import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import useUser from "./hooks/useUser";

const App = (): JSX.Element => {
  const { checkToken } = useUser();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <>
      <Layout />
    </>
  );
};

export default App;
