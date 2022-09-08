import { useContext, useState, useEffect } from "react";
import {
  IAnswersData,
  IuserInfo,
  PostContext,
  PostsData,
} from "../../providers/PostContext";
import ButtonFire from "../ButtonFire";
import { Container } from "./style";
import Chat from "../ButtonChat";

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

  const [isUser, setIsUser] = useState<boolean>(false);
  
    if (userId === Number(loggedId)){
      setIsUser(true);
    }
    
  return (
    <Container>
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
  );
};
export default Post;
