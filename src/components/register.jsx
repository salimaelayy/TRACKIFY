import React from 'react';
import InputLabel from './formInput';
import Buttons from './button';

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
            <h1 className='text-5xl font-black text-center p-3'>Sign In</h1>
                <div className="text-center mb-8">
                    <h2 className='text-2xl font-black'>Trackify</h2>
                </div>
                <InputLabel type="username" label="Userame" htmlFor="username" />
                <InputLabel type="email" label="Email" htmlFor="email" />
                
                <div className="mb-4">
                    <InputLabel  type="password" label="Email" htmlFor="email"/>
                    
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>
                    
                </div>
                <Buttons  classname="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttontext="Login"/>

                <div className="flex items-center my-6 justify-center">
                    <span className="text-sm text-gray-500">or sign in with</span>
                </div>
                <Buttons  classname="w-full text-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-100 hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" buttontext="Continue with Gmail"/>
                <div className='flex justify-center'>
                    <a href="#" className="text-sm text-indigo-600 text-center hover:text-indigo-500">Create Account</a>
                </div>
                
            </div>
        </div>
    );
}
export default Register;
