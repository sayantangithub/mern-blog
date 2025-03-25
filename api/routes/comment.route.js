import express from "express";
import {
  createComment,
  editComment,
  getPostComment,
  likeComment,
} from "../controller/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const CommentRouter = express.Router();

CommentRouter.post("/create", verifyToken, createComment);
CommentRouter.get("/getPostComments/:postId", getPostComment);
CommentRouter.put("/likeComment/:commentId", verifyToken, likeComment);
CommentRouter.put("/editComment/:commentId", verifyToken, editComment);

export default CommentRouter;
