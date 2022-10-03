import mysql from "mysql";
//usename :admin
//Fcilteam83! ou Fcilt3am 
export const bdd = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"blog"
})


