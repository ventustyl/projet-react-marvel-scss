import React, { useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    pseudo:"",
    password:"",
  })
const [err,setError] = useState(null)

const navigate = useNavigate();

const {login} = useContext(AuthContext)


  const handleChange = e =>{
setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

const handleSubmit = async e => {
  e.preventDefault()
  try{
await login(inputs)
    navigate("/")

  }catch(err){
  setError(err.response.data);
  }
  }

  return (
    <>
    <Navbar/>
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="login" name="pseudo" onChange={handleChange} required/>
        <input type="password" placeholder="mot de passe" name="password" onChange={handleChange} required />
        <button onClick={handleSubmit}>Se connecter</button>
        {err && <p>{err}</p>}
        <span>Vous n'avez pas de compte ? <Link className="enregistre" to='/register'>  Enregistrez-vous</Link></span>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
