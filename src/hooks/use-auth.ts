import { useEffect, useState } from "react";

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=> {
    // ? Get user info
  },[])
  
  return { loggedIn, setLoggedIn }
}