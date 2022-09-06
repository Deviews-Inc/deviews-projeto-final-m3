import { createContext, ReactNode, useEffect, useState } from "react";
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

interface IuserInfo {
  img: string;
  name: string;
  username: string;
}

export interface PostsData {
  content: string;
  date: string;
  id: number;
  img: string;
  userInfo: IuserInfo;
}

interface PostProvidersData {
  newPost: (postData: DataPost) => void;
  deletePost: (idPost: PostId) => void;
  editPost: (idPost: PostId, answersData: DataPost) => void;
  newAnswers: (idPost: PostId, answersData: DataAnswers) => void;
  newFirePost: (idPost: PostId, fireData: FireDataPost) => void;
  newFireAnswers: (idPost: PostId, fireData: FireDataAnswers) => void;
  searchPost: (data: string) => void;
  getUserById: (id: number) => void;
  posts: PostsData[];
}

export const PostContext = createContext<PostProvidersData>(
  {} as PostProvidersData
);

const PostProvider = ({ children }: PostProps) => {
  const [posts, setPosts] = useState<PostsData[]>([]);

  useEffect(() => {
    const loadPosts = () => {
      const token = localStorage.getItem("@deviews:token");
      if (token) {
        try {
          api.get("/posts").then((res) => {
            setPosts(res.data.reverse());
          });
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadPosts();
  }, []);

  console.log(posts);

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
      .catch((err) => err);
  };
  const searchPost = (data: string) => {
    api
      .get(`/posts?q=${data}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const getUserById = (id: number) => {
    api
      .get(`/users/${id}`)
      .then((response) => {
        console.log(response);
      })
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
        searchPost,
        posts,
        getUserById,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
