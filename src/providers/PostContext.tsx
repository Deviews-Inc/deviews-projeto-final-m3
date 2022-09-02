import { createContext, ReactNode } from "react";
import api from "../services/api";

interface PostProps {
  children: ReactNode;
}

interface DataPost {
  content: string;
  img: string;
}

interface DataPostId {
  postId: number;
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

  const deletePost = (postId: DataPostId) => {
    api
      .delete(`/posts/${postId}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const editPost = (postId: DataPostId, data: DataPost) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const searchPost = (data: string) => {
    api
      .get(`/posts?q=${data}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
};
