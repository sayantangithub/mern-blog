import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create } from "../controller/post.controller.js";

const PostRouter = express.Router();
PostRouter.post("/create", verifyToken, create);

export default PostRouter;
