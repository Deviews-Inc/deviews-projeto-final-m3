import SpanTech from "../SpanTech";
import User from "../../assets/User.png";
import { useContext, useEffect, useState } from "react";
import { ContainerBio, ContainerName, ContainerTechs } from "./styles";
import { AuthContext } from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";

function UserOptions() {
  const { user } = useContext(AuthContext);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const navigate = useNavigate();

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const teste = () => {
    navigate("/profile", { replace: true });
  };
  return (
    <>
      {isDesktop ? (
        <div>
          <ContainerName onClick={teste}>
            <figure>
              {user.img ? (
                <img src={user.img} alt="User Avatar" />
              ) : (
                <img src={User} alt="User random" />
              )}
            </figure>
            <div>
              <h3>{user.name}</h3>
              <span>@{user.username}</span>
            </div>
          </ContainerName>
          <ContainerBio>
            <h3>Bio:</h3>
            <p>{user.bio}</p>
          </ContainerBio>
          <ContainerTechs>
            <h3>Techs:</h3>
            <ul>
              {user.techs?.map((tech, index) => (
                <SpanTech key={index}>{tech}</SpanTech>
              ))}
            </ul>
          </ContainerTechs>
        </div>
      ) : (
        <ContainerName onClick={teste}>
          <figure>
            {user.img ? (
              <img src={user.img} alt="User Avatar" />
            ) : (
              <img src={User} alt="User random" />
            )}
          </figure>
          <div>
            <h3>{user.name}</h3>
            <span>@{user.username}</span>
          </div>
        </ContainerName>
      )}
    </>
  );
}

export default UserOptions;
