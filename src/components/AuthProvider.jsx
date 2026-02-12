import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, , removeCookie] = useCookies(['access-token']);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    removeCookie('access-token');
    localStorage.removeItem('userInfo');
    setUserId(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (!cookies['access-token']) {
      setUserId(null);
      setIsAuthenticated(false);
      return;
    }

    try {
      const decodedToken = jwtDecode(cookies['access-token']);

      // FIX 1 — correct expiration calculation
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();

      if (currentDate > expirationDate) {
        logout();
        return;
      }

      // FIX 2 — support both id and _id from backend
      const extractedUserId = decodedToken.id || decodedToken._id || decodedToken.userId;

      setUserId(extractedUserId);
      setIsAuthenticated(true);

      console.log("Decoded token:", decodedToken);
      console.log("User ID:", extractedUserId);

    } catch (error) {
      console.error("Token decode failed:", error);
      logout();
    }
  }, [cookies]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
