import { createContext } from "react";

export const MoodContext = createContext();

export const MoodContextProvider = ({ children }) => {
  return <MoodContext.Provider>{children}</MoodContext.Provider>;
};
