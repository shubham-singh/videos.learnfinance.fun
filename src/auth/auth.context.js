import { createContext, useContext, useReducer } from "react";
import AuthReducer from "./auth.reducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, {
    token: JSON.parse(localStorage.getItem("auth_learnfinance")),
    firstName: "",
    loggedIn: (function () {
      return localStorage.getItem("auth_learnfinance") ? true : false;
    })()
  });

  return (
    <AuthContext.Provider value={{ user, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
