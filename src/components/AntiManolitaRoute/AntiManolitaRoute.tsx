import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { paths } from "../../paths/paths";
import { useAppSelector } from "../../store/hooks";

const AntiManolitaRoute = ({ children }: PropsWithChildren): JSX.Element => {
  const { isLoggedIn } = useAppSelector((state) => state.userState);

  return <>{isLoggedIn ? <Navigate to={paths.home} /> : children}</>;
};

export default AntiManolitaRoute;
