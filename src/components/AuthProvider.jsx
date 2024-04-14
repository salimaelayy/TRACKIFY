import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['access-token']);
  const isAuthenticated = !!cookies['access-token'];
  const [userId, setUserId] = useState(null);

  const logout = () => {
    removeCookie('access-token');
    localStorage.removeItem('userInfo');
  };

  useEffect(() => {
    const decodeToken = () => {
      if (cookies['access-token']) {
        const decodedToken = jwtDecode(cookies['access-token']);
        const expirationDate = new Date(decodedToken.exp * 1000); // Convert to milliseconds
        const currentDate = new Date();

        if (currentDate > expirationDate) {
          // Token is expired
          logout();
          return;
        }

        setUserId(decodedToken.id);
        console.log(decodedToken.id);
      }
    };

    decodeToken();
  }, [cookies]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
