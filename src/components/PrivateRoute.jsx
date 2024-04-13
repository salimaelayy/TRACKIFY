// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from './AuthProvider'; 

const PrivateRoute = ({ element }) => {
  const [cookies] = useCookies(['access-token']);
  const isAuthenticated = !!cookies['access-token'];
  const { user } = useAuth();

  return isAuthenticated ? (
    <>
      {element}
      
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
