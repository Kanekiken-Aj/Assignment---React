// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

// Userprovider is managing the state 
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Bob',
    email: 'Bob@gmail.com',
    // Other relevant user data
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

