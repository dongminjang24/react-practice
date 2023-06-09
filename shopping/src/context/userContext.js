import { createContext, useContext } from "react";
import {
  onUserStateChange,
  onLogOutClick,
  handleGoogleLogin,
} from "../Firebase";

import { useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //   const navigate = useNavigate();

  const [userData, setUserData] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUserData(user);
    });
  }, []);
  console.log(userData);
  return (
    <AuthContext.Provider
      value={{ userData, onLogOutClick, handleGoogleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
