"use client"
import React from 'react'

const InputField = ({ label, type, id, name, placeholder, value, onChange, accept, error }) => {
    const inputClassName = `outline-none border rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-secondary'
        }  ${error ? 'focus:ring-red-500' : 'focus:ring-secondary'}`;

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            {type === 'file' ? (
                <input

                    className={inputClassName}
                    type={type}
                    id={id}
                    name={name}
                    accept={accept}
                    onChange={onChange}
                />
            ) : (
                <input
                    required
                    className={inputClassName}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};
export default InputField