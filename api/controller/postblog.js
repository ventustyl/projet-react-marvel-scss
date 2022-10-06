import { bdd } from "../bdd.js";
import jwt from "jsonwebtoken";




export const getBlogs = (req, res) => {
  const q = req.query.cat
  ? "SELECT * FROM commentaire WHERE cat=?"
  : "SELECT * FROM commentaire WHERE cat=19";

  bdd.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
    console.log(q)
  });
};

export const getBlog = (req, res) => {
  const q =
    "SELECT p.id, , `titre`,  `textecom`, p.img, u.img AS userImg, `cat`,`creation` FROM commentaire u JOIN articles p ON u.id = p.uid WHERE p.id = ? ";

  bdd.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};



// Fonctionnel


export const addBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Pas enregistré");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO `commentaire` (`titrecom`, `textecom`, `id_1`, `cat`)  VALUES (?)";

    const values = [
      req.body.titre,  
      req.body.textecom,
      userInfo.id,
      req.body.test
    ]
    console.log(values);
    console.log(q);

    bdd.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("commentaire a été créé");
    });
  });
};







export const deleteBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Pas enregistré");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token invalid");

    const postId = req.params.id;
    const q = "DELETE FROM commentaire WHERE `id` = ?";
    bdd.query(q, [postId, userInfo.id], (err, data) => {
      if (err)
        return res.status(403).json("Vous ne pouvez pas supprimer ce commentaire");

      return res.json("le commentaire a été supprimé!");
    });
  });
};






