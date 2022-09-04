import Button from "../Button";
import { ContainerForm, Form } from "./styles";

function FormPost() {
  return (
    <ContainerForm>
      <Form>
        <div>
          <textarea placeholder="Escreva o seu post..." />
          <Button>.Post</Button>
        </div>
      </Form>
    </ContainerForm>
  );
}

export default FormPost;
