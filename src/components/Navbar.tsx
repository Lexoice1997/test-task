import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Navbar;
