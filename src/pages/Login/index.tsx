import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import { ContainerLeft, ContainerMain, ContainerRight, Main } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Main>
        <ContainerMain>
          <div className="gradient">
            <ContainerLeft>
              <p>A rede dos devs</p>
            </ContainerLeft>
            <ContainerRight>
              <div>
                <h2>Login</h2>
              </div>
              <FormLogin />
            </ContainerRight>
          </div>
        </ContainerMain>
      </Main>
    </>
  );
};

export default Login;
