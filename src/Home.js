import { useState, useEffect, useRef } from "react";
import Posts from "./Posts";

const Home = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001/posts";
  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const contentInput = useRef(null);

  function addPost(e) {
    e.preventDefault();
    const newPost = {
      PostTitle: titleInput.current.value,
      Author: authorInput.current.value,
      Content: contentInput.current.value,
    };
    console.log(newPost);
    fetch(url, { method: "POST" });
    setData([...data, newPost]);
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <>
      <h4>Add a New Post</h4>
      <form>
        <div>
          <label>Post Title:</label>
          <input
            type="text"
            ref={titleInput}
            placeholder="what's on your mind?"
          ></input>
        </div>
        <div>
          <label>Author</label>
          <select ref={authorInput}>
            <option>Michel</option>
            <option>John</option>
          </select>
        </div>
        <div>
          <label>Content</label>
          <textarea ref={contentInput}></textarea>
        </div>
        <input type="submit" value="Save Post" onClick={addPost} />
      </form>

      <Posts data={data} />
    </>
  );
};

export default Home;
