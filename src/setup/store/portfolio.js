import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Bruno Tapia Sierra",
  email: "btapiasierra@outlook.com",
  message: null,
};

const portfolio = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setMessage: (state, action) => void (state.message = action.message),
  },
});

export const { setMessage } = portfolio.actions;

export default portfolio.reducer;
