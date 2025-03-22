import express from "express";
import { updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const UserRouter = express.Router();

UserRouter.get("/test", (req, res) => {
  res.send("Welcome to our App");
});
UserRouter.put("/update/:userId", verifyToken, updateUser);

export default UserRouter;
