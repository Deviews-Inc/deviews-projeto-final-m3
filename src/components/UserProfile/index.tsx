import { Link } from "react-router-dom";
import SpanTech from "../SpanTech";
import User from "../../assets/User.png";

import {
  ContainerUser,
  ContainerName,
  ContainerBio,
  ContainerTechs,
} from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ContainerUser>
        <Link to="/profile">
          <ContainerName>
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
        </Link>
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
      </ContainerUser>
    </>
  );
};

export default UserProfile;
