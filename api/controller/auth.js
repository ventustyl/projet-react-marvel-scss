import { bdd } from "../bdd.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req, res) => {
  //Si utilisateur existe
  const q = "SELECT * FROM utilisateurs WHERE email = ? OR pseudo = ?";

  bdd.query(q, [req.body.email, req.body.pseudo], (err, data) => {

    if (err) return res.status(500).json (err);
    if (data.length) return res.status(409).json("Déjà enregistré");

    //cryptage en bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO utilisateurs (`pseudo`,`email`,`password`) VALUES (?)";
    const values = [req.body.pseudo, req.body.email, hash];

    bdd.query (q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("L'utilisateur est créé");
    });
  });
};

export const login = (req, res) => {
  //Verification de l'utilisateur

  const q = "SELECT * FROM utilisateurs WHERE pseudo = ?";

  bdd.query(q, [req.body.pseudo], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("L'utilisateur n'existe pas");

    //Verification du password
    const PasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!PasswordCorrect)
      return res.status(400).json("Mauvais pseudo ou mot de passe");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {

res.clearCookie("token demandé",{
  sameSite:"none",
  secure:true
}).status(200).json("Utilisateur déconnecté")



}