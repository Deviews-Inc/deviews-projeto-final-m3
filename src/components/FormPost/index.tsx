import Button from "../Button";
import { ContainerForm, Form } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function FormPost() {
  return (
    <ContainerForm>
      <Form>
        <div className="container_post">
          <textarea placeholder="Escreva o seu post..." />
          <div className="container_buttons">
            <Button>
              <MdOutlineAddPhotoAlternate />
            </Button>
            <Button>.Post</Button>
          </div>
        </div>
      </Form>
    </ContainerForm>
  );
}

export default FormPost;
