import { useState } from "react";

import { signOut } from "../../services/firebase";
import { useAuthContext } from "../";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    // pre api call
    setError(undefined);
    setLoading(true);

    try {
      const res = await signOut();
      setLoading(false);
      dispatch({ type: "LOGOUT" });
      return res;
    } catch (e) {
      setError(e.message);
      setLoading(false);
      return { error: true };
    }
  };

  return { error, loading, logout };
};
