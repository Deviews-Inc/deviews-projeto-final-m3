import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import Post from "../Post";
import { Container } from "./style";

const PostList = () => {
  const { posts } = useContext(PostContext);

  console.log(posts);

  return (
    <>
      <Container>
        {posts.map((post, index) => (
          <Post
            key={index}
            content={post.content}
            userInfo={post.userInfo}
            date={post.date}
            img={post.img}
          />
        ))}
      </Container>
    </>
  );
};
export default PostList;