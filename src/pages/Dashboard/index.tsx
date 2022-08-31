import Button from "../../components/Button";
import Logo from "./Logo.png";
import { DivDashboard } from "./style";

const Dashboard = () => {
  return (
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
        </main>
        <input type="text" placeholder="Pesquisar..." />
      </DivDashboard>
    </>
  );
};

export default Dashboard;
