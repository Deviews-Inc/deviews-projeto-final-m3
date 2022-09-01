import { HeaderComponent } from "./style";
import fullLogo from "../../assets/LogoInteiro1.png";
import logoDevil from "../../assets/LogoDevil.png";
import logoName from "../../assets/LogoNome.png";

import ButtonLogout from "../ButtonLogout";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <HeaderComponent>
      {isAuthenticated ? (
        <div>
          {isDesktop ? (
            <figure>
              <img src={fullLogo} alt="Logo <Deviews/>" />
            </figure>
          ) : (
            <figure className="logoMobile">
              <img src={logoDevil} alt="Logo devil" />
            </figure>
          )}
          <ButtonLogout
            onClick={() => {
              setIsAuthenticated(false);
            }}
          />
        </div>
      ) : (
        <div>
          {isDesktop ? (
            <figure>
              <img src={fullLogo} alt="Logo <Deviews/>" />
            </figure>
          ) : (
            <figure className="logoMobilePublic">
              <img src={logoName} alt="Logo devil" />
            </figure>
          )}
        </div>
      )}
    </HeaderComponent>
  );
};
export default Header;
