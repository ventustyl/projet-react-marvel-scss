import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const Affichage = () => {    
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
                  <h4>{postblog.titre}</h4>
                  <p>{postblog.textecom}</p>
              </div>
            </div>
          ))}
        </div>
 
    </div>
  );
};





export default Affichage
