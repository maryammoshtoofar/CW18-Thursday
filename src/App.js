import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";
import EditPost from "./EditPost";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path=":postId" element={<Post />} />
        <Route path=":postId/editpost" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
