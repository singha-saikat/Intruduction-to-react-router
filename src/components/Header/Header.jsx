import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center">
      <div className="flex gap-4 justify-center underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to='/users'>Users</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
};

export default Header;
