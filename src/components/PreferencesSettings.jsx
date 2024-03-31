import React from 'react';

const PreferencesSettings = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
          <input type="text" id="currency" name="currency" placeholder='MAD' className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
        </div>
        <div className="col-span-1">
          <label htmlFor="time-zone" className="block text-sm font-medium text-gray-700">Time Zone</label>
          <input type="text" id="time-zone" name="time-zone"  placeholder='(UTC+1) Casablanca' className="mt-1 block w-full px-3 py-2 ring-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
        </div>
      </div>
      
      <div className="flex  justify-end">
        <button className="bg-teal-800 text-white rounded-md w-1/6 p-2 mt-4">Save</button>
      </div>
    </div>
  );
};

export default PreferencesSettings;
