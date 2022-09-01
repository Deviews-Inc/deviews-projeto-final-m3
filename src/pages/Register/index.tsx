import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import { Main } from "./style";


const Register = () => {
    return (
      <>
        <Header />
        <Main>
          <FormRegister/>
        </Main>
      </>
    );
  };
  
  export default Register;