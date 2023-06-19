import { useState } from "react";
import { ShimmerTitle } from "react-shimmer-effects";
import { motion } from "framer-motion";

const Post = ({ post, isLoading }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, body } = post || {};

  const navLinkVariants = {
    hidden: {
      height: "fit-content",
    },
    visible: {
      height: "max-content",
    },
  };

  if (isLoading) {
    return (
      <div className='w-full bg-white rounded-lg p-4 shadow-md'>
        <ShimmerTitle line={2} gap={10} variant='primary' />
      </div>
    );
  }

  return (
    <div className='w-full bg-white rounded-lg py-4 px-5 shadow-md '>
      <p className='mb-4 font-semibold text-lg truncate'>{title}</p>
      <motion.div
        variants={navLinkVariants}
        initial='hidden'
        animate={isExpanded ? "visible" : "hidden"}
        className='flex text-gray-500'
      >
        <p className='inline-block transition ease-in-out delay-150 resize-none'>
          {`${isExpanded ? body : body.substring(0, 100)}...`}{" "}
          <p
            className='inline-block text-black underline decoration-solid cursor-pointer'
            onClick={() => setIsExpanded((prevState) => !prevState)}
          >
            {isExpanded ? "Read less" : "Read more"}
          </p>
        </p>
      </motion.div>
    </div>
  );
};

export default Post;
