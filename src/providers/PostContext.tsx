import { createContext, ReactNode } from "react";
import api from "../services/api";

interface PostProps {
  children: ReactNode;
}

interface DataPost {
  content: string;
  img: string;
  firePost: number;
  userId: number;
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

interface PostProvidersData {
  newPost: (postData: DataPost) => void;
  deletePost: (idPost: PostId) => void;
  editPost: (idPost: PostId, answersData: DataPost) => void;
  newAnswers: (idPost: PostId, answersData: DataAnswers) => void;
  newFirePost: (idPost: PostId, fireData: FireDataPost) => void;
  newFireAnswers: (idPost: PostId, fireData: FireDataAnswers) => void;
}

export const PostContext = createContext<PostProvidersData>(
  {} as PostProvidersData
);

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

  const newAnswers = (postId: PostId, data: DataAnswers) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newFirePost = (postId: PostId, data: FireDataPost) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newFireAnswers = (postId: PostId, data: FireDataAnswers) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  return (
    <PostContext.Provider
      value={{
        newPost,
        deletePost,
        editPost,
        newAnswers,
        newFirePost,
        newFireAnswers,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
