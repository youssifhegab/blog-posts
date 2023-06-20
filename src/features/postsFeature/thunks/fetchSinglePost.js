import axiosClient from "src/service/client";

const fetchSingleBlogPost = async (id) => {
  try {
    const response = await axiosClient({
      url: `/posts/${id}`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export default fetchSingleBlogPost;
