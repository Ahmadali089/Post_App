import { lightGreen } from "@mui/material/colors";
import { createContext, useContext, useState } from "react";
const Context = createContext();
const AppContext = ({ children }) => {
  const [color, setColor] = useState(lightGreen);
  const bundle = {};
  return <Context.Provider value={bundle}>{children}</Context.Provider>;
};
export default AppContext;

export const useAppContext = () => useContext(Context);
