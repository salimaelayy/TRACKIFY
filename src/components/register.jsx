import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAsync } from '../redux/slices/userSlice/userThunk';
import { useNavigate } from 'react-router-dom';
import logo_light from '../assets/Trackify-Logo.png'
import InputLabel from './InputLabels';
import { useCookies } from 'react-cookie';
import ButtonAccent from '../pages/ButtonAccent';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['access-token']);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [fullname, setFullname] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUserAsync({ username, password, email, country, fullname, birthdate })) .unwrap()
        .then((data) => {
            if (data && data.accessToken) {
                setCookie('access-token', data.accessToken, { maxAge: 3600, path: '/' });
                navigate('/dashboard');
            }
        })
            .catch((error) => {
                // Handle error, e.g., display error message
                console.error('Failed to register:', error);
            });
    };

    return (
        <div className="max-h-screen overflow-hidden min-h-screen flex items-center justify-center bg-background">
            <div className="max-w-md w-full bg-white px-8 shadow-lg rounded-lg">
                <div className="align-middle ">
                    <div className=" flex justify-center ">
                        <img src={logo_light} alt="" className='w-40 block'/>
                    </div>
                    <h1 className='text-xl font-black text-center '>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputLabel type="text" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputLabel type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputLabel type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <InputLabel type="text" label="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    <InputLabel type="text" label="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    <InputLabel type="date" label="Birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                    <ButtonAccent buttontext="Sign Up" classname={'w-full bg-accent py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300'}/>
                </form>
            </div>
        </div>
    );
}

export default Register;
