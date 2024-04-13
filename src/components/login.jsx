import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/slices/authSlice/authThunk';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import logo from '../assets/Trackify-white.png'
import ButtonAccent from '../pages/ButtonAccent';
import Button from './Buttons';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loading = useSelector((state) => state.auth?.loading);
    const error = useSelector((state) => state.auth?.error.response.data.message);
    const [cookies, setCookie] = useCookies(['access-token']);
    const isAuthenticated = !!cookies['access-token'];

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync({ username, password }))
            .unwrap()
            .then((data) => {
                if (data && data.accessToken) {
                    setCookie('access-token', data.accessToken, { maxAge: 3600, path: '/' });
                    navigate('/dashboard');
                }
            });
    };
useEffect(() => {
    if (isAuthenticated) {
        navigate('/dashboard');
    }
}, [isAuthenticated, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <div className="text-center flex items justify-center ">
                    <img src={logo} alt="Logo" className="w-44" />
                </div>
                <div className="text-center  items justify-center mb-2">
                    <h1 className='text-2xl font-black '>Login</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 ">
                        <label htmlFor="username" className="block text-sm font-medium text-primary">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-2 h-10 block w-full border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary  sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="block text-sm font-medium  text-primary">Password</label>
                            <a href="#" className="text-sm font-medium text-accent hover:text-yellow-500">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 border block w-full h-10 border-gray-300 rounded-md focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button
                        type="submit"
                        className="w-full justify-center bg-accent py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {/* <ButtonAccent buttontext="Sign Up" classname={'w-full justify-center bg-accent py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300'}>{loading ? 'Logging in...' : 'Login'}</ButtonAccent> */}
                </form>
                <div className="flex items-center my-6 justify-center">
                    <span className="text-sm text-gray-500">or sign in with</span>
                </div>
                <div className="justify-center align-center text-center">
                    <ButtonAccent buttontext="Continue with Google" classname={'w-full justify-center text-accent py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-secondary hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300'}></ButtonAccent>
                </div>
                
                <div className='flex justify-center'>
                    <Link to="/register" className="text-sm text-accent text-center hover:text-yellow-400">Create Account</Link>
                    
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
