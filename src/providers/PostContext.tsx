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
  postId?: number;
  answersId?: number;
}

interface FireDataAnswers {
  userId: number;
  answersId: number;
  id?: number;
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
  postId?: number;
  userId: number;
  answers?: IAnswersData[];
}

interface IPostSelected {
  userId: number;
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
  deletePost: (idPost: number) => void;
  editPost: (idPost: number, answersData: DataPost) => void;
  newAnswers: (answersData: IAnswersData) => void;
  newFirePost: (fireData: FireDataPost) => void;
  newFireAnswers: (id: number, fireData: FireDataAnswers) => void;
  searchPost: (data: string) => void;
  getUserById: (id: number) => void;
  posts: PostsData[];
  deleteFire: (id: number) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>;
  openPostModal: boolean;
  setOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>;
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  postSelected: IPostSelected;
  setPostSelected: React.Dispatch<React.SetStateAction<IPostSelected>>;
  postIdSelected: number;
  setPostIdSelected: React.Dispatch<React.SetStateAction<number>>;
  getPostAndAnswers: (id: number) => void;
  reloadPosts: boolean;
  allFires: IFireData[];
  inputSearchValue: string;
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>;
  reloadPostUser: boolean;
  setReloadPostUser: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [page, setPage] = useState(1);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [reloadPostUser, setReloadPostUser] = useState(false);
  const [allFires, setAllFires] = useState<IFireData[]>([]);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  useEffect(() => {
    const loadPosts = async () => {
      if (isToken) {
        try {
          await api
            .get(
              `/posts?_page=${page}&_limit=10&_sort=id&_order=desc&_embed=answers`,
              {
                headers: { Authorization: `Bearer ${isToken}` },
              }
            )
            .then((res) => {
              if (res.data.length > 0) {
                setPosts(res.data);
              }
              setLoading(false);
            });
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadPosts();
  }, [page, isToken, setLoading]);

  useEffect(() => {
    const getAllFires = async () => {
      if (isToken) {
        try {
          await api.get(`/fires`).then((res) => {
            setAllFires(res.data);
          });
        } catch (err) {
          console.log(err);
        }
      }
    };
    getAllFires();
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

  const deletePost = (postId: number) => {
    api
      .delete(`/posts/${postId}`)
      .then((response) => {
        setReloadPosts(true);
      })
      .catch((err) => console.log(err));
    setReloadPosts(false);
  };

  const editPost = (postId: number, data: DataPost) => {
    api
      .patch(`/posts/${postId}`, data, {
        headers: { Authorization: `Bearer ${isToken}` },
      })
      .then((response) => {
        setReloadPosts(true);
      })
      .catch((err) => console.log(err));
    setReloadPosts(false);
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
      .post("/fires", data)
      .then((response) => {
        setReloadPosts(true);
      })
      .catch((err) => console.log(err));
    setReloadPosts(false);
  };

  const newFireAnswers = (id: number, data: FireDataAnswers) => {
    api
      .patch(`/posts/${id}`, data)
      .then((response) => {})
      .catch((err) => err);
  };

  const deleteFire = (id: number) => {
    api
      .delete(`/fires/${id}`)
      .then((response) => {
        setReloadPosts(true);
      })
      .catch((err) => console.log(err));
    setReloadPosts(false);
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
      .get(`/posts/${id}?_embed=answers&_embed=fires`, {
        headers: { Authorization: `Bearer ${isToken}` },
      })
      .then((response) => {
        setPostSelected(response.data);
        setOpenPostModal(true);
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
        deleteFire,
        page,
        setPage,
        setPosts,
        openEditModal,
        setOpenEditModal,
        openPostModal,
        setOpenPostModal,
        postSelected,
        setPostSelected,
        postIdSelected,
        setPostIdSelected,
        getPostAndAnswers,
        reloadPosts,
        allFires,
        inputSearchValue,
        setInputSearchValue,
        reloadPostUser,
        setReloadPostUser,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
