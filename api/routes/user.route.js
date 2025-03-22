import express from "express";
import { deleteUser, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const UserRouter = express.Router();

UserRouter.get("/test", (req, res) => {
  res.send("Welcome to our App");
});
UserRouter.put("/update/:userId", verifyToken, updateUser);
UserRouter.delete("/delete/:userId",verifyToken,deleteUser)

export default UserRouter;
