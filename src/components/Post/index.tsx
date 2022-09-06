import { useContext } from "react";
import { PostContext, PostsData } from "../../providers/PostContext";
import ButtonFire from "../ButtonFire";
import { Container } from "./style";

// type postProps = Omit<PostsData, "id">;
interface postProps {
  content: string;
  img?: string;
  date: string;
  userInfo: { name: string; username: string; img: string };
  id: number;
  answers?: [{}];
}

const Post = ({ content, img, date, userInfo, id }: postProps) => {
  const { setOpenPostModal, setPostIdSelected, getPostAndAnswers } =
    useContext(PostContext);

  const onClick = () => {
    getPostAndAnswers(id);
    // setPostIdSelected(id);
  };
  return (
    <Container onClick={onClick}>
      <div>
        <img src={userInfo.img} alt="imagem usuário" />
        <h2>{userInfo.name}</h2>
        <p>{`@${userInfo.username}`}</p>
      </div>
      <p className="content">{content}</p>
      {img && <img src={img} alt="imagem post" />}
      <div className="bottom_info">
        <span>{date}</span>
        <ButtonFire />
      </div>
    </Container>
  );
};
export default Post;
