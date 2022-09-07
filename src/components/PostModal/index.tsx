import { useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostContext";
import FormAnswers from "../FormAnswers";
import Post from "../Post";
import { Container, ContainerAnswers, ContainerForm } from "./style";

const PostModal = () => {
  const {
    posts,
    postSelected,
    postIdSelected,
    getPostAndAnswers,
    reloadPosts,
  } = useContext(PostContext);

  useEffect(() => {
    getPostAndAnswers(postIdSelected);
  }, [reloadPosts]);

  return (
    <>
      <Container>
        {
          <Post
            content={postSelected.content}
            userInfo={postSelected.userInfo}
            date={postSelected.date}
            img={postSelected.img}
            id={postSelected.id}
          />
        }
      </Container>
      <ContainerAnswers>
        {postSelected.answers.map((answer, index) => (
          <Post
            content={answer.content}
            key={index}
            userInfo={answer.userInfo}
            date={answer.date}
            img={answer.img}
            id={answer.id}
          />
        ))}
      </ContainerAnswers>
      <ContainerForm>
        <FormAnswers />
      </ContainerForm>
    </>
  );
};
export default PostModal;
