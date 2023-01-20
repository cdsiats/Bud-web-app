import { MoodContext } from "../context/MoodContext";
import { useContext } from "react";

export const useMoodsContext = () => {
  const context = useContext(MoodContext);

  if (!context) {
    throw Error("useMoodsContext must be used inside a MoodContextProvider");
  }

  return context;
};
