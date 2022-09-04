import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ToastStyle from "../components/ToastStyle/styles";
import api from "../services/api";

interface AuthProps {
  children: ReactNode;
}

interface UserDataLogin {
  email: string;
  password: string;
}

export interface UserDataRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  techs?: string[];
}

interface AuthProvidersData {
  signIn: (userDataLogin: UserDataLogin) => void;
  signUp: (userData: UserDataRegister) => void;
  user: object;
}

export const AuthContext = createContext<AuthProvidersData>(
  {} as AuthProvidersData
);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@deviews:token");
      const userId = localStorage.getItem("@deviews:id");

      if (token) {
        try {
          const { data } = await api.get(`/users/${userId}`);
          setUser(data);
          navigate("/dashboard", { replace: true });
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const signIn = (data: UserDataLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        const { user, accessToken: token } = response.data;

        setUser(user);

        window.localStorage.clear();
        localStorage.setItem("@deviews:token", token);
        localStorage.setItem("@deviews:id", user.id);
        toast.success("Bem vindo(a)!", ToastStyle);
        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        toast.error("Email e/ou senha inválidos.", ToastStyle);
      });
  };

  const signUp = (data: UserDataRegister) => {
    api
      .post("/register", data)
      .then(() => {
        toast.success("Conta criada com sucesso!", ToastStyle);
        navigate("/login", { replace: true });
      })
      .catch(() =>
        toast.error("Ops! Já existe um cadastro com este email.", ToastStyle)
      );
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
