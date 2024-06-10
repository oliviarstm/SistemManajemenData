import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
  role: "mentee",
};

const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // toggleDarkMode(state){
    //     state.isDark = !state.isDark
    // }
  },
});

// export const {toggleDarkMode} =auth.actions
export default Auth.reducer;
