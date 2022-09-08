import Button from "../Button";
import { ContainerForm, Form } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../../validators/postValidators";
import { DataPost, PostContext } from "../../providers/PostContext";
import { AuthContext } from "../../providers/AuthContext";

interface IPostData {
  content: string;
  img?: string;
}

const FormEditPost = () => {
  const { user } = useContext(AuthContext);
  const { editPost, postIdSelected, setOpenEditModal } =
    useContext(PostContext);
  const [isOpen, setIsOpen] = useState(false);

  const parent = {
    closed: { width: 0 },
    open: { width: 200 },
  };

  const { register, handleSubmit, reset } = useForm<DataPost>({
    resolver: yupResolver(schema),
  });

  const createNewData = (data: IPostData) => {
    const date = new Date().toLocaleDateString();

    const newData = {} as DataPost;
    newData.content = data.content;
    if (data.img !== "") {
      newData.img = data.img;
    }

    newData.userInfo = {
      name: `${user.name}`,
      username: `${user.username}`,
      img: `${user.img}`,
    };
    newData.date = date;
    newData.userId = Number(user.id);
    console.log(postIdSelected);
    editPost(postIdSelected, newData);
    setOpenEditModal(false);
    reset();
  };
  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit(createNewData)}>
        <div className="container_post">
          <textarea
            placeholder="Escreva o seu post..."
            {...register("content")}
          />
          <div className="container_buttons">
            <div className="container_add_img">
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                <MdOutlineAddPhotoAlternate />
              </button>
              <motion.input
                type="text"
                placeholder="Adicione a url da imagem"
                {...register("img")}
                variants={parent}
                animate={isOpen ? "open" : "closed"}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.2,
                  stiffness: 80,
                }}
              />
            </div>
            <Button>.Editar</Button>
          </div>
        </div>
      </Form>
    </ContainerForm>
  );
};

export default FormEditPost;
