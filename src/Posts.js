const Posts = ({ data }) => {
  return (
    <>
      {data.map((post) => (
        // for showing data from API
        <div key={post.id}>
          <h2>{post.PostTitle}</h2>
          <small>{post.Author}</small>
          <p>{post.Content.substring(0, 80)}....</p>
          <button>View Post</button>
        </div>
      ))}
    </>
  );
};

export default Posts;