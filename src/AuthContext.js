import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  userId: '',
  setUserId: () => {},
});

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState('');

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
