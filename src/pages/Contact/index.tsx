import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ContainerMain, Main } from "./styles";
import Logo from "../../assets/LogoDevil.png";
import CardDevs from '../../components/CardDevs';
import Bea from "../../assets/bea.jpg";
import Ana from "../../assets/ana.jpg";
import Tony from "../../assets/antonio.jpg";
import Ems from "../../assets/emilly.jpg";
import Vitor from "../../assets/vitor.jpg";

function Contact() {
  return (
    <div>
    <Header/>
    <Main>
      <ContainerMain>
        <div className="container_logo">
          <h2>Contato</h2>
          <figure>
           <img src={Logo} alt="Deviews" />
          </figure>
        </div>
        <div className="title">
          <h3>Conheça nossos Devs:</h3>
        </div>
        <div className="devs">
          <CardDevs img={Ana} name="Ana Verena" funcao="Tech Leader" linkedIn="https://www.linkedin.com/in/agomesbc/" github="https://github.com/anavgbc"/>
          <CardDevs img={Tony} name="Antonio Kuhl" funcao="Scrum Master" linkedIn="https://www.linkedin.com/in/antonio-victor-kuhl-rodrigues-256297221/" github="https://github.com/antoniov6"/>
          <CardDevs img={Bea} name="Beatriz Ramos" funcao="Product Owner" linkedIn="https://www.linkedin.com/in/beatriz-ramos-souza/" github="https://github.com/ledollabea"/>
          <CardDevs img={Ems} name="Emilly Melo" funcao="Quality Assurance" linkedIn="https://www.linkedin.com/in/emilly-melo/" github="https://github.com/emimelo"/>
          <CardDevs img={Vitor} name="Vitor Carvalho" funcao="Quality Assurance" linkedIn="https://www.linkedin.com/in/vitor-s-carvalho/" github="https://github.com/vitorcarvalho06"/>
        </div>
      </ContainerMain>
    </Main>
    <Footer/>
  </div>
  )
}

export default Contact
