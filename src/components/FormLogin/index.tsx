import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import logo from "../../assets/logodevil.png";

import { Form } from "./styles";
import Button from "../Button";
import schema from "../../validators/loginUser";

interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  const singIn = (data: IUserLogin) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(singIn)}>
      <figure>
        <img src="" alt="Logo da Deviews" />
      </figure>

      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
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
