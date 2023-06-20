import Button from "src/components/Button";

const ModalContent = ({ setIsModalOpen }) => {
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
          onClick={() => setIsModalOpen(false)}
          variant='danger'
        />
      </div>
    </div>
  );
};

export default ModalContent;
