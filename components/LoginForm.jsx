"use client"
import React, { useState } from 'react'
import InputField from './InputField';
import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';
import { openToast } from '@/redux/features/toastSlice';
import { endLoadingUser,loadingUser } from '@/redux/features/userSlice';
const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const loading = useSelector((state) => state.user.loading);
    const dispatch=useDispatch();
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loadingUser());
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
              });
              if (res.error) {
                const toastData = {
                    status: "alert-error",
                    message: "Either email or Password is incorrect"
                }
                dispatch(openToast(toastData));
              }
              else{
                const toastData = {
                    status: "alert-success",
                    message: "You are Logged in to Proxmair"
                }
                dispatch(openToast(toastData));
                dispatch(endLoadingUser());
                setEmail("");
                setPassword("");
                document.getElementById("login-modal-id").close();
              }
              
        } catch (error) {
            const toastData = {
                status: "alert-error",
                message: error.message
            }
            dispatch(openToast(toastData));
        }
    }
    return (
        <div className="bg-white p-8 rounded-lg w-96 m-auto ">
            <h2 className="text-2xl font-semibold text-center text-primary">Login</h2>
            <form className="mt-4" onSubmit={handleSubmit} >
                
                <InputField
                    label="Email"
                    type="email"
                    id="email"
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
                    id="loginpassword"
                    name="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-secondary text-white py-2 px-4 rounded-md w-full hover:bg-opacity-80"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? <span className="loading loading-spinner"></span> : "Login"}
                </button>
            </form>
            
        </div>
    )
}

export default LoginForm
/*<p className="text-sm text-gray-600 mt-4 text-center">
                Don't have an account? <span onClick={() => {
                    document.getElementById("login-modal-id").close()
                    document.getElementById("signin-modal-id").showModal()
                    
                    }} className="text-secondary hover:cursor-pointer ">Sign up</span>
            </p>*/