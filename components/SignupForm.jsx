"use client"
import React, { useState } from 'react';
import InputField from './InputField.jsx';
import axios from 'axios';
import { openToast } from '@/redux/features/toastSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { loadingUser, endLoadingUser } from '@/redux/features/userSlice.js';
import { signIn } from "next-auth/react";
const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicError, setProfilePicError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.user.loading);

    // Validate email format
    const validateEmail = (value) => {
        // Simple email format validation
        if (!value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            setEmailError('Invalid email format.');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };
    const validatePassword = (value) => {
        if (value.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            return false;
        }
        else {
            setPasswordError('');
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loadingUser());
        // Reset all previous errors
        setEmailError('');
        setPasswordError('');
        setProfilePicError('');

        // Email validation
        if (!validateEmail(email)) {
            return;
        }
        if (!validatePassword(email)) {
            return;
        }
        // Handle form submission (e.g., registration) here.
        try {
            const res = await axios.post('/api/register', { name, email, password, profilePic });
            const toastData = {
                status: res.data.alert,
                message: res.data.message
            };
            dispatch(openToast(toastData));
            if (res.data.success) {
                await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });
            }
            else {
                dispatch(endLoadingUser());
            }
            document.getElementById("signin-modal-id").close();

            setName("");
            setEmail("");
            setPassword("");
            setProfilePic("");

        } catch (error) {
            const toastData = {
                status: "alert-error",
                message: error.message
            }
            dispatch(openToast(toastData))
        }

    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name.toLowerCase();
            if (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) {
                setProfilePicError('');
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    setProfilePic(reader.result);
                };
            } else {
                setProfilePic('');
                setProfilePicError('Please select a PNG or JPEG image.');
            }
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg w-96 m-auto ">
            <h2 className="text-2xl font-semibold text-center text-primary">Sign up</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
                <InputField
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputField
                    label="Email"
                    type="email"
                    id="signinemail"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}
                    error={emailError}
                />
                <InputField
                    label="Password"
                    type="password"
                    id="signinpassword"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                    }
                    }
                    error={passwordError}
                />
                <InputField
                    label="Profile Picture"
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleProfilePicChange}
                    error={profilePicError}
                />
                <button
                    className="bg-secondary text-white py-2 px-4 rounded-md w-full hover:bg-opacity-80"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? <span className="loading loading-spinner"></span> : "Register"}

                </button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
                Already have an account? <span onClick={() => {
                    document.getElementById("signin-modal-id").close()
                    document.getElementById("login-modal-id").showModal()
                }
                } className="text-secondary hover:cursor-pointer">Log in</span>
            </p>
        </div>
    );
};

export default SignupForm;
