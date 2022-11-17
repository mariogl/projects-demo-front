import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { paths } from "../../paths/paths";
import { useAppSelector } from "../../store/hooks";

const ProtectedRoute = ({ children }: PropsWithChildren): JSX.Element => {
  const { isLoggedIn } = useAppSelector((state) => state.userState);

  return <>{isLoggedIn ? children : <Navigate to={paths.login} />}</>;
};

export default ProtectedRoute;
