import { configureStore } from "@reduxjs/toolkit";
import PostState from "./post.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeState from "./theme.slice";
import homeReducer from "./home.slice";

const store = configureStore({
   reducer: {
      posts: PostState,
      theme: themeState,
      home: homeReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
