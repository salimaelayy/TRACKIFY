import React from 'react'
import ImageUpload from './UploadImage'

const ProfileSettings = () => {
  return (
    <div>
        <div className="flex">
            <ImageUpload/>
            <div className=" w-full p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullname" name="fullname" className="mt-1 block w-full px-3 py-2 ring-transparent  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" disabled value="password"  name="password" className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
                        <input type="date" id="birthdate" name="birthdate" className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' className="mt-1 block w-full px-3 py-2 ring-transparent  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <input type="text"  id="country" name="country" className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSettings