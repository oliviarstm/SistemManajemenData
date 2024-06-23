import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menteeProfil: [],
  listMentee: [],
};

const Mentee = createSlice({
  name: "mentee",
  initialState,
  reducers: {
    setMentee: (state, action) => {
      console.log(action)
      state.menteeProfil = action.payload;
    },
    setListMentee: (state, action) => {
      console.log(action)
      state.listMentee = action.payload;
    },
  },
});

export const {setMentee, setListMentee} =Mentee.actions
// export const {toggleDarkMode} =auth.actions
export default Mentee.reducer;
