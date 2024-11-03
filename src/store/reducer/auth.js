import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

const initialState = {
  isLogin: isLoggedIn(),
  role: null,
  accountId:null,
  username:null,
  name:null,
};

console.log(initialState)


const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.role = null;
      state.accountId = null;
      state.username = null;
      state.name = null;
      // Clear token from localStorage
      localStorage.removeItem("token");
    },
    login: (state, action) => {
      // Extract user data from action payload (decoded token)
      state.isLogin = true;
      state.role = action.payload.role;
      state.accountId = action.payload.accountId;
      state.username = action.payload.username;
      state.name = action.payload.name;
    },
  },
});

export const {logout, login} =Auth.actions
export default Auth.reducer;
