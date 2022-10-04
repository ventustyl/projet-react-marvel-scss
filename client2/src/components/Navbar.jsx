import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/Marvel_Logo.png";

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext)
  
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo Marvel" />
          </Link>
        </div>
        <div className="liens">
          <Link className="lien" to={'../'}>
          <h6>accueil</h6>
          </Link>
          <Link className="lien" to={'../film/?cat=film'}>
          <h6>Films</h6>
          </Link>
          <Link className="lien" to={'../serie/?cat=serie'}>
          <h6>Series</h6>
          </Link>
          <Link className="lien" to={'../personnage/?cat=personnage'}>
          <h6>Personnages</h6>
          </Link>
          <Link className="lien" to={'../?cat=blog'}>
          <h6>Blog</h6>
          </Link>
          <span>
               <Link className="lien" to="../contact">Contact</Link> 
            </span>

          <span>{currentUser?.pseudo}</span>
          {currentUser ? (
            <div>
            <span><Link to="/"><h6 onClick={logout}>Deconnexion</h6></Link></span>
            <span>
               <Link className="ecrire" to="/write">Ecrire</Link> 
            </span>
            </div>
             ) :( 
              <Link className="lien" to='/login'><h6>Connexion</h6></Link>
              )}
             
        </div>
      </div>
    </div>
  );
};

export default Navbar;
