import { BsPenFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "src/components/Button";

const PostsHeader = ({ setIsSliderOverOpen, title, setSearchInput }) => {
  return (
    <>
      <div className='sticky flex items-center bg-white justify-between top-0 shadow-sm py-3 px-6 z-20'>
        {title}
        <div className='relative w-50'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <AiOutlineSearch size='1.5rem' />
          </div>
          <input
            type='text'
            id='simple-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 '
            placeholder='Search'
            required
            onChange={(e) => setSearchInput(e.target.value)}
          />
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
