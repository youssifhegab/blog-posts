import { useNavigate } from "react-router-dom";
import { BsPenFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import Button from "../../../components/Button";

const PostHeader = ({ setIsSliderOverOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='sticky flex items-center bg-white justify-between top-0 shadow-sm p-3'>
        <Button
          startIcon={<BiArrowBack size='2em' />}
          onClick={() => navigate(-1)}
          variant='ghost'
        />
        <div className='flex items-center gap-2'>
          <Button
            startIcon={<BsPenFill />}
            text='Edit'
            onClick={() => setIsSliderOverOpen(true)}
          />
          <Button
            startIcon={<MdDelete size='2em' color='#b30000' />}
            onClick={() => setIsModalOpen(true)}
            variant='ghost'
          />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
