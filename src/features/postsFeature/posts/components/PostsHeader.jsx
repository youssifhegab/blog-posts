import { BsPenFill } from "react-icons/bs";

import Button from "src/components/Button";

const PostsHeader = ({ setIsSliderOverOpen }) => {
  return (
    <>
      <div className='sticky flex items-center bg-white justify-end top-0 shadow-sm py-3 px-6'>
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
