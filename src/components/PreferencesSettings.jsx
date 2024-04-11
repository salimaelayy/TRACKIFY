import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../redux/slices/currencySlice/currencyThunk';
import { fetchCountries } from '../redux/slices/countrySlice/countryThunk';
import { selectCountries, getCurrencies } from '../redux/selectors';


const PreferencesSettings = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);
  const countries = useSelector(selectCountries);

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
          <select id="currency" name="currency" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {currencies.map(currency => (
              <option className='hover:bg-secondary p-1' key={currency.code} value={currency.code}>{currency.name}</option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <select id="country" name="country" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {countries.map(countrOption => (
              <option key={countrOption.country} value={countrOption.country}>{countrOption.country}</option>
          ))}
          </select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-teal-800 text-white rounded-md w-1/6 p-2 mt-4">Save</button>
      </div>
    </div>
  );
};

export default PreferencesSettings;