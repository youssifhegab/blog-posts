import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineReload } from "react-icons/ai";

import SlideOver from "src/components/SlideOver";
import Form from "src/components/Form";
import { selectAllPosts } from "../../postsSlice";
import Post from "../components/Post";
import PostsHeader from "../components/PostsHeader";
import Button from "src/components/Button";
import { fetchPosts } from "../../thunks";

const PostsListPage = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(selectAllPosts);

  const [isSlideOverOpen, setIsSliderOverOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { posts, isLoading, error } = postsState || {};

  const searchData = posts?.filter((post) => {
    if (searchInput === "") {
      return post;
    }
    const searchByPhone = post.title?.toLowerCase()?.includes(searchInput);
    const searchByName = post.body?.toLowerCase()?.includes(searchInput);

    return searchByName || searchByPhone;
  });

  useEffect(() => {
    if (posts?.length === 0) dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className='relative h-full'>
        <PostsHeader
          title={<h2 className='font-bold text-2xl'>Posts</h2>}
          setIsSliderOverOpen={setIsSliderOverOpen}
          setSearchInput={setSearchInput}
        />
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
              <div className='flex flex-col gap-6 mt-6'>
                {isLoading
                  ? Array.from([...Array(4)].keys()).map((num) => (
                      <Post key={num} isLoading={isLoading} />
                    ))
                  : searchData?.map((post) => (
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
