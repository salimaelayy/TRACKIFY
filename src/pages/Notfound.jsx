import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">404 - Not Found</h2>
        <p className="text-gray-700 mb-8">Oops! The page you're looking for does not exist.</p>
        <img src="https://via.placeholder.com/300" alt="404" className="w-full mb-8" />
        <Link to="/" className="bg-teal-800 self-center text-white w-full py-2 px-4 rounded-md hover:bg-teal-600">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
