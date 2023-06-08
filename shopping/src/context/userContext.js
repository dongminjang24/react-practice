import { createContext, useContext } from "react";
import { auth, adminUser, onUserStateChange } from "../Firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //   const navigate = useNavigate();

  const [userData, setUserData] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUserData(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
