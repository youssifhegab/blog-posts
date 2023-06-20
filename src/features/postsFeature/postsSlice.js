import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addNewPost, updatePost, deletePost } from "./thunks";

const initialState = {
  posts: [],
  isLoading: true,
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.posts.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          return;
        }
        const { id } = action.payload;
        const posts = state.posts.filter((post) => post.id !== id);
        state.posts = [action.payload, ...posts];
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        const posts = state.posts.filter((post) => post.id !== action.payload);
        state.posts = posts;
      });
  },
});

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
