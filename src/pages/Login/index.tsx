import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import { ContainerLeft, ContainerMain, ContainerRight, Main } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Login;
