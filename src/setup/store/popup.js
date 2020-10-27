import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exp1: false,
  exp2: false,
  exp3: false,
};

const popup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setExp1: (state, action) => void (state.exp1 = action.payload),
    setExp2: (state, action) => void (state.exp2 = action.payload),
    setExp3: (state, action) => void (state.exp3 = action.payload),
  },
});

export const { setExp1, setExp2, setExp3 } = popup.actions;

export default popup.reducer;
