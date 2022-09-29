import React from "react";
import { Link } from "react-router-dom";

const Register= () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="login" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="mot de passe" />
        <button>Se connecter</button>
        <p>Une erreur s'est produite!</p>
        <span>Vous n'avez pas de compte ? <Link className="enregistre" to='/register'>  Enregistrez-vous</Link></span>
      </form>
    </div>
  );
};

export default Register;
