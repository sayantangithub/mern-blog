import express from "express";
import { google, signIn, signup } from "../controller/auth.controller.js";

const AuthRoute = express.Router();

AuthRoute.post("/signup", signup);
AuthRoute.post("/signin", signIn);
AuthRoute.post("/google", google);

export default AuthRoute;
