import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "src/service/client";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axiosClient({
      url: "/posts",
      method: "GET",
    });
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

export default fetchPosts;
