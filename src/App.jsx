import PostsList from "./features/posts/components/PostsList";
import Navbar from "./common/components/navbar";

const App = () => {
  return (
    <div className='relative bg-gray-100'>
      <Navbar />
      <PostsList />
    </div>
  );
};

export default App;
