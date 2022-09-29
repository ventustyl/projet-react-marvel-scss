import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo-Marvel.jpg";
import Logo1 from "../img/react.png";
import Logo2 from "../img/sass.png";
import Logo3 from "../img/html.png";
import Logo4 from "../img/css.png";
import Logo5 from "../img/javascript.png";
import Logo6 from "../img/node.png";


const Footer = () => {
  return (
    <div className="container-footer">
      <img src={Logo} alt="Logo marvel studio" />
      <Link className="lien" to={"./"}>
        <h6>accueil</h6>
      </Link>
      <Link className="lien" to={"./?cat=film"}>
        <h6>Films</h6>
      </Link>
      <Link className="lien" to={"./?cat=serie"}>
        <h6>Series</h6>
      </Link>
      <Link className="lien" to={"./?cat=personnage"}>
        <h6>Personnages</h6>
      </Link>
      <Link className="lien" to={"./?cat=blog"}>
        <h6>Blog</h6>
      </Link>
      <span>
        <Link className="lien" to="/contact">
          <h6>Contact</h6>
        </Link>
      </span>
      <div className="nav-footer">
        <p>Réalisé avec ❤️ par moi-même avec</p>
        <div className="techno">
          <img src={Logo1} alt="Logo REACT" />
          <img src={Logo2} alt="Logo SASS" />
          <img src={Logo3} alt="Logo HTML" />
          <img src={Logo4} alt="Logo CSS" />
          <img src={Logo5} alt="Logo JS" />
          <img src={Logo6} alt="Logo Node" />
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
