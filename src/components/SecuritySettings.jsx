import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordAsync } from '../redux/slices/userSlice/userThunk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthProvider';

const SecuritySettings = () => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // const userId = '6617e078df14834a701f0bca';
  const{ userId }=useAuth();
  const error = useSelector((state) => state.user?.error);
  
  const fulfilled = useSelector((state) => state.user?.fulfilled);
  const notifySuccess = "You've successfully changed your password!";
  const notifyError = "You've entered the wrong password!";
  const notify = () => {
    if (!error) {
      // Password change successful
      toast.error(notifySuccess);
    }
    else{toast.error(notifyError);}
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Are you sure you want to change your password?");
    if (confirm) {
      dispatch(changePasswordAsync({ userId: userId, oldPassword: currentPassword, newPassword: newPassword }));
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full p-4">
        <div className="grid gap-4">
          <h2 className='text-teal-800 font-bold text-lg'>Change Password</h2>
          <div className="col-span-1">
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
            <input type="password" id="current-password" name="current-password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder='*******' className="mt-1 block w-1/3 px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
          </div>
          <div className="col-span-1">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
            <input type="password" id="new-password" name="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='********' className="mt-1 block w-1/3 px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" onClick={notify} className='bg-accent hover:bg-accent hover:bg-opacity-80 text-white px-4 py-2 rounded-md float-right '>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default SecuritySettings;
