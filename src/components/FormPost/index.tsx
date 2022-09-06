import Button from "../Button";
import { ContainerForm, Form } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

function FormPost() {
  const [isOpen, setIsOpen] = useState(false);

  const parent = {
    closed: { width: 0 },
    open: { width: 200 },
  };

  return (
    <ContainerForm>
      <Form>
        <div className="container_post">
          <textarea placeholder="Escreva o seu post..." />
          <div className="container_buttons">
            <div className="container_add_img">
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                <MdOutlineAddPhotoAlternate />
              </button>
              <motion.input
                type="text"
                placeholder="Adicione a url da imagem"
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
            <Button>.Post</Button>
          </div>
        </div>
      </Form>
    </ContainerForm>
  );
}

export default FormPost;
