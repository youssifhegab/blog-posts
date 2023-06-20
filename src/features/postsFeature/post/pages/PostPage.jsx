import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Modal from "src/components/Modal";
import Form from "src/components/Form";
import SlideOver from "src/components/SlideOver";
import { selectAllPosts } from "../../postsSlice";
import PostHeader from "../components/PostHeader";
import ModalContent from "../components/ModalContent";

const PostPage = () => {
  const [isSlideOverOpen, setIsSliderOverOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();
  const posts = useSelector(selectAllPosts);

  const post = posts.find((post) => post.id === parseInt(id));
  const { title, body } = post || {};

  return (
    <>
      <div className='relative h-full'>
        <PostHeader
          setIsSliderOverOpen={setIsSliderOverOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <div className='h-full bg-gray-100 flex flex-col pt-24 gap-12 px-4'>
          <p className='font-bold text-2xl text-left underline decoration-1 underline-offset-2'>
            {title}
          </p>
          <p className='text-lg'>{body}</p>
        </div>
      </div>
      <SlideOver open={isSlideOverOpen} setOpen={setIsSliderOverOpen}>
        <Form setIsSliderOverOpen={setIsSliderOverOpen} defaultValues={post} />
      </SlideOver>
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalContent setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

export default PostPage;