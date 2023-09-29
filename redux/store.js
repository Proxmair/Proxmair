import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { toastReducer } from "./features/toastSlice.js";
import { userReducer } from "./features/userSlice.js";

const rootReducer = combineReducers({
  toast: toastReducer.reducer,
  user: userReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
