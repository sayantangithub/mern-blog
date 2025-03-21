import express from "express";
import { signIn, signup } from "../controller/auth.controller.js";

const AuthRoute = express.Router();

AuthRoute.post("/signup", signup);
AuthRoute.post("/signin", signIn);

export default AuthRoute;
