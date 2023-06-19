import { useState } from "react";
import { ShimmerTitle } from "react-shimmer-effects";

const Post = ({ post, isLoading }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, body } = post || {};

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
      <div className='flex text-gray-500'>
        <p className='inline-block transition ease-in-out delay-150 resize-none'>
          {`${isExpanded ? body : body.substring(0, 100)}...`}{" "}
          <p
            className='inline-block text-black underline decoration-solid cursor-pointer'
            onClick={() => setIsExpanded((prevState) => !prevState)}
          >
            {isExpanded ? "Read less" : "Read more"}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Post;
