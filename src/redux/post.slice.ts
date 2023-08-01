import { createSlice } from "@reduxjs/toolkit";
import { Post, User } from "@/data/type";

interface PostType {
   posts: Post[];
   users: User[];
}

const initialState: PostType = {
   posts: [],
   users: [],
};

export const postSlice = createSlice({
   name: "Post",
   initialState,
   reducers: {
      addPost: (state, action) => {
         state.posts.push(action.payload);
      },
      getPost: (state, action) => {
         state.posts = action.payload;
      },
      getUser: (state, action) => {
         state.users = action.payload;
      },
   },
});

export const { addPost, getPost, getUser } = postSlice.actions;
const PostState = postSlice.reducer;
export default PostState;
