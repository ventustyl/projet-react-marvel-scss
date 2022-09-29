import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="login" />
        <input type="password" placeholder="mot de passe" />
        <button>Se connecter</button>
        <p>Une erreur s'est produite!</p>
        <span>Vous n'avez pas de compte ? <Link className="enregistre" to='/register'>  Enregistrez-vous</Link></span>
      </form>
    </div>
  );
};

export default Login;
