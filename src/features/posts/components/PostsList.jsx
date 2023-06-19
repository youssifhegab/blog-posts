import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { selectAllPosts } from "../postsSlice";
import Post from "./Post";

const PostsList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const posts = useSelector(selectAllPosts);
  return (
    <div className='py-4 mx-6'>
      <h2 className='font-bold text-2xl'>Posts</h2>
      <motion.div
        className='flex flex-col gap-4 mt-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} isLoading={isLoading} />
        ))}
      </motion.div>
    </div>
  );
};

export default PostsList;
