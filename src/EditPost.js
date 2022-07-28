import { useParams } from "react-router-dom";
const EditPost = () => {
  const { postId } = useParams();
  return <>{postId}</>;
};

export default EditPost;
