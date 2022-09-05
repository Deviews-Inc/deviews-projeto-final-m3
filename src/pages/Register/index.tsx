import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import { Main } from "./styles";

const Register = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="gradient">
          <FormRegister />
        </div>
      </Main>
    </>
  );
};

export default Register;
