import { Route, Routes } from "react-router-dom";

import PostsListPage from "src/features/postsFeature/posts/pages/PostsListPage";
import PostPage from "src/features/postsFeature/post/pages/PostPage";

const App = () => {
  return (
    <div className='h-full'>
      <Routes>
        <Route path='/' element={<PostsListPage />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default App;
