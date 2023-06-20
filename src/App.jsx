import { Route, Routes } from "react-router-dom";

import PostsListPage from "./features/posts/pages/PostsListPage";
import PostPage from "./features/post/pages/PostPage";

const App = () => {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<PostsListPage />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default App;
