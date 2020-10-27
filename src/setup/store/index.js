import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolio";
import popupReducer from "./popup";

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
    popup: popupReducer,
  },
});
