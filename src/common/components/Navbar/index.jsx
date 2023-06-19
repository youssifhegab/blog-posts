import { CgProfile } from "react-icons/cg";
import { BsPenFill } from "react-icons/bs";
import Button from "../Button";
import SlideOver from "../SlideOver";
import { useState } from "react";

const Navbar = () => {
  const [isSlideOverOpen, setIsSliderOverOpen] = useState(false);
  return (
    <>
      <div className='sticky flex items-center bg-white justify-between top-0 shadow-sm p-3 mb-2'>
        <CgProfile size='2em' />
        <div className='flex items-center gap-1'>
          <Button
            startIcon={<BsPenFill />}
            text='Write'
            onClick={() => {
              console.log("fffff");
              setIsSliderOverOpen(true);
            }}
          />
        </div>
      </div>
      <SlideOver open={isSlideOverOpen} setOpen={setIsSliderOverOpen} />
    </>
  );
};

export default Navbar;
