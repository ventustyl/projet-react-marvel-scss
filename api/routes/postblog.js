import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,

} from "../controller/postblog.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", addBlog);
router.delete("/:id", deleteBlog);


export default router;