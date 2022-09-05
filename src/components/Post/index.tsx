import { PostsData } from "../../providers/PostContext";
import ButtonFire from "../ButtonFire";
import { Container } from "./style";

type postProps = Omit<PostsData, "id">;

const Post = ({ content, img, date, userInfo }: postProps) => {
  return (
    <Container>
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
