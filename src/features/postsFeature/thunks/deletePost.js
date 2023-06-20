import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "src/service/client";

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    await axiosClient({
      url: `/posts/${id}`,
      method: "DELETE",
    });
    return id;
  } catch (err) {
    return err.message;
  }
});

export default deletePost;
