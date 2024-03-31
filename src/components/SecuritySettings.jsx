import React from 'react';

const SecuritySettings = () => {
  return (
    <form>
      <div className="w-full p-4">
        <div className="grid gap-4">
          <h2 className='text-teal-800 font-bold text-lg'>Change Password</h2>
          <div className="col-span-1">
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
            <input type="password" id="current-password" name="current-password" placeholder='*******' className="mt-1 block w-1/3 px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
          </div>
          <div className="col-span-1">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
            <input type="password" id="new-password" name="new-password" placeholder='********' className="mt-1 block w-1/3 px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button type="submit" className="bg-teal-800 text-white rounded-md w-1/6 p-2 mt-4">Save</button>
        </div>
      </div>
    </form>
  );
};

export default SecuritySettings;
