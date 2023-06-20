import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "src/service/client";

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const response = await axiosClient({
        url: "/posts",
        method: "POST",
        data: initialPost,
      });
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export default addNewPost;
