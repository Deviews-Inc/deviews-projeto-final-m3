import FormLogin from "../../components/FormLogin";
import { ContainerLeft, ContainerMain, ContainerRight, Main } from "./styles";

const Login = () => {
  return (
    <Main>
      <ContainerMain>
        <ContainerLeft>
          <p>A rede dos devs</p>
        </ContainerLeft>
        <ContainerRight>
          <FormLogin />
        </ContainerRight>
      </ContainerMain>
    </Main>
  );
};

export default Login;
