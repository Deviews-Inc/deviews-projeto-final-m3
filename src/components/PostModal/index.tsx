import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import api from "../../services/api";
import FormPost from "../FormPost";
import Post from "../Post";
import { Container, ContainerAnswers, ContainerForm } from "./style";

const PostModal = () => {
  const { posts, postSelected } = useContext(PostContext);

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
        <FormPost />
      </ContainerForm>
    </>
  );
};
export default PostModal;
