import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContexts = React.createContext();

export function useAuths() {
  return useContext(AuthContexts);
}

export function AuthProviders({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContexts.Provider value={value}>
      {!loading && children}
    </AuthContexts.Provider>
  );
}
