import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
    const [post, setPosts] = useState([]);
  
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

    // const post = [
    //     {
    //         id: 1,
    //         title: "Qui est le plus fort Avengers ? ",
    //         annee: 2018,
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
    //         img: "https://geeko-media.lesoir.be/wp-content/uploads/2019/05/avengers-4-endgame-teaser-super-bowl-vostfr-1068x580.jpg",
    //     },
    //     {
    //         id: 2,
    //         title:
    //             "Les series qui vont bientot arriver",
    //         annee: 2017,
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
    //         img: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2Fmarvel.2Fdefault_2020-07-02_f84e88ef-0730-4130-ba6f-4f26ae71a169.2Ejpeg/1200x675/quality/80/tous-les-super-heros-et-super-vilains-reunis-pour-avengers-5.jpg",
    //     },
    //     {
    //         id: 3,
    //         title:
    //             "Et si Thanos n'avait pas snap...",
    //         annee: 2014,
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
    //         img: "https://www.films-disney.fr/wp-content/uploads/2018/04/avengers-infinity-war-feature.jpg",
    //     },
    //     {
    //         id: 4,
    //         title:
    //             "Mélée génèrale en approche!",
    //         annee: 2019,
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id dui massa. Morbi gravida arcu vitae lacus pharetra hendrerit. In suscipit magna consequat dolor posuere, nec varius leo sollicitudin.",
    //         img: "https://static.hitek.fr/img/up_m/1876100889/mcularge.jpg",
    //     },
    // ];
    return (
        <div className='menu'>
            <h1>Articles populaires</h1>
            {post.map(post => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>En lire +</button>
                    </div>
   ))}
                </div>

            )
}

            export default Menu