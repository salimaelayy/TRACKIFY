import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <div className="text-center mb-8">
                    <h1 className='text-4xl font-black'>Trackify</h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" id="username" name="username" className="mt-1 h-10 block w-full border border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    <input type="password" id="password" name="password" className="mt-1 border block w-full h-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>
                    
                </div>
                <button type="submit" className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>

                <div className="flex items-center my-6 justify-center">
                    <span className="text-sm text-gray-500">or sign in with</span>
                </div>
                <div className="flex justify-center my-4">
                    <button className="w-full text-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-100 hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue with Google</button>
                    
                </div>
                <div className='flex justify-center'>
                    <Link to="/register" className="text-sm text-indigo-600 text-center hover:text-indigo-500">Create Account</Link>
                </div>
                
            </div>
        </div>
    );
}
export default LoginPage;
