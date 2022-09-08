import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import Post from "../Post";
import { Container } from "./style";

const PostList = () => {
  const { posts } = useContext(PostContext);
  console.log(posts)
  return (
    <>
      <Container>
        {posts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            content={post.content}
            userInfo={post.userInfo}
            userId={post.userId}
            date={post.date}
            img={post.img}
            isAnswer={false}
            answers={post.answers}
          />
        ))}
      </Container>
    </>
  );
};
export default PostList;
