import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
  // role: "admin",
  // role: "mentor",
  role: "mentee",
  userId:1,
  username:"Olivia",
  name:"Olivia Ristami Nainggolan"
};

const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state)=>{
      state.isLogin=false
      state.role=null
    }
    // toggleDarkMode(state){
    //     state.isDark = !state.isDark
    // }
  },
});

export const {logout} =Auth.actions
// export const {toggleDarkMode} =auth.actions
export default Auth.reducer;
