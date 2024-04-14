import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthProvider'; 
import { getUserAsync } from '../redux/slices/userSlice/userThunk';
import { useDispatch } from 'react-redux';
 
const DashboardSearch = () => {
  const { userId } = useAuth();
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDatadispatch =  await dispatch(getUserAsync({ id: userId }));
        const {user} = userDatadispatch.payload;
        setUsername(user.username);
        console.log(user.username)
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);


  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="w-full h-12 pl-4 pb-2 border-b pr-6  border-secondary flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="text-primary text-xl font-bold font-['Inter']">Hello  {username}</div>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-4 bg-accent rounded-full" />
          <div className="text-sm text-neutral-400 font-normal font-['Inter']">{currentDate}</div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-96  h-10 justify-start items-center gap-10 inline-flex">
          <div className="justify-start items-center gap-8 flex">
            <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex" />
          </div>
          <div className="pl-8  pr-3 py-2 bg-white rounded-md shadow justify-start items-start gap-44 flex flex-grow">
            <input
              type="text"
              placeholder="Search here"
              className="w-full text-neutral-400 text-base font-normal font-['Inter'] leading-normal outline-none"
            />
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
