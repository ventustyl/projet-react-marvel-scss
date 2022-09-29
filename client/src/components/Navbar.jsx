import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Marvel_Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo Marvel" />
        </div>
        <div className="liens">
          <Link className="lien" to={'./'}>
          <h6>accueil</h6>
          </Link>
          <Link className="lien" to={'./film'}>
          <h6>Films</h6>
          </Link>
          <Link className="lien" to={'./?cat=serie'}>
          <h6>Series</h6>
          </Link>
          <Link className="lien" to={'./?cat=personnage'}>
          <h6>Personnages</h6>
          </Link>
          <Link className="lien" to={'./?cat=blog'}>
          <h6>Blog</h6>
          </Link>
          <span>
               <Link className="lien" to="/contact">Contact</Link> 
            </span>
          <span>Eric</span>
          <span>Deconnexion</span>
            <span>
               <Link className="ecrire" to="/write">Ecrire</Link> 
            </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
