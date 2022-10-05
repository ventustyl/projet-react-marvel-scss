import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import ImageFilm from "../img/filmographie.jpg";

const Film = () => {
  const [post, setPost] = useState([]);

  const cat = useLocation().search;
  console.log(cat);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post${cat}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="container-film">
      <div className="imagefilm">
        <img src={ImageFilm} alt="film"></img>
      </div>
      <div className="container-film">
        <div className="post-film">
          {post.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img
                  src={`../upload/${post.img}`}
                  alt={"Image blog " + post.id}
                />
              </div>
              <div className="content">
                <Link to={`/film/${post.id}`}>
                  <h1>{post.titre}</h1>
                  <p>Année : {post.annee}</p>
                  <p>{getText(post.description).slice(0, 150) + "..."}</p>
                  <button>En lire +</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Film;
