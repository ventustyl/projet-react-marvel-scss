import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };



  const [post, setPosts] = useState([]);
  let compteur = post.length
  console.log(compteur)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Articles populaires</h1>
      {post.slice(`${(compteur , compteur-2)}`).map((post) => (
        <Link to={`/film/${post.id}`}>
        <div className="post" key={post.id}>      
            <img src={`../upload/${post.img}`} alt="" />        
          <h2>{post.titre}</h2>
          <p>{getText(post.description).slice(0, 40) + "..."}</p>
          <button>En lire +</button>
          </div>
          </Link>
       
      ))}
    </div>
  );
};

export default Menu;
