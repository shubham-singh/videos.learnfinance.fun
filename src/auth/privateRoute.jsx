import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth.context";

const PrivateRoute = ({ path, ...props }) => {
  const { user } = useAuth();
  return user.loggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};

export default PrivateRoute;
