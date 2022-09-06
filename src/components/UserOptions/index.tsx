import SpanTech from "../SpanTech";
import Devil from "../../assets/LogoDevil.png";
import { useEffect, useState } from "react";
import { ContainerBio, ContainerName, ContainerTechs } from "./styles";

function UserOptions() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <div>
          <ContainerName>
            <figure>
              <img src={Devil} alt="Devil" />
            </figure>
            <div>
              <h3>Frederico</h3>
              <span>@FredericoPugDev</span>
            </div>
          </ContainerName>
          <ContainerBio>
            <h3>Bio:</h3>
            <p>Eu sou um pug dev!</p>
          </ContainerBio>
          <ContainerTechs>
            <h3>Techs:</h3>
            <ul>
              <SpanTech>Javascript</SpanTech>
              <SpanTech>Node.js</SpanTech>
              <SpanTech>Node.js</SpanTech>
              <SpanTech>Node.js</SpanTech>
              <SpanTech>Node.js</SpanTech>
              <SpanTech>Node.js</SpanTech>
            </ul>
          </ContainerTechs>
        </div>
      ) : (
        <ContainerName>
          <figure>
            <img src={Devil} alt="Devil" />
          </figure>
          <div>
            <h3>Frederico</h3>
            <span>@FredericoPugDev</span>
          </div>
        </ContainerName>
      )}
    </>
  );
}

export default UserOptions;
