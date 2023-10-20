import React, { createContext, useEffect, useState } from "react";
import { me } from "../user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token")) {
      me().then((response) => {
        if (response.statusText === "OK") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }
  }, [localStorage.getItem("token")]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
