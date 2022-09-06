import Button from "../Button";
import * as yup from "yup";
import { ContainerForm, Form } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostContext } from "../../providers/PostContext";

interface IPostUser {
  content: string;
}

function FormPost() {
  const { newPost } = useContext(PostContext);
  const [textArea, setTextArea] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostUser>({});

  const createNewData = (data: any) => {
    const userId = localStorage.getItem("@deviews:id");
    const newData = data;
    newData.userId = userId;
    newPost(newData);
  };

  return (
    <>
      <ContainerForm>
        <Form onSubmit={handleSubmit(createNewData)}>
          <div className="container_post">
            <textarea
              placeholder="Escreva o seu post..."
              value={textArea}
              {...register("content")}
              onChange={(event) => setTextArea(event.target.value)}
            />
            <div className="container_buttons">
              <Button>
                <MdOutlineAddPhotoAlternate />
              </Button>
              <Button>.Post</Button>
            </div>
          </div>
        </Form>
      </ContainerForm>
      {console.log(textArea)}
    </>
  );
}

export default FormPost;
