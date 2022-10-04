import { bdd } from "../bdd.js";
import jwt from "jsonwebtoken";




export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM articles WHERE cat=?"
    : "SELECT * FROM articles";

  bdd.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `pseudo`, `titre`, `annee`, `description`, p.img, u.img AS userImg, `cat`,`creation` FROM utilisateurs u JOIN articles p ON u.id = p.uid WHERE p.id = ? ";

  bdd.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};






export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Pas enregistré");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO `articles` (`titre`, `annee`, `description`, `img`, `creation`, `uid`, `cat`, id_1)  VALUES (?)";

    const values = [
      req.body.titre,  
      req.body.annee,
      req.body.description,
      req.body.img,
      req.body.creation,
      userInfo.id,
      req.body.cat,
      userInfo.id,
    ]
    console.log(values);
    console.log(q);

    bdd.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("l'article a été créé");
    });
  });
};







export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Pas enregistré");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token invalid");

    const postId = req.params.id;
    const q = "DELETE FROM articles WHERE `id` = ? AND `uid` = ?";
    bdd.query(q, [postId, userInfo.id], (err, data) => {
      if (err)
        return res.status(403).json("Vous ne pouvez pas supprimer cet article");

      return res.json("l'article a été supprimé!");
    });
  });
};





export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Pas enregistré");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q ="UPDATE articles SET `titre`=?, `description`=?,`img`=?, `cat`=? WHERE (`id` = ? AND `uid` = ?)";

    const values = [  
      req.body.titre,    
      req.body.description,
      req.body.img,   
      req.body.cat
    ];
console.log(values)
console.log(postId);
    bdd.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Article mis à jour");
    });
  });
};

