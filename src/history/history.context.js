import { createContext, useContext, useReducer } from "react";
import HistoryReducer from "./history.reducer";

const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
  const [history, dispatch] = useReducer(HistoryReducer, {
    history: []
  });

  return (
    <HistoryContext.Provider
      value={{ history: history.history, historyDispatch: dispatch }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
