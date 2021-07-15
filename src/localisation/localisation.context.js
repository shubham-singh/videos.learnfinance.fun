import { createContext, useContext, useState } from "react";

const LocalisationContext = createContext();

export const LocalisationContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LocalisationContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export const useLocalisation = () => useContext(LocalisationContext);
