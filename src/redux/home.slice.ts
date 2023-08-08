import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   tabActive: "",
};

export const homeSlice = createSlice({
   name: "home",
   initialState,
   reducers: {
      setTabActive: (state, action) => {
         state.tabActive = action.payload;
      },
   },
});

export const { setTabActive } = homeSlice.actions;
const homeReducer = homeSlice.reducer;
export default homeReducer;
