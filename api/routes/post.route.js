import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, deletePost, getPosts } from "../controller/post.controller.js";

const PostRouter = express.Router();
PostRouter.post("/create", verifyToken, create);
PostRouter.get("/getposts", getPosts);
PostRouter.delete("/deletepost/:postId/:userId", verifyToken, deletePost);

export default PostRouter;
