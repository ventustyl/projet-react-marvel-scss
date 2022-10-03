import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const Register= () => {
  const [inputs, setInputs] = useState({
    pseudo:"",
    email:"",
    password:"",
  })
const [err,setError] = useState(null)

const navigate = useNavigate()

  const handleChange = e =>{
setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

const handleSubmit = async e => {
  e.preventDefault()
  try{
    const res = await axios.post("/auth/register", inputs)
    navigate("/login")
    console.log(res);
  }catch(err){
  setError(err.response.data);
  }
  }

  return (
    <>
  <Navbar/>
    <div className="auth">
      <h1>Enregistrez-vous</h1>
      <form>
        <input type="text" placeholder="login" name='pseudo' onChange={handleChange} required="required" />
        <input required="required" type="email" placeholder="email" name='email' onChange={handleChange}/>
        <input required type="password" placeholder="mot de passe" name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>S'enregistrer</button>
        {err && <p>{err}</p>}
        <span>Vous n'avez pas de compte ? <Link className="enregistre" to='/register'>  Enregistrez-vous</Link></span>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
