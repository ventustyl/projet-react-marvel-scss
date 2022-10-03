import { bdd } from "../bdd.js";
import jwt from "jsonwebtoken"

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
    "SELECT p.id, `pseudo`, `titre`, `description`, p.img, u.img AS userImg, `cat`,`creation` FROM utilisateurs u JOIN articles p ON u.id = p.uid WHERE p.id = ? ";

  bdd.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
export const addPost = (req,res)=> {
    res.json("controller")
}
export const deletePost = (req,res)=> {
 const token = req.cookies.access_token
 if (!token) return res.status(401).json("Pas enregistré")

 jwt.verify(token,"jwtkey",(err, userInfo)=> {
  if(err) return res.status(403).json("Token invalid")

  const postId = req.params.id
  const q = "DELETE FROM articles WHERE `id` = ? AND `uid` = ?"
  bdd.query(q,[postId, userInfo.id], (err, data)=> {
    if(err) return res.status(403).json("Vous ne pouvez pas supprimer cet article")

    return res.json("l'article a été supprimé!")
  })

 })
}
export const updatePost = (req,res)=> {
    res.json("controller")
}