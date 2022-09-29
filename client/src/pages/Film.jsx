import React from "react";
import { Link } from "react-router-dom";

const Film = () => {
  const post = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet. ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
      img: "https://geeko-media.lesoir.be/wp-content/uploads/2019/05/avengers-4-endgame-teaser-super-bowl-vostfr-1068x580.jpg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
      img: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2Fmarvel.2Fdefault_2020-07-02_f84e88ef-0730-4130-ba6f-4f26ae71a169.2Ejpeg/1200x675/quality/80/tous-les-super-heros-et-super-vilains-reunis-pour-avengers-5.jpg",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
      img: "https://www.films-disney.fr/wp-content/uploads/2018/04/avengers-infinity-war-feature.jpg",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
      img: "https://static.hitek.fr/img/up_m/1876100889/mcularge.jpg",
    },
  ];

  return (
    <div className="container-film">
      <div className="post-film">
        {post.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="image" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
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
