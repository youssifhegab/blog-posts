import { CgProfile } from "react-icons/cg";
import { BsPenFill } from "react-icons/bs";

import Button from "../../../components/Button";

const PostsHeader = ({ setIsSliderOverOpen }) => {
  return (
    <>
      <div className='sticky flex items-center bg-white justify-between top-0 shadow-sm p-3'>
        <div className='flex items-center gap-2'>
          <CgProfile size='2em' />
        </div>
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
