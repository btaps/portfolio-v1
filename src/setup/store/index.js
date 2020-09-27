import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolio";

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
