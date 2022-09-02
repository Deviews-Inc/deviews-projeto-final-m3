import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const signUp = (data: UserDataRegister) => {
    api
      .post("/register", data)
      .then((response) => {
        navigate("/login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
