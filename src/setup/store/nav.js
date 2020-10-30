import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blur: false,
};

const popup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setBlur: (state, action) => void (state.blur = action.payload),
  },
});

export const { setBlur } = popup.actions;

export default popup.reducer;
