import React, { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext();

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);

// Context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
