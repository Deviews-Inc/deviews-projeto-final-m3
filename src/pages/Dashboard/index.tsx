import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Logo from "./Logo.png";
import { DivDashboard } from "./style";

const Dashboard = () => {
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
            ></textarea>
            <Button>.Post</Button>
          </div>
          <div className="line"></div>
        </main>
        <aside className="asideInput">
          <input type="text" placeholder="Pesquisar..." />
        </aside>
      </DivDashboard>
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
