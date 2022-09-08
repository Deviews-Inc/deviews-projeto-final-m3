import { useContext, useEffect, useState } from "react";
import { AuthContext, UserDataRegister } from "../../providers/AuthContext";
import { PostContext } from "../../providers/PostContext";
import { useForm } from "react-hook-form";
import { Schema } from "../../validators/EditUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ContainerForm } from "./style";
import Button from "../Button";
import { BsPlusLg } from "react-icons/bs";
import ListTech from "../ListTech";
import toast from "react-hot-toast";
import { ToastError } from "../ToastStyle/styles";

interface IFormEdit {
  name: string;
  bio: string;
  img: string;
}

const UserModal = () => {
  const { user, techs, setTechs, editProfile } = useContext(AuthContext);

  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState(user.name);
  const [img, setImg] = useState(user.img);
  const [bio, setBio] = useState(user.bio);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEdit>({
    resolver: yupResolver(Schema),
  });

  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setName((e.target as HTMLInputElement).value);
  };

  const handleChangeImg = (e: React.FormEvent<HTMLInputElement>) => {
    setImg((e.target as HTMLInputElement).value);
  };

  const handleChangeBio = (e: React.FormEvent<HTMLInputElement>) => {
    setBio((e.target as HTMLInputElement).value);
  };

  const addTech = (data: string) => {
    const findTech = techs.find(
      (elem) => elem.toLowerCase() === data.toLowerCase()
    );

    findTech && toast.error("Você já cadastrou essa tecnologia.", ToastError);
    data === "" && toast.error("Adicione uma tecnologia válida.", ToastError);

    !findTech && data !== "" && setTechs((prev: any) => [...prev, data]);
  };

  const createData = (data: IFormEdit) => {
    const newData = {
      name: data.name,
      bio: data.bio,
      techs: techs,
      img: data.img,
    };
    editProfile(newData);
  };

  return (
    <>
      <Container>
        <div className="containerUser">
          <figure>
            <img src={user.img} alt="User Avatar" />
          </figure>
          <div>
            <h3>{user.name}</h3>
            <span>@{user.username}</span>
          </div>
        </div>
      </Container>
      <ContainerForm onSubmit={handleSubmit(createData)}>
        <label htmlFor="name">Alterar Nome</label>
        <input
          className="entry"
          placeholder="Digite aqui o seu nome"
          type="text"
          onChangeCapture={(e) => handleChangeName(e)}
          value={name}
          {...register("name")}
        />
        <label htmlFor="img">Alterar foto</label>
        <input
          className="entry"
          placeholder="insira sua foto"
          type="text"
          onChangeCapture={(e) => handleChangeImg(e)}
          value={img}
          {...register("img")}
        />
        <label htmlFor="bio">Alterar bio</label>
        <input
          className="entry"
          placeholder="insira sua bio"
          type="text"
          onChangeCapture={(e) => handleChangeBio(e)}
          value={bio}
          {...register("bio")}
        />

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
          {techs &&
            techs.length > 0 &&
            techs.map((thisTech, index) => (
              <ListTech
                key={index}
                thisTech={thisTech}
                index={index}
                newTech={techs}
                setNewTech={setTechs}
              />
            ))}
        </ul>

        <Button>&lt;Salvar/&gt;</Button>
      </ContainerForm>
    </>
  );
};
export default UserModal;
