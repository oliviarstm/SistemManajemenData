import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menteeProfil: [],
  listMentee: [],
  editId:""
};

const Mentee = createSlice({
  name: "mentee",
  initialState,
  reducers: {
    setMentee: (state, action) => {
      state.menteeProfil = action.payload;
    },
    setListMentee: (state, action) => {
      state.listMentee = action.payload;
    },
    setMenteeEditId: (state, action) => {
      state.editId = action.payload;
    },
    removeMenteeEditId: (state) => {
      state.editId = "";
    },
  },
});

export const {setMentee, setListMentee, setMenteeEditId, removeMenteeEditId} =Mentee.actions
export default Mentee.reducer;
