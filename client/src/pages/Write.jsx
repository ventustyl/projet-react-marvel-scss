import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.description || "");
  const [titre, setTitre] = useState(state?.titre || "");
  const [annee, setAnnee] = useState(state?.annee || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/post/${state.id}`, {
            titre,
            description: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/post/`, {
            titre,
            annee,
            description: value,
            cat,
            img: file ? imgUrl : "",
            creation: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
    } catch (err) {
      console.log(err);
    
    }
  };

  return (
    <div className="ajouter">
      <div className="content">
        <input
          name="titre"
          value={titre}
          type="text"
          placeholder="Titre"
          onChange={(e) => setTitre(e.target.value)}
        />

        <input
          name="annee"
          value={annee}
          type="text"
          placeholder="Année de sortie"
          onChange={(e) => setAnnee(e.target.value)}
        />

        <div className="editeur">
          <ReactQuill
            className="quill"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publier</h1>
          <span>
            <b>Etat :</b> Brouillon
          </span>
          <span>
            <b>Visibilité :</b> Public
          </span>
          <input
            className="download"
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="telechargement" htmlFor="file">
            Upload Image (Taille inf à 2Mo)
          </label>
          <div className="bouton">
            <button>Brouillon</button>
            <button onClick={handleClick}>Publier</button>
          </div>
        </div>
        <div className="item">
          <h1>Catégories</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "film"}
              value="film"
              id="film"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="film">Film</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "serie"}
              value="serie"
              id="serie"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="serie">Serie</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "personnage"}
              value="personnage"
              id="personnage"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="personnage">Personnage</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "blog"}
              value="blog"
              id="blog"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="blog">Blog</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
