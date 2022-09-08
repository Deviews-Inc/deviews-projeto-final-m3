import { useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostContext";
import FormAnswers from "../FormAnswers";
import Post from "../Post";
import { Container, ContainerAnswers, ContainerForm } from "./style";

const PostModal = () => {
  const { postSelected, postIdSelected, getPostAndAnswers, reloadPosts } =
    useContext(PostContext);

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
            userId={postSelected.userId}
            isAnswer={false}
            answers={postSelected.answers}
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
            userId={postSelected.userId}
            isAnswer={true}
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
