import { BsPenFill } from "react-icons/bs";

import Button from "src/components/Button";

const PostsHeader = ({ setIsSliderOverOpen, title }) => {
  return (
    <>
      <div className='sticky flex items-center bg-white justify-between top-0 shadow-sm py-3 px-6 z-20'>
        {title}
        <div className='flex items-center gap-1'>
          <Button
            startIcon={<BsPenFill />}
            text='Write'
            onClick={() => setIsSliderOverOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default PostsHeader;
