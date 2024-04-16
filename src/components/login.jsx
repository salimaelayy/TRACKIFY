// LoginPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/slices/authSlice/authThunk';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from './AuthProvider';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loading = useSelector((state) => state.auth?.loading);
    const error = useSelector((state) => state.auth?.error.response.data.message);
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        navigate('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync({ username, password }))
            .unwrap()
            .then((data) => {
                if (data && data.accessToken) {
                    document.cookie = `access-token=${data.accessToken}; max-age=${60 * 60 * 1}; path=/`;
                    navigate('/dashboard');
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <div className="text-center mb-8">
                    <h1 className='text-4xl font-black'>Trackify</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-2 h-10 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 border block w-full h-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
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
