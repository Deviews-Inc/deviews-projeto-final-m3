import SpanTech from '../SpanTech';
import Devil from "../../assets/LogoDevil.png";

function UserOptions() {
  return (
    <div>
      <figure>
        <img src={Devil} alt="Devil" />
        <h3>Frederico</h3>
        <span>@FredericoPugDev</span>
      </figure>
      <p>Bio: <span>Eu sou um pug dev!</span></p>
      <p>Techs:  <SpanTech>Javascript</SpanTech> <SpanTech>Node.js</SpanTech></p>
    </div>
  )
}

export default UserOptions;
