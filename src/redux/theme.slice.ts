import { createSlice } from "@reduxjs/toolkit";

interface themeType {
   theme: string;
}

const initialState = {
   theme: "light",
};

export const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      changeTheme: (state, action) => {
         state.theme = action.payload;
      },
   },
});

export const { changeTheme } = themeSlice.actions;
const themeState = themeSlice.reducer;
export default themeState;
