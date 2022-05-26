import { Route, Routes } from "react-router-dom";
import Post from "../components/Post";
import Posts from "../components/Posts";
import Users from "../components/Users";

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
