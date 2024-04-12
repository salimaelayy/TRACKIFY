import React from 'react';

const InputLabel = ({ type, label, value, onChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                id={label.toLowerCase()}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 h-10 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    );
};

export default InputLabel;
