import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/post.js"
import blogRoutes from "./routes/postblog.js"
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {   
    cb(null, Date.now()+file.originalname.replace(/\s+/g, ''))
  }
})

const upload = multer({ storage,  limits: { fileSize: 2300000 } })

app.post('/api/upload', upload.single('file'), function (req, res,) {
  const file= req.file;

  res.status(200).json((file.filename))

  // res.status(200).json('Image upload')

})

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/post", postRoutes)
app.use("/api/postblog", blogRoutes)
app.listen(8800,()=>(
    console.log("Vous êtes connecté!")
))