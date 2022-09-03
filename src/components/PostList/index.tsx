import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import Post from "../Post";

const PostList = () => {
  const { posts } = useContext(PostContext);

  console.log(posts);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <Post
            content={post.content}
            userId={post.userId}
            date={post.date}
            img={post.img}
          />
        ))}
      </ul>
    </>
  );
};
export default PostList;
