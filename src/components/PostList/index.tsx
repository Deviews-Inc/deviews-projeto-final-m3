import { useContext, useRef, useEffect } from "react";
import { PostContext } from "../../providers/PostContext";
import Post from "../Post";
import { Container } from "./style";

const PostList = () => {
  const { posts } = useContext(PostContext);
  
  const divScrollRef = useRef<HTMLDivElement>(null);
  console.log(posts);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((test) => {
      console.log(test)
    })

    

    if (divScrollRef.current){
      intersectionObserver.observe(divScrollRef.current);
    }
  }, [])

  return (
    <>
      <Container>
        {posts.map((post, index) => (
            <Post
            key={index}
            id={post.id}
            content={post.content}
            userInfo={post.userInfo}
            date={post.date}
            img={post.img}
            fires={post.fires}
          />
        ))}
      <div ref={divScrollRef} />
      </Container>
    </>
  );
};
export default PostList;
