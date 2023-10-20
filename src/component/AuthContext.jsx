import React, { createContext, useEffect, useState } from "react";
import { me } from "../user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token") !== "null") {
      me().then((response) => {
        if (response.statusText === "OK") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [localStorage.getItem("token"), isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
