import { Children, createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const AppContext = ({children}) => {
  const [name, setName] = useState("Antonino");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

export const useGlobalContext = function(){
    return useContext(GlobalContext)
}