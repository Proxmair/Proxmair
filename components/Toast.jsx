"use client"
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearToast } from '@/redux/features/toastSlice';

const Toast = () => {
  const dispatch = useDispatch();
  const toastData = useSelector((state) => state.toast);


  useEffect(() => {
    if (toastData.isToastOpen) {
      const timer = setTimeout(() => {
        dispatch(clearToast());
      }, 5000);

      // Cleanup the timer when the component unmounts
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toastData.isToastOpen, dispatch]);

  return (
    <>
      {toastData.isToastOpen && (
        <div className="toast toast-center toast-top">
          <div className={`alert ${toastData.status}`}>
            <span>{toastData.message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
