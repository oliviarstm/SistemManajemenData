import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mentorProfil: [],
  listMentor: [],
  editId:""
};

const Mentor = createSlice({
  name: "mentor",
  initialState,
  reducers: {
    setMentor: (state, action) => {
      state.mentorProfil = action.payload;
    },
    setListMentor: (state, action) => {
      state.listMentor = action.payload;
    },
    setMentorEditId: (state, action) => {
      state.editId = action.payload;
    },
    removeMentorEditId: (state) => {
      state.editId = "";
    },
  },
});

export const {setListMentor, setMentorEditId, removeMentorEditId} =Mentor.actions
// export const {toggleDarkMode} =auth.actions
export default Mentor.reducer;
