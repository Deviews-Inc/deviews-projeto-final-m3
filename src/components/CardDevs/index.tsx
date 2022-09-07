import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Card } from "./styles";

interface ICardDevsProps {
  img: string;
  name: string;
  funcao: string;
  linkedIn: string;
  github: string;
}

function CardDevs({img, name, funcao, linkedIn, github}:ICardDevsProps) {
  return (
    <Card>
      <figure>
        <img src={img} alt="Dev" />
      </figure>
      <p>{ name }</p>
      <p>Dev Front-End</p>
      <p>{ funcao }</p>
      <div className="contact">
        <a href={linkedIn}><FaLinkedin color="white"/></a>
        <a href={github}><FaGithubSquare color="white"/></a>
      </div>
    </Card>
  )
}

export default CardDevs
