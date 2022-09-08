import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { BsPencil } from "react-icons/bs";
import {
  IAnswersData,
  IuserInfo,
  PostContext,
} from "../../providers/PostContext";
import ButtonFire from "../ButtonFire";
import { Container } from "./style";
import Chat from "../ButtonChat";
import Modal from "../Modal";
import EditPostModal from "../EditPostModal";

interface IPostProps {
  content: string;
  img?: string;
  date: string;
  userInfo: IuserInfo;
  id: number;
  userId: number;
  isAnswer?: boolean;
  answers?: IAnswersData[];
}

const Post = ({
  content,
  img,
  date,
  userInfo,
  id,
  isAnswer,
  answers,
  userId
}: IPostProps) => {
  const { deletePost, openEditModal, setOpenEditModal } = useContext(PostContext);
  const loggedId = localStorage.getItem("@deviews:id");
  const {
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
    <>
    {openEditModal && <Modal onClose={() => setOpenEditModal(false)}><EditPostModal/></Modal>}
    <Container>
      {userId === Number(loggedId) ? 
      <div className="userPost">
        <BsPencil className="editPost" onClick={() => {
          setOpenEditModal(true)
          setPostIdSelected(id)
        }} />
        <CgClose className="deletePost" onClick={() => {
          deletePost(id)
          }} />
      </div> 
      : <></>}
      <div>
        <img src={userInfo.img} alt="User img" />
        <h2>{userInfo.name}</h2>
        <p>{`@${userInfo.username}`}</p>
      </div>
      <p className="content">{content}</p>
      {img && <img src={img} alt="post content img" />}
      <div className="bottom_info">
        {isAnswer ? (
          <span>{date}</span>
          ) : (
            <>
            <span>{date}</span>
            <div>
              <Chat onClick={onClick} />
              <p>{answers?.length}</p>
            </div>
            <div>
              {isFire === -1 ? (
                <>
                  <ButtonFire
                    onClick={() => {
                      const data = { userId: Number(loggedId), postId: id };
                      newFirePost(data);
                    }}
                    />
                  {postsFire?.length > 0 && <p>{postsFire.length}</p>}
                </>
              ) : (
                <>
                  <ButtonFire
                    onClick={() => {
                      const likesByUser = postsFire.find(
                        (elem) => elem.userId === Number(loggedId)
                      );

                      likesByUser && deleteFire(likesByUser.id);
                    }}
                    liked={true}
                    />
                  {postsFire?.length > 0 && <p>{postsFire.length}</p>}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  </>
  );
};
export default Post;
