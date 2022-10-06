import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Suppr from '../img/corbeille.png'


const Affichage = (props) => {  
  const location = useLocation(); 
  console.log(props.item);
  const Navigate = useNavigate();
console.log(location);
const postArticle = location.pathname.split("/")[2];






  const handleDelete = async () => {
    try {          
     await axios.delete(`/postblog/${postArticle}`);
     Navigate(`/blog/${props.element}`)
      
    } catch (err) {
      console.log(err);
    }
  }

  const [blog, setBlog] = useState([]);
  const cat = useLocation().search;
  console.log(cat)
  console.log(cat);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/postblog`);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);



  return (
    <div className="container-blog">
        <div className="blog-film">
          {blog.map((postblog) => (
            <div className="blog" key={postblog.id}>
              <div className="blog-content">
              <p>{postblog.id}</p>
                  <h4>{postblog.titrecom}</h4>
                  <p>{postblog.textecom}</p>
                  <div className="edit">
        
            <img onClick={handleDelete} src={Suppr} alt="supprimer" />
          
            </div>
              </div>
            </div>
          ))}
        </div>
 
    </div>
  );
};





export default Affichage
