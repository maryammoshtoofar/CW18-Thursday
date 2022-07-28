import { useState, useEffect, useRef } from "react";
import Posts from "./Posts";
const url = "http://localhost:3001/posts";

const Home = () => {
  const [data, setData] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const contentInput = useRef(null);
  function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }

  useEffect(() => {
    getData();
  }, []);

  const addPost = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form);
    // data.id = "5";
    // data.id = parseInt(data.id);
    // console.log("data", data);
    // const newPost = {
    //   PostTitle: titleInput.current.value,
    //   Author: authorInput.current.value,
    //   Content: contentInput.current.value,
    // };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => getData());
    setTitleValue("");
  };

  return (
    <>
      <h4>Add a New Post</h4>
      <form onSubmit={addPost}>
        <div>
          <label>Post Title:</label>
          <input
            type="text"
            name="PostTitle"
            value={titleValue}
            ref={titleInput}
            placeholder="what's on your mind?"
            onChange={(e) => setTitleValue(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Author</label>
          <select ref={authorInput} name="Author">
            <option>Michel</option>
            <option>John</option>
          </select>
        </div>
        <div>
          <label>Content</label>
          <textarea ref={contentInput} name="Content"></textarea>
        </div>
        <button type="submit">Save Post</button>
      </form>

      <Posts data={data} />
    </>
  );
};

export default Home;
