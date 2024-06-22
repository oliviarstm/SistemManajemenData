import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menteeData: [],
};

const Mentee = createSlice({
  name: "metee",
  initialState,
  reducers: {
    setMentee: (state, action) => {
      console.log(action)
      state.menteeData = action.payload;
    },
  },
});

export const {setMentee} =Mentee.actions
// export const {toggleDarkMode} =auth.actions
export default Mentee.reducer;
