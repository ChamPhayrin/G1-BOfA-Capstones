import { createContext, useState } from 'react';

// Create context to manage authentication state
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // 'auth' holds authentication data, 'setAuth' updates it
  const [auth, setAuth] = useState({});

  return (
    // Provide auth context to children components
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
