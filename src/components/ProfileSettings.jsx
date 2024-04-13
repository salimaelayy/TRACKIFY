import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageUpload from './UploadImage';
import Profile from "../assets/profile.jpg"
import ReactLoading from 'react-loading';
import { jwtDecode } from "jwt-decode";
import { getUserAsync,  } from '../redux/slices/userSlice/userThunk';
import axios from 'axios';

const ProfileSettings = () => {
    const dispatch = useDispatch();
    const userId = '660ac6c330b6e0b38c6be7bc';
    const { users, loading, error, image } = useSelector((state) => state.users);
    // const user=users.user;
    const [editMode, setEditMode] = useState(false);

    const [editUserData, setEditUserData] = useState({
        username: '',
        fullname: '',
        birthdate: '',
        email: '',
        country: '',
        picture: ''
    });
    
    
    const formattedBirthdate = editUserData.birthdate ? new Date(editUserData.birthdate).toISOString().split('T')[0] : '';

    useEffect(() => {
        dispatch(getUserAsync({ id: getUserIdFromToken() }));
    }, [dispatch]);
    
    useEffect(() => {
        if (users && users.user) {
            setEditUserData({
                username: users.user.username || '',
                fullname: users.user.fullname || '',
                birthdate: users.user.birthdate || '',
                email: users.user.email || '',
                country: users.user.country || '',
                picture: users.user.picture || Profile
            });
        }
    }, [users]);
    
    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = async () => {

        const formData = new FormData()

        formData.append("image",image)
        formData.append("username",editUserData.username)
        formData.append("country",editUserData.country)
        formData.append("email",editUserData.email)
        formData.append("fullname",editUserData.fullname)
        formData.append("birthdate",editUserData.birthdate)

        await axios.put(`http://localhost:3008/api/user/${  getUserIdFromToken()}`, formData); 
               setEditMode(false);

        setEditUserData({
            username: users.user.username || '',
            fullname: users.user.fullname || '',
            password: users.user.password || '',
            birthdate: users.user.birthdate || '',
            email: users.user.email || '',
            country: users.user.country || '',
            picture:users.user.picture || Profile
        });
        dispatch(getUserAsync({ id: getUserIdFromToken() }));
        
    };
    
    const getUserIdFromToken = () => {
        const token = getCookie('access-token');
        if (token) {
            const decodedToken = jwtDecode(token);
            return decodedToken.userId;
        }
        return null;
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };
    const handleImageChange = (image) => {
        console.log(image)
        setEditUserData({
          ...editUserData,
          picture: image,
        });
      };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditUserData({
            ...editUserData,
            [name]: value
        });
    };
    
    if (loading) {
        return <ReactLoading type='bars' color="#ffc857" height={67} width={75} />
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className='py-5'>
            <div className="flex"> 
                {editMode ? (
                    <ImageUpload onEditClick={handleEditClick} onImageChange={handleImageChange} />
                    ) : (
                    <img className="w-52 h-52 rounded-full border-8 border-accent" src={editUserData.picture} alt="" />
                )}
                <div className="w-full p-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="username" className="block text-sm font-medium text-primary">Username</label>
                            {editMode ? (
                                <input type="text" id="username" name="username" value={editUserData.username} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            ) : (
                                <span className='text-xl text-gray-600'>{editUserData.username}</span>
                            )}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
                            {editMode ? (
                                <input type="text" id="fullname" name="fullname" value={editUserData.fullname} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            ) : (
                                <span className='text-xl text-gray-600'>{editUserData.fullname}</span>
                            )}
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            {editMode ? (
                                <input type="email" id="email" name="email" value={editUserData.email} onChange={handleChange} placeholder='Email' className="mt-1 block w-full px-3 py-2 ring-transparent  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            ) : (
                                <span className='text-xl text-gray-600'>{editUserData.email}</span>
                            )}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
                            {editMode ? (
                                <input type="date" id="birthdate" name="birthdate" value={formattedBirthdate} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            ) : (
                                <span className='text-xl text-gray-600'>{formattedBirthdate}</span>
                            )}
                            
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                            {editMode ? (
                                <input type="text" id="country" name="country" value={editUserData.country} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            ) : (
                                <span className='text-xl text-gray-600'>{editUserData.country}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {editMode ? (
                <button onClick={handleSaveClick} className='bg-accent text-white px-4 py-2 rounded-md float-right '>Save Changes</button>
            ) : (
                <button onClick={handleEditClick} className='bg-accent text-white px-4 py-2 rounded-md float-right '>Edit</button>
            )}
        </div>
    );
};


export default ProfileSettings;

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDeispatch } from 'react-redux';
// import ImageUpload from './UploadImage';
// import { editUserAsync, getUsersAsync } from '../redux/slices/userSlice/userThunk';

// const ProfileSettings = () => {
    
//     const dispatch = useDispatch();
//     const userId = '660ac6c330b6e0b38c6be7bc';
//     const { users, error, loading } = useSelector((state) => state.users);
//     const initialUserData = users.length > 0 ? users[0] : { username: '', fullname: '', birthdate: '', email: '', country: '' };
//     const [editUserData, setEditUserData] = useState({
//         username: users ? users.username : '',
//         fullname: users ? users.fullname : '',
//         password: users ? users.password : '',
//         birthdate: users ? users.birthdate : '',
//         email: users ? users.email : '',
//         country: users ? users.country : ''
//     });
//         const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditUserData({
//             ...editUserData,
//             [name]: value
//         });
//     };
    
//     const handleSubmit = () => {
//         // Dispatch an action to edit the users information
//         dispatch(editUserAsync({ id: userId, ...editUserData }));
//     };
    
//     useEffect(() => {
//         dispatch(getUsersAsync({ id: userId }));
//     }, [dispatch]);
//     console.log(users)

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }
    
//     return (
//         <div className='py-5'>
//             <div className="flex">
//                 <ImageUpload />
//                 <div className="w-full p-4">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="col-span-1">
//                             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//                             <input type="text" id="username" name="username" value={editUserData.username} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
//                         </div>
//                         <div className="col-span-1">
//                             <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
//                             <input type="text" id="fullname" name="fullname" value={editUserData.fullname} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
//                         </div>
//                         <div className="col-span-2">
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                             <input type="email" id="email" name="email" value={editUserData.email} onChange={handleChange} placeholder='Email' className="mt-1 block w-full px-3 py-2 ring-transparent  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
//                         </div>
//                         <div className="col-span-1">
//                             <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
//                             <input type="date" id="birthdate" name="birthdate" value={editUserData.birthdate} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
//                         </div>
//                         <div className="col-span-1">
//                             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
//                             <input type="text" id="country" name="country" value={editUserData.country} onChange={handleChange} className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
//                         </div>
                        
                       
//                     </div>
//                 </div>
//             </div>
//             <button onClick={handleSubmit} className='bg-teal-500 text-white px-4 py-2 rounded-md float-right'>Save Changes</button>
//         </div>
//     );
// }

// export default ProfileSettings;