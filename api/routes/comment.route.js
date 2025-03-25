import express from "express";
import {
  createComment,
  getPostComment,
} from "../controller/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const CommentRouter = express.Router();

CommentRouter.post("/create", verifyToken, createComment);
CommentRouter.get("/getPostComments/:postId", getPostComment);

export default CommentRouter;
