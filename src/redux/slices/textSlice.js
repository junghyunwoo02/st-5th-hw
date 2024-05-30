import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("texts")
  ? JSON.parse(localStorage.getItem("texts"))
  : [];

export const textSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    addText: (state, action) => {
      const newText = action.payload;
      state.push(newText);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addText } = textSlice.actions;

export default textSlice.reducer;
