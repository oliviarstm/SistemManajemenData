import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AbsensiMonth:""
};

const Absen = createSlice({
  name: "absen",
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.AbsensiMonth = action.payload;
    }},
});

export const {setMonth} =Absen.actions
export default Absen.reducer;
