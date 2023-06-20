import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Button from "src/components/Button";
import { deletePost } from "../../thunks";

const DeleteModal = ({ setIsModalOpen }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between h-full items-center mt-8 mb-4 mx-4'>
      <p className='font-bold text-lg text-left'>
        Are you sure you want to delete this post?
      </p>
      <div className='flex justify-evenly w-full'>
        <Button
          text="No, I don't"
          onClick={() => setIsModalOpen(false)}
          variant='ghost'
        />
        <Button
          text='Yes, I want'
          onClick={() => {
            dispatch(deletePost(parseInt(id)));
            setIsModalOpen(false);
            navigate(-1);
          }}
          variant='danger'
        />
      </div>
    </div>
  );
};

export default DeleteModal;
