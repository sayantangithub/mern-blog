import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, getPosts } from "../controller/post.controller.js";

const PostRouter = express.Router();
PostRouter.post("/create", verifyToken, create);
PostRouter.get("/getposts", getPosts);

export default PostRouter;
