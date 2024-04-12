// AuthProvider.jsx
import React, { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['access-token']);
  const isAuthenticated = !!cookies['access-token'];

  const logout = () => {
    removeCookie('access-token'); 
    localStorage.removeItem('userInfo'); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
