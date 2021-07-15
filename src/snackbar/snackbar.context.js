import { createContext, useContext, useReducer } from "react";
import SnackbarReducer from "./snackbar.reducer";

const SnackbarContext = createContext();

export const SnackbarContextProvider = ({ children }) => {
  const [snackbar, dispatch] = useReducer(SnackbarReducer, {
    visible: false,
    message: ""
  });

  return (
    <SnackbarContext.Provider value={{ snackbar, snackbarDispatch: dispatch }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
