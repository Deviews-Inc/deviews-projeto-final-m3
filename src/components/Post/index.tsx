import { useContext } from "react";
import { PostContext, PostsData } from "../../providers/PostContext";
import ButtonFire from "../ButtonFire";
import { Container } from "./style";

const Post = ({ content, img, date, userInfo, id }: PostsData) => {
  const loggedId = localStorage.getItem("@deviews:id");
  const {
    setOpenPostModal,
    setPostIdSelected,
    getPostAndAnswers,
    newFirePost,
    deleteFire,
    allFires,
  } = useContext(PostContext);

  const postsFire = allFires.filter((elem) => elem.postId === id);

  const isFire = postsFire.findIndex(
    (elem) => elem.userId === Number(loggedId)
  );

  const onClick = () => {
    getPostAndAnswers(id);
    setPostIdSelected(id);
  };

  return (
    <Container onClick={onClick}>
      <div>
        <img src={userInfo.img} alt="User img" />
        <h2>{userInfo.name}</h2>
        <p>{`@${userInfo.username}`}</p>
      </div>
      <p className="content">{content}</p>
      {img && <img src={img} alt="post content img" />}
      <div className="bottom_info">
        <span>{date}</span>
        <div>
          {isFire === -1 ? (
            <ButtonFire
              onClick={() => {
                const data = { userId: Number(loggedId), postId: id };
                newFirePost(data);
              }}
            />
          ) : (
            <ButtonFire
              onClick={() => {
                const likesByUser = postsFire.find(
                  (elem) => elem.userId === Number(loggedId)
                );

                likesByUser && deleteFire(likesByUser.id);
              }}
              liked={true}
            />
          )}
          {postsFire?.length > 0 && <p>{postsFire.length}</p>}
        </div>
      </div>
    </Container>
  );
};
export default Post;
