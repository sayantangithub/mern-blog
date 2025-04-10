import "../env.js";
import express from "express";
import { connectToMongoose } from "./mongoose.config.js";
import UserRouter from "./routes/user.route.js";
import AuthRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import PostRouter from "./routes/post.route.js";
import CommentRouter from "./routes/comment.route.js";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRouter);
app.use("/api/comment", CommentRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use((err, req, res, next) => {
  const statuscode = req.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statuscode).json({ success: false, statuscode, message });
});

app.listen("8000", () => {
  console.log("Server is running on 8000");
  connectToMongoose();
});
