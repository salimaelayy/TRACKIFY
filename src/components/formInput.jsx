import React from 'react';

const InputLabel = ({ type,htmlFor, label, ...rest }) => {
    return (
        <div className="mb-4">
            <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">{label}</label>
            <input type={type} id={htmlFor} name={htmlFor} {...rest} className="mt-1 h-10 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
    );
}

export default InputLabel;
