import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "src/features/postsFeature/postsSlice";

export const store = configureStore({
  reducer: { posts: postsReducer },
});
