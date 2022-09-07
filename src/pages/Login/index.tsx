import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import Logo from "../../assets/LogoDevil.png";
import { ContainerLeft, ContainerMain, ContainerRight, Main } from "./styles";
import Footer from "../../components/Footer";
import { useLottie } from "lottie-react";
import animate from "../../assets/animate.json";
import { useEffect, useState } from "react";

const Login = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const options = {
    animationData: animate,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <Header />
      <Main>
        <ContainerMain>
          <div className="gradient">
            {isDesktop && <ContainerLeft>{View}</ContainerLeft>}
            <ContainerRight>
              <div className="container_logo">
                <h2>Login</h2>
                <figure>
                  <img src={Logo} alt="Logo Deviews" />
                </figure>
              </div>
              <FormLogin />
            </ContainerRight>
          </div>
        </ContainerMain>
      </Main>
      <Footer />
    </>
  );
};

export default Login;
