"use client"
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import axios from 'axios';
import { endLoadingUser, loadingUser, saveUser } from '@/redux/features/userSlice.js';
import { openToast } from '@/redux/features/toastSlice.js';
import Dropdown from './Dropdown.jsx';
import { BsPersonCircle } from 'react-icons/bs'
import Modal from './Modal.jsx';
import LoginForm from './LoginForm.jsx'
import LoginModalBtn from './modalbutton/LoginModalBtn.jsx';
import SigninModalBtn from './modalbutton/SigninModalBtn.jsx';
import SignupForm from './SignupForm.jsx';

const Profile = () => {

    const { data, status } = useSession();
    const dispatch = useDispatch();
    const email = useMemo(() => {
        return status === 'authenticated' ? data.user.email : null;
    }, [data, status]);

    const logoutHandler = async (e) => {
        e.preventDefault();
        try {
            await signOut();
            const toastData = {
                status: "alert-success",
                message: "Logout Successful"
            };
            dispatch(openToast(toastData));
        } catch (error) {
            const toastData = {
                status: "alert-error",
                message: error.message
            };
            dispatch(openToast(toastData));
        }
    }

    const getUser = async (email) => {
        if (email) {
            dispatch(loadingUser());
            try {
                const res = await axios.post('/api/user', { email });
                if (res && res.data.success) {
                    dispatch(saveUser(res.data.user));
                }
                else {
                    dispatch(endLoadingUser())
                }
            } catch (error) {
                dispatch(endLoadingUser())
            }
            
        }
    };

    useEffect(() => {
        getUser(email);
    }, [email]);

    const { name, profilePic, loading } = useSelector((state) => state.user);

    return (
        <Dropdown icon={
            loading ?
                <span className="loading loading-spinner"></span> :
                profilePic ? <img className='rounded-full w-full' src={profilePic} alt='profile-pic' /> :
                    <BsPersonCircle className='text-gray-300 text-4xl' />

        } dropdownEnd={true}>
            {name ? <>
                <li><p>Profile</p></li>
                <li><p>Settings</p></li>
                <li><p>Contact us</p></li>
                <li><button onClick={logoutHandler} >Log out</button></li>
            </> : <>
                <Modal
                    modalBtn={<LoginModalBtn />}
                    modalId="login-modal-id"
                    isModalTop={false}>
                    <LoginForm />
                </Modal>
                <Modal
                    modalBtn={<SigninModalBtn />}
                    modalId="signin-modal-id"
                    isModalTop={false}>
                    <SignupForm />
                </Modal></>}
        </Dropdown>
    )
}

export default Profile