import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Comments = () => {
  const state = useLocation().state;

  const [titre, setTitre] = useState(state?.titre || "");
  const [textecom, setTextecom] = useState(state?.textecom || "");

  const Click = async (e) => {
    e.preventDefault();
    try {
      state
        ? await axios.put(`/postblog/${state.id}`, {
            titre,
            textecom,
          })
        : await axios.post(`/postblog/`, {
            titre,
            textecom,
          });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bloc-commentaire">
        <h4>Laisser un commentaire </h4>
        <label>Titre</label>
        <input
          value={titre}
          type="text"
          name="login"
          placeholder="Votre titre ici"
          onChange={(e) => setTitre(e.target.value)}
        />
        <label>Message</label>
        <textarea
          value={textecom}
          name="message"
          id="text"
          cols="30"
          rows="10"
          placeholder="Votre message ici"
          onChange={(e) => setTextecom(e.target.value)}
        ></textarea>
        <button onClick={Click} type="submit">
          Envoyer
        </button>
      </div>
    </>
  );
};

export default Comments;
