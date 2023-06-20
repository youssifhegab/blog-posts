import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "src/service/client";

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axiosClient({
        url: `/posts/${id}`,
        method: "PUT",
        data: initialPost,
      });
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export default updatePost;
