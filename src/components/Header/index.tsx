import { HeaderComponent } from "./style";
import fullLogo from "../../assets/LogoInteiro1.png";

const Header = () => {
  return (
    <HeaderComponent>
      <div>
        <img src={fullLogo} alt="Logo <Deviews/>" />
      </div>
    </HeaderComponent>
  );
};
export default Header;
