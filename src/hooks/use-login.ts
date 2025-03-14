import { useState, useCallback } from "react";

const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = useCallback(() => setLoggedIn(true), []);

  return { loggedIn, handleLogin };
};

export default useLogin;