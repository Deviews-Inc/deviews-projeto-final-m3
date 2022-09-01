import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/Logodevil.png";

import { ContainerPassword, Form } from "./styles";
import Button from "../Button";
import schema from "../../validators/loginUser";
import { IoEyeOffOutline } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { AuthContext } from "../../providers/AuthContext";

interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { signIn } = useContext(AuthContext);
  const [isView, setIsView] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <figure>
        <img src={logo} alt="Logo da Deviews" />
      </figure>

      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      {isView ? (
        <ContainerPassword>
          <input
            type="text"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button type="button" onClick={() => setIsView(!isView)}>
            <GiBleedingEye className="eyeOpen" />
          </button>
        </ContainerPassword>
      ) : (
        <ContainerPassword>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button type="button" onClick={() => setIsView(!isView)}>
            <IoEyeOffOutline />
          </button>
        </ContainerPassword>
      )}
      <span>{errors.password?.message}</span>

      <Button>&lt;Login/&gt;</Button>
      <p>
        Ainda não possui uma conta?
        <Link to={"/register"}>Cadastre-se.</Link>
      </p>
    </Form>
  );
};

export default FormLogin;
