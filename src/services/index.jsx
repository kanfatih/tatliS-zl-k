import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeOptions";

const store = configureStore({
  reducer: {
    themeOptions: themeReducer,
  },
});

export default store;
