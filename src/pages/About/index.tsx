import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ContainerMain, Main } from "./styles";
import Logo from "../../assets/LogoDevil.png";

function About() {
  return (
    <div>
      <Header/>
      <Main>
        <ContainerMain>
          <div className="container_logo">
            <h2>Sobre nós</h2>
            <figure>
             <img src={Logo} alt="Deviews" />
            </figure>
          </div>
          <p>Deviews é uma iniciativa educacional feita pelos developers Ana Verena, Antonio Kuhl, Beatriz Ramos, Emilly Melo e Vitor Carvalho como projeto final de programação front-end.</p>
          <p>Criado totalmente em react-typescript, a aplicação tem o objetivo de ser uma rede social de contato, aprendizagem, conexão entre pessoas desenvolvedoras de todas as linguagens, para troca de experiências, tira-dúvidas e comunicação em geral.</p>
        </ContainerMain>
      </Main>
      <Footer/>
    </div>
  )
}

export default About
