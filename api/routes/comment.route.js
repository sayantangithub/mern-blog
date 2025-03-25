import express from "express";
import { createComment } from "../controller/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const CommentRouter = express.Router();

CommentRouter.post("/create",verifyToken, createComment);

export default CommentRouter;
