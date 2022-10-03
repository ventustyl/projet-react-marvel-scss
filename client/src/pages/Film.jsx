import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Film = () => {
  const [post, setPost] = useState([]);

  const cat = useLocation().search
console.log(cat)
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


  // const post = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet. ",
  //     annee: 2018,
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
  //     img: "https://geeko-media.lesoir.be/wp-content/uploads/2019/05/avengers-4-endgame-teaser-super-bowl-vostfr-1068x580.jpg",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Lorem ipsum dolor sit amet.",
  //       annee: 2017,
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
  //     img: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2Fmarvel.2Fdefault_2020-07-02_f84e88ef-0730-4130-ba6f-4f26ae71a169.2Ejpeg/1200x675/quality/80/tous-les-super-heros-et-super-vilains-reunis-pour-avengers-5.jpg",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Lorem ipsum dolor sit amet.",
  //       annee: 2014,
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
  //     img: "https://www.films-disney.fr/wp-content/uploads/2018/04/avengers-infinity-war-feature.jpg",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Lorem ipsum dolor sit amet.",
  //       annee: 2019,
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
  //     img: "https://static.hitek.fr/img/up_m/1876100889/mcularge.jpg",
  //   },
  // ];

  return (
    <div className="container-film">
      <div className="post-film">
  
        {post.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={"Image blog " + post.id} />
            </div>
            <div className="content">
              <Link to={`/film/${post.id}`}>
                <h1>{post.titre}</h1>
                <p>Année : {post.annee}</p>
                <p>{post.description}</p>
                <button>En lire +</button>
              </Link>
            </div>     
          </div>
        ))}
      </div>
    </div>
  );
};

export default Film;
