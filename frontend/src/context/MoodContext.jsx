import { createContext, useReducer } from "react";

export const MoodContext = createContext();

export const MoodsReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOODS":
      return {
        moods: action.payload,
      };
    case "CREATE_MOOD":
      return {
        moods: [action.payload, ...state.moods],
      };
    case "DELETE_MOOD":
      return {
        moods: state.moods.filter((m) => m._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const MoodContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MoodsReducer, {
    moods: null,
  });

  return (
    <MoodContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MoodContext.Provider>
  );
};
