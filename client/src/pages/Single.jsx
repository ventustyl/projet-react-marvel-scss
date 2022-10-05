import React, { useContext, useEffect, useState } from 'react'
import Edit from '../img/editer.png'
import Suppr from '../img/corbeille.png'
import 'moment/locale/fr';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const Navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);


  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const res = await axios.get(`/post/${postId}`);
        setPost(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

const handleDelete = async () => {
  try {
        
   await axios.delete(`/post/${postId}`);
   Navigate("/")
    
  } catch (err) {
    console.log(err);
  }
}

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className='single'>
      <div className='content'>
        <img src={`../upload/${post.img}`} alt='A venir'></img>
        <div className='user'>
         {post?.userImg ?
         <img src={post.userImg} alt={post.pseudo}></img> 
         :  <img src='https://cdn6.aptoide.com/imgs/7/1/9/7193e8b89af7d5650baa68bc75a64538_icon.png'alt={post.pseudo}></img>}
          <div className='info'>
            <span>{post.pseudo}</span>
            <p>Posté il y a {moment(post.creation).fromNow()}</p>
          </div>
       
           {currentUser?.pseudo=== post.pseudo ?
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="editer" />
            </Link>
            <img onClick={handleDelete} src={Suppr} alt="supprimer" />
          </div> : <></>
           }
            </div>
        <h1>{post.titre}</h1>
        <p>{getText(post.description)}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single
