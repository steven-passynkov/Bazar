import React, { useEffect, createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, session, supabase }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    setLoggedIn(!!session);
  }, [session]);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
