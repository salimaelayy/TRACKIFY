import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ element }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3008/api/auth/profile");
        setAuthenticated(true);
        
        // Show loading for 2 seconds minimum
        await new Promise(resolve => setTimeout(resolve, 200)); // ← ADD THIS!
        
      } catch (err) {
        setAuthenticated(false);
        await new Promise(resolve => setTimeout(resolve, 200)); // ← ADD THIS!
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-yellow-400 border-transparent animate-spin"></div>
      </div>
      <div className="flex gap-2 mb-4 justify-center">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '20s' }}></div>
      </div>
      <p className="text-lg font-semibold text-gray-700 animate-pulse">Loading Trackify... ✨</p>
    </div>
  </div>
);

  return authenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
