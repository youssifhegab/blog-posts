import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineReload } from "react-icons/ai";

import SlideOver from "src/components/SlideOver";
import Form from "src/components/Form";
import { selectAllPosts, fetchPosts } from "../../postsSlice";
import Post from "../components/Post";
import PostsHeader from "../components/PostsHeader";
import Button from "src/components/Button";

const PostsListPage = () => {
  const [isSlideOverOpen, setIsSliderOverOpen] = useState(false);

  const dispatch = useDispatch();
  const postsState = useSelector(selectAllPosts);

  const { posts, isLoading, error } = postsState || {};
  console.log({ postsState });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className='relative h-full'>
        <PostsHeader setIsSliderOverOpen={setIsSliderOverOpen} />
        <div className='py-4 px-6 h-full'>
          {error ? (
            <>
              <p>{error}</p>
              <Button
                startIcon={<AiOutlineReload />}
                text='Write'
                onClick={() => dispatch(fetchPosts())}
              />
            </>
          ) : (
            <>
              <h2 className='font-bold text-2xl'>Posts</h2>
              <div className='flex flex-col gap-6 mt-6'>
                {isLoading
                  ? Array.from([...Array(4)].keys()).map((num) => (
                      <Post key={num} isLoading={isLoading} />
                    ))
                  : posts?.map((post) => (
                      <Post key={post.id} post={post} isLoading={isLoading} />
                    ))}
              </div>
            </>
          )}
        </div>
      </div>
      <SlideOver open={isSlideOverOpen} setOpen={setIsSliderOverOpen}>
        <Form setIsSliderOverOpen={setIsSliderOverOpen} />
      </SlideOver>
    </>
  );
};

export default PostsListPage;
