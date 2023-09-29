import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToastOpen: false,
    status: "",
    message: "",
};

export const toastReducer = createSlice({
    name: "toast",
    initialState,
    reducers: {
        clearToast: () => initialState,
        openToast: (state, action) => {
            return {
                isToastOpen: true,
                status: action.payload.status,
                message: action.payload.message,
            };
        },
    },
});

export const { clearToast, openToast } = toastReducer.actions;
