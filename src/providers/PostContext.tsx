import { createContext, ReactNode } from "react";
import api from "../services/api";

interface PostProps {
  children: ReactNode;
}

interface DataPost {
  content: string;
  img: string;
}

interface PostId {
  postId: number;
}

interface DataAnswers {
  content: string;
  postId: number;
}

interface AnswersId {
  answersId: number;
}

interface FireDataPost {
  count: number;
  postId: number;
}

interface FireDataAnswers {
  count: number;
  answersId: number;
}

export const PostContext = createContext({});

const PostProvider = ({ children }: PostProps) => {
  const newPost = (data: DataPost) => {
    api
      .post("/posts", data)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId: PostId) => {
    api
      .delete(`/posts/${postId}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const editPost = (postId: PostId, data: DataPost) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newAnswers = (data: DataAnswers) => {
    api
      .post("/answers", data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const deleteAnswers = (answersId: AnswersId) => {
    api
      .delete(`/answers/${answersId}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newFirePost = (data: FireDataPost) => {
    api
      .post("/fires", data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newFireAnswers = (data: FireDataAnswers) => {
    api
      .post("/fires", data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
};
