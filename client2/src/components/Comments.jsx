import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";




const Comments = (props) => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const [titre, setTitre] = useState(state?.titre || "");
  const [textecom, setTextecom] = useState(state?.textecom || "");
  const [test, setTest] = useState(state?.itest || "");



console.log(props.element)


  const Click = async (e) => {

    e.preventDefault();

    try {
      state
        ? await axios.put(`/postblog/${state.id}`, {
            titre,
            textecom,
           test
          })
        : await axios.post(`/postblog/`, {
            titre,
            textecom,
            test
          });
    } catch (err) {
      console.log(err);
    }
    navigate(`/blog/${props.element}`)

  };

  return (
    <>
      <div className="bloc-commentaire">
        <h4 >Laisser un commentaire sur l'article <div name="test" value={test}>{props.element}</div> </h4>
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
        <input type = "checkbox"  onChange={(e) => setTest(props.element)}/> <label>Validé le post de l'article</label>
        <button onClick={Click} type="submit">
          Envoyer
        </button>
      </div>
    </>
  );
};

export default Comments;
