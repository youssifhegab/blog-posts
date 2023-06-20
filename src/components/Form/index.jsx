import { BiArrowBack, BiSave } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addNewPost, updatePost } from "src/features/postsFeature/thunks";
import Button from "../Button";

const Form = ({ setIsSliderOverOpen, defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log({ data });
    try {
      if (defaultValues) dispatch(updatePost(data, defaultValues.id));
      else dispatch(addNewPost(data));
      setIsSliderOverOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='h-full flex gap-8 flex-col mt-6 mx-4'
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <Button
            type='button'
            variant='ghost'
            startIcon={<BiArrowBack size='1.5em' />}
            onClick={() => setIsSliderOverOpen(false)}
          />
          <p>
            {defaultValues ? "Edit your article!" : "Create your Own article!"}
          </p>
        </div>
        <Button type='submit' text='Save' startIcon={<BiSave size='1.5em' />} />
      </div>
      <input
        {...register("title")}
        placeholder='Write you blog post header'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 block w-full p-2.5'
      ></input>
      <textarea
        {...register("body")}
        id='message'
        rows='25'
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        placeholder='Write your thoughts here...'
      ></textarea>
    </form>
  );
};

export default Form;
