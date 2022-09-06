import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface PostProps {
  children: ReactNode;
}

export interface DataPost {
  content: string;
  img?: string;
  userInfo: IuserInfo;
  date: string;
  userId: number;
}

interface PostId {
  postId: number;
}

interface DataAnswers {
  content: string;
  postId: number;
}

export interface IAnswersData {
  content: string;
  userId: number;
  date: string;
  userInfo: IuserInfo;
  postId: number;
  img?: string;
  id: number;
}

interface FireDataPost {
  userId: number;
  postId: number;
}

interface FireDataAnswers {
  userId: number;
  postId: number;
  id: number;
}

export interface IuserInfo {
  img: string;
  name: string;
  username: string;
}

export interface IFireData {
  userId: number;
  postId: number;
  id: number;
}

export interface PostsData {
  content: string;
  date: string;
  id: number;
  img?: string;
  userInfo: IuserInfo;
  fires?: IFireData[];
}

interface IPostSelected {
  content: string;
  date: string;
  id: number;
  img: string;
  userInfo: IuserInfo;
  answers: IAnswersData[];
  fire: FireDataAnswers[];
}

interface PostProvidersData {
  newPost: (postData: DataPost) => void;
  deletePost: (idPost: PostId) => void;
  editPost: (idPost: PostId, answersData: DataPost) => void;
  newAnswers: (answersData: IAnswersData) => void;
  newFirePost: (fireData: FireDataPost) => void;
  newFireAnswers: (idPost: PostId, fireData: FireDataAnswers) => void;
  searchPost: (data: string) => void;
  getUserById: (id: number) => void;
  posts: PostsData[];
  openPostModal: boolean;
  setOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>;
  postSelected: IPostSelected;
  setPostSelected: React.Dispatch<React.SetStateAction<IPostSelected>>;
  postIdSelected: number;
  setPostIdSelected: React.Dispatch<React.SetStateAction<number>>;
  getPostAndAnswers: (id: number) => void;
  reloadPosts: boolean;
}

export const PostContext = createContext<PostProvidersData>(
  {} as PostProvidersData
);

const PostProvider = ({ children }: PostProps) => {
  const { setLoading, isToken } = useContext(AuthContext);
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [postSelected, setPostSelected] = useState<IPostSelected>(
    {} as IPostSelected
  );
  const [postIdSelected, setPostIdSelected] = useState(0);
  const [page, setpage] = useState(1);
  const [reloadPosts, setReloadPosts] = useState(false);
  useEffect(() => {
    const loadPosts = async () => {
      if (isToken) {
        try {
          await api
            .get(`/posts?_page=${page}&_limit=10&_sort=id&_order=desc`, {
              headers: { Authorization: `Bearer ${isToken}` },
            })
            .then((res) => {
              const orderedPosts = res.data;
              console.log(res.data);
              setPosts(orderedPosts);
              setLoading(false);
            });
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadPosts();
  }, [isToken, reloadPosts]);

  const newPost = (data: DataPost) => {
    api
      .post("/posts", data)
      .then((response) => {
        setReloadPosts(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setReloadPosts(false);
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

  const newAnswers = (data: IAnswersData) => {
    api
      .post(`/answers`, data)
      .then((response) => {
        setReloadPosts(true);
      })
      .catch((err) => console.log(err));
    setReloadPosts(false);
  };

  const newFirePost = (data: FireDataPost) => {
    api
      .post("/posts/fires", data)
      .then((response) => {
        console.log(response);
      })
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
      .then((response) => {
        setPosts(response.data);
      })
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

  const getPostAndAnswers = (id: number) => {
    api
      .get(`/posts/${id}?_embed=answers&_embed=fires`)
      .then((response) => {
        setPostSelected(response.data);
        setOpenPostModal(true);
        console.log(postSelected);
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
        openPostModal,
        setOpenPostModal,
        postSelected,
        setPostSelected,
        postIdSelected,
        setPostIdSelected,
        getPostAndAnswers,
        reloadPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
