import { HeaderComponent } from "./styles";
import fullLogo from "../../assets/LogoInteiro1.png";
import logoDevil from "../../assets/LogoDevil.png";
import logoName from "../../assets/LogoNome.png";
import ButtonLogout from "../ButtonLogout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const parent = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const { logOut } = useContext(AuthContext);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    const token = localStorage.getItem("@deviews:token");
    if (token) {
      setIsAuthenticated(() => true);
    }
  }, [isAuthenticated]);

  return (
    <HeaderComponent>
      {isAuthenticated ? (
        <div>
          {isDesktop ? (
            <a href="/dashboard">
              <figure>
                <img src={fullLogo} alt="Logo <Deviews/>" />
              </figure>
            </a>
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
              <a href="/login">
                <figure>
                  <img src={fullLogo} alt="Logo <Deviews/>" />
                </figure>
              </a>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn_dropdown"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <GiHamburgerMenu />
                </button>
                <motion.ul
                  className="dropdown-content"
                  variants={parent}
                  animate={isOpen ? "open" : "closed"}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 1,
                    stiffness: 80,
                  }}
                >
                  <a href="/register">
                    <li>Cadastre-se</li>
                  </a>
                  <a href="/login">
                    <li>Login</li>
                  </a>
                  <a href="/about">
                    <li>Sobre a Deviews</li>
                  </a>
                  <a href="/contact">
                    <li>Contato</li>
                  </a>
                </motion.ul>
              </div>
            </>
          ) : (
            <>
              <a href="/login">
                <figure className="logoMobilePublic">
                  <img src={logoName} alt="Logo devil" />
                </figure>
              </a>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn_dropdown"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <GiHamburgerMenu />
                </button>
                <motion.ul
                  className="dropdown-content"
                  variants={parent}
                  animate={isOpen ? "open" : "closed"}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.2,
                    stiffness: 80,
                  }}
                >
                  <a href="/register">
                    <li>Cadastre-se</li>
                  </a>
                  <a href="/login">
                    <li>Login</li>
                  </a>
                  <a href="/about">
                    <li>Sobre a Deviews</li>
                  </a>
                  <a href="/contact">
                    <li>Contato</li>
                  </a>
                </motion.ul>
              </div>
            </>
          )}
        </div>
      )}
    </HeaderComponent>
  );
};
export default Header;
