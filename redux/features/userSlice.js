import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id:"",
    name: "",
    email: "",
    profilePic: "",
    loading: false,
};

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUser: () => initialState,
        loadingUser: (state) => {
            return {
                ...state,
                loading: true,
            }
        },
        endLoadingUser: (state) => {
            return {
                ...state,
                loading: false
            }
        },
        saveUser: (state, action) => {
            return {
                _id:action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
                profilePic: action.payload.profilePic,
                loading: false
            };
        },

    },
});

export const { clearUser, loadingUser, saveUser, endLoadingUser } = userReducer.actions;
