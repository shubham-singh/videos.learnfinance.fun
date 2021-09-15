import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(null);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
