import { useParams } from "react-router-dom";
const EditPost = () => {
  const { id } = useParams();
  console.log(id);
  return <>edit</>;
};

export default EditPost;
