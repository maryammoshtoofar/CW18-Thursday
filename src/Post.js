import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const url = "http://localhost:3001/posts";

const Post = () => {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    fetch(`${url}/${postId}`)
      .then((res) => res.json())
      .then((result) => {
        setSinglePost(result);
        console.log(result);
      });
  }, []);

  return (
    <>
      <h2>{singlePost.PostTitle}</h2>
      <small>{singlePost.Author}</small>
      <p>{singlePost.Content}</p>
      <Link to={`editPost`}>Edit Post</Link>
    </>
  );
};

export default Post;
