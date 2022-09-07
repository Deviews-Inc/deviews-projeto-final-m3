import { HeaderComponent } from "./styles";
import fullLogo from "../../assets/LogoInteiro1.png";
import logoDevil from "../../assets/LogoDevil.png";
import logoName from "../../assets/LogoNome.png";
import ButtonLogout from "../ButtonLogout";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { logOut } = useContext(AuthContext);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(()=> {
    const token = localStorage.getItem("@deviews:token");
    if (token){
      setIsAuthenticated(() => true);
    }
  }, [isAuthenticated])

  return (
    <HeaderComponent>
      {isAuthenticated ? (
        <div>
          {isDesktop ? (
            <Link to="/dashboard">
              <figure>
                <img src={fullLogo} alt="Logo <Deviews/>" />
              </figure>
            </Link>
          ) : (
            <a href="/dashboard">
              <figure className="logoMobile">
                <img src={logoDevil} alt="Logo devil" />
              </figure>
            </a>
          )}
          <ButtonLogout
            onClick={() => {
              setIsAuthenticated(false);
              logOut();
            }}
          />
        </div>
      ) : (
        <div>
          {isDesktop ? (
            <>
              <figure>
                <img src={fullLogo} alt="Logo <Deviews/>" />
              </figure>
              <div className="dropdown">
                <GiHamburgerMenu color="rgba(154,154,154,1)"/>
              <ul className="dropdown-content">
                <a href="/register"><li>Cadastre-se</li></a>
                <a href="/login"><li>Login</li></a>
                <a href="/about"><li>Sobre a Deviews</li></a>
                <a href="/contact"><li>Contato</li></a>
              </ul>
            </div>
            </>
          ) : (
            <>
              <figure className="logoMobilePublic">
                <img src={logoName} alt="Logo devil" />
              </figure>
              <div className="dropdown">
                <GiHamburgerMenu color="rgba(154,154,154,1)"/>
              <ul className="dropdown-content">
                <a href="/register"><li>Cadastre-se</li></a>
                <a href="/login"><li>Login</li></a>
                <a href="/about"><li>Sobre a Deviews</li></a>
                <a href="/contact"><li>Contato</li></a>
              </ul>
              </div>
            </>
          )}
        </div>
      )}
    </HeaderComponent>
  );
};
export default Header;
