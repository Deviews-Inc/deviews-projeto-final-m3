import { HeaderComponent } from "./style";
import fullLogo from "../../assets/LogoInteiro1.png";

const Header = () => {
  return (
    <HeaderComponent>
      <figure>
        <img src={fullLogo} alt="Logo <Deviews/>" />
      </figure>
    </HeaderComponent>
  );
};
export default Header;
