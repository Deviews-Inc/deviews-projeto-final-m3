import { useState } from "react";
import { Schema } from "../../validators/RegisterUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { Form, ListItem } from "./styles";
import { BsPlusLg } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FiAlertCircle } from "react-icons/fi";
import Logo from "../../assets/LogoDevil.png";
import Span from "../FormSpan";

interface IFormRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
}

const FormRegister = () => {
  const [newTech, setNewTech] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const {
    register,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(Schema),
  });

  const addTech = (data: string) => {
    setNewTech((prev: any) => [...prev, data]);
    console.log(newTech);
  };

  const removeTech = (index: number) => {
    const filterTech = newTech.filter((tech, i) => i !== index);
    setNewTech(filterTech);
  };

  return (
    <Form>
      <div className="container">
        <div className="container_logo">
          <h2>Cadastro</h2>
          <figure>
            <img src={Logo} alt="Logo Deviews" />
          </figure>
        </div>
        <div className="container_form">
          <div className="container_div_form">
            <div className="divForm form_left">
              <label htmlFor="name">Nome</label>
              <input
                className="entry"
                placeholder="Digite aqui o seu nome"
                type="text"
                {...register("name")}
              />
              <div className="div_span">
                {errors.name && (
                  <>
                    <span className="error">{errors.name.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="username">Nome de usuário</label>
              <input
                className="entry"
                placeholder="Username"
                type="text"
                {...register("username")}
              />
              <div className="div_span">
                {errors.username && (
                  <>
                    <span className="error">{errors.username.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="bio">Bio</label>
              <input
                className="entry"
                placeholder="Fale sobre você"
                type="text"
                {...register("bio")}
              />
              <div className="div_span">
                {errors.bio && (
                  <>
                    <span className="error">{errors.bio.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="email">Email</label>
              <input
                className="entry"
                placeholder="Digite aqui o seu email"
                type="email"
                {...register("email")}
              />
              <div className="div_span">
                {errors.email && (
                  <>
                    <span className="error">{errors.email.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>
            </div>
            <div className="divForm">
              <label htmlFor="password">Senha</label>
              <input
                className="entry"
                placeholder="Digite aqui a sua senha"
                type="password"
                {...register("password")}
              />
              <div className="div_span">
                {errors.password && (
                  <>
                    <span className="error">{errors.password.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="passwordConfirm">Confirmar Senha</label>
              <input
                className="entry"
                placeholder="Confirme sua senha"
                type="password"
                {...register("passwordConfirm")}
              />
              <div className="div_span">
                {errors.passwordConfirm && (
                  <>
                    <span className="error">
                      {errors.passwordConfirm.message}
                    </span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="techs">Tecnologias</label>
              <div className="entryDiv">
                <input
                  placeholder="Digite a tecnologia"
                  value={inputValue}
                  type="text"
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <button
                  className="btn_add"
                  type="button"
                  onClick={() => addTech(inputValue)}
                >
                  <BsPlusLg className="iconReact" />
                </button>
              </div>

              <ul>
                {newTech.length > 0 &&
                  newTech.map((thisTech, index) => (
                    <ListItem key={index}>
                      {thisTech}{" "}
                      <button
                        className="btn_close"
                        type="button"
                        onClick={() => removeTech(index)}
                      >
                        <CgClose className="iconReact" />
                      </button>
                    </ListItem>
                  ))}
              </ul>
            </div>
          </div>

          <Button>&lt;Cadastrar/&gt;</Button>
          <Span>Faça seu login.</Span>
        </div>
      </div>
    </Form>
  );
};

export default FormRegister;
