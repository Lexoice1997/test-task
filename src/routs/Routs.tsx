import { Route, Routes } from "react-router-dom";
import Post from "../pages/PostPage/PostPage";
import Posts from "../pages/PostsPage/PostsPage";
import Users from "../pages/UsersPage/UsersPage";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/users/:id" element={<Users />} />
    </Routes>
  );
};

export default Routs;
