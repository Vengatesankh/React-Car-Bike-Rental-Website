import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/UserSlice.js"; // ✅ include .js extension

const Store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default Store;
