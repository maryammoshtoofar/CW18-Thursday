import { useState, useEffect } from "react";
import Posts from "../Posts";
import "../../App.css";
const url = "http://localhost:3001/posts";
let defaultError = true;

const Home = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    PostTitle: "",
    Author: "Choose Author's Name",
    Content: "",
  });

  function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }

  useEffect(() => {
    getData();
    defaultError = false;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { PostTitle, Author, Content } = formData;
  const isValid =
    PostTitle !== "" && Author !== "Choose Author's Name" && Content !== "";
  //  && Content === ""/;
  console.log(isValid);
  console.log(Content);
  const addPost = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => getData());
  };

  return (
    <div className="wrapper">
      <form className="primaryForm" onSubmit={addPost}>
        <h1>Add a New Post</h1>
        <label>Title</label>
        <input
          type="text"
          name="PostTitle"
          value={PostTitle}
          placeholder="what's on your mind?"
          onChange={(e) => handleChange(e)}
        ></input>
        <label>Author</label>
        <select value={Author} name="Author" onChange={(e) => handleChange(e)}>
          <option value={"Choose Author's Name"} disabled>
            Choose Author's Name
          </option>
          <option value={"Michel"}>Michel</option>
          <option value={"John"}>John</option>
        </select>
        <label>Content</label>
        <textarea
          name="Content"
          value={Content}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button
          type="submit"
          className="primaryButton"
          disabled={!isValid || defaultError}
        >
          Save Post
        </button>
      </form>

      <Posts data={data} />
    </div>
  );
};

export default Home;
