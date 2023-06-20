import { ShimmerTitle } from "react-shimmer-effects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Post = ({ post, isLoading }) => {
  const { title, body, id } = post || {};

  if (isLoading) {
    return (
      <div className='w-full bg-white rounded-lg p-4 shadow-md'>
        <ShimmerTitle line={1} className='w-50' variant='primary' />
        <ShimmerTitle line={1} variant='primary' />
      </div>
    );
  }

  return (
    <Link to={`post/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className='w-full bg-white rounded-lg py-4 px-5 shadow-md cursor-pointer'
      >
        <p className='mb-4 font-semibold text-lg truncate'>{title}</p>
        <p className='text-gray-500 truncate'>{body}</p>
      </motion.div>
    </Link>
  );
};

export default Post;
