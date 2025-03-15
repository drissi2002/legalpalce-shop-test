import { useState, useCallback } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = useCallback(() => setLoggedIn(true), []);

  return { loggedIn, setLoggedIn };
};

export default useAuth;