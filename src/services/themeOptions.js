import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeColor: "light",
  sidebar: true,
};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { toggleSidebar } = themeReducer.actions;
export default themeReducer.reducer;
