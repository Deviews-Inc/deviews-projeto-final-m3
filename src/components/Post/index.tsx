import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import { Container } from "./style";

interface IPost {
  content: string;
  img: string;
  date: string;
  userId: number;
}

const Post = ({ content, img, date, userId }: IPost) => {
  const { getUserById } = useContext(PostContext);

  //   getUserById(userId);

  return (
    <div>
      <Container>
        <div>
          <img
            src="http://images3.memedroid.com/images/UPLOADED178/61533e247bcac.jpeg"
            alt=""
          />
          <h2>Nome aqui</h2>
          <p>@UserAqui</p>
        </div>
        <p className="content">{content}</p>
        <img src={img} alt="" />
        <span>{date}</span>
      </Container>
    </div>
  );
};
export default Post;
