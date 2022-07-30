import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";

const Posts = ({ data }) => {
  return (
    <>
      <h1>
        <AiOutlineArrowDown />
        POSTS
        <AiOutlineArrowDown />
      </h1>
      <div className="postsContainer">
        {data.map((post) => (
          // for showing data from API
          <div className="postBody" key={post.id}>
            <h2>{post.PostTitle}</h2>
            <small>by: {post.Author}</small>
            <p>{post.Content.substring(0, 80)}....</p>
            <Link to={`${post.id}`} className="primaryButton">
              View Post
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
