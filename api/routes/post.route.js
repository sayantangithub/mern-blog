import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletePost,
  getPosts,
  updatePost,
} from "../controller/post.controller.js";

const PostRouter = express.Router();
PostRouter.post("/create", verifyToken, create);
PostRouter.get("/getposts", getPosts);
PostRouter.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
PostRouter.put("/updatepost/:postId/:userId", verifyToken, updatePost);

export default PostRouter;
