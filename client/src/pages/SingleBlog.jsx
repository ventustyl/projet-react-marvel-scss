import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/editer.png";
import Suppr from "../img/corbeille.png";
import "moment/locale/fr";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import Comments from "../components/Comments";
import Affichage from "../components/Affichage";

const SingleBlog = () => {


  const [post, setPost] = useState({});
  const location = useLocation();
  const Navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);




  // Affichage de l'article

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post/?cat=${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);




  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };





// Fonction de suppression de l'article Blog


  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${postId}`);
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

const [element, setElement] = useState ([
  {  base: postId}
])
console.log(element, setElement)


  return (
    <>
      <div className="single">
        <div className="content">
          <img src={`../upload/${post.img}`} alt="A venir"></img>
          <div className="user">
            {post?.userImg ? (
              <img src={post.userImg} alt={post.pseudo}></img>
            ) : (
              <img
                src="https://cdn6.aptoide.com/imgs/7/1/9/7193e8b89af7d5650baa68bc75a64538_icon.png"
                alt={post.pseudo}
              ></img>
            )}
            <div className="info">
              <span>{post.pseudo}</span>
              <p>article<span> {post.id}</span></p>
              <p>Posté il y a {moment(post.creation).fromNow()}</p>
          
            </div>

            {currentUser?.pseudo === post.pseudo ? (
              <div className="edit">
                <Link to={`/write?edit=2`} state={post}>
                  <img src={Edit} alt="editer" />
                </Link>
                <img onClick={handleDelete} src={Suppr} alt="supprimer" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <h1>{post.titre}</h1>
          <p>{getText(post.description)}</p>
        </div>
   
      </div>
      <Comments element={postId}/>

          </>
  );
};

export default SingleBlog;
