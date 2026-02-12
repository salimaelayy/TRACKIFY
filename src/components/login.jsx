import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../redux/slices/authSlice/authThunk';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import logo from '../assets/Trackify-white.png';
import ButtonAccent from '../pages/ButtonAccent';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      console.log("authenticated")
      navigate('/dashboard', { replace: true });
    }else{
      console.log("unauthenticated")
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      await dispatch(loginAsync({ username, password })).unwrap();
      // After successful login, the cookie will be set and AuthProvider will update
      // The useEffect above will handle the redirect
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setErrorMsg(err || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="w-48 mx-auto" />
          <h1 className="text-2xl font-black mt-2">Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-primary">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-2 h-10 block w-full border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-primary">Password</label>
              <a href="#" className="text-sm font-medium text-accent hover:text-yellow-500">Forgot password?</a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 block w-full h-10 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>

          {errorMsg && <div className="text-red-500 mb-4 text-sm">{errorMsg}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full justify-center bg-accent py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="flex items-center my-6 justify-center">
          <span className="text-sm text-gray-500">or sign in with</span>
        </div>

        <div className="justify-center text-center mb-4">
          <ButtonAccent
            buttontext="Continue with Google"
            classname="w-full justify-center text-accent py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-secondary hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          />
        </div>

        <div className="flex justify-center">
          <Link to="/register" className="text-sm text-accent text-center hover:text-yellow-400">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
