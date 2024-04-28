import { useState } from "react";

import { signIn } from "../../services/firebase";
import { useAuthContext } from "../";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }) => {
    // pre api call
    setError(undefined);
    setLoading(true);

    try {
      const res = await signIn({ email, password });
      setLoading(false);
      dispatch({ type: "LOGIN", payload: res.user });
      return res;
    } catch (e) {
      setError(e.message);
      setLoading(false);
      return { error: true };
    }
  };

  return { error, loading, login };
};
