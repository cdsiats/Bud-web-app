import { useAuthContext } from "./useAuthContext";
import { useMoodsContext } from "./useMoodsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: moodsDispatch } = useMoodsContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    // dispatch logout
    dispatch({ type: "LOGOUT" });
    moodsDispatch({ type: "SET_MOODS", payload: null });
  };

  return { logout };
};
