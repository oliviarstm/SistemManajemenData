import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tugasProfil: [],
  listTugas: [],
  editId:""
};

const Tugas = createSlice({
  name: "tugas",
  initialState,
  reducers: {
    setTugas: (state, action) => {
      state.tugasProfil = action.payload;
    },
    setListTugas: (state, action) => {
      state.listTugas = action.payload;
    },
    setTugasEditId: (state, action) => {
      state.editId = action.payload;
    },
    removeTugasEditId: (state) => {
      state.editId = "";
    },
  },
});

export const {setListTugas, setTugasEditId, removeTugasEditId} =Tugas.actions
// export const {toggleDarkMode} =auth.actions
export default Tugas.reducer;
