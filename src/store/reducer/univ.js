import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  univProfil: [],
  listUniv: [],
  editId:""
};

const Univ = createSlice({
  name: "univ",
  initialState,
  reducers: {
    setUniv: (state, action) => {
      state.univProfil = action.payload;
    },
    setListUniv: (state, action) => {
      state.listUniv = action.payload;
    },
    setUnivEditId: (state, action) => {
      state.editId = action.payload;
    },
    removeUnivEditId: (state) => {
      state.editId = "";
    },
  },
});

export const {setListUniv, setUnivEditId, removeUnivEditId} =Univ.actions
// export const {toggleDarkMode} =auth.actions
export default Univ.reducer;
