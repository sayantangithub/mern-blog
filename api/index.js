import "../env.js";
import express from "express";
import { connectToMongoose } from "./mongoose.config.js";
import UserRouter from "./routes/user.route.js";
import AuthRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRoute);
app.use((err, req, res, next) => {
  const statuscode = req.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statuscode).json({ success: false, statuscode, message });
});

app.listen("8000", () => {
  console.log("Server is running on 3000");
  connectToMongoose();
});
