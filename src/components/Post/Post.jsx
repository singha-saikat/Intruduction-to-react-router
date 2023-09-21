import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handlePost = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="border-2 border-green-500 rounded-md p-4">
      <h1>PostId:{id}</h1>
      {title}
      <br />
      <Link className="border p-1 bg-sky-300" to={`/post/${id}`}>
        {" "}
        Show details
      </Link>
      <Link to={`/post/${id}`}>
        <button>Click</button>
      </Link>
      <button onClick={handlePost}>Touch it</button>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
