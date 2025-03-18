import express from "express";
import { signup } from "../controller/auth.controller.js";

const AuthRoute = express.Router();

AuthRoute.post("/signup", signup);

export default AuthRoute;
