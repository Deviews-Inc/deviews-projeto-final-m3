import { useEffect, useState } from "react";
import * as yup from "yup";
import Button from "../../components/Button";
import Logo from "./Logo.png";
import { DivDashboard } from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface INewPost {
  content: string;
  img: string;
  userId: number;
  date: string;
  userInfo: {
    name: string;
    username: string;
    img: string;
  };
}

const token = localStorage.getItem("@deviews:token");

const Dashboard = () => {
  const [textArea, setTextArea] = useState<string>("");

  // function newPost(data: INewPost) {
  //   api
  //     .post("/dashboard", data)
  //     .then((response) => navigate("/dashboard"))
  //     .catch((error) => console.log(error));
  // }

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return isDesktop ? (
    <>
      <DivDashboard>
        <aside>
          <div className="figureName">
            <figure>
              <img src={Logo} alt="Avatar" />
            </figure>
            <div className="nameAvatar">
              <h4>Frederico</h4>
              <p>@FredericoPugDev</p>
            </div>
          </div>
          <div className="bioETechs">
            <span>Bio:</span>
            <span>Techs:</span>
          </div>
        </aside>
        <main>
          <div className="searchbtn">
            <textarea
              placeholder="Escreva seu post..."
              name=""
              id=""
              value={textArea}
              onChange={(event) => setTextArea(event.target.value)}
            ></textarea>
            <Button>.Post</Button>
          </div>
          <div className="line"></div>
        </main>
        <aside className="asideInput">
          <input type="text" placeholder="Pesquisar..." />
        </aside>
      </DivDashboard>
      {console.log(textArea)}
    </>
  ) : (
    <>
      <DivDashboard>
        <main className="mainMobile">
          <div className="figureName">
            <figure>
              <img src={Logo} alt="Avatar" />
            </figure>
            <div className="nameAvatar">
              <h4>Frederico</h4>
              <p>@FredericoPugDev</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="bioETechs">
            <span>Bio:</span>
            <span>Techs:</span>
          </div>
          <div className="asideInput">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div className="searchbtn">
            <textarea
              placeholder="Escreva seu post..."
              name=""
              id=""
            ></textarea>
            <Button>.Post</Button>
          </div>
          <div className="line"></div>
        </main>
      </DivDashboard>
    </>
  );
};

export default Dashboard;
